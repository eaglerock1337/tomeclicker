import {
	calculateLevelUpCost,
	calculateStatLevelCost,
	calculateTrainingSpeedMultiplier,
	calculateTrainingCostMultiplier,
	calculateOsmosisExpBonus,
	calculateGlobalIdleSpeedMultiplier,
	calculateOsmosisSpeedMultiplier
} from './utils/calculations';
import {
	IdleActionManager,
	type IdleAction,
	type ActionCompletionResult
} from './managers/idle-action-manager';
import { UpgradeManager, type Upgrade as UpgradeType } from './managers/upgrade-manager';
import {
	SaveManager,
	type GameState,
	type SaveResult,
	type LoadResult
} from './managers/save-manager';
import { StatsManager } from './managers/stats-manager';

// Re-export Upgrade type for external use
export type { Upgrade } from './managers/upgrade-manager';
import {
	GAME_TICK_RATE,
	BASE_CRIT_DAMAGE,
	HEADER_UNLOCK_THRESHOLD,
	MENU_UNLOCK_THRESHOLD,
	UPGRADES_UNLOCK_THRESHOLD
} from './constants/game';

/**
 * Represents RPG-style player stats
 */
export interface Stats {
	strength: number;
	dexterity: number;
	intelligence: number;
	wisdom: number;
}

/**
 * Main game state and logic controller
 * Manages player progression, upgrades, level system, and save/load functionality
 */
export class Game {
	public name: string;
	public tickrate: number;
	public exp: number;
	public lifetimeExp: number;
	public level: number;
	public tick: number;
	public menu: string;
	public clickMultiplier: number;
	public critChance: number;
	public critDamage: number;
	public saveIntegrity: string;
	public lastValidation: number;
	private _validationKey: string;

	// New RPG and idle systems
	public idleExpRate: number;
	public adventureModeUnlocked: boolean;
	public meditationUnlocked: boolean;

	// Managers
	private idleActionManager: IdleActionManager;
	private upgradeManager: UpgradeManager;
	private saveManager: SaveManager;
	private statsManager: StatsManager;

	/**
	 * Creates a new game instance with default values
	 * @param name - Player name, defaults to 'A Stranger' if not provided
	 */
	constructor(name?: string) {
		this.name = name || 'A Stranger';
		this.tickrate = GAME_TICK_RATE;
		this.exp = 0.0;
		this.lifetimeExp = 0.0;
		this.level = 1;
		this.tick = 0;
		this.menu = 'practice';
		this.clickMultiplier = 1.0;
		this.critChance = 0.0; // Start with 0% crit chance
		this.critDamage = BASE_CRIT_DAMAGE; // Crits do +50% damage (1.5x total)
		this.saveIntegrity = 'valid';
		this.lastValidation = Date.now();
		this._validationKey = this.generateValidationKey();

		// Initialize new systems
		this.idleExpRate = 0;
		this.adventureModeUnlocked = false;
		this.meditationUnlocked = false;

		// Initialize stats manager
		this.statsManager = new StatsManager();

		// Initialize upgrade manager
		this.upgradeManager = new UpgradeManager({
			getCurrentExp: () => this.exp
		});

		// Initialize idle action manager with dependencies
		this.idleActionManager = new IdleActionManager({
			getTrainingSpeedMultiplier: () => this.getTrainingSpeedMultiplier(),
			getTrainingCostMultiplier: () => this.getTrainingCostMultiplier(),
			getOsmosisExpBonus: () => this.getOsmosisExpBonus(),
			getGlobalIdleSpeedMultiplier: () => this.getGlobalIdleSpeedMultiplier(),
			getOsmosisSpeedMultiplier: () => this.getOsmosisSpeedMultiplier(),
			getStatLevelCost: (stat) => this.getStatLevelCost(stat),
			getCritChance: () => this.critChance,
			getCurrentExp: () => this.exp
		});

		// Initialize save manager with dependencies
		this.saveManager = new SaveManager({
			getGameState: () => this.toGameState(),
			loadGameState: (state) => this.loadFromGameState(state)
		});

		this.recalculateClickMultiplier();
	}

	/**
	 * Gets all stats (delegates to StatsManager)
	 */
	get stats(): Stats {
		return this.statsManager.getStats();
	}

	/**
	 * Sets stats (for testing and save/load operations)
	 * @internal - Use for testing or deserialization only
	 */
	setStats(stats: Stats): void {
		this.statsManager.setStats(stats);
	}

	/**
	 * Gets all training actions (delegates to IdleActionManager)
	 */
	get trainingActions(): { [key: string]: IdleAction } {
		return this.idleActionManager.getTrainingActions();
	}

	/**
	 * Gets all meditation actions (delegates to IdleActionManager)
	 */
	get meditationActions(): { [key: string]: IdleAction } {
		return this.idleActionManager.getMeditationActions();
	}

	/**
	 * Gets all upgrades (delegates to UpgradeManager)
	 */
	get upgrades(): { [key: string]: UpgradeType } {
		return this.upgradeManager.getUpgrades();
	}

	/**
	 * Recalculates the click multiplier based on current upgrades and level
	 * Uses a hybrid additive+multiplicative system:
	 * - Most upgrades add to base multiplier (additive)
	 * - Level bonuses multiply by 2^(level-1)
	 * - Discipline multiplies by 5^level
	 */
	recalculateClickMultiplier(): void {
		this.clickMultiplier = 1.0;

		// Add additive upgrades first
		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'clickMultiplier' && upgrade.id !== 'discipline') {
				this.clickMultiplier += upgrade.effectValue * upgrade.currentLevel;
			}
		}

		// Apply multiplicative level bonuses (2x per level after 1)
		if (this.level > 1) {
			this.clickMultiplier *= Math.pow(2, this.level - 1);
		}

		// Apply multiplicative Discipline (5x per level)
		const discipline = this.upgrades['discipline'];
		if (discipline && discipline.currentLevel > 0) {
			this.clickMultiplier *= Math.pow(5, discipline.currentLevel);
		}

		// Recalculate idle EXP rate
		this.recalculateIdleExpRate();
	}

	/**
	 * Recalculates the idle EXP rate based on current upgrades
	 */
	recalculateIdleExpRate(): void {
		this.idleExpRate = 0;

		// Add idle EXP upgrades
		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'idleExp') {
				this.idleExpRate += upgrade.effectValue * upgrade.currentLevel;
			}
		}

		// Apply Discipline multiplier (5x per level)
		const discipline = this.upgrades['discipline'];
		if (discipline && discipline.currentLevel > 0) {
			this.idleExpRate *= Math.pow(5, discipline.currentLevel);
		}

		// Recalculate crit stats
		this.recalculateCritStats();
	}

	/**
	 * Recalculates crit chance and crit damage based on upgrades
	 */
	recalculateCritStats(): void {
		this.critChance = 0.0; // Base 0%
		this.critDamage = BASE_CRIT_DAMAGE; // Base +50%

		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'critChance') {
				this.critChance += upgrade.effectValue * upgrade.currentLevel;
			} else if (upgrade.effectType === 'critDamage') {
				this.critDamage += upgrade.effectValue * upgrade.currentLevel;
			}
		}
	}

	/**
	 * Gets the training speed multiplier from upgrades
	 * @returns Multiplier for training duration (lower is faster)
	 */
	getTrainingSpeedMultiplier(): number {
		return calculateTrainingSpeedMultiplier(this.upgrades);
	}

	/**
	 * Gets the training cost multiplier from upgrades
	 * @returns Multiplier for training EXP cost (lower is cheaper)
	 */
	getTrainingCostMultiplier(): number {
		return calculateTrainingCostMultiplier(this.upgrades);
	}

	/**
	 * Gets the osmosis EXP bonus from upgrades
	 * @returns Additional EXP gained per osmosis completion
	 */
	getOsmosisExpBonus(): number {
		return calculateOsmosisExpBonus(this.upgrades);
	}

	/**
	 * Gets the global idle speed multiplier from upgrades
	 * @returns Speed multiplier (higher is faster)
	 */
	getGlobalIdleSpeedMultiplier(): number {
		return calculateGlobalIdleSpeedMultiplier(this.upgrades);
	}

	/**
	 * Gets the osmosis-specific speed multiplier
	 * @returns Speed multiplier for osmosis actions (higher is faster)
	 */
	getOsmosisSpeedMultiplier(): number {
		return calculateOsmosisSpeedMultiplier(this.upgrades);
	}

	/**
	 * Gets the EXP cost to level up a specific stat
	 * @param stat - The stat to check
	 * @returns EXP cost for next level
	 */
	getStatLevelCost(stat: keyof Stats): number {
		return this.statsManager.getStatLevelCost(stat);
	}

	/**
	 * Generates contextual help text for the practice page click button
	 * @returns Text hint for the player based on current game state
	 */
	updateClickText(): string {
		// Check if ready to level up
		if (this.canLevelUp()) {
			return 'level up available';
		}

		// Check if any upgrades are available
		if (this.showUpgrades()) {
			for (const upgrade of Object.values(this.upgrades)) {
				if (this.canPurchaseUpgrade(upgrade.id)) {
					return 'upgrade available';
				}
			}
		}

		// Show click me only at the very beginning
		if (this.lifetimeExp === 0) {
			return 'click me';
		}

		// After first click, just show empty text
		return '';
	}

	/**
	 * Migrates saved upgrade data to current upgrade definitions
	 * Preserves progress while allowing upgrade balance changes
	 * @param savedUpgrades - Upgrade data from a saved game
	 */
	migrateUpgrades(savedUpgrades: { [key: string]: UpgradeType }): void {
		this.upgradeManager.migrateUpgrades(savedUpgrades);
	}

	/**
	 * Migrates saved training actions to the latest definitions
	 * Preserves progress and active state while adding new actions
	 * @param savedActions - Training action data from a saved game
	 */
	migrateTrainingActions(savedActions: { [key: string]: IdleAction }): void {
		this.idleActionManager.migrateTrainingActions(savedActions);
	}

	/**
	 * Migrates saved meditation actions to the latest definitions
	 * Preserves progress and active state while adding new actions
	 * @param savedActions - Meditation action data from a saved game
	 */
	migrateMeditationActions(savedActions: { [key: string]: IdleAction }): void {
		this.idleActionManager.migrateMeditationActions(savedActions);
	}

	/** Idle Action Management */

	/**
	 * Starts an idle action (Progress Knight style - keeps running until switched)
	 * @param actionMap - The action map ('training' or 'meditation')
	 * @param actionId - ID of the action to start
	 * @returns True if action started successfully
	 */
	startIdleAction(actionMap: 'training' | 'meditation', actionId: string): boolean {
		return this.idleActionManager.startIdleAction(actionMap, actionId);
	}

	/**
	 * Updates progress for all active idle actions
	 * Should be called regularly (e.g., from game loop)
	 */
	updateIdleActions(): void {
		const results = this.idleActionManager.updateIdleActions();

		// Apply completion results
		for (const result of results) {
			// Add EXP gained
			if (result.expGained > 0) {
				this.addExp(result.expGained);
			}

			// Apply stat gains
			if (result.statGained) {
				this.statsManager.increaseStat(result.statGained.stat, result.statGained.amount);
				// Deduct the EXP cost
				if (result.expCost) {
					this.exp -= result.expCost;
				}
			}

			// Apply unlocks
			if (result.unlocks?.adventureMode) {
				this.adventureModeUnlocked = true;
			}
		}
	}

	/**
	 * Stops an active idle action without completion
	 * @param actionMap - The action map ('training' or 'meditation')
	 * @param actionId - ID of the action to stop
	 */
	stopIdleAction(actionMap: 'training' | 'meditation', actionId: string): void {
		this.idleActionManager.stopIdleAction(actionMap, actionId);
	}

	/** Progression Unlock Conditions */

	/**
	 * Determines if Training page should be accessible
	 * @returns True if player is Level 2+ (for osmosis and stat training)
	 */
	showTraining(): boolean {
		return this.level >= 2;
	}

	/**
	 * Determines if Stats page should be accessible
	 * @returns True if player is Level 3+
	 */
	showStats(): boolean {
		return this.level >= 3;
	}

	/**
	 * Determines if Meditation page should be accessible
	 * @returns True if all stats are at least 5
	 */
	showMeditation(): boolean {
		return (
			this.stats.strength >= 5 &&
			this.stats.dexterity >= 5 &&
			this.stats.intelligence >= 5 &&
			this.stats.wisdom >= 5
		);
	}

	/**
	 * Determines if Adventure page should be accessible
	 * @returns True if Adventure Mode has been unlocked
	 */
	showAdventure(): boolean {
		return this.adventureModeUnlocked;
	}

	/** Integrity Monitoring */

	private generateValidationKey(): string {
		if (typeof btoa === 'undefined') {
			// Fallback for server-side rendering
			return (
				Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
			);
		}
		return btoa(
			Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
		);
	}

	/**
	 * Adds experience points to both current and lifetime totals
	 * @param amount - Amount of EXP to add
	 */
	addExp(amount: number): void {
		this.exp += amount;
		this.lifetimeExp += amount;
	}

	/** Level System */

	/**
	 * Calculates the EXP cost to reach the next level
	 * Uses exponential scaling: 10,000 * 100^(level-1)
	 * @returns EXP required for next level
	 */
	getLevelUpCost(): number {
		return calculateLevelUpCost(this.level);
	}

	/**
	 * Checks if player has enough EXP to level up
	 * @returns True if level up is affordable
	 */
	canLevelUp(): boolean {
		return this.exp >= this.getLevelUpCost();
	}

	/**
	 * Attempts to level up by spending EXP
	 * @returns True if level up succeeded, false otherwise
	 */
	levelUp(): boolean {
		if (!this.canLevelUp()) return false;
		this.exp -= this.getLevelUpCost();
		this.level++;
		return true;
	}

	/** Upgrade Methods */

	/**
	 * Calculates the current cost to purchase the next level of an upgrade
	 * @param upgradeId - ID of the upgrade to check
	 * @returns EXP cost for next level, or 0 if upgrade doesn't exist
	 */
	getUpgradeCost(upgradeId: string): number {
		return this.upgradeManager.getUpgradeCost(upgradeId);
	}

	/**
	 * Checks if player has enough EXP to afford an upgrade
	 * @param upgradeId - ID of the upgrade to check
	 * @returns True if affordable, false otherwise
	 */
	canAffordUpgrade(upgradeId: string): boolean {
		return this.upgradeManager.canAffordUpgrade(upgradeId);
	}

	/**
	 * Checks if an upgrade can be purchased (affordable AND not maxed)
	 * @param upgradeId - ID of the upgrade to check
	 * @returns True if purchaseable, false otherwise
	 */
	canPurchaseUpgrade(upgradeId: string): boolean {
		return this.upgradeManager.canPurchaseUpgrade(upgradeId);
	}

	/**
	 * Attempts to purchase the next level of an upgrade
	 * Spends EXP and recalculates click multiplier on success
	 * @param upgradeId - ID of the upgrade to purchase
	 * @returns True if purchase succeeded, false otherwise
	 */
	purchaseUpgrade(upgradeId: string): boolean {
		const result = this.upgradeManager.purchaseUpgrade(upgradeId);

		if (result.success && result.expCost) {
			// Deduct EXP cost
			this.exp -= result.expCost;

			// Recalculate click multiplier after purchase
			this.recalculateClickMultiplier();

			return true;
		}

		return false;
	}

	/**
	 * Gets the current EXP value per click
	 * @returns Current click multiplier value
	 */
	getClickValue(): number {
		return this.clickMultiplier;
	}

	/**
	 * Progression Conditionals
	 *
	 * These methods control when UI features unlock based on player progression.
	 * Progression thresholds:
	 * - HEADER_UNLOCK_THRESHOLD lifetime EXP: Header appears
	 * - MENU_UNLOCK_THRESHOLD lifetime EXP: Menu navigation and upgrades unlock
	 * - Level 2: Training page unlocks
	 * - Level 3: Stats page unlocks
	 */

	/**
	 * Determines if the header should be displayed
	 * Unlock threshold: HEADER_UNLOCK_THRESHOLD lifetime EXP
	 * @returns True if player has earned enough lifetime EXP
	 */
	showHeader(): boolean {
		return this.lifetimeExp >= HEADER_UNLOCK_THRESHOLD;
	}

	/**
	 * Determines if the navigation menu should be displayed
	 * Unlock threshold: MENU_UNLOCK_THRESHOLD lifetime EXP
	 * @returns True if player has earned enough lifetime EXP
	 */
	showMenu(): boolean {
		return this.lifetimeExp >= MENU_UNLOCK_THRESHOLD;
	}

	/**
	 * Determines if the upgrades page should be accessible
	 * Unlock threshold: UPGRADES_UNLOCK_THRESHOLD lifetime EXP (same as menu)
	 * @returns True if player has earned enough lifetime EXP
	 */
	showUpgrades(): boolean {
		return this.lifetimeExp >= UPGRADES_UNLOCK_THRESHOLD;
	}

	/** Save/Load System */

	/**
	 * Convert current game state to serializable GameState object
	 */
	private toGameState(): GameState {
		return {
			name: this.name,
			exp: this.exp,
			lifetimeExp: this.lifetimeExp,
			level: this.level,
			clickMultiplier: this.clickMultiplier,
			critChance: this.critChance,
			critDamage: this.critDamage,
			upgrades: this.upgradeManager.getUpgrades(),
			stats: this.stats,
			trainingActions: this.idleActionManager.getTrainingActions(),
			meditationActions: this.idleActionManager.getMeditationActions(),
			idleExpRate: this.idleExpRate,
			adventureModeUnlocked: this.adventureModeUnlocked,
			meditationUnlocked: this.meditationUnlocked,
			saveIntegrity: this.saveIntegrity,
			lastValidation: this.lastValidation
		};
	}

	/**
	 * Load game state from GameState object
	 */
	private loadFromGameState(state: GameState): void {
		this.name = state.name;
		this.exp = state.exp;
		this.lifetimeExp = state.lifetimeExp;
		this.level = state.level || 1;
		this.critChance = state.critChance || 0.0;
		this.critDamage = state.critDamage || 1.5;

		// Load stats into StatsManager
		const loadedStats = state.stats || { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };
		this.statsManager.setStats(loadedStats);

		// Migrate upgrades: preserve levels but update definitions
		this.migrateUpgrades(state.upgrades);

		// Migrate training and meditation actions
		if (state.trainingActions) {
			this.migrateTrainingActions(state.trainingActions);
		}
		if (state.meditationActions) {
			this.migrateMeditationActions(state.meditationActions);
		}

		this.idleExpRate = state.idleExpRate || 0;
		this.adventureModeUnlocked = state.adventureModeUnlocked || false;
		this.meditationUnlocked = state.meditationUnlocked || false;
		this.saveIntegrity = state.saveIntegrity || 'valid';
		this.lastValidation = Date.now();

		// Recalculate derived values
		this.recalculateClickMultiplier();
	}

	/**
	 * Exports the current game state as a save string
	 * @returns JSON string containing save data and metadata
	 */
	exportSave(): string {
		return this.saveManager.exportSave();
	}

	/**
	 * Imports a save string and restores game state
	 * @param saveString - JSON save data from exportSave()
	 * @returns Result object with success status and optional warning/error messages
	 */
	importSave(saveString: string): { success: boolean; warning?: string; error?: string } {
		const result = this.saveManager.importSave(saveString);

		// If successful, apply the loaded state
		if (result.success && result.state) {
			this.loadFromGameState(result.state);
		}

		return {
			success: result.success,
			warning: result.warning,
			error: result.error
		};
	}

	/**
	 * Saves current game state to browser cookies
	 * @deprecated Cookies have a 4KB limit and save data now exceeds this.
	 * Use saveToLocalStorage() instead. This method is kept for backward compatibility.
	 * Cookie expires in 365 days
	 */
	saveToCookies(): void {
		// Deprecated: SaveManager handles all storage operations
		console.warn('saveToCookies() is deprecated. Use saveToLocalStorage() instead.');
	}

	/**
	 * Attempts to load game state from browser cookies
	 * @returns True if load succeeded, false otherwise
	 * @deprecated Use loadFromLocalStorage() instead
	 */
	loadFromCookies(): boolean {
		// Deprecated: SaveManager handles all storage operations
		console.warn('loadFromCookies() is deprecated. Use loadFromLocalStorage() instead.');
		return false;
	}

	/**
	 * Saves current game state to browser localStorage
	 */
	saveToLocalStorage(): void {
		const result = this.saveManager.saveToStorage();
		if (!result.success) {
			console.error('Failed to save to localStorage:', result.error);
		}
	}

	/**
	 * Attempts to load game state from browser localStorage
	 * @returns True if load succeeded, false otherwise
	 */
	loadFromLocalStorage(): boolean {
		const result = this.saveManager.loadFromStorage();
		if (!result.success) {
			if (result.error && !result.error.includes('No save data found')) {
				console.error('Failed to load save from localStorage:', result.error);
			}
			return false;
		}
		if (result.warning) {
			console.warn(result.warning);
		}
		return true;
	}

	/**
	 * Automatically saves to localStorage
	 * Called periodically by the game loop
	 */
	autoSave(): void {
		this.saveManager.autoSave();
	}

	/**
	 * Performs a hard reset of the game state
	 * Clears all progress and saves, optionally preserving player name
	 * @param preserveName - If true, keeps the current player name (default: true)
	 */
	hardReset(preserveName: boolean = true): void {
		const savedName = preserveName ? this.name : 'A Stranger';

		// Clear save data using SaveManager
		this.saveManager.clearSave();

		// Reset all game state
		this.name = savedName;
		this.exp = 0.0;
		this.lifetimeExp = 0.0;
		this.level = 1;
		this.tick = 0;
		this.menu = 'practice';
		this.clickMultiplier = 1.0;
		this.critChance = 0.0;
		this.critDamage = BASE_CRIT_DAMAGE;
		this.idleExpRate = 0;
		this.adventureModeUnlocked = false;
		this.meditationUnlocked = false;
		this.saveIntegrity = 'valid';
		this.lastValidation = Date.now();
		this._validationKey = this.generateValidationKey();

		// Reinitialize managers
		this.statsManager = new StatsManager();

		this.upgradeManager = new UpgradeManager({
			getCurrentExp: () => this.exp
		});

		this.idleActionManager = new IdleActionManager({
			getTrainingSpeedMultiplier: () => this.getTrainingSpeedMultiplier(),
			getTrainingCostMultiplier: () => this.getTrainingCostMultiplier(),
			getOsmosisExpBonus: () => this.getOsmosisExpBonus(),
			getGlobalIdleSpeedMultiplier: () => this.getGlobalIdleSpeedMultiplier(),
			getOsmosisSpeedMultiplier: () => this.getOsmosisSpeedMultiplier(),
			getStatLevelCost: (stat) => this.getStatLevelCost(stat),
			getCritChance: () => this.critChance,
			getCurrentExp: () => this.exp
		});

		this.saveManager = new SaveManager({
			getGameState: () => this.toGameState(),
			loadGameState: (state) => this.loadFromGameState(state)
		});

		this.recalculateClickMultiplier();
	}
}
