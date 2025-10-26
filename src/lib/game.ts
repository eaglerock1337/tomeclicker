import {
	calculateLevelUpCost,
	calculateUpgradeCost,
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
import {
	GAME_TICK_RATE,
	BASE_CRIT_DAMAGE,
	UPGRADE_COST_TIER_1,
	UPGRADE_COST_TIER_2,
	UPGRADE_COST_TIER_3,
	UPGRADE_COST_TIER_4,
	UPGRADE_COST_TIER_5,
	UPGRADE_DISCIPLINE_BASE_COST,
	UPGRADE_TRAINING_SPEED_COST,
	UPGRADE_TRAINING_COST_REDUCTION,
	UPGRADE_MAX_STANDARD,
	UPGRADE_MAX_CRIT,
	UPGRADE_MAX_TRAINING,
	UPGRADE_MAX_COST_REDUCTION,
	UPGRADE_MAX_DISCIPLINE,
	HEADER_UNLOCK_THRESHOLD,
	MENU_UNLOCK_THRESHOLD,
	UPGRADES_UNLOCK_THRESHOLD
} from './constants/game';

/**
 * Represents an upgrade that can be purchased with EXP
 */
export interface Upgrade {
	/** Unique identifier for the upgrade */
	id: string;
	/** Display name shown to the player */
	name: string;
	/** Detailed description of what the upgrade does */
	description: string;
	/** Text describing the numerical effect */
	effect: string;
	/** Base cost in EXP for the first level */
	baseCost: number;
	/** Multiplier applied to cost for each level purchased */
	costMultiplier: number;
	/** Maximum number of times this upgrade can be purchased */
	maxLevel: number;
	/** Current level/times purchased */
	currentLevel: number;
	/** Type of effect this upgrade provides */
	effectType:
		| 'clickMultiplier'
		| 'idleExp'
		| 'trainingSpeed'
		| 'trainingCost'
		| 'levelUp'
		| 'critChance'
		| 'critDamage'
		| 'osmosisExp'
		| 'osmosisSpeed'
		| 'globalIdleSpeed';
	/** Numeric value of the effect per level */
	effectValue: number;
	/** Minimum level required to see this upgrade */
	minLevel?: number;
}

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
	public upgrades: { [key: string]: Upgrade };
	public saveIntegrity: string;
	public lastValidation: number;
	private _validationKey: string;

	// New RPG and idle systems
	public stats: Stats;
	public idleExpRate: number;
	public adventureModeUnlocked: boolean;
	public meditationUnlocked: boolean;

	// Idle action manager
	private idleActionManager: IdleActionManager;

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
		this.upgrades = this.initializeUpgrades();
		this.saveIntegrity = 'valid';
		this.lastValidation = Date.now();
		this._validationKey = this.generateValidationKey();

		// Initialize new systems
		this.stats = { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };
		this.idleExpRate = 0;
		this.adventureModeUnlocked = false;
		this.meditationUnlocked = false;

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

		this.startIntegrityMonitoring();
		this.recalculateClickMultiplier();
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
		return calculateStatLevelCost(this.stats[stat]);
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
	migrateUpgrades(savedUpgrades: { [key: string]: Upgrade }): void {
		// Get fresh upgrade definitions
		const freshUpgrades = this.initializeUpgrades();

		// Preserve current levels from saved upgrades
		for (const upgradeId in freshUpgrades) {
			if (savedUpgrades[upgradeId]) {
				freshUpgrades[upgradeId].currentLevel = savedUpgrades[upgradeId].currentLevel;
			}
		}

		this.upgrades = freshUpgrades;
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

	/**
	 * Initializes all available upgrades with default values
	 * @returns Object map of upgrade ID to upgrade definition
	 */
	initializeUpgrades(): { [key: string]: Upgrade } {
		return {
			// Level 1 Click upgrades
			'focused-practice': {
				id: 'focused-practice',
				name: 'Focused Practice',
				description: 'Deep concentration yields exponentially greater rewards',
				effect: '+100% EXP per click per level',
				baseCost: UPGRADE_COST_TIER_1,
				costMultiplier: 1.15,
				maxLevel: UPGRADE_MAX_STANDARD,
				currentLevel: 0,
				effectType: 'clickMultiplier',
				effectValue: 1.0,
				minLevel: 1
			},
			'critical-insight': {
				id: 'critical-insight',
				name: 'Critical Insight',
				description: 'Moments of clarity grant bursts of understanding',
				effect: '+0.5% crit chance per level',
				baseCost: UPGRADE_COST_TIER_3,
				costMultiplier: 1.75,
				maxLevel: UPGRADE_MAX_CRIT,
				currentLevel: 0,
				effectType: 'critChance',
				effectValue: 0.005,
				minLevel: 1
			},
			'devastating-critique': {
				id: 'devastating-critique',
				name: 'Devastating Critique',
				description: 'Critical insights become increasingly profound',
				effect: '+5% crit damage per level',
				baseCost: UPGRADE_COST_TIER_5,
				costMultiplier: 2.0,
				maxLevel: UPGRADE_MAX_CRIT,
				currentLevel: 0,
				effectType: 'critDamage',
				effectValue: 0.05,
				minLevel: 1
			},

			// Level 2 Idle/Rumination upgrades
			'osmotic-absorption': {
				id: 'osmotic-absorption',
				name: 'Deep Contemplation',
				description: 'Thoughtful reflection yields greater insights',
				effect: '+1 EXP per rumination level',
				baseCost: UPGRADE_COST_TIER_2,
				costMultiplier: 1.18,
				maxLevel: UPGRADE_MAX_STANDARD,
				currentLevel: 0,
				effectType: 'osmosisExp',
				effectValue: 1,
				minLevel: 2
			},
			'flow-state': {
				id: 'flow-state',
				name: 'Flow State',
				description: 'Enter a state of effortless focus',
				effect: '+2% rumination speed per level',
				baseCost: UPGRADE_COST_TIER_4,
				costMultiplier: 1.2,
				maxLevel: UPGRADE_MAX_CRIT,
				currentLevel: 0,
				effectType: 'osmosisSpeed',
				effectValue: 0.02,
				minLevel: 2
			},
			'temporal-mastery': {
				id: 'temporal-mastery',
				name: 'Temporal Mastery',
				description: 'Bend time itself to your will (affects ALL idle actions)',
				effect: '+5% global idle speed per level',
				baseCost: UPGRADE_COST_TIER_5,
				costMultiplier: 1.25,
				maxLevel: UPGRADE_MAX_STANDARD,
				currentLevel: 0,
				effectType: 'globalIdleSpeed',
				effectValue: 0.05,
				minLevel: 2
			},

			// Level 3+ Training upgrades
			'efficient-training': {
				id: 'efficient-training',
				name: 'Efficient Training',
				description: 'Complete training exercises faster',
				effect: '-10% training time per level',
				baseCost: UPGRADE_TRAINING_SPEED_COST,
				costMultiplier: 1.3,
				maxLevel: UPGRADE_MAX_TRAINING,
				currentLevel: 0,
				effectType: 'trainingSpeed',
				effectValue: 0.1,
				minLevel: 3
			},
			'cost-reduction': {
				id: 'cost-reduction',
				name: 'Cost Reduction',
				description: 'Training requires less EXP to start',
				effect: '-20% training cost per level',
				baseCost: UPGRADE_TRAINING_COST_REDUCTION,
				costMultiplier: 1.35,
				maxLevel: UPGRADE_MAX_COST_REDUCTION,
				currentLevel: 0,
				effectType: 'trainingCost',
				effectValue: 0.2,
				minLevel: 3
			},

			// Special: Discipline upgrade (available early, expensive)
			discipline: {
				id: 'discipline',
				name: 'Discipline',
				description: 'Unified focus accelerates all progress',
				effect: '5x all EXP gain per level',
				baseCost: UPGRADE_DISCIPLINE_BASE_COST,
				costMultiplier: 100, // Expensive scaling like level-ups
				maxLevel: UPGRADE_MAX_DISCIPLINE,
				currentLevel: 0,
				effectType: 'clickMultiplier',
				effectValue: 5.0,
				minLevel: 1
			}
		};
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
				this.stats[result.statGained.stat] += result.statGained.amount;
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

	private startIntegrityMonitoring() {
		// Disable integrity monitoring for now
		return;
	}

	private calculateExpectedClickMultiplier(): number {
		let expected = 1.0;
		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'clickMultiplier') {
				expected += upgrade.effectValue * upgrade.currentLevel;
			}
		}
		return expected;
	}

	private markIntegrityViolation(reason: string) {
		this.saveIntegrity = `compromised-${reason}-${Date.now()}`;
		console.warn(`Game integrity violation detected: ${reason}`);
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
		const upgrade = this.upgrades[upgradeId];
		if (!upgrade) return 0;

		return calculateUpgradeCost(upgrade);
	}

	/**
	 * Checks if player has enough EXP to afford an upgrade
	 * @param upgradeId - ID of the upgrade to check
	 * @returns True if affordable, false otherwise
	 */
	canAffordUpgrade(upgradeId: string): boolean {
		const cost = this.getUpgradeCost(upgradeId);
		return this.exp >= cost;
	}

	/**
	 * Checks if an upgrade can be purchased (affordable AND not maxed)
	 * @param upgradeId - ID of the upgrade to check
	 * @returns True if purchaseable, false otherwise
	 */
	canPurchaseUpgrade(upgradeId: string): boolean {
		const upgrade = this.upgrades[upgradeId];
		if (!upgrade) return false;

		return this.canAffordUpgrade(upgradeId) && upgrade.currentLevel < upgrade.maxLevel;
	}

	/**
	 * Attempts to purchase the next level of an upgrade
	 * Spends EXP and recalculates click multiplier on success
	 * @param upgradeId - ID of the upgrade to purchase
	 * @returns True if purchase succeeded, false otherwise
	 */
	purchaseUpgrade(upgradeId: string): boolean {
		if (!this.canPurchaseUpgrade(upgradeId)) return false;

		const upgrade = this.upgrades[upgradeId];
		const cost = this.getUpgradeCost(upgradeId);

		this.exp -= cost;
		upgrade.currentLevel++;

		// Recalculate click multiplier after purchase
		this.recalculateClickMultiplier();

		return true;
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

	private generateSaveHash(data: string): string {
		// Simple hash for save validation - not cryptographically secure but detects tampering
		let hash = 0;
		for (let i = 0; i < data.length; i++) {
			const char = data.charCodeAt(i);
			hash = (hash << 5) - hash + char;
			hash = hash & hash; // Convert to 32-bit integer
		}
		return hash.toString(36) + this._validationKey;
	}

	private encryptSave(data: string): string {
		// Simple XOR encryption - not secure but obfuscates the data
		const key = 'tomeclicker-save-key';
		let encrypted = '';
		for (let i = 0; i < data.length; i++) {
			encrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
		}

		if (typeof btoa === 'undefined') {
			// Fallback for server-side rendering
			return Buffer.from(encrypted).toString('base64');
		}
		return btoa(encrypted);
	}

	private decryptSave(encryptedData: string): string {
		try {
			let encrypted: string;
			if (typeof atob === 'undefined') {
				// Fallback for server-side rendering
				encrypted = Buffer.from(encryptedData, 'base64').toString();
			} else {
				encrypted = atob(encryptedData);
			}

			const key = 'tomeclicker-save-key';
			let decrypted = '';
			for (let i = 0; i < encrypted.length; i++) {
				decrypted += String.fromCharCode(encrypted.charCodeAt(i) ^ key.charCodeAt(i % key.length));
			}
			return decrypted;
		} catch {
			throw new Error('Invalid encrypted save data');
		}
	}

	/**
	 * Exports the current game state as a save string
	 * @param encrypted - Whether to encrypt the save data (default: true)
	 * @returns JSON string containing save data and metadata
	 */
	exportSave(encrypted = true): string {
		const saveData = {
			name: this.name,
			exp: this.exp,
			lifetimeExp: this.lifetimeExp,
			level: this.level,
			clickMultiplier: this.clickMultiplier,
			critChance: this.critChance,
			critDamage: this.critDamage,
			upgrades: this.upgrades,
			stats: this.stats,
			trainingActions: this.trainingActions,
			meditationActions: this.meditationActions,
			idleExpRate: this.idleExpRate,
			adventureModeUnlocked: this.adventureModeUnlocked,
			meditationUnlocked: this.meditationUnlocked,
			saveIntegrity: this.saveIntegrity,
			lastValidation: this.lastValidation,
			version: '0.1.0',
			timestamp: Date.now()
		};

		const jsonData = JSON.stringify(saveData);

		if (encrypted) {
			const hash = this.generateSaveHash(jsonData);
			const encryptedData = this.encryptSave(jsonData);
			return JSON.stringify({
				encrypted: true,
				data: encryptedData,
				hash: hash,
				version: '0.1.0'
			});
		} else {
			return JSON.stringify({
				...saveData,
				encrypted: false,
				warning: 'This save is not eligible for leaderboard participation'
			});
		}
	}

	/**
	 * Imports a save string and restores game state
	 * @param saveString - JSON save data from exportSave()
	 * @returns Result object with success status and optional warning/error messages
	 */
	importSave(saveString: string): { success: boolean; warning?: string; error?: string } {
		try {
			const saveWrapper = JSON.parse(saveString);
			let saveData;
			let warning = '';

			if (saveWrapper.encrypted === false) {
				// Unencrypted save - mark as compromised
				saveData = saveWrapper;
				this.saveIntegrity = 'unencrypted-import';
				warning =
					'This save is not eligible for leaderboard participation due to unencrypted import.';
			} else if (saveWrapper.encrypted === true) {
				// Encrypted save - skip hash validation for now
				const decryptedData = this.decryptSave(saveWrapper.data);
				saveData = JSON.parse(decryptedData);
			} else {
				return { success: false, error: 'Invalid save format.' };
			}

			// Validate save data structure
			if (!this.validateSaveData(saveData)) {
				return { success: false, error: 'Save data is invalid or corrupted.' };
			}

			// Load the save data
			this.name = saveData.name;
			this.exp = saveData.exp;
			this.lifetimeExp = saveData.lifetimeExp;
			this.level = saveData.level || 1;

			// Migrate upgrades: preserve levels but update definitions
			this.migrateUpgrades(saveData.upgrades);

			// Load new game systems (with defaults for old saves)
			this.critChance = saveData.critChance || 0.0;
			this.critDamage = saveData.critDamage || 0.5;
			this.stats = saveData.stats || { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };

			// Migrate training and meditation actions to add new actions while preserving progress
			if (saveData.trainingActions) {
				this.migrateTrainingActions(saveData.trainingActions);
			}
			if (saveData.meditationActions) {
				this.migrateMeditationActions(saveData.meditationActions);
			}

			this.idleExpRate = saveData.idleExpRate || 0;
			this.adventureModeUnlocked = saveData.adventureModeUnlocked || false;
			this.meditationUnlocked = saveData.meditationUnlocked || false;

			this.saveIntegrity = saveData.saveIntegrity || this.saveIntegrity;
			this.lastValidation = Date.now();

			// Recalculate click multiplier and crit stats from upgrades
			this.recalculateClickMultiplier();

			return { success: true, warning };
		} catch (error) {
			return { success: false, error: `Failed to import save: ${error}` };
		}
	}

	private validateSaveData(data: any): boolean {
		return (
			typeof data.name === 'string' &&
			typeof data.exp === 'number' &&
			typeof data.lifetimeExp === 'number' &&
			(typeof data.level === 'number' || data.level === undefined) &&
			typeof data.clickMultiplier === 'number' &&
			typeof data.upgrades === 'object' &&
			data.exp <= data.lifetimeExp
		);
	}

	/**
	 * Saves current game state to browser cookies
	 * @deprecated Cookies have a 4KB limit and save data now exceeds this.
	 * Use saveToLocalStorage() instead. This method is kept for backward compatibility.
	 * Cookie expires in 365 days
	 */
	saveToCookies(): void {
		if (typeof document === 'undefined') return;
		try {
			const saveData = this.exportSave(true);
			const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
			document.cookie = `tomeclicker_save=${encodeURIComponent(saveData)}; expires=${expires}; path=/; SameSite=Lax`;
		} catch (error) {
			console.error('Failed to save to cookies:', error);
		}
	}

	/**
	 * Attempts to load game state from browser cookies
	 * @returns True if load succeeded, false otherwise
	 */
	loadFromCookies(): boolean {
		if (typeof document === 'undefined') return false;
		try {
			const cookies = document.cookie.split(';');
			for (const cookie of cookies) {
				const [name, value] = cookie.trim().split('=');
				if (name === 'tomeclicker_save' && value) {
					const result = this.importSave(decodeURIComponent(value));
					if (result.success) {
						return true;
					} else {
						console.error('Failed to load save from cookies:', result.error);
						return false;
					}
				}
			}
			return false;
		} catch (error) {
			console.error('Error loading from cookies:', error);
			return false;
		}
	}

	/**
	 * Saves current game state to browser localStorage
	 */
	saveToLocalStorage(): void {
		if (typeof localStorage === 'undefined') return;
		try {
			const saveData = this.exportSave(true);
			localStorage.setItem('tomeclicker_save', saveData);
		} catch (error) {
			console.error('Failed to save to localStorage:', error);
		}
	}

	/**
	 * Attempts to load game state from browser localStorage
	 * @returns True if load succeeded, false otherwise
	 */
	loadFromLocalStorage(): boolean {
		if (typeof localStorage === 'undefined') return false;
		try {
			const saveData = localStorage.getItem('tomeclicker_save');
			if (saveData) {
				const result = this.importSave(saveData);
				if (result.success) {
					return true;
				} else {
					console.error('Failed to load save from localStorage:', result.error);
					return false;
				}
			}
			return false;
		} catch (error) {
			console.error('Error loading from localStorage:', error);
			return false;
		}
	}

	/**
	 * Automatically saves to localStorage
	 * Called periodically by the game loop
	 * Note: Cookies are no longer used due to 4KB size limit
	 */
	autoSave(): void {
		// Only use localStorage (cookies have 4KB limit, save data exceeds this)
		this.saveToLocalStorage();
	}

	/**
	 * Performs a hard reset of the game state
	 * Clears all progress and saves, optionally preserving player name
	 * @param preserveName - If true, keeps the current player name (default: true)
	 */
	hardReset(preserveName: boolean = true): void {
		const savedName = preserveName ? this.name : 'A Stranger';

		// Clear localStorage and cookies
		if (typeof localStorage !== 'undefined') {
			localStorage.removeItem('tomeclicker_save');
		}
		if (typeof document !== 'undefined') {
			document.cookie = 'tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		}

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
		this.upgrades = this.initializeUpgrades();
		this.stats = { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };
		this.idleExpRate = 0;
		this.adventureModeUnlocked = false;
		this.meditationUnlocked = false;
		this.saveIntegrity = 'valid';
		this.lastValidation = Date.now();
		this._validationKey = this.generateValidationKey();

		// Reinitialize idle action manager
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

		this.recalculateClickMultiplier();
	}
}
