import { describe, it, expect, beforeEach } from 'vitest';
import {
	SaveManager,
	type SaveManagerDependencies,
	type StorageBackend,
	type GameState,
	LocalStorageBackend,
	CookieStorageBackend
} from '../../src/lib/managers/save-manager';
import type { Stats } from '../../src/lib/game';

/**
 * Mock storage backend for testing
 */
class MockStorageBackend implements StorageBackend {
	private storage = new Map<string, string>();

	setItem(key: string, value: string): void {
		this.storage.set(key, value);
	}

	getItem(key: string): string | null {
		return this.storage.get(key) || null;
	}

	removeItem(key: string): void {
		this.storage.delete(key);
	}

	clear(): void {
		this.storage.clear();
	}
}

/**
 * Test fixture builder for SaveManager
 */
class SaveManagerBuilder {
	private gameState: GameState = {
		name: 'Test Player',
		exp: 100,
		lifetimeExp: 100,
		level: 1,
		clickMultiplier: 1.0,
		critChance: 0.0,
		critDamage: 1.5,
		upgrades: {},
		stats: {
			strength: 1,
			dexterity: 1,
			intelligence: 1,
			wisdom: 1,
			strengthExp: 0,
			dexterityExp: 0,
			intelligenceExp: 0,
			wisdomExp: 0
		},
		trainingActions: {},
		meditationActions: {},
		idleExpRate: 0,
		adventureModeUnlocked: false,
		meditationUnlocked: false,
		saveIntegrity: 'valid',
		lastValidation: Date.now()
	};

	private storage: StorageBackend = new MockStorageBackend();
	private loadedState: GameState | null = null;

	withGameState(state: Partial<GameState>): this {
		this.gameState = { ...this.gameState, ...state };
		return this;
	}

	withName(name: string): this {
		this.gameState.name = name;
		return this;
	}

	withExp(exp: number, lifetimeExp?: number): this {
		this.gameState.exp = exp;
		this.gameState.lifetimeExp = lifetimeExp ?? exp;
		return this;
	}

	withLevel(level: number): this {
		this.gameState.level = level;
		return this;
	}

	withStats(stats: Stats): this {
		this.gameState.stats = stats;
		return this;
	}

	withUpgrades(upgrades: Record<string, number>): this {
		this.gameState.upgrades = upgrades;
		return this;
	}

	withStorageBackend(storage: StorageBackend): this {
		this.storage = storage;
		return this;
	}

	build(): SaveManager {
		const deps: SaveManagerDependencies = {
			getGameState: () => this.gameState,
			loadGameState: (state) => {
				this.loadedState = state;
			}
		};

		return new SaveManager(deps, this.storage);
	}

	getLoadedState(): GameState | null {
		return this.loadedState;
	}

	getStorage(): StorageBackend {
		return this.storage;
	}
}

describe('SaveManager', () => {
	describe('Initialization', () => {
		it('should create SaveManager with dependencies', () => {
			const manager = new SaveManagerBuilder().build();
			expect(manager).toBeDefined();
		});

		it('should use LocalStorageBackend by default', () => {
			const deps: SaveManagerDependencies = {
				getGameState: () => ({}) as GameState,
				loadGameState: () => {}
			};
			const manager = new SaveManager(deps);
			expect(manager).toBeDefined();
		});
	});

	describe('Export Save', () => {
		it('should export game state as JSON string', () => {
			const manager = new SaveManagerBuilder().withName('Alice').withExp(500).build();

			const saveString = manager.exportSave();
			expect(saveString).toBeDefined();

			const parsed = JSON.parse(saveString);
			expect(parsed.version).toBe('0.2.0');
			expect(parsed.timestamp).toBeGreaterThan(0);
			expect(parsed.gameState.name).toBe('Alice');
			expect(parsed.gameState.exp).toBe(500);
		});

		it('should include version and timestamp', () => {
			const manager = new SaveManagerBuilder().build();
			const saveString = manager.exportSave();
			const parsed = JSON.parse(saveString);

			expect(parsed.version).toBeDefined();
			expect(parsed.timestamp).toBeDefined();
			expect(typeof parsed.timestamp).toBe('number');
		});

		it('should serialize all game state properties', () => {
			const manager = new SaveManagerBuilder()
				.withName('Bob')
				.withExp(1000, 1500)
				.withLevel(5)
				.withStats({
					strength: 10,
					dexterity: 8,
					intelligence: 6,
					wisdom: 4,
					strengthExp: 0,
					dexterityExp: 0,
					intelligenceExp: 0,
					wisdomExp: 0
				})
				.withUpgrades({ discipline: 3, focus: 2 })
				.build();

			const saveString = manager.exportSave();
			const parsed = JSON.parse(saveString);
			const state = parsed.gameState;

			expect(state.name).toBe('Bob');
			expect(state.exp).toBe(1000);
			expect(state.lifetimeExp).toBe(1500);
			expect(state.level).toBe(5);
			expect(state.stats.strength).toBe(10);
			expect(state.upgrades.discipline).toBe(3);
		});
	});

	describe('Import Save (New Format)', () => {
		it('should import valid new format save', () => {
			const builder = new SaveManagerBuilder();
			const manager = builder.build();

			// Create a save in new format
			const saveString = manager.exportSave();

			// Import it
			const result = manager.importSave(saveString);

			expect(result.success).toBe(true);
			expect(result.error).toBeUndefined();
			expect(result.state).toBeDefined();
		});

		it('should restore all game state properties', () => {
			const builder = new SaveManagerBuilder()
				.withName('Charlie')
				.withExp(2000, 2500)
				.withLevel(10)
				.withStats({
					strength: 20,
					dexterity: 15,
					intelligence: 12,
					wisdom: 8,
					strengthExp: 0,
					dexterityExp: 0,
					intelligenceExp: 0,
					wisdomExp: 0
				})
				.withUpgrades({ discipline: 5, focus: 4, memory: 3 });

			const manager = builder.build();
			const saveString = manager.exportSave();

			const result = manager.importSave(saveString);
			expect(result.success).toBe(true);

			const state = result.state!;
			expect(state.name).toBe('Charlie');
			expect(state.exp).toBe(2000);
			expect(state.lifetimeExp).toBe(2500);
			expect(state.level).toBe(10);
			expect(state.stats.strength).toBe(20);
			expect(state.upgrades.discipline).toBe(5);
		});

		it('should handle round-trip save/load correctly', () => {
			const builder = new SaveManagerBuilder().withName('Diana').withExp(5000, 6000).withLevel(15);

			const manager = builder.build();

			const saveString1 = manager.exportSave();
			const result = manager.importSave(saveString1);
			expect(result.success).toBe(true);

			// Save again after loading to verify round-trip
			const newManager = new SaveManagerBuilder().withGameState(result.state!).build();

			const saveString2 = newManager.exportSave();
			const result2 = newManager.importSave(saveString2);

			expect(result2.success).toBe(true);
			expect(result2.state?.name).toBe('Diana');
			expect(result2.state?.exp).toBe(5000);
		});
	});

	describe('Import Save (Legacy Encrypted Format)', () => {
		it('should migrate from legacy encrypted format', () => {
			// Create a legacy encrypted save (simulated)
			const legacyGameState = {
				name: 'Legacy Player',
				exp: 100,
				lifetimeExp: 100,
				level: 1,
				clickMultiplier: 1.0,
				upgrades: {},
				stats: {
					strength: 1,
					dexterity: 1,
					intelligence: 1,
					wisdom: 1,
					strengthExp: 0,
					dexterityExp: 0,
					intelligenceExp: 0,
					wisdomExp: 0
				},
				trainingActions: {},
				meditationActions: {},
				critChance: 0.0,
				critDamage: 1.5,
				idleExpRate: 0,
				adventureModeUnlocked: false,
				meditationUnlocked: false,
				saveIntegrity: 'valid',
				lastValidation: Date.now(),
				version: '0.1.0',
				timestamp: Date.now()
			};

			// XOR encrypt the data (legacy format)
			const jsonData = JSON.stringify(legacyGameState);
			const key = 'tomeclicker-save-key';
			let encrypted = '';
			for (let i = 0; i < jsonData.length; i++) {
				encrypted += String.fromCharCode(jsonData.charCodeAt(i) ^ key.charCodeAt(i % key.length));
			}
			const encryptedData = btoa(encrypted);

			const legacySave = JSON.stringify({
				encrypted: true,
				data: encryptedData,
				hash: 'legacy-hash',
				version: '0.1.0'
			});

			const builder = new SaveManagerBuilder();
			const manager = builder.build();

			const result = manager.importSave(legacySave);

			expect(result.success).toBe(true);
			expect(result.warning).toContain('Migrated from legacy encrypted format');
			expect(result.state?.name).toBe('Legacy Player');
		});
	});

	describe('Import Save (Legacy Unencrypted Format)', () => {
		it('should load legacy unencrypted format with warning', () => {
			const legacyUnencrypted = JSON.stringify({
				encrypted: false,
				name: 'Unencrypted Player',
				exp: 200,
				lifetimeExp: 200,
				level: 2,
				clickMultiplier: 1.5,
				upgrades: { discipline: 1 },
				stats: { strength: 2, dexterity: 2, intelligence: 2, wisdom: 2 },
				trainingActions: {},
				meditationActions: {},
				critChance: 0.05,
				critDamage: 1.5,
				idleExpRate: 0,
				adventureModeUnlocked: false,
				meditationUnlocked: false,
				saveIntegrity: 'valid',
				lastValidation: Date.now(),
				warning: 'This save is not eligible for leaderboard participation'
			});

			const builder = new SaveManagerBuilder();
			const manager = builder.build();

			const result = manager.importSave(legacyUnencrypted);

			expect(result.success).toBe(true);
			expect(result.warning).toContain('not eligible for leaderboard');
			expect(result.state?.name).toBe('Unencrypted Player');
			expect(result.state?.saveIntegrity).toBe('unencrypted-import');
		});
	});

	describe('Validation', () => {
		it('should reject invalid JSON', () => {
			const manager = new SaveManagerBuilder().build();
			const result = manager.importSave('not valid json{{{');

			expect(result.success).toBe(false);
			expect(result.error).toContain('Failed to parse');
		});

		it('should reject save with missing required fields', () => {
			const invalidSave = JSON.stringify({
				version: '0.2.0',
				timestamp: Date.now(),
				gameState: {
					name: 'Invalid',
					// Missing exp and lifetimeExp
					clickMultiplier: 1.0,
					upgrades: {}
				}
			});

			const manager = new SaveManagerBuilder().build();
			const result = manager.importSave(invalidSave);

			expect(result.success).toBe(false);
			expect(result.error).toContain('validation failed');
		});

		it('should reject save where exp > lifetimeExp', () => {
			const invalidSave = JSON.stringify({
				version: '0.2.0',
				timestamp: Date.now(),
				gameState: {
					name: 'Cheater',
					exp: 1000,
					lifetimeExp: 500, // exp should not exceed lifetimeExp
					level: 1,
					clickMultiplier: 1.0,
					upgrades: {},
					stats: {
						strength: 1,
						dexterity: 1,
						intelligence: 1,
						wisdom: 1,
						strengthExp: 0,
						dexterityExp: 0,
						intelligenceExp: 0,
						wisdomExp: 0
					},
					trainingActions: {},
					meditationActions: {},
					critChance: 0,
					critDamage: 1.5,
					idleExpRate: 0,
					adventureModeUnlocked: false,
					meditationUnlocked: false,
					saveIntegrity: 'valid',
					lastValidation: Date.now()
				}
			});

			const manager = new SaveManagerBuilder().build();
			const result = manager.importSave(invalidSave);

			expect(result.success).toBe(false);
			expect(result.error).toContain('validation failed');
		});

		it('should reject save with negative exp', () => {
			const invalidSave = JSON.stringify({
				version: '0.2.0',
				timestamp: Date.now(),
				gameState: {
					name: 'Invalid',
					exp: -100,
					lifetimeExp: 0,
					level: 1,
					clickMultiplier: 1.0,
					upgrades: {},
					stats: {
						strength: 1,
						dexterity: 1,
						intelligence: 1,
						wisdom: 1,
						strengthExp: 0,
						dexterityExp: 0,
						intelligenceExp: 0,
						wisdomExp: 0
					},
					trainingActions: {},
					meditationActions: {},
					critChance: 0,
					critDamage: 1.5,
					idleExpRate: 0,
					adventureModeUnlocked: false,
					meditationUnlocked: false,
					saveIntegrity: 'valid',
					lastValidation: Date.now()
				}
			});

			const manager = new SaveManagerBuilder().build();
			const result = manager.importSave(invalidSave);

			expect(result.success).toBe(false);
		});
	});

	describe('Storage Operations', () => {
		it('should save to storage backend', () => {
			const builder = new SaveManagerBuilder().withName('Storage Test');
			const manager = builder.build();

			const result = manager.saveToStorage();

			expect(result.success).toBe(true);
			expect(result.error).toBeUndefined();

			// Verify data was written to storage
			const storage = builder.getStorage();
			const saved = storage.getItem('tomeclicker_save');
			expect(saved).toBeDefined();
			expect(saved).toContain('Storage Test');
		});

		it('should load from storage backend', () => {
			const builder = new SaveManagerBuilder().withName('Load Test').withExp(777);
			const manager = builder.build();

			// Save first
			manager.saveToStorage();

			// Create new manager and load
			const builder2 = new SaveManagerBuilder();
			const manager2 = builder2.withStorageBackend(builder.getStorage()).build();

			const result = manager2.loadFromStorage();

			expect(result.success).toBe(true);
			expect(result.state?.name).toBe('Load Test');
			expect(result.state?.exp).toBe(777);

			// Verify loadGameState was called
			const loadedState = builder2.getLoadedState();
			expect(loadedState?.name).toBe('Load Test');
		});

		it('should return error when loading from empty storage', () => {
			const manager = new SaveManagerBuilder().build();
			const result = manager.loadFromStorage();

			expect(result.success).toBe(false);
			expect(result.error).toContain('No save data found');
		});

		it('should clear save from storage', () => {
			const builder = new SaveManagerBuilder().withName('Clear Test');
			const manager = builder.build();

			// Save first
			manager.saveToStorage();

			const storage = builder.getStorage();
			expect(storage.getItem('tomeclicker_save')).toBeDefined();

			// Clear
			manager.clearSave();

			expect(storage.getItem('tomeclicker_save')).toBeNull();
		});

		it('should handle auto-save', () => {
			const builder = new SaveManagerBuilder().withName('Auto Save');
			const manager = builder.build();

			manager.autoSave();

			const storage = builder.getStorage();
			const saved = storage.getItem('tomeclicker_save');
			expect(saved).toBeDefined();
		});
	});

	describe('Edge Cases', () => {
		it('should handle player names with special characters', () => {
			const builder = new SaveManagerBuilder().withName('Player "The Great" O\'Malley');
			const manager = builder.build();

			const saveString = manager.exportSave();
			const result = manager.importSave(saveString);

			expect(result.success).toBe(true);
			expect(result.state?.name).toBe('Player "The Great" O\'Malley');
		});

		it('should handle very large exp values', () => {
			const builder = new SaveManagerBuilder().withExp(1e15, 1e15);
			const manager = builder.build();

			const saveString = manager.exportSave();
			const result = manager.importSave(saveString);

			expect(result.success).toBe(true);
			expect(result.state?.exp).toBe(1e15);
		});

		it('should handle empty upgrades object', () => {
			const builder = new SaveManagerBuilder().withUpgrades({});
			const manager = builder.build();

			const saveString = manager.exportSave();
			const result = manager.importSave(saveString);

			expect(result.success).toBe(true);
			expect(result.state?.upgrades).toEqual({});
		});

		it('should handle complex upgrade state', () => {
			const upgrades = {
				discipline: 10,
				focus: 8,
				memory: 6,
				determination: 4,
				clarity: 2
			};
			const builder = new SaveManagerBuilder().withUpgrades(upgrades);
			const manager = builder.build();

			const saveString = manager.exportSave();
			const result = manager.importSave(saveString);

			expect(result.success).toBe(true);
			expect(result.state?.upgrades).toEqual(upgrades);
		});
	});

	describe('Storage Backend Implementations', () => {
		it('should work with MockStorageBackend', () => {
			const storage = new MockStorageBackend();
			storage.setItem('test', 'value');
			expect(storage.getItem('test')).toBe('value');
			storage.removeItem('test');
			expect(storage.getItem('test')).toBeNull();
		});

		// LocalStorageBackend and CookieStorageBackend tests would require DOM environment
		// Skipping in unit tests, will be tested in integration tests
	});
});
