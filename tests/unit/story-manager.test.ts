/**
 * Unit tests for StoryManager
 *
 * Tests story progression, trigger evaluation, and save/load functionality
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
	StoryManager,
	type StoryEntry,
	type StoryManagerDependencies
} from '$lib/managers/story-manager';
import type { Stats } from '$lib/game';

describe('StoryManager', () => {
	// Test fixtures
	let deps: StoryManagerDependencies;
	let testEntries: StoryEntry[];

	beforeEach(() => {
		// Create mock dependencies
		deps = {
			getCurrentExp: () => 0,
			getLifetimeExp: () => 0,
			getCurrentLevel: () => 1,
			getStats: () => ({
				strength: 0,
				agility: 0,
				willpower: 0,
				endurance: 0,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			}),
			getUpgrades: () => ({}),
			getPlayerName: () => 'A Stranger',
			areAllStatsUnlocked: () => false,
			isAdventureModeUnlocked: () => false
		};

		// Create test story entries
		testEntries = [
			{
				id: 'test-lifetimeExp',
				chapter: 1,
				title: 'Awakening',
				text: 'You wake up...',
				trigger: { type: 'lifetimeExp', threshold: 50 },
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-level',
				chapter: 1,
				title: 'Awakening',
				text: 'You reach level 2...',
				trigger: { type: 'level', threshold: 2 },
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-upgrade',
				chapter: 1,
				title: 'Awakening',
				text: 'You learn discipline...',
				trigger: { type: 'upgradeOwned', upgradeId: 'discipline' },
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-stat',
				chapter: 1,
				title: 'Awakening',
				text: 'You grow stronger...',
				trigger: { type: 'statLevel', stat: 'strength', level: 5 },
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-anystat',
				chapter: 1,
				title: 'Awakening',
				text: 'Your first stat...',
				trigger: { type: 'anyStatLevel', level: 1 },
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-allstats',
				chapter: 1,
				title: 'Awakening',
				text: 'All stats trained...',
				trigger: { type: 'allStatsLevel', level: 5 },
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-adventure',
				chapter: 2,
				title: 'Adventure',
				text: 'Adventure unlocked...',
				trigger: { type: 'adventureUnlocked' },
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-name',
				chapter: 1,
				title: 'Awakening',
				text: 'You define yourself...',
				trigger: { type: 'nameSet' },
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-composite-all',
				chapter: 2,
				title: 'Adventure',
				text: 'Multiple conditions met...',
				trigger: {
					type: 'all',
					conditions: [
						{ type: 'level', threshold: 3 },
						{ type: 'anyStatLevel', level: 1 }
					]
				},
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-composite-any',
				chapter: 2,
				title: 'Adventure',
				text: 'Any condition met...',
				trigger: {
					type: 'any',
					conditions: [
						{ type: 'level', threshold: 10 },
						{ type: 'lifetimeExp', threshold: 100 }
					]
				},
				unlocked: false,
				acknowledged: false
			},
			{
				id: 'test-manual',
				chapter: 3,
				title: 'Discovery',
				text: 'A special event...',
				trigger: { type: 'manual', eventId: 'special-event' },
				unlocked: false,
				acknowledged: false
			}
		];
	});

	describe('Initialization', () => {
		it('should initialize with empty entries if none provided', () => {
			const manager = new StoryManager(deps);
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);
			expect(result.totalUnread).toBe(0);
		});

		it('should initialize with provided entries', () => {
			const manager = new StoryManager(deps, testEntries);
			const chapters = manager.getUnlockedChapters();
			expect(chapters).toHaveLength(0); // No unlocked chapters initially
		});
	});

	describe('Trigger Evaluation - Simple Thresholds', () => {
		it('should unlock entry when lifetimeExp threshold is met', () => {
			const manager = new StoryManager(deps, [testEntries[0]]);

			// Before threshold
			let result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);

			// Meet threshold
			deps.getLifetimeExp = () => 50;
			result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-lifetimeExp');
			expect(result.totalUnread).toBe(1);

			// Check again - queue persists until acknowledged (NEW behavior)
			result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1); // Entry still in queue
			expect(result.totalUnread).toBe(1); // Still unread

			// Acknowledge the entry to clear it from queue
			manager.acknowledge('test-lifetimeExp');

			// Now queue should be empty
			result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);
			expect(result.totalUnread).toBe(0); // Now read
		});

		it('should unlock entry when level threshold is met', () => {
			const manager = new StoryManager(deps, [testEntries[1]]);

			deps.getCurrentLevel = () => 2;
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-level');
		});

		it('should unlock entry when exp threshold is met', () => {
			const entry: StoryEntry = {
				id: 'test-exp',
				chapter: 1,
				text: 'EXP test',
				trigger: { type: 'exp', threshold: 1000 },
				unlocked: false,
				acknowledged: false
			};
			const manager = new StoryManager(deps, [entry]);

			deps.getCurrentExp = () => 1000;
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
		});
	});

	describe('Trigger Evaluation - Upgrade Conditions', () => {
		it('should unlock when upgrade is owned', () => {
			const manager = new StoryManager(deps, [testEntries[2]]);

			deps.getUpgrades = () => ({
				discipline: { id: 'discipline', currentLevel: 1 }
			});
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-upgrade');
		});

		it('should not unlock when upgrade level is 0', () => {
			const manager = new StoryManager(deps, [testEntries[2]]);

			deps.getUpgrades = () => ({
				discipline: { id: 'discipline', currentLevel: 0 }
			});
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);
		});

		it('should unlock when upgrade reaches specific level', () => {
			const entry: StoryEntry = {
				id: 'test-upgrade-level',
				chapter: 1,
				text: 'Upgrade level test',
				trigger: { type: 'upgradeLevel', upgradeId: 'discipline', level: 3 },
				unlocked: false,
				acknowledged: false
			};
			const manager = new StoryManager(deps, [entry]);

			deps.getUpgrades = () => ({
				discipline: { id: 'discipline', currentLevel: 3 }
			});
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
		});
	});

	describe('Trigger Evaluation - Stat Conditions', () => {
		it('should unlock when specific stat reaches level', () => {
			const manager = new StoryManager(deps, [testEntries[3]]);

			deps.getStats = () => ({
				strength: 5,
				agility: 0,
				willpower: 0,
				endurance: 0,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			});
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-stat');
		});

		it('should unlock when any stat reaches level', () => {
			const manager = new StoryManager(deps, [testEntries[4]]);

			deps.getStats = () => ({
				strength: 0,
				agility: 1,
				willpower: 0,
				endurance: 0,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			});
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-anystat');
		});

		it('should unlock when all stats reach level', () => {
			const manager = new StoryManager(deps, [testEntries[5]]);

			deps.getStats = () => ({
				strength: 5,
				agility: 5,
				willpower: 5,
				endurance: 5,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			});
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-allstats');
		});

		it('should not unlock all stats if one is missing', () => {
			const manager = new StoryManager(deps, [testEntries[5]]);

			deps.getStats = () => ({
				strength: 5,
				agility: 5,
				willpower: 5,
				endurance: 4, // One short
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			});
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);
		});

		it('should unlock when total stats reach threshold', () => {
			const entry: StoryEntry = {
				id: 'test-totalstats',
				chapter: 1,
				text: 'Total stats test',
				trigger: { type: 'totalStats', total: 20 },
				unlocked: false,
				acknowledged: false
			};
			const manager = new StoryManager(deps, [entry]);

			deps.getStats = () => ({
				strength: 5,
				agility: 5,
				willpower: 5,
				endurance: 5,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			});
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
		});
	});

	describe('Trigger Evaluation - Feature Unlocks', () => {
		it('should unlock when adventure mode is unlocked', () => {
			const manager = new StoryManager(deps, [testEntries[6]]);

			deps.isAdventureModeUnlocked = () => true;
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-adventure');
		});

		it('should unlock when name is set', () => {
			const manager = new StoryManager(deps, [testEntries[7]]);

			deps.getPlayerName = () => 'Hero';
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-name');
		});

		it('should not unlock if name is still "A Stranger"', () => {
			const manager = new StoryManager(deps, [testEntries[7]]);

			deps.getPlayerName = () => 'A Stranger';
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);
		});
	});

	describe('Trigger Evaluation - Composite Conditions', () => {
		it('should unlock when all conditions in "all" trigger are met', () => {
			const manager = new StoryManager(deps, [testEntries[8]]);

			deps.getCurrentLevel = () => 3;
			deps.getStats = () => ({
				strength: 1,
				agility: 0,
				willpower: 0,
				endurance: 0,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			});
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-composite-all');
		});

		it('should not unlock "all" trigger if one condition fails', () => {
			const manager = new StoryManager(deps, [testEntries[8]]);

			deps.getCurrentLevel = () => 3;
			// No stats unlocked - anyStatLevel: 1 fails
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);
		});

		it('should unlock when any condition in "any" trigger is met', () => {
			const manager = new StoryManager(deps, [testEntries[9]]);

			deps.getLifetimeExp = () => 100; // Second condition met
			// Level is still 1 (first condition not met)
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
			expect(result.newlyUnlocked[0].id).toBe('test-composite-any');
		});

		it('should not unlock "any" trigger if no conditions are met', () => {
			const manager = new StoryManager(deps, [testEntries[9]]);

			deps.getCurrentLevel = () => 1;
			deps.getLifetimeExp = () => 50;
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);
		});
	});

	describe('Trigger Evaluation - Manual Unlocks', () => {
		it('should never auto-unlock manual triggers', () => {
			const manager = new StoryManager(deps, [testEntries[10]]);

			// Even if all other conditions are perfect
			deps.getCurrentLevel = () => 99;
			deps.getLifetimeExp = () => 999999;
			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);
		});
	});

	describe('Entry Acknowledgement', () => {
		it('should acknowledge an entry and reduce unread count', () => {
			const manager = new StoryManager(deps, [testEntries[0]]);

			// Unlock entry
			deps.getLifetimeExp = () => 50;
			manager.checkForNewUnlocks();

			// Acknowledge it
			const result = manager.acknowledge('test-lifetimeExp');
			expect(result.success).toBe(true);
			expect(result.remainingUnread).toBe(0);

			// Check unread count
			const unreadCount = manager.getUnreadCount();
			expect(unreadCount).toBe(0);
		});

		it('should return failure for non-existent entry', () => {
			const manager = new StoryManager(deps, testEntries);

			const result = manager.acknowledge('nonexistent-id');
			expect(result.success).toBe(false);
		});

		it('should track multiple unread entries', () => {
			const manager = new StoryManager(deps, [testEntries[0], testEntries[1]]);

			// Unlock both
			deps.getLifetimeExp = () => 50;
			deps.getCurrentLevel = () => 2;
			manager.checkForNewUnlocks();

			const unreadCount = manager.getUnreadCount();
			expect(unreadCount).toBe(2);

			// Acknowledge one
			manager.acknowledge('test-lifetimeExp');
			expect(manager.getUnreadCount()).toBe(1);

			// Acknowledge the other
			manager.acknowledge('test-level');
			expect(manager.getUnreadCount()).toBe(0);
		});
	});

	describe('Chapter Navigation', () => {
		it('should return entries for a specific chapter', () => {
			const manager = new StoryManager(deps, testEntries);

			const chapter1Entries = manager.getChapterEntries(1);
			expect(chapter1Entries.length).toBeGreaterThan(0);
			expect(chapter1Entries.every((e) => e.chapter === 1)).toBe(true);

			const chapter2Entries = manager.getChapterEntries(2);
			expect(chapter2Entries.length).toBeGreaterThan(0);
			expect(chapter2Entries.every((e) => e.chapter === 2)).toBe(true);
		});

		it('should return unlocked chapters in sorted order', () => {
			const manager = new StoryManager(deps, testEntries);

			// Unlock some entries
			deps.getLifetimeExp = () => 50; // Chapter 1
			deps.isAdventureModeUnlocked = () => true; // Chapter 2
			manager.checkForNewUnlocks();

			const chapters = manager.getUnlockedChapters();
			expect(chapters).toEqual([1, 2]);
		});

		it('should return empty array for chapters with no unlocked entries', () => {
			const manager = new StoryManager(deps, testEntries);

			const chapters = manager.getUnlockedChapters();
			expect(chapters).toEqual([]);
		});
	});

	describe('Entry Retrieval', () => {
		it('should get specific entry by ID', () => {
			const manager = new StoryManager(deps, testEntries);

			const entry = manager.getEntry('test-lifetimeExp');
			expect(entry).toBeDefined();
			expect(entry?.id).toBe('test-lifetimeExp');
		});

		it('should return undefined for non-existent entry', () => {
			const manager = new StoryManager(deps, testEntries);

			const entry = manager.getEntry('nonexistent');
			expect(entry).toBeUndefined();
		});
	});

	describe('Serialization and Save/Load', () => {
		it('should serialize entry states', () => {
			const manager = new StoryManager(deps, [testEntries[0]]);

			// Unlock and acknowledge entry
			deps.getLifetimeExp = () => 50;
			manager.checkForNewUnlocks();
			manager.acknowledge('test-lifetimeExp');

			const serialized = manager.serialize();
			expect(serialized.entryStates).toHaveLength(1);
			expect(serialized.entryStates[0]).toMatchObject({
				id: 'test-lifetimeExp',
				unlocked: true,
				acknowledged: true
			});
			expect(serialized.entryStates[0].timestamp).toBeDefined();
		});

		it('should load state from serialized data', () => {
			const manager = new StoryManager(deps, testEntries);

			// Load pre-saved state
			const savedState = {
				entryStates: [
					{
						id: 'test-lifetimeExp',
						unlocked: true,
						acknowledged: true,
						timestamp: Date.now()
					},
					{
						id: 'test-level',
						unlocked: true,
						acknowledged: false,
						timestamp: Date.now()
					}
				]
			};

			manager.loadState(savedState);

			// Check first entry
			const entry1 = manager.getEntry('test-lifetimeExp');
			expect(entry1?.unlocked).toBe(true);
			expect(entry1?.acknowledged).toBe(true);

			// Check second entry
			const entry2 = manager.getEntry('test-level');
			expect(entry2?.unlocked).toBe(true);
			expect(entry2?.acknowledged).toBe(false);

			// Check unread count
			expect(manager.getUnreadCount()).toBe(1);
		});

		it('should handle missing entries gracefully during load', () => {
			const manager = new StoryManager(deps, [testEntries[0]]);

			const savedState = {
				entryStates: [
					{
						id: 'test-lifetimeExp',
						unlocked: true,
						acknowledged: true,
						timestamp: Date.now()
					},
					{
						id: 'nonexistent-entry',
						unlocked: true,
						acknowledged: false,
						timestamp: Date.now()
					}
				]
			};

			// Should not throw error
			expect(() => manager.loadState(savedState)).not.toThrow();

			// First entry should load
			const entry = manager.getEntry('test-lifetimeExp');
			expect(entry?.unlocked).toBe(true);
		});

		it('should preserve timestamps through save/load cycle', () => {
			const manager = new StoryManager(deps, [testEntries[0]]);

			// Unlock entry
			deps.getLifetimeExp = () => 50;
			manager.checkForNewUnlocks();

			// Get the entry and its timestamp
			const entry = manager.getEntry('test-lifetimeExp');
			const originalTimestamp = entry?.timestamp;
			expect(originalTimestamp).toBeDefined();

			// Serialize and deserialize
			const serialized = manager.serialize();
			const manager2 = new StoryManager(deps, [testEntries[0]]);
			manager2.loadState(serialized);

			// Check timestamp preserved
			const loadedEntry = manager2.getEntry('test-lifetimeExp');
			expect(loadedEntry?.timestamp).toBe(originalTimestamp);
		});
	});

	describe('Multiple Unlocks at Once', () => {
		it('should unlock multiple entries in one check', () => {
			const manager = new StoryManager(deps, [
				testEntries[0], // lifetimeExp: 50
				testEntries[1], // level: 2
				testEntries[4] // anyStatLevel: 1
			]);

			// Meet all conditions at once
			deps.getLifetimeExp = () => 50;
			deps.getCurrentLevel = () => 2;
			deps.getStats = () => ({
				strength: 1,
				agility: 0,
				willpower: 0,
				endurance: 0,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			});

			const result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(3);
			expect(result.totalUnread).toBe(3);
		});
	});

	describe('Edge Cases', () => {
		it('should handle empty dependencies gracefully', () => {
			const minimalDeps: StoryManagerDependencies = {
				getCurrentExp: () => 0,
				getLifetimeExp: () => 0,
				getCurrentLevel: () => 1,
				getStats: () => ({
					strength: 0,
					agility: 0,
					willpower: 0,
					endurance: 0,
					intelligence: 0,
					wisdom: 0,
					strengthExp: 0,
					agilityExp: 0,
					willpowerExp: 0,
					enduranceExp: 0,
					intelligenceExp: 0,
					wisdomExp: 0
				}),
				getUpgrades: () => ({}),
				getPlayerName: () => '',
				areAllStatsUnlocked: () => false,
				isAdventureModeUnlocked: () => false
			};

			const manager = new StoryManager(minimalDeps, testEntries);
			expect(() => manager.checkForNewUnlocks()).not.toThrow();
		});

		it('should handle level operator "eq" correctly', () => {
			const entry: StoryEntry = {
				id: 'test-level-eq',
				chapter: 1,
				text: 'Exactly level 5',
				trigger: { type: 'level', threshold: 5, operator: 'eq' },
				unlocked: false,
				acknowledged: false
			};
			const manager = new StoryManager(deps, [entry]);

			// Level 4 - should not unlock
			deps.getCurrentLevel = () => 4;
			let result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(0);

			// Level 5 - should unlock
			deps.getCurrentLevel = () => 5;
			result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
		});

		it('should handle level operator "gte" (default)', () => {
			const entry: StoryEntry = {
				id: 'test-level-gte',
				chapter: 1,
				text: 'Level 3 or higher',
				trigger: { type: 'level', threshold: 3 },
				unlocked: false,
				acknowledged: false
			};
			const manager = new StoryManager(deps, [entry]);

			// Level 3 - should unlock
			deps.getCurrentLevel = () => 3;
			let result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);

			// Reset
			entry.unlocked = false;

			// Level 5 - should also unlock
			deps.getCurrentLevel = () => 5;
			result = manager.checkForNewUnlocks();
			expect(result.newlyUnlocked).toHaveLength(1);
		});
	});
});
