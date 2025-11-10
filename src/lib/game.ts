import {
	calculateLevelUpCost,
	calculateStatLevelCost,
	calculateStudyingSpeedMultiplier,
	calculateStudyingCostMultiplier,
	calculateRuminateExpBonus,
	calculateGlobalIdleSpeedMultiplier,
	calculateRuminateSpeedMultiplier,
	calculateStatExpRequired,
	calculateStatStudyingCost,
	calculateMaxStatLevel,
	calculateClickMultiplierPercent,
	calculateClickCritChance,
	calculateClickCritDamage,
	calculateRuminateMultiplierPercent,
	calculateRuminateCritChance,
	calculateRuminateCritDamage,
	calculateStatGainBonus,
	calculateStatGainMultiplierPercent,
	calculateStudyingCritChance,
	calculateStudyingCritDamage
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
import {
	StoryManager,
	type StoryEntry,
	type StoryCheckResult,
	type AcknowledgeResult
} from './managers/story-manager';
import { loadStoryEntries } from './data/story-loader';

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
 * Represents RPG-style player stats with EXP-based leveling
 * v0.1.5: Physical stats (Strength, Agility, Willpower, Endurance) available now
 * Magic stats (Intelligence, Wisdom) will unlock later with meditation/magic system
 */
export interface Stats {
	// Physical stat levels (available now)
	strength: number;
	agility: number;
	willpower: number;
	endurance: number;

	// Magic stat levels (locked - future meditation/magic unlock)
	intelligence: number;
	wisdom: number;

	// Physical stat EXP tracking (v0.1.5+ EXP-based progression)
	strengthExp: number;
	agilityExp: number;
	willpowerExp: number;
	enduranceExp: number;
	// Magic stat EXP tracking (locked - future)
	intelligenceExp: number;
	wisdomExp: number;
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
	public critChance: number; // Character EXP crit chance (clicking)
	public critDamage: number; // Character EXP crit damage multiplier
	public studyingCritChance: number; // Stat EXP studying crit chance

	// New RPG and idle systems
	public idleExpRate: number;
	public adventureModeUnlocked: boolean;
	public adventureUnlockAttempted: boolean; // Tracks if player has clicked unlock button (for story)
	public meditationUnlocked: boolean;
	public nameChangeUnlocked: boolean;
	public nameChanged: boolean;

	// Managers
	private idleActionManager: IdleActionManager;
	private upgradeManager: UpgradeManager;
	private saveManager: SaveManager;
	private statsManager: StatsManager;
	private storyManager: StoryManager;

	// Story modal queue (entries waiting to be shown)
	private pendingStoryModals: StoryEntry[] = [];

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
		this.critChance = 0.0; // Start with 0% character crit chance
		this.critDamage = BASE_CRIT_DAMAGE; // Crits do +50% damage (1.5x total)
		this.studyingCritChance = 0.0; // Start with 0% studying crit chance

		// Initialize new systems
		this.idleExpRate = 0;
		this.adventureModeUnlocked = false;
		this.adventureUnlockAttempted = false;
		this.meditationUnlocked = false;
		this.nameChangeUnlocked = false;
		this.nameChanged = false;

		// Initialize stats manager with character level dependency
		this.statsManager = new StatsManager(undefined, {
			getCharacterLevel: () => this.level
		});

		// Initialize upgrade manager
		this.upgradeManager = new UpgradeManager({
			getCurrentExp: () => this.exp
		});

		// Initialize idle action manager with dependencies
		this.idleActionManager = new IdleActionManager({
			getStudyingSpeedMultiplier: () => this.getStudyingSpeedMultiplier(),
			getStudyingCostMultiplier: () => this.getStudyingCostMultiplier(),
			getRuminateExpBonus: () => this.getRuminateExpBonus(),
			getDisciplineMultiplier: () => this.getDisciplineMultiplier(),
			getCurrentLevel: () => this.level,
			getGlobalIdleSpeedMultiplier: () => this.getGlobalIdleSpeedMultiplier(),
			getRuminateSpeedMultiplier: () => this.getRuminateSpeedMultiplier(),
			getStatLevelCost: (stat) => this.getStatLevelCost(stat),
			getStatStudyingCost: (stat) => this.statsManager.getStatStudyingCost(stat),
			addStatExp: (stat, amount) => this.statsManager.addStatExp(stat, amount),
			getCritChance: () => this.critChance,
			getCurrentExp: () => this.exp,
			getRuminateMultiplierPercent: () => this.getRuminateMultiplierPercent(),
			getRuminateCritChance: () => this.getRuminateCritChance(),
			getRuminateCritDamage: () => this.getRuminateCritDamage(),
			getStatGainBonus: () => this.getStatGainBonus(),
			getStatGainMultiplierPercent: () => this.getStatGainMultiplierPercent(),
			getStudyingCritChance: () => this.getStudyingCritChance(),
			getStudyingCritDamage: () => this.getStudyingCritDamage(),
			getMaxStatLevel: (stat) => this.getMaxStatLevel(stat),
			getCurrentStatLevel: (stat) => this.stats[stat]
		});

		// Initialize save manager with dependencies
		this.saveManager = new SaveManager({
			getGameState: () => this.toGameState(),
			loadGameState: (state) => this.loadFromGameState(state)
		});

		// Initialize story manager with dependencies
		this.storyManager = new StoryManager(
			{
				getCurrentExp: () => this.exp,
				getLifetimeExp: () => this.lifetimeExp,
				getCurrentLevel: () => this.level,
				getStats: () => this.stats,
				getUpgrades: () => this.upgrades,
				getPlayerName: () => this.name,
				areAllStatsUnlocked: () => this.areAllStatsUnlocked(),
				isAdventureModeUnlocked: () => this.adventureModeUnlocked,
				isAdventureUnlockAttempted: () => this.adventureUnlockAttempted
			},
			loadStoryEntries() // Load story entries from YAML
		);

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
	 * Gets all studying actions (delegates to IdleActionManager)
	 */
	get studyingActions(): { [key: string]: IdleAction } {
		return this.idleActionManager.getStudyingActions();
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
	 * Sets the player's name and checks for name-related story triggers
	 * @param name - New name for the player
	 */
	setName(name: string): void {
		if (name && name !== 'A Stranger' && name !== this.name) {
			this.name = name;
			// Check for story entries that unlock when name is set
			this.storyManager.checkForNewUnlocks();
		}
	}

	/**
	 * Changes the player's name (used by UI)
	 * Marks nameChanged as true on first use and triggers story event
	 * @param name - New name for the player
	 */
	changePlayerName(name: string): void {
		const trimmedName = name.trim();
		if (!trimmedName || trimmedName === this.name) {
			return; // No change
		}

		// Set the name
		this.name = trimmedName;

		// Mark as changed (dismisses badge and highlighting)
		if (!this.nameChanged) {
			this.nameChanged = true;
		}

		// Trigger story check (will unlock ch1-name-set story event)
		this.storyManager.checkForNewUnlocks();
	}

	/**
	 * Checks for newly unlocked story entries
	 * @returns Result with newly unlocked entries and total unread count
	 */
	checkStoryUnlocks(): StoryCheckResult {
		return this.storyManager.checkForNewUnlocks();
	}

	/**
	 * Dismisses a story modal (removes from queue without acknowledging)
	 * Entry stays unread in journal until viewed there
	 * @param entryId - ID of the story entry to dismiss
	 * @returns True if dismissed successfully
	 */
	dismissStoryModal(entryId: string): boolean {
		return this.storyManager.dismissModal(entryId);
	}

	/**
	 * Acknowledges a story entry (marks as read in journal)
	 * @param entryId - ID of the story entry to acknowledge
	 * @returns Result with remaining unread count
	 */
	acknowledgeStoryEntry(entryId: string): AcknowledgeResult {
		return this.storyManager.acknowledge(entryId);
	}

	/**
	 * Gets all story entries for a specific chapter
	 * @param chapter - Chapter number
	 * @returns Array of story entries in chapter
	 */
	getStoryChapterEntries(chapter: number): StoryEntry[] {
		return this.storyManager.getChapterEntries(chapter);
	}

	/**
	 * Gets all unlocked chapters
	 * @returns Array of chapter numbers that have at least one unlocked entry
	 */
	getUnlockedStoryChapters(): number[] {
		return this.storyManager.getUnlockedChapters();
	}

	/**
	 * Gets count of unread story entries
	 * @returns Number of unlocked but unacknowledged entries
	 */
	getUnreadStoryCount(): number {
		return this.storyManager.getUnreadCount();
	}

	/**
	 * Gets a specific story entry by ID
	 * @param entryId - ID of the story entry
	 * @returns Story entry or undefined if not found
	 */
	getStoryEntry(entryId: string): StoryEntry | undefined {
		return this.storyManager.getEntry(entryId);
	}

	/**
	 * Gets upgrades by category (v0.1.5+ categorized system)
	 */
	getUpgradesByCategory(category: 'click' | 'research' | 'studying' | 'special'): UpgradeType[] {
		return this.upgradeManager.getUpgradesByCategory(category);
	}

	/**
	 * Gets all visible upgrade categories for the current level
	 */
	getVisibleUpgradeCategories(): ('click' | 'research' | 'studying' | 'special')[] {
		return this.upgradeManager.getVisibleCategories(this.level);
	}

	/**
	 * Recalculates the click multiplier based on current upgrades and level (v0.1.5+)
	 * Hybrid system:
	 * 1. Flat bonuses: Click Power (+1 per level)
	 * 2. Percentage bonuses: Click Mastery (+5% per level)
	 * 3. Level multipliers: 10^(level-1)
	 * 4. Discipline multiplier: 5^(discipline_level)
	 */
	recalculateClickMultiplier(): void {
		// Start with base 1.0
		this.clickMultiplier = 1.0;

		// Add flat bonuses from Click Power
		for (const upgrade of Object.values(this.upgrades)) {
			if (upgrade.effectType === 'clickMultiplier') {
				this.clickMultiplier += upgrade.effectValue * upgrade.currentLevel;
			}
		}

		// Apply percentage multipliers (Click Mastery)
		const percentMultiplier = calculateClickMultiplierPercent(this.upgrades);
		this.clickMultiplier *= percentMultiplier;

		// Apply level multipliers (8x per level after 1)
		if (this.level > 1) {
			this.clickMultiplier *= Math.pow(8, this.level - 1);
		}

		// Apply Discipline multiplier (2x per level)
		const discipline = this.upgrades['discipline'];
		if (discipline && discipline.currentLevel > 0) {
			this.clickMultiplier *= Math.pow(2, discipline.currentLevel);
		}

		// Recalculate idle EXP rate
		this.recalculateIdleExpRate();
	}

	/**
	 * Recalculates the idle EXP rate based on current upgrades (v0.1.5+)
	 * Pure multiplicative system:
	 * Base 10 EXP/tick × percentage bonuses × level mult × discipline mult
	 */
	recalculateIdleExpRate(): void {
		// Start with base ruminate reward (10 EXP per tick)
		const baseReward = 10; // RUMINATE_BASE_REWARD

		// Apply percentage multiplier from Ruminate Power + Ruminate Mastery
		const percentMultiplier = calculateRuminateMultiplierPercent(this.upgrades);
		this.idleExpRate = baseReward * percentMultiplier;

		// Apply level multipliers (8x per level after 1)
		if (this.level > 1) {
			this.idleExpRate *= Math.pow(8, this.level - 1);
		}

		// Apply Discipline multiplier (2x per level)
		const discipline = this.upgrades['discipline'];
		if (discipline && discipline.currentLevel > 0) {
			this.idleExpRate *= Math.pow(2, discipline.currentLevel);
		}

		// Recalculate crit stats
		this.recalculateCritStats();
	}

	/**
	 * Recalculates crit chance and crit damage based on upgrades
	 */
	recalculateCritStats(): void {
		// Calculate click crit stats from upgrades
		this.critChance = calculateClickCritChance(this.upgrades);
		this.critDamage = calculateClickCritDamage(this.upgrades);

		// Calculate studying crit chance from upgrades
		this.studyingCritChance = calculateStudyingCritChance(this.upgrades);
	}

	/**
	 * Gets the studying speed multiplier from upgrades
	 * @returns Multiplier for studying duration (lower is faster)
	 */
	getStudyingSpeedMultiplier(): number {
		return calculateStudyingSpeedMultiplier(this.upgrades);
	}

	/**
	 * Gets the studying cost multiplier from upgrades
	 * @returns Multiplier for studying EXP cost (lower is cheaper)
	 */
	getStudyingCostMultiplier(): number {
		return calculateStudyingCostMultiplier(this.upgrades);
	}

	/**
	 * Gets the Discipline multiplier for all EXP gains
	 * @returns Discipline multiplier (2^level)
	 */
	getDisciplineMultiplier(): number {
		const discipline = this.upgrades['discipline'];
		if (!discipline || discipline.currentLevel === 0) {
			return 1.0;
		}
		return Math.pow(2, discipline.currentLevel);
	}

	/**
	 * Gets the ruminate EXP bonus from upgrades
	 * @returns Additional EXP gained per ruminate completion
	 */
	getRuminateExpBonus(): number {
		return calculateRuminateExpBonus(this.upgrades);
	}

	/**
	 * Gets the full Ruminate reward with all multipliers applied
	 * Formula: (base + bonus) × 8^(level-1) × 2^(discipline_level)
	 * @returns Total EXP that will be gained from completing Ruminate
	 */
	getRuminateReward(): number {
		const baseReward = 10; // RUMINATE_BASE_REWARD
		const bonus = this.getRuminateExpBonus();
		const levelMult = this.level > 1 ? Math.pow(8, this.level - 1) : 1;
		const disciplineMult = this.getDisciplineMultiplier();

		return Math.floor((baseReward + bonus) * levelMult * disciplineMult);
	}

	/**
	 * Gets the global idle speed multiplier from upgrades
	 * @returns Speed multiplier (higher is faster)
	 */
	getGlobalIdleSpeedMultiplier(): number {
		return calculateGlobalIdleSpeedMultiplier(this.upgrades);
	}

	/**
	 * Gets the ruminate-specific speed multiplier
	 * @returns Speed multiplier for ruminate actions (higher is faster)
	 */
	getRuminateSpeedMultiplier(): number {
		return calculateRuminateSpeedMultiplier(this.upgrades);
	}

	/**
	 * Gets the ruminate percentage multiplier from upgrades
	 * @returns Multiplier for ruminate EXP (higher is more EXP)
	 */
	getRuminateMultiplierPercent(): number {
		return calculateRuminateMultiplierPercent(this.upgrades);
	}

	/**
	 * Gets the ruminate crit chance from upgrades
	 * @returns Crit chance for ruminate (0.0 to 0.25)
	 */
	getRuminateCritChance(): number {
		return calculateRuminateCritChance(this.upgrades);
	}

	/**
	 * Gets the ruminate crit damage multiplier from upgrades
	 * @returns Crit damage multiplier (0.5 to 1.5)
	 */
	getRuminateCritDamage(): number {
		return calculateRuminateCritDamage(this.upgrades);
	}

	/**
	 * Gets the stat gain bonus from upgrades
	 * @returns Additional stat EXP per studying completion
	 */
	getStatGainBonus(): number {
		return calculateStatGainBonus(this.upgrades);
	}

	/**
	 * Gets the stat gain percentage multiplier from upgrades
	 * @returns Multiplier for stat EXP (higher is more stat EXP)
	 */
	getStatGainMultiplierPercent(): number {
		return calculateStatGainMultiplierPercent(this.upgrades);
	}

	/**
	 * Gets the studying crit chance from upgrades
	 * @returns Crit chance percentage (0.0 to 1.0)
	 */
	getStudyingCritChance(): number {
		return this.studyingCritChance;
	}

	/**
	 * Gets the studying crit damage multiplier from upgrades
	 * @returns Crit damage multiplier (0.5 to 1.5)
	 */
	getStudyingCritDamage(): number {
		return calculateStudyingCritDamage(this.upgrades);
	}

	/**
	 * Gets the stat EXP gain per studying completion (v0.1.5+)
	 * Includes bonuses from all stat gain upgrades (before crit)
	 * @returns Stat EXP gained per studying (before crit)
	 */
	getStatExpGainPerStudying(): number {
		const baseReward = 10; // TRAINING_REWARD constant
		const flatBonus = this.getStatGainBonus(); // Flat bonuses from upgrades
		const percentMultiplier = this.getStatGainMultiplierPercent(); // Percentage multipliers
		return Math.floor((baseReward + flatBonus) * percentMultiplier);
	}

	/**
	 * Gets the actual training duration for a specific action with all bonuses applied
	 * This calculates what the duration would be if you started the action now
	 * @param actionId - ID of the training action
	 * @returns Duration in milliseconds with all bonuses applied
	 */
	getStudyingDuration(actionId: string): number {
		const action = this.studyingActions[actionId];
		if (!action) return 0;

		// Calculate bonused duration (same logic as startIdleAction)
		if (actionId === 'study-research') {
			const ruminateSpeed = this.getRuminateSpeedMultiplier();
			const globalSpeed = this.getGlobalIdleSpeedMultiplier();
			const combinedSpeed = ruminateSpeed * globalSpeed;
			return Math.floor(action.baseDuration / combinedSpeed);
		} else if (action.trainsStat) {
			const trainingSpeed = this.getStudyingSpeedMultiplier();
			const globalSpeed = this.getGlobalIdleSpeedMultiplier();
			const combinedSpeed = trainingSpeed * globalSpeed;
			return Math.floor(action.baseDuration / combinedSpeed);
		} else {
			const globalSpeed = this.getGlobalIdleSpeedMultiplier();
			return Math.floor(action.baseDuration / globalSpeed);
		}
	}

	/**
	 * Gets the EXP cost to level up a specific stat (legacy method)
	 * @param stat - The stat to check
	 * @returns EXP cost for next level
	 */
	getStatLevelCost(stat: keyof Stats): number {
		return this.statsManager.getStatLevelCost(stat);
	}

	/**
	 * Gets the current stat EXP for a specific stat (v0.1.5+)
	 * @param stat - The stat to check
	 * @returns Current stat EXP
	 */
	getStatExp(stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>): number {
		return this.statsManager.getStatExp(stat);
	}

	/**
	 * Gets the stat EXP required for the next level (v0.1.5+)
	 * @param stat - The stat to check
	 * @returns Stat EXP required for next level
	 */
	getStatExpRequired(
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	): number {
		return this.statsManager.getStatExpRequired(stat);
	}

	/**
	 * Gets the character EXP cost to start training a specific stat (v0.1.5+)
	 * Applies training cost multiplier from upgrades
	 * @param stat - The stat to check
	 * @returns Character EXP cost to start training (with multipliers applied)
	 */
	getStatStudyingCost(
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	): number {
		const baseCost = this.statsManager.getStatStudyingCost(stat);
		const multiplier = this.getStudyingCostMultiplier();
		return Math.floor(baseCost * multiplier);
	}

	/**
	 * Gets the maximum allowed level for a stat based on character level (v0.1.5+)
	 * @param stat - The stat to check
	 * @returns Maximum stat level allowed
	 */
	getMaxStatLevel(
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	): number {
		return this.statsManager.getMaxStatLevel(stat);
	}

	/**
	 * Checks if a stat is locked (level 0)
	 * @param stat - The stat to check
	 * @returns True if stat is at level 0 (locked/hidden)
	 */
	isStatLocked(
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	): boolean {
		return this.statsManager.isStatLocked(stat);
	}

	/**
	 * Checks if all physical stats are unlocked (level 1+)
	 * @returns True if all 4 physical stats are at level 1 or higher
	 */
	areAllStatsUnlocked(): boolean {
		return this.statsManager.areAllPhysicalStatsUnlocked();
	}

	/**
	 * Gets the display name for a stat (??? if locked, stat name if unlocked)
	 * @param stat - The stat to get display name for
	 * @returns Display name for the stat
	 */
	getStatDisplayName(
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	): string {
		return this.statsManager.getStatDisplayName(stat);
	}

	/**
	 * Checks if a training action can be started (has enough character EXP)
	 * @param actionId - ID of the training action
	 * @returns True if the action can be started
	 */
	canStartStudying(actionId: string): boolean {
		return this.idleActionManager.canStartStudying(actionId);
	}

	/**
	 * Gets the character EXP cost to start a training action
	 * @param actionId - ID of the training action
	 * @returns Character EXP cost
	 */
	getTrainingCost(actionId: string): number {
		return this.idleActionManager.getStudyingCost(actionId);
	}

	/**
	 * Checks if any active stat training is blocked (stuck at 100% progress)
	 * Used for navbar notification
	 * @returns True if training is stuck/blocked
	 */
	hasBlockedStudying(): boolean {
		// Find any active stat training
		const activeTraining = Object.values(this.studyingActions).find(
			(action) => action.isActive && action.trainsStat
		);

		if (!activeTraining || !activeTraining.trainsStat) {
			return false; // No active stat training
		}

		// Only show warning if stuck at completion (progress >= 99%)
		if (activeTraining.progress < 0.99) {
			return false; // Still actively running
		}

		const stat = activeTraining.trainsStat;
		const statLevel = this.stats[stat];
		const maxLevel = this.getMaxStatLevel(stat);
		const atCap = statLevel >= maxLevel;
		const cost = this.getStatStudyingCost(stat);
		const canAfford = this.exp >= cost;

		// Blocked if at cap OR can't afford to restart
		return atCap || !canAfford;
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

		// Show "click me" until the header bar appears
		if (this.lifetimeExp < HEADER_UNLOCK_THRESHOLD) {
			return 'click me';
		}

		// Show the EXP amount (whole number)
		const expAmount = Math.floor(this.clickMultiplier);
		return `+${expAmount} EXP`;
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
	migrateStudyingActions(savedActions: { [key: string]: IdleAction }): void {
		this.idleActionManager.migrateStudyingActions(savedActions);
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
	 * @param actionMap - The action map ('studying' or 'meditation')
	 * @param actionId - ID of the action to start
	 * @returns True if action started successfully
	 */
	startIdleAction(actionMap: 'studying' | 'meditation', actionId: string): boolean {
		// For stat training, check and deduct character EXP cost upfront (v0.1.5+)
		if (actionMap === 'studying') {
			const trainingCost = this.idleActionManager.getStudyingCost(actionId);
			if (trainingCost > 0) {
				// Check if we can afford the training
				if (this.exp < trainingCost) {
					return false; // Cannot afford training
				}

				// Attempt to start the action
				const started = this.idleActionManager.startIdleAction(actionMap, actionId);
				if (started) {
					// Deduct the character EXP cost
					this.exp -= trainingCost;
					return true;
				}
				return false;
			}
		}

		// For meditation actions or free training (ruminate), no cost
		return this.idleActionManager.startIdleAction(actionMap, actionId);
	}

	/**
	 * Updates progress for all active idle actions
	 * Should be called regularly (e.g., from game loop)
	 */
	updateIdleActions(): void {
		const results = this.idleActionManager.updateIdleActions();

		let anyStatLeveledUp = false;

		// Apply completion results
		for (const result of results) {
			// Add EXP gained (mainly from ruminate)
			if (result.expGained > 0) {
				this.addExp(result.expGained);
			}

			// Deduct character EXP cost for training restart (v0.1.5+)
			if (result.expCost !== undefined && result.expCost > 0) {
				this.exp -= result.expCost;
			}

			// Note: stat gains are now handled internally by StatsManager.addStatExp()
			// called directly from the IdleActionManager during training completion

			// Track if any stats leveled up to recalculate multipliers
			if (result.statGained) {
				anyStatLeveledUp = true;
			}

			// Apply unlocks
			if (result.unlocks?.adventureMode) {
				this.adventureModeUnlocked = true;
			}
		}

		// Recalculate click multiplier if any stats leveled up (stats affect click power)
		if (anyStatLeveledUp) {
			this.recalculateClickMultiplier();

			// Check for story entries that may have unlocked (e.g., first stat level)
			this.storyManager.checkForNewUnlocks();
		}
	}

	/**
	 * Stops an active idle action without completion
	 * @param actionMap - The action map ('studying' or 'meditation')
	 * @param actionId - ID of the action to stop
	 */
	stopIdleAction(actionMap: 'studying' | 'meditation', actionId: string): void {
		this.idleActionManager.stopIdleAction(actionMap, actionId);
	}

	/** Progression Unlock Conditions */

	/**
	 * Determines if Training page should be accessible
	 * @returns True if player is Level 2+ (for ruminate and stat training)
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
	 * Hidden in production until meditation features are fully implemented
	 * @returns True if all stats are at least 5 and not in production mode
	 */
	showMeditation(): boolean {
		// Hide meditation page in production builds
		if (import.meta.env.PROD) {
			return false;
		}
		return this.statsManager.areAllPhysicalStatsAtLevel(5);
	}

	/**
	 * Determines if Adventure page should be accessible
	 * Requires: Level 4+
	 * @returns True if player meets requirements to see the adventure page
	 */
	showAdventure(): boolean {
		return this.level >= 4;
	}

	/**
	 * Unlocks Adventure Mode when stat requirements are met
	 * Requires all four stats (Strength, Agility, Willpower, Endurance) at level 5+
	 * @returns True if unlock succeeded, false if requirements not met
	 */
	unlockAdventureMode(): boolean {
		// Check if all stats are level 5 or higher
		const meetsRequirements =
			this.stats.strength >= 5 &&
			this.stats.agility >= 5 &&
			this.stats.willpower >= 5 &&
			this.stats.endurance >= 5;

		if (!meetsRequirements) return false;

		// Actually unlock adventure mode
		this.adventureModeUnlocked = true;

		// Check for story entries that may have unlocked
		this.storyManager.checkForNewUnlocks();

		return true;
	}

	/**
	 * Adds experience points to both current and lifetime totals
	 * @param amount - Amount of EXP to add
	 */
	addExp(amount: number): void {
		this.exp += amount;
		this.lifetimeExp += amount;

		// Check for story entries that may have unlocked
		this.storyManager.checkForNewUnlocks();
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

		// Check for story entries that may have unlocked
		this.storyManager.checkForNewUnlocks();

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

			// Check for story entries that may have unlocked (e.g., discipline)
			this.storyManager.checkForNewUnlocks();

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
	 * Determines if Upgrades page should be accessible
	 * Unlock threshold: UPGRADES_UNLOCK_THRESHOLD lifetime EXP
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
			studyingCritChance: this.studyingCritChance,
			upgrades: this.upgradeManager.getUpgrades(),
			stats: this.stats,
			studyingActions: this.idleActionManager.getStudyingActions(),
			meditationActions: this.idleActionManager.getMeditationActions(),
			idleExpRate: this.idleExpRate,
			adventureModeUnlocked: this.adventureModeUnlocked,
			adventureUnlockAttempted: this.adventureUnlockAttempted,
			meditationUnlocked: this.meditationUnlocked,
			nameChangeUnlocked: this.nameChangeUnlocked,
			nameChanged: this.nameChanged,
			story: this.storyManager.serialize()
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
		this.studyingCritChance = state.studyingCritChance || 0.0;

		// Load stats into StatsManager with migration for v0.1.5+ stat EXP system
		const loadedStats = state.stats || { strength: 0, dexterity: 0, intelligence: 0, wisdom: 0 };

		// Migrate old saves: map old stat names to new names, add stat EXP fields if missing
		const migratedStats: Stats = {
			// Physical stats (map old names to new names for backwards compatibility)
			strength: loadedStats.strength ?? 0,
			agility: (loadedStats as any).agility ?? (loadedStats as any).dexterity ?? 0,
			willpower: (loadedStats as any).willpower ?? (loadedStats as any).intelligence ?? 0,
			endurance: (loadedStats as any).endurance ?? (loadedStats as any).wisdom ?? 0,
			// Magic stats (will be unlocked later)
			intelligence: (loadedStats as any).intelligence ?? 0,
			wisdom: (loadedStats as any).wisdom ?? 0,
			// Physical stat EXP (default to 0 for migrated saves)
			strengthExp: (loadedStats as any).strengthExp ?? 0,
			agilityExp: (loadedStats as any).agilityExp ?? (loadedStats as any).dexterityExp ?? 0,
			willpowerExp: (loadedStats as any).willpowerExp ?? (loadedStats as any).intelligenceExp ?? 0,
			enduranceExp: (loadedStats as any).enduranceExp ?? (loadedStats as any).wisdomExp ?? 0,
			// Magic stat EXP (default to 0)
			intelligenceExp: (loadedStats as any).intelligenceExp ?? 0,
			wisdomExp: (loadedStats as any).wisdomExp ?? 0
		};

		this.statsManager.setStats(migratedStats);

		// Migrate upgrades: preserve levels but update definitions
		this.migrateUpgrades(state.upgrades);

		// Migrate training and meditation actions
		if (state.studyingActions) {
			this.migrateStudyingActions(state.studyingActions);
		}
		if (state.meditationActions) {
			this.migrateMeditationActions(state.meditationActions);
		}

		this.idleExpRate = state.idleExpRate || 0;
		this.adventureModeUnlocked = state.adventureModeUnlocked || false;
		this.adventureUnlockAttempted = state.adventureUnlockAttempted || false;
		this.meditationUnlocked = state.meditationUnlocked || false;

		// Load name change state
		this.nameChangeUnlocked = state.nameChangeUnlocked || false;
		this.nameChanged = state.nameChanged || false;

		// Load story state if present (optional for backward compatibility)
		if (state.story) {
			this.storyManager.loadState(state.story);
		}

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
		this.studyingCritChance = 0.0;
		this.idleExpRate = 0;
		this.adventureModeUnlocked = false;
		this.adventureUnlockAttempted = false;
		this.meditationUnlocked = false;
		this.nameChangeUnlocked = false;
		this.nameChanged = false;

		// Reinitialize managers
		this.statsManager = new StatsManager(undefined, {
			getCharacterLevel: () => this.level
		});

		this.upgradeManager = new UpgradeManager({
			getCurrentExp: () => this.exp
		});

		this.idleActionManager = new IdleActionManager({
			getStudyingSpeedMultiplier: () => this.getStudyingSpeedMultiplier(),
			getStudyingCostMultiplier: () => this.getStudyingCostMultiplier(),
			getRuminateExpBonus: () => this.getRuminateExpBonus(),
			getDisciplineMultiplier: () => this.getDisciplineMultiplier(),
			getCurrentLevel: () => this.level,
			getGlobalIdleSpeedMultiplier: () => this.getGlobalIdleSpeedMultiplier(),
			getRuminateSpeedMultiplier: () => this.getRuminateSpeedMultiplier(),
			getStatLevelCost: (stat) => this.getStatLevelCost(stat),
			getStatStudyingCost: (stat) => this.statsManager.getStatStudyingCost(stat),
			addStatExp: (stat, amount) => this.statsManager.addStatExp(stat, amount),
			getCritChance: () => this.critChance,
			getCurrentExp: () => this.exp,
			getRuminateMultiplierPercent: () => this.getRuminateMultiplierPercent(),
			getRuminateCritChance: () => this.getRuminateCritChance(),
			getRuminateCritDamage: () => this.getRuminateCritDamage(),
			getStatGainBonus: () => this.getStatGainBonus(),
			getStatGainMultiplierPercent: () => this.getStatGainMultiplierPercent(),
			getStudyingCritChance: () => this.getStudyingCritChance(),
			getStudyingCritDamage: () => this.getStudyingCritDamage(),
			getMaxStatLevel: (stat) => this.getMaxStatLevel(stat),
			getCurrentStatLevel: (stat) => this.stats[stat]
		});

		this.saveManager = new SaveManager({
			getGameState: () => this.toGameState(),
			loadGameState: (state) => this.loadFromGameState(state)
		});

		this.storyManager = new StoryManager(
			{
				getCurrentExp: () => this.exp,
				getLifetimeExp: () => this.lifetimeExp,
				getCurrentLevel: () => this.level,
				getStats: () => this.stats,
				getUpgrades: () => this.upgrades,
				getPlayerName: () => this.name,
				areAllStatsUnlocked: () => this.areAllStatsUnlocked(),
				isAdventureModeUnlocked: () => this.adventureModeUnlocked,
				isAdventureUnlockAttempted: () => this.adventureUnlockAttempted
			},
			loadStoryEntries() // Reload fresh story entries
		);

		this.recalculateClickMultiplier();
	}
}
