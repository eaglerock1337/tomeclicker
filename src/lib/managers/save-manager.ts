import type { Stats } from '../game';

/**
 * Serializable game state for save/load operations
 */
export interface GameState {
	name: string;
	exp: number;
	lifetimeExp: number;
	level: number;
	clickMultiplier: number;
	critChance: number;
	critDamage: number;
	trainingCritChance: number;
	upgrades: Record<string, any>; // Upgrade objects or legacy format
	stats: Stats;
	trainingActions: Record<string, any>; // IdleAction objects
	meditationActions: Record<string, any>; // IdleAction objects
	idleExpRate: number;
	adventureModeUnlocked: boolean;
	meditationUnlocked: boolean;
}

/**
 * Save data format with version and timestamp
 */
export interface SaveData {
	version: string;
	timestamp: number;
	gameState: GameState;
}

/**
 * Dependencies required by SaveManager
 */
export interface SaveManagerDependencies {
	/**
	 * Get current game state snapshot for saving
	 */
	getGameState: () => GameState;

	/**
	 * Load game state from save data
	 */
	loadGameState: (state: GameState) => void;
}

/**
 * Result of save operation
 */
export interface SaveResult {
	success: boolean;
	error?: string;
}

/**
 * Result of load operation
 */
export interface LoadResult {
	success: boolean;
	state?: GameState;
	error?: string;
	warning?: string;
}

/**
 * Storage backend abstraction for testing and future cloud storage
 */
export interface StorageBackend {
	setItem(key: string, value: string): void;
	getItem(key: string): string | null;
	removeItem(key: string): void;
}

/**
 * LocalStorage implementation of StorageBackend
 */
export class LocalStorageBackend implements StorageBackend {
	setItem(key: string, value: string): void {
		if (typeof localStorage === 'undefined') return;
		localStorage.setItem(key, value);
	}

	getItem(key: string): string | null {
		if (typeof localStorage === 'undefined') return null;
		return localStorage.getItem(key);
	}

	removeItem(key: string): void {
		if (typeof localStorage === 'undefined') return;
		localStorage.removeItem(key);
	}
}

/**
 * Cookie-based storage (deprecated but kept for backward compatibility)
 */
export class CookieStorageBackend implements StorageBackend {
	setItem(key: string, value: string): void {
		if (typeof document === 'undefined') return;
		const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
		document.cookie = `${key}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
	}

	getItem(key: string): string | null {
		if (typeof document === 'undefined') return null;
		const cookies = document.cookie.split(';');
		for (const cookie of cookies) {
			const [name, value] = cookie.trim().split('=');
			if (name === key && value) {
				return decodeURIComponent(value);
			}
		}
		return null;
	}

	removeItem(key: string): void {
		if (typeof document === 'undefined') return;
		document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	}
}

/**
 * Manages game save/load operations with support for multiple storage backends
 * Handles serialization and validation
 */
export class SaveManager {
	private static readonly STORAGE_KEY = 'tomeclicker_save';
	private static readonly CURRENT_VERSION = '0.2.0';

	constructor(
		private deps: SaveManagerDependencies,
		private storage: StorageBackend = new LocalStorageBackend()
	) {}

	/**
	 * Export current game state as JSON string
	 * @returns JSON string containing save data with version and timestamp
	 */
	exportSave(): string {
		const gameState = this.deps.getGameState();
		const saveData: SaveData = {
			version: SaveManager.CURRENT_VERSION,
			timestamp: Date.now(),
			gameState
		};
		return JSON.stringify(saveData);
	}

	/**
	 * Import save from JSON string
	 * @param saveString - JSON save data
	 * @returns Load result with success status and optional warning/error
	 */
	importSave(saveString: string): LoadResult {
		try {
			const parsed = JSON.parse(saveString);

			// Check if it's valid format (has version field and gameState)
			if (parsed.version && parsed.gameState) {
				return this.loadNewFormat(parsed);
			}

			return {
				success: false,
				error: 'Invalid save format. Expected JSON with version and gameState fields.'
			};
		} catch (error) {
			return {
				success: false,
				error: `Failed to parse save data: ${error}`
			};
		}
	}

	/**
	 * Save current game state to storage backend
	 * @returns Save result with success status
	 */
	saveToStorage(): SaveResult {
		try {
			const saveString = this.exportSave();
			this.storage.setItem(SaveManager.STORAGE_KEY, saveString);
			return { success: true };
		} catch (error) {
			return {
				success: false,
				error: `Failed to save to storage: ${error}`
			};
		}
	}

	/**
	 * Load game state from storage backend
	 * @returns Load result with success status
	 */
	loadFromStorage(): LoadResult {
		try {
			const saveString = this.storage.getItem(SaveManager.STORAGE_KEY);
			if (!saveString) {
				return {
					success: false,
					error: 'No save data found in storage'
				};
			}

			const result = this.importSave(saveString);
			if (result.success && result.state) {
				this.deps.loadGameState(result.state);
			}
			return result;
		} catch (error) {
			return {
				success: false,
				error: `Failed to load from storage: ${error}`
			};
		}
	}

	/**
	 * Clear save data from storage
	 */
	clearSave(): void {
		this.storage.removeItem(SaveManager.STORAGE_KEY);
	}

	/**
	 * Auto-save current game state
	 * Called periodically by game loop
	 */
	autoSave(): void {
		this.saveToStorage();
	}

	// Private helper methods

	/**
	 * Load save data in JSON format
	 */
	private loadNewFormat(data: SaveData): LoadResult {
		if (!this.validateSaveData(data.gameState)) {
			return {
				success: false,
				error: 'Save data validation failed. Data may be corrupted.'
			};
		}

		return {
			success: true,
			state: data.gameState
		};
	}

	/**
	 * Validate save data structure
	 */
	private validateSaveData(data: any): boolean {
		return (
			typeof data.name === 'string' &&
			typeof data.exp === 'number' &&
			typeof data.lifetimeExp === 'number' &&
			typeof data.clickMultiplier === 'number' &&
			typeof data.upgrades === 'object' &&
			data.exp <= data.lifetimeExp && // Integrity check
			data.exp >= 0 && // Sanity check
			data.lifetimeExp >= 0 // Sanity check
		);
	}
}
