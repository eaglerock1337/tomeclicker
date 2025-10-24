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
 * Represents a training or meditation action
 */
export interface IdleAction {
	id: string;
	name: string;
	description: string;
	/** Progress from 0 to 1 */
	progress: number;
	/** Base duration in milliseconds */
	baseDuration: number;
	/** Current duration after upgrades */
	duration: number;
	/** EXP cost to start/continue this action */
	expCost: number;
	/** Whether this action is currently active */
	isActive: boolean;
	/** Last time progress was updated */
	lastUpdate: number;
	/** What stat this trains (if any) */
	trainsStat?: keyof Stats;
	/** Whether this is a one-time action */
	oneTime?: boolean;
	/** Whether this one-time action is completed */
	completed?: boolean;
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
	public trainingActions: { [key: string]: IdleAction };
	public meditationActions: { [key: string]: IdleAction };
	public idleExpRate: number;
	public adventureModeUnlocked: boolean;
	public meditationUnlocked: boolean;

	/**
	 * Creates a new game instance with default values
	 * @param name - Player name, defaults to 'A Stranger' if not provided
	 */
	constructor(name?: string) {
		this.name = name || 'A Stranger';
		this.tickrate = 1000;
		this.exp = 0.0;
		this.lifetimeExp = 0.0;
		this.level = 1;
		this.tick = 0;
		this.menu = 'practice';
		this.clickMultiplier = 1.0;
		this.critChance = 0.0; // Start with 0% crit chance
		this.critDamage = 0.5; // Crits do +50% damage (1.5x total)
		this.upgrades = this.initializeUpgrades();
		this.saveIntegrity = 'valid';
		this.lastValidation = Date.now();
		this._validationKey = this.generateValidationKey();

		// Initialize new systems
		this.stats = { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };
		this.trainingActions = this.initializeTrainingActions();
		this.meditationActions = this.initializeMeditationActions();
		this.idleExpRate = 0;
		this.adventureModeUnlocked = false;
		this.meditationUnlocked = false;

		this.startIntegrityMonitoring();
		this.recalculateClickMultiplier();
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
		this.critDamage = 0.5; // Base +50%

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
		let multiplier = 1.0;

		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'trainingSpeed') {
				multiplier *= Math.pow(1 - upgrade.effectValue, upgrade.currentLevel);
			}
		}

		return multiplier;
	}

	/**
	 * Gets the training cost multiplier from upgrades
	 * @returns Multiplier for training EXP cost (lower is cheaper)
	 */
	getTrainingCostMultiplier(): number {
		let multiplier = 1.0;

		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'trainingCost') {
				multiplier *= Math.pow(1 - upgrade.effectValue, upgrade.currentLevel);
			}
		}

		return multiplier;
	}

	/**
	 * Gets the osmosis EXP bonus from upgrades
	 * @returns Additional EXP gained per osmosis completion
	 */
	getOsmosisExpBonus(): number {
		let bonus = 0;

		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'osmosisExp') {
				bonus += upgrade.effectValue * upgrade.currentLevel;
			}
		}

		return bonus;
	}

	/**
	 * Gets the global idle speed multiplier from upgrades
	 * @returns Speed multiplier (higher is faster)
	 */
	getGlobalIdleSpeedMultiplier(): number {
		let multiplier = 1.0;

		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'globalIdleSpeed') {
				multiplier += upgrade.effectValue * upgrade.currentLevel;
			}
		}

		return multiplier;
	}

	/**
	 * Gets the osmosis-specific speed multiplier
	 * @returns Speed multiplier for osmosis actions (higher is faster)
	 */
	getOsmosisSpeedMultiplier(): number {
		let multiplier = 1.0;

		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'osmosisSpeed') {
				multiplier += upgrade.effectValue * upgrade.currentLevel;
			}
		}

		return multiplier;
	}

	/**
	 * Gets the EXP cost to level up a specific stat
	 * @param stat - The stat to check
	 * @returns EXP cost for next level
	 */
	getStatLevelCost(stat: keyof Stats): number {
		const currentLevel = this.stats[stat];
		const baseCost = 100;
		const multiplier = 1.5;
		return Math.floor(baseCost * Math.pow(multiplier, currentLevel - 1));
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
	migrateTrainingActions(savedActions: { [key: string]: IdleAction }): {
		[key: string]: IdleAction;
	} {
		// Get fresh action definitions
		const freshActions = this.initializeTrainingActions();

		// Preserve progress and state from saved actions
		for (const actionId in freshActions) {
			if (savedActions[actionId]) {
				freshActions[actionId].progress = savedActions[actionId].progress;
				freshActions[actionId].isActive = savedActions[actionId].isActive;
				freshActions[actionId].lastUpdate = savedActions[actionId].lastUpdate;
				if (savedActions[actionId].completed !== undefined) {
					freshActions[actionId].completed = savedActions[actionId].completed;
				}
			}
		}

		return freshActions;
	}

	/**
	 * Migrates saved meditation actions to the latest definitions
	 * Preserves progress and active state while adding new actions
	 * @param savedActions - Meditation action data from a saved game
	 */
	migrateMeditationActions(savedActions: { [key: string]: IdleAction }): {
		[key: string]: IdleAction;
	} {
		// Get fresh action definitions
		const freshActions = this.initializeMeditationActions();

		// Preserve progress and state from saved actions
		for (const actionId in freshActions) {
			if (savedActions[actionId]) {
				freshActions[actionId].progress = savedActions[actionId].progress;
				freshActions[actionId].isActive = savedActions[actionId].isActive;
				freshActions[actionId].lastUpdate = savedActions[actionId].lastUpdate;
				if (savedActions[actionId].completed !== undefined) {
					freshActions[actionId].completed = savedActions[actionId].completed;
				}
			}
		}

		return freshActions;
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
				baseCost: 50,
				costMultiplier: 1.15,
				maxLevel: 100,
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
				baseCost: 250,
				costMultiplier: 1.75,
				maxLevel: 50,
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
				baseCost: 500,
				costMultiplier: 2.0,
				maxLevel: 50,
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
				baseCost: 100,
				costMultiplier: 1.18,
				maxLevel: 100,
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
				baseCost: 300,
				costMultiplier: 1.2,
				maxLevel: 50,
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
				baseCost: 500,
				costMultiplier: 1.25,
				maxLevel: 100,
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
				baseCost: 10000,
				costMultiplier: 1.3,
				maxLevel: 10,
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
				baseCost: 15000,
				costMultiplier: 1.35,
				maxLevel: 5,
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
				baseCost: 1000,
				costMultiplier: 100, // Expensive scaling like level-ups
				maxLevel: 10,
				currentLevel: 0,
				effectType: 'clickMultiplier',
				effectValue: 5.0,
				minLevel: 1
			}
		};
	}

	/**
	 * Initializes training actions for stat development
	 */
	initializeTrainingActions(): { [key: string]: IdleAction } {
		return {
			'practice-osmosis': {
				id: 'practice-osmosis',
				name: 'Ruminate',
				description: 'Learn through observation and reflection',
				progress: 0,
				baseDuration: 15000, // 15 seconds
				duration: 15000,
				expCost: 0, // Free to use!
				isActive: false,
				lastUpdate: Date.now()
			},
			'train-strength': {
				id: 'train-strength',
				name: 'Lift Heavy Objects',
				description: 'Build raw physical power',
				progress: 0,
				baseDuration: 15000, // 15 seconds
				duration: 15000,
				expCost: 10,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'strength'
			},
			'train-dexterity': {
				id: 'train-dexterity',
				name: 'Practice Quick Movements',
				description: 'Improve agility and reflexes',
				progress: 0,
				baseDuration: 15000,
				duration: 15000,
				expCost: 10,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'dexterity'
			},
			'train-intelligence': {
				id: 'train-intelligence',
				name: 'Study Ancient Texts',
				description: 'Expand knowledge and understanding',
				progress: 0,
				baseDuration: 15000,
				duration: 15000,
				expCost: 10,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'intelligence'
			},
			'train-wisdom': {
				id: 'train-wisdom',
				name: 'Meditate on Meaning',
				description: 'Deepen insight and awareness',
				progress: 0,
				baseDuration: 15000,
				duration: 15000,
				expCost: 10,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'wisdom'
			}
		};
	}

	/**
	 * Initializes meditation actions
	 */
	initializeMeditationActions(): { [key: string]: IdleAction } {
		return {
			'meditate-future': {
				id: 'meditate-future',
				name: 'Meditate on Your Future',
				description: 'Unlock the path to adventure',
				progress: 0,
				baseDuration: 60000, // 1 minute
				duration: 60000,
				expCost: 50,
				isActive: false,
				lastUpdate: Date.now(),
				oneTime: true,
				completed: false
			},
			disassociate: {
				id: 'disassociate',
				name: 'Disassociate',
				description: 'Take a mental health day. Increases offline progress time.',
				progress: 0,
				baseDuration: 30000, // 30 seconds per level
				duration: 30000,
				expCost: 100,
				isActive: false,
				lastUpdate: Date.now(),
				oneTime: false
			}
		};
	}

	/** Idle Action Management */

	/**
	 * Starts an idle action (Progress Knight style - keeps running until switched)
	 * @param actionMap - The action map (trainingActions or meditationActions)
	 * @param actionId - ID of the action to start
	 * @returns True if action started successfully
	 */
	startIdleAction(actionMap: { [key: string]: IdleAction }, actionId: string): boolean {
		const action = actionMap[actionId];
		if (!action) return false;

		// Check if already completed (for one-time actions)
		if (action.oneTime && action.completed) return false;

		// Stop any currently active actions in this map
		for (const a of Object.values(actionMap)) {
			if (a.isActive) {
				a.isActive = false;
				a.progress = 0;
			}
		}

		// Start the action (no EXP cost upfront)
		action.isActive = true;
		action.progress = 0;
		action.lastUpdate = Date.now();

		// Apply speed multipliers based on action type
		if (actionId === 'practice-osmosis') {
			// Osmosis gets both osmosis-specific and global idle speed bonuses
			const osmosisSpeed = this.getOsmosisSpeedMultiplier();
			const globalSpeed = this.getGlobalIdleSpeedMultiplier();
			const combinedSpeed = osmosisSpeed * globalSpeed;
			action.duration = Math.floor(action.baseDuration / combinedSpeed);
		} else if (action.trainsStat) {
			// Stat training gets training speed and global idle speed
			const trainingSpeed = this.getTrainingSpeedMultiplier();
			const globalSpeed = this.getGlobalIdleSpeedMultiplier();
			action.duration = Math.floor((action.baseDuration * trainingSpeed) / globalSpeed);
		} else {
			// Other idle actions just get global speed
			const globalSpeed = this.getGlobalIdleSpeedMultiplier();
			action.duration = Math.floor(action.baseDuration / globalSpeed);
		}

		return true;
	}

	/**
	 * Updates progress for all active idle actions
	 * Should be called regularly (e.g., from game loop)
	 */
	updateIdleActions(): void {
		const now = Date.now();

		// Update training actions
		for (const action of Object.values(this.trainingActions)) {
			if (action.isActive) {
				const elapsed = now - action.lastUpdate;
				action.progress += elapsed / action.duration;
				action.lastUpdate = now;

				if (action.progress >= 1.0) {
					this.completeTrainingAction(action.id);
				}
			}
		}

		// Update meditation actions
		for (const action of Object.values(this.meditationActions)) {
			if (action.isActive) {
				const elapsed = now - action.lastUpdate;
				action.progress += elapsed / action.duration;
				action.lastUpdate = now;

				if (action.progress >= 1.0) {
					this.completeMeditationAction(action.id);
				}
			}
		}
	}

	/**
	 * Completes a training action and awards stat points or EXP
	 * @param actionId - ID of the training action to complete
	 */
	completeTrainingAction(actionId: string): void {
		const action = this.trainingActions[actionId];
		if (!action || !action.isActive) return;

		// Handle osmosis completion
		if (actionId === 'practice-osmosis') {
			const baseExp = 10;
			const bonus = this.getOsmosisExpBonus();
			this.addExp(baseExp + bonus);

			// Osmosis always restarts
			action.progress = 0;
			action.lastUpdate = Date.now();
			return;
		}

		// Handle stat training completion
		if (action.trainsStat) {
			const stat = action.trainsStat;
			const cost = this.getStatLevelCost(stat);

			// Give back some EXP (10 base, with crit chance for 50% bonus)
			let expReward = 10;
			const isCrit = Math.random() < this.critChance;
			if (isCrit) {
				expReward = Math.floor(expReward * 1.5); // 15 EXP on crit
			}
			this.addExp(expReward);

			// Check if we can afford to level up the stat
			if (this.exp >= cost) {
				this.exp -= cost;
				this.stats[stat]++;

				// Restart the action
				action.progress = 0;
				action.lastUpdate = Date.now();
			} else {
				// Can't afford, stop the action
				action.isActive = false;
				action.progress = 0;
				action.lastUpdate = Date.now();
			}
		}
	}

	/**
	 * Completes a meditation action and awards appropriate rewards
	 * @param actionId - ID of the meditation action to complete
	 */
	completeMeditationAction(actionId: string): void {
		const action = this.meditationActions[actionId];
		if (!action || !action.isActive) return;

		// Handle specific meditation rewards
		if (actionId === 'meditate-future') {
			this.adventureModeUnlocked = true;
			action.completed = true;
		}
		// Disassociate increases offline progress time (handled elsewhere)

		// Reset action
		action.isActive = false;
		action.progress = 0;
		action.lastUpdate = Date.now();
	}

	/**
	 * Stops an active idle action without completion
	 * @param actionMap - The action map (trainingActions or meditationActions)
	 * @param actionId - ID of the action to stop
	 */
	stopIdleAction(actionMap: { [key: string]: IdleAction }, actionId: string): void {
		const action = actionMap[actionId];
		if (!action) return;

		action.isActive = false;
		action.progress = 0;
		action.lastUpdate = Date.now();
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
		return 10000 * Math.pow(100, this.level - 1);
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

		// Special handling for Discipline (multiplicative cost like level ups)
		if (upgradeId === 'discipline') {
			return upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.currentLevel);
		}

		return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.currentLevel));
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
	 * - 10 lifetime EXP: Header appears
	 * - 50 lifetime EXP: Menu navigation and upgrades unlock
	 * - Level 3: Adventures unlock (future feature)
	 * - Level 5: Stats training unlocks (future feature)
	 */

	/**
	 * Determines if the header should be displayed
	 * Unlock threshold: 10 lifetime EXP
	 * @returns True if player has earned at least 10 lifetime EXP
	 */
	showHeader(): boolean {
		return this.lifetimeExp >= 10;
	}

	/**
	 * Determines if the navigation menu should be displayed
	 * Unlock threshold: 50 lifetime EXP
	 * @returns True if player has earned at least 50 lifetime EXP
	 */
	showMenu(): boolean {
		return this.lifetimeExp >= 50;
	}

	/**
	 * Determines if the upgrades page should be accessible
	 * Unlock threshold: 50 lifetime EXP (same as menu)
	 * @returns True if player has earned at least 50 lifetime EXP
	 */
	showUpgrades(): boolean {
		return this.lifetimeExp >= 50;
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
			this.trainingActions = saveData.trainingActions
				? this.migrateTrainingActions(saveData.trainingActions)
				: this.initializeTrainingActions();
			this.meditationActions = saveData.meditationActions
				? this.migrateMeditationActions(saveData.meditationActions)
				: this.initializeMeditationActions();

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
		this.critDamage = 0.5;
		this.upgrades = this.initializeUpgrades();
		this.stats = { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };
		this.trainingActions = this.initializeTrainingActions();
		this.meditationActions = this.initializeMeditationActions();
		this.idleExpRate = 0;
		this.adventureModeUnlocked = false;
		this.meditationUnlocked = false;
		this.saveIntegrity = 'valid';
		this.lastValidation = Date.now();
		this._validationKey = this.generateValidationKey();
		this.recalculateClickMultiplier();
	}
}
