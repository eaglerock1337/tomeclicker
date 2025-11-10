/**
 * Story Manager
 *
 * Manages story progression, entry unlocking, and journal state.
 * Follows manager pattern with dependency injection used throughout codebase.
 *
 * @see design/sessions/story-journal-system.md for complete design documentation
 */

import type { Stats } from '$lib/game';

/**
 * Represents a single story entry (blurb)
 */
export interface StoryEntry {
	id: string; // Unique identifier (e.g., "ch1-awakening")
	chapter: number; // Chapter number (1-4 for main story, 5+ for tome notes)
	title?: string; // Optional entry title (usually chapter title)
	text: string; // The story blurb content
	trigger: TriggerCondition; // What unlocks this entry
	unlocked: boolean; // Whether player has met unlock criteria
	acknowledged: boolean; // Whether player has read the modal popup
	timestamp?: number; // When it was unlocked (for save versioning)
}

/**
 * Comprehensive trigger condition types supporting all story progression patterns
 * Designed for extensibility - add new types without breaking existing code
 */
export type TriggerCondition =
	// Threshold-based (simple comparisons)
	| { type: 'exp'; threshold: number }
	| { type: 'lifetimeExp'; threshold: number }
	| { type: 'level'; threshold: number; operator?: 'gte' | 'eq' }

	// Upgrade-based
	| { type: 'upgradeOwned'; upgradeId: string }
	| { type: 'upgradeLevel'; upgradeId: string; level: number }

	// Stat-based
	| { type: 'statLevel'; stat: keyof Stats; level: number }
	| { type: 'allStatsLevel'; level: number } // All stats >= level
	| { type: 'anyStatLevel'; level: number } // Any stat >= level
	| { type: 'totalStats'; total: number } // Sum of all stats

	// UI/Feature unlocks
	| { type: 'adventureUnlocked' }
	| { type: 'questingUnlocked' }
	| { type: 'tomesUnlocked' }
	| { type: 'nameSet' } // Player has set their name

	// Story sequencing
	| { type: 'storyUnlocked'; entryId: string } // Another story entry has been unlocked

	// Adventure system (future)
	| { type: 'adventureCompleted'; count: number } // Completed nth adventure
	| { type: 'chestOpened'; count: number } // Opened nth chest
	| { type: 'itemDuplicate'; count: number } // Found nth duplicate
	| { type: 'gearMaxed' } // All gear slots maxed

	// Prestige/Retreat system (future)
	| { type: 'maxLevelReached'; level: number } // Hit max level for first time
	| { type: 'retreatAvailable' } // Can perform retreat
	| { type: 'retreatCompleted'; count: number } // Completed nth retreat
	| { type: 'previousMaxReached' } // Reached previous max level again

	// Quest system (future)
	| { type: 'questCompleted'; count: number; questLevel?: number }

	// Tome system (future)
	| { type: 'tomeChapter'; tomeId: string; chapter: number }
	| { type: 'tomeCompleted'; tomeId: string }

	// Composite conditions (for complex triggers)
	| { type: 'all'; conditions: TriggerCondition[] } // AND logic
	| { type: 'any'; conditions: TriggerCondition[] } // OR logic

	// Manual/testing
	| { type: 'manual'; eventId?: string }; // Only unlock via explicit call

/**
 * Result of checking for newly unlocked entries
 */
export interface StoryCheckResult {
	newlyUnlocked: StoryEntry[]; // Entries that just unlocked this check
	totalUnread: number; // Count of unlocked but unacknowledged entries
}

/**
 * Result of acknowledging a story entry
 */
export interface AcknowledgeResult {
	success: boolean;
	entryId: string;
	remainingUnread: number;
}

/**
 * Dependencies required by StoryManager (dependency injection pattern)
 */
export interface StoryManagerDependencies {
	// Current game state accessors
	getCurrentExp: () => number;
	getLifetimeExp: () => number;
	getCurrentLevel: () => number;
	getStats: () => Stats;
	getUpgrades: () => { [key: string]: any };
	getPlayerName: () => string;

	// Feature unlock checks
	areAllStatsUnlocked: () => boolean;
	isAdventureModeUnlocked: () => boolean;

	// Future dependencies (optional - gracefully degrade if not provided)
	getAdventureCount?: () => number;
	getChestCount?: () => number;
	getDuplicateCount?: () => number;
	isGearMaxed?: () => boolean;

	getRetreatCount?: () => number;
	canRetreat?: () => boolean;
	getPreviousMaxLevel?: () => number;

	getQuestCount?: () => number;
	isQuestingUnlocked?: () => boolean;

	getTomeProgress?: (tomeId: string) => number;
	isTomeCompleted?: (tomeId: string) => boolean;
	areTomesUnlocked?: () => boolean;
}

/**
 * Manages story progression, unlocking, and journal state
 * Follows manager pattern with dependency injection
 */
export class StoryManager {
	private entries: Map<string, StoryEntry>;
	private unlockedQueue: StoryEntry[] = []; // Queue of newly unlocked entries waiting to be shown

	constructor(
		private deps: StoryManagerDependencies,
		initialEntries?: StoryEntry[]
	) {
		this.entries = new Map();

		// Initialize with provided entries (loaded from YAML)
		if (initialEntries) {
			for (const entry of initialEntries) {
				this.entries.set(entry.id, entry);
			}
		}
	}

	/**
	 * Check for newly unlocked story entries based on current game state
	 * Call this from Game.tick() or after major state changes
	 *
	 * NOTE: This method adds unlocked entries to a persistent queue but does NOT clear it.
	 * The queue persists until entries are shown to the player and acknowledged.
	 * This allows multiple calls to checkForNewUnlocks() without losing entries.
	 */
	checkForNewUnlocks(): StoryCheckResult {
		const newlyUnlocked: StoryEntry[] = [];

		for (const entry of this.entries.values()) {
			if (!entry.unlocked) {
				const shouldUnlock = this.evaluateTrigger(entry.trigger);

				if (shouldUnlock) {
					entry.unlocked = true;
					entry.timestamp = Date.now();
					newlyUnlocked.push(entry);
					// Add to queue only if not already in queue
					if (!this.unlockedQueue.find((e) => e.id === entry.id)) {
						this.unlockedQueue.push(entry);
					}
				}
			}
		}

		const totalUnread = Array.from(this.entries.values()).filter(
			(e) => e.unlocked && !e.acknowledged
		).length;

		// Return queue WITHOUT clearing it
		// Queue will be managed by consumeQueuedEntry() when UI acknowledges entries
		return { newlyUnlocked: [...this.unlockedQueue], totalUnread };
	}

	/**
	 * Dismiss a modal (remove from queue) without acknowledging
	 * Entry stays unread in journal until viewed there
	 */
	dismissModal(entryId: string): boolean {
		const queueIndex = this.unlockedQueue.findIndex((e) => e.id === entryId);
		if (queueIndex !== -1) {
			this.unlockedQueue.splice(queueIndex, 1);
			return true;
		}
		return false;
	}

	/**
	 * Mark a story entry as acknowledged (player read it in journal)
	 * Does NOT remove from queue (dismissModal handles that)
	 */
	acknowledge(entryId: string): AcknowledgeResult {
		const entry = this.entries.get(entryId);
		if (!entry) {
			return { success: false, entryId, remainingUnread: 0 };
		}

		entry.acknowledged = true;

		const remainingUnread = Array.from(this.entries.values()).filter(
			(e) => e.unlocked && !e.acknowledged
		).length;

		return { success: true, entryId, remainingUnread };
	}

	/**
	 * Get all entries for a specific chapter
	 */
	getChapterEntries(chapter: number): StoryEntry[] {
		return Array.from(this.entries.values())
			.filter((e) => e.chapter === chapter)
			.sort((a, b) => a.id.localeCompare(b.id));
	}

	/**
	 * Get all unlocked chapters (for navigation)
	 */
	getUnlockedChapters(): number[] {
		const chapters = new Set<number>();
		for (const entry of this.entries.values()) {
			if (entry.unlocked) {
				chapters.add(entry.chapter);
			}
		}
		return Array.from(chapters).sort((a, b) => a - b);
	}

	/**
	 * Get count of unread entries
	 */
	getUnreadCount(): number {
		return Array.from(this.entries.values()).filter((e) => e.unlocked && !e.acknowledged).length;
	}

	/**
	 * Get a specific entry by ID
	 */
	getEntry(entryId: string): StoryEntry | undefined {
		return this.entries.get(entryId);
	}

	/**
	 * Serialize for save/load
	 */
	serialize(): {
		entryStates: Array<{
			id: string;
			unlocked: boolean;
			acknowledged: boolean;
			timestamp?: number;
		}>;
	} {
		return {
			entryStates: Array.from(this.entries.values()).map((e) => ({
				id: e.id,
				unlocked: e.unlocked,
				acknowledged: e.acknowledged,
				timestamp: e.timestamp
			}))
		};
	}

	/**
	 * Deserialize from save data
	 */
	loadState(data: {
		entryStates: Array<{
			id: string;
			unlocked: boolean;
			acknowledged: boolean;
			timestamp?: number;
		}>;
	}): void {
		for (const state of data.entryStates) {
			const entry = this.entries.get(state.id);
			if (entry) {
				entry.unlocked = state.unlocked;
				entry.acknowledged = state.acknowledged;
				entry.timestamp = state.timestamp;
			}
		}
	}

	// Private helper methods

	/**
	 * Evaluate whether a trigger condition is met
	 * Uses optional chaining for future dependencies to gracefully degrade
	 */
	private evaluateTrigger(trigger: TriggerCondition): boolean {
		switch (trigger.type) {
			// Simple thresholds
			case 'exp':
				return this.deps.getCurrentExp() >= trigger.threshold;
			case 'lifetimeExp':
				return this.deps.getLifetimeExp() >= trigger.threshold;
			case 'level': {
				const level = this.deps.getCurrentLevel();
				if (trigger.operator === 'eq') return level === trigger.threshold;
				return level >= trigger.threshold; // default: gte
			}

			// Upgrades
			case 'upgradeOwned': {
				const upgrade = this.deps.getUpgrades()[trigger.upgradeId];
				return upgrade && upgrade.currentLevel > 0;
			}
			case 'upgradeLevel': {
				const upgrade = this.deps.getUpgrades()[trigger.upgradeId];
				return upgrade && upgrade.currentLevel >= trigger.level;
			}

			// Stats
			case 'statLevel': {
				const stats = this.deps.getStats();
				return stats[trigger.stat] >= trigger.level;
			}
			case 'allStatsLevel': {
				const stats = this.deps.getStats();
				const physicalStats: (keyof Stats)[] = ['strength', 'agility', 'willpower', 'endurance'];
				return physicalStats.every((stat) => stats[stat] >= trigger.level);
			}
			case 'anyStatLevel': {
				const stats = this.deps.getStats();
				const physicalStats: (keyof Stats)[] = ['strength', 'agility', 'willpower', 'endurance'];
				return physicalStats.some((stat) => stats[stat] >= trigger.level);
			}
			case 'totalStats': {
				const stats = this.deps.getStats();
				const total = stats.strength + stats.agility + stats.willpower + stats.endurance;
				return total >= trigger.total;
			}

			// Feature unlocks
			case 'adventureUnlocked':
				return this.deps.isAdventureModeUnlocked();
			case 'nameSet':
				return this.deps.getPlayerName() !== '' && this.deps.getPlayerName() !== 'A Stranger';

			// Story sequencing
			case 'storyUnlocked': {
				const entry = this.entries.get(trigger.entryId);
				return entry ? entry.unlocked : false;
			}

			// Future: Adventure system (graceful degradation)
			case 'adventureCompleted':
				return (this.deps.getAdventureCount?.() ?? 0) >= trigger.count;
			case 'chestOpened':
				return (this.deps.getChestCount?.() ?? 0) >= trigger.count;
			case 'itemDuplicate':
				return (this.deps.getDuplicateCount?.() ?? 0) >= trigger.count;
			case 'gearMaxed':
				return this.deps.isGearMaxed?.() ?? false;

			// Future: Retreat/Prestige system
			case 'maxLevelReached':
				return this.deps.getCurrentLevel() >= trigger.level;
			case 'retreatAvailable':
				return this.deps.canRetreat?.() ?? false;
			case 'retreatCompleted':
				return (this.deps.getRetreatCount?.() ?? 0) >= trigger.count;
			case 'previousMaxReached': {
				const currentLevel = this.deps.getCurrentLevel();
				const previousMax = this.deps.getPreviousMaxLevel?.() ?? 0;
				return previousMax > 0 && currentLevel >= previousMax;
			}

			// Future: Quest system
			case 'questCompleted':
				return (this.deps.getQuestCount?.() ?? 0) >= trigger.count;
			case 'questingUnlocked':
				return this.deps.isQuestingUnlocked?.() ?? false;

			// Future: Tome system
			case 'tomeChapter':
				return (this.deps.getTomeProgress?.(trigger.tomeId) ?? 0) >= trigger.chapter;
			case 'tomeCompleted':
				return this.deps.isTomeCompleted?.(trigger.tomeId) ?? false;
			case 'tomesUnlocked':
				return this.deps.areTomesUnlocked?.() ?? false;

			// Composite conditions
			case 'all':
				return trigger.conditions.every((c) => this.evaluateTrigger(c));
			case 'any':
				return trigger.conditions.some((c) => this.evaluateTrigger(c));

			// Manual unlock
			case 'manual':
				return false; // Only via explicit unlockEntry() call

			default:
				return false;
		}
	}
}
