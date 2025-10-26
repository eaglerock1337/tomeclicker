import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
	IdleActionManager,
	type IdleActionDependencies,
	type IdleAction
} from '../../src/lib/managers/idle-action-manager';
import type { Stats } from '../../src/lib/game';

/**
 * Test helper builder for creating IdleActionManager with mock dependencies
 */
class IdleActionManagerBuilder {
	private deps: IdleActionDependencies = {
		getTrainingSpeedMultiplier: () => 1.0,
		getTrainingCostMultiplier: () => 1.0,
		getOsmosisExpBonus: () => 0,
		getGlobalIdleSpeedMultiplier: () => 1.0,
		getOsmosisSpeedMultiplier: () => 1.0,
		getStatLevelCost: () => 100,
		getCritChance: () => 0.0,
		getCurrentExp: () => 1000
	};

	withTrainingSpeed(multiplier: number): this {
		this.deps.getTrainingSpeedMultiplier = () => multiplier;
		return this;
	}

	withGlobalIdleSpeed(multiplier: number): this {
		this.deps.getGlobalIdleSpeedMultiplier = () => multiplier;
		return this;
	}

	withOsmosisSpeed(multiplier: number): this {
		this.deps.getOsmosisSpeedMultiplier = () => multiplier;
		return this;
	}

	withOsmosisBonus(bonus: number): this {
		this.deps.getOsmosisExpBonus = () => bonus;
		return this;
	}

	withStatCost(cost: number): this {
		this.deps.getStatLevelCost = () => cost;
		return this;
	}

	withCritChance(chance: number): this {
		this.deps.getCritChance = () => chance;
		return this;
	}

	withCurrentExp(exp: number): this {
		this.deps.getCurrentExp = () => exp;
		return this;
	}

	build(): IdleActionManager {
		return new IdleActionManager(this.deps);
	}
}

describe('IdleActionManager', () => {
	let manager: IdleActionManager;

	beforeEach(() => {
		manager = new IdleActionManagerBuilder().build();
	});

	describe('Initialization', () => {
		it('should initialize training actions with correct defaults', () => {
			const actions = manager.getTrainingActions();

			expect(actions['practice-osmosis']).toBeDefined();
			expect(actions['practice-osmosis'].name).toBe('Ruminate');
			expect(actions['practice-osmosis'].expCost).toBe(0); // Free!
			expect(actions['practice-osmosis'].isActive).toBe(false);
			expect(actions['practice-osmosis'].progress).toBe(0);

			expect(actions['train-strength']).toBeDefined();
			expect(actions['train-strength'].trainsStat).toBe('strength');
			expect(actions['train-strength'].expCost).toBe(10);

			expect(actions['train-dexterity']).toBeDefined();
			expect(actions['train-dexterity'].trainsStat).toBe('dexterity');

			expect(actions['train-intelligence']).toBeDefined();
			expect(actions['train-intelligence'].trainsStat).toBe('intelligence');

			expect(actions['train-wisdom']).toBeDefined();
			expect(actions['train-wisdom'].trainsStat).toBe('wisdom');
		});

		it('should initialize meditation actions with correct defaults', () => {
			const actions = manager.getMeditationActions();

			expect(actions['meditate-future']).toBeDefined();
			expect(actions['meditate-future'].oneTime).toBe(true);
			expect(actions['meditate-future'].completed).toBe(false);
			expect(actions['meditate-future'].expCost).toBe(50);

			expect(actions['disassociate']).toBeDefined();
			expect(actions['disassociate'].oneTime).toBe(false);
			expect(actions['disassociate'].expCost).toBe(100);
		});

		it('should allow getting individual actions', () => {
			const osmosis = manager.getTrainingAction('practice-osmosis');
			expect(osmosis).toBeDefined();
			expect(osmosis?.name).toBe('Ruminate');

			const meditation = manager.getMeditationAction('meditate-future');
			expect(meditation).toBeDefined();
			expect(meditation?.name).toBe('Meditate on Your Future');
		});

		it('should return undefined for non-existent actions', () => {
			expect(manager.getTrainingAction('nonexistent')).toBeUndefined();
			expect(manager.getMeditationAction('nonexistent')).toBeUndefined();
		});
	});

	describe('Action Lifecycle', () => {
		it('should start an action and set it as active', () => {
			const result = manager.startIdleAction('training', 'practice-osmosis');

			expect(result).toBe(true);
			const action = manager.getTrainingAction('practice-osmosis');
			expect(action?.isActive).toBe(true);
			expect(action?.progress).toBe(0);
		});

		it('should stop other actions when starting a new one', () => {
			// Start first action
			manager.startIdleAction('training', 'practice-osmosis');
			expect(manager.getTrainingAction('practice-osmosis')?.isActive).toBe(true);

			// Start second action
			manager.startIdleAction('training', 'train-strength');

			// First action should be stopped
			expect(manager.getTrainingAction('practice-osmosis')?.isActive).toBe(false);
			expect(manager.getTrainingAction('train-strength')?.isActive).toBe(true);
		});

		it('should allow stopping an active action', () => {
			manager.startIdleAction('training', 'practice-osmosis');
			expect(manager.getTrainingAction('practice-osmosis')?.isActive).toBe(true);

			manager.stopIdleAction('training', 'practice-osmosis');

			const action = manager.getTrainingAction('practice-osmosis');
			expect(action?.isActive).toBe(false);
			expect(action?.progress).toBe(0);
		});

		it('should not start a completed one-time action', () => {
			// Manually mark action as completed
			const actions = manager.getMeditationActions();
			actions['meditate-future'].completed = true;

			const result = manager.startIdleAction('meditation', 'meditate-future');

			expect(result).toBe(false);
			expect(manager.getMeditationAction('meditate-future')?.isActive).toBe(false);
		});

		it('should return false when starting non-existent action', () => {
			const result = manager.startIdleAction('training', 'nonexistent');
			expect(result).toBe(false);
		});

		it('should apply training speed multiplier', () => {
			const manager = new IdleActionManagerBuilder().withTrainingSpeed(0.5).build();

			manager.startIdleAction('training', 'train-strength');

			const action = manager.getTrainingAction('train-strength');
			// Base duration is 15000ms, training speed 0.5 means 50% faster (duration * 0.5)
			expect(action?.duration).toBe(15000 * 0.5);
		});

		it('should apply global idle speed multiplier', () => {
			const manager = new IdleActionManagerBuilder().withGlobalIdleSpeed(2.0).build();

			manager.startIdleAction('training', 'train-strength');

			const action = manager.getTrainingAction('train-strength');
			// Base 15000ms, global speed 2.0 means 2x faster (duration / 2.0)
			expect(action?.duration).toBe(15000 / 2.0);
		});

		it('should apply combined training and global speed multipliers', () => {
			const manager = new IdleActionManagerBuilder()
				.withTrainingSpeed(0.8) // 20% faster (multiply)
				.withGlobalIdleSpeed(2.0) // 2x faster (divide)
				.build();

			manager.startIdleAction('training', 'train-strength');

			const action = manager.getTrainingAction('train-strength');
			// (15000 * 0.8) / 2.0 = 12000 / 2.0 = 6000
			expect(action?.duration).toBe(6000);
		});

		it('should apply osmosis-specific and global speed multipliers', () => {
			const manager = new IdleActionManagerBuilder()
				.withOsmosisSpeed(1.5) // 1.5x faster
				.withGlobalIdleSpeed(2.0) // 2x faster
				.build();

			manager.startIdleAction('training', 'practice-osmosis');

			const action = manager.getTrainingAction('practice-osmosis');
			// 15000 / (1.5 * 2.0) = 15000 / 3.0 = 5000
			expect(action?.duration).toBe(5000);
		});
	});

	describe('Progress Calculation', () => {
		it('should update progress based on elapsed time', () => {
			vi.useFakeTimers();
			const startTime = Date.now();

			manager.startIdleAction('training', 'practice-osmosis');
			const action = manager.getTrainingAction('practice-osmosis');

			// Advance time by half the duration
			vi.advanceTimersByTime(action!.duration / 2);

			manager.updateIdleActions();

			expect(action?.progress).toBeCloseTo(0.5, 1);

			vi.useRealTimers();
		});

		it('should complete action when progress >= 1.0', () => {
			vi.useFakeTimers();

			const manager = new IdleActionManagerBuilder().withOsmosisBonus(5).build();

			manager.startIdleAction('training', 'practice-osmosis');
			const action = manager.getTrainingAction('practice-osmosis');

			// Advance time to complete the action
			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results).toHaveLength(1);
			expect(results[0].expGained).toBe(15); // 10 base + 5 bonus
			expect(results[0].shouldContinue).toBe(true);

			// Osmosis should restart
			expect(action?.isActive).toBe(true);
			expect(action?.progress).toBe(0);

			vi.useRealTimers();
		});

		it('should handle multiple completions in one update', () => {
			vi.useFakeTimers();

			manager.startIdleAction('training', 'practice-osmosis');
			manager.startIdleAction('meditation', 'disassociate');

			const trainingAction = manager.getTrainingAction('practice-osmosis');
			const meditationAction = manager.getMeditationAction('disassociate');

			// Advance time to complete both
			const maxDuration = Math.max(trainingAction!.duration, meditationAction!.duration);
			vi.advanceTimersByTime(maxDuration + 100);

			const results = manager.updateIdleActions();

			// Should have results from both completions
			expect(results.length).toBeGreaterThanOrEqual(1);

			vi.useRealTimers();
		});
	});

	describe('Osmosis Completion', () => {
		it('should award base EXP on osmosis completion', () => {
			vi.useFakeTimers();

			manager.startIdleAction('training', 'practice-osmosis');
			const action = manager.getTrainingAction('practice-osmosis');

			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results[0].expGained).toBe(10); // Base reward
			expect(results[0].shouldContinue).toBe(true);
			expect(results[0].statGained).toBeUndefined();

			vi.useRealTimers();
		});

		it('should add osmosis bonus to EXP reward', () => {
			vi.useFakeTimers();

			const manager = new IdleActionManagerBuilder().withOsmosisBonus(25).build();

			manager.startIdleAction('training', 'practice-osmosis');
			const action = manager.getTrainingAction('practice-osmosis');

			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results[0].expGained).toBe(35); // 10 base + 25 bonus

			vi.useRealTimers();
		});

		it('should automatically restart osmosis after completion', () => {
			vi.useFakeTimers();

			manager.startIdleAction('training', 'practice-osmosis');
			const action = manager.getTrainingAction('practice-osmosis');

			vi.advanceTimersByTime(action!.duration + 100);
			manager.updateIdleActions();

			// Should still be active and reset to 0 progress
			expect(action?.isActive).toBe(true);
			expect(action?.progress).toBe(0);

			vi.useRealTimers();
		});
	});

	describe('Training Completion', () => {
		it('should award EXP and level up stat when affordable', () => {
			vi.useFakeTimers();

			const manager = new IdleActionManagerBuilder()
				.withStatCost(50) // Low cost
				.withCurrentExp(100) // Sufficient EXP
				.build();

			manager.startIdleAction('training', 'train-strength');
			const action = manager.getTrainingAction('train-strength');

			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results[0].expGained).toBe(10); // Training reward
			expect(results[0].statGained).toEqual({ stat: 'strength', amount: 1 });
			expect(results[0].expCost).toBe(50);
			expect(results[0].shouldContinue).toBe(true);

			// Should restart training
			expect(action?.isActive).toBe(true);
			expect(action?.progress).toBe(0);

			vi.useRealTimers();
		});

		it('should stop training when stat level is unaffordable', () => {
			vi.useFakeTimers();

			const manager = new IdleActionManagerBuilder()
				.withStatCost(200) // High cost
				.withCurrentExp(50) // Insufficient EXP
				.build();

			manager.startIdleAction('training', 'train-strength');
			const action = manager.getTrainingAction('train-strength');

			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results[0].expGained).toBe(10); // Still get training reward
			expect(results[0].statGained).toBeUndefined(); // But no stat gain
			expect(results[0].shouldContinue).toBe(false);

			// Should stop training
			expect(action?.isActive).toBe(false);
			expect(action?.progress).toBe(0);

			vi.useRealTimers();
		});

		it('should apply crit chance to training reward', () => {
			vi.useFakeTimers();

			// Mock Math.random to always crit
			const originalRandom = Math.random;
			Math.random = () => 0.01; // Always less than crit chance

			const manager = new IdleActionManagerBuilder()
				.withCritChance(0.5) // 50% crit chance
				.withStatCost(50)
				.withCurrentExp(100)
				.build();

			manager.startIdleAction('training', 'train-strength');
			const action = manager.getTrainingAction('train-strength');

			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			// 10 * 1.5 = 15 (crit multiplier is 1.5x)
			expect(results[0].expGained).toBe(15);

			Math.random = originalRandom;
			vi.useRealTimers();
		});

		it('should train different stats correctly', () => {
			vi.useFakeTimers();

			const manager = new IdleActionManagerBuilder().withStatCost(50).withCurrentExp(100).build();

			// Test dexterity training
			manager.startIdleAction('training', 'train-dexterity');
			let action = manager.getTrainingAction('train-dexterity');
			vi.advanceTimersByTime(action!.duration + 100);
			let results = manager.updateIdleActions();
			expect(results[0].statGained?.stat).toBe('dexterity');

			// Test intelligence training
			manager.startIdleAction('training', 'train-intelligence');
			action = manager.getTrainingAction('train-intelligence');
			vi.advanceTimersByTime(action!.duration + 100);
			results = manager.updateIdleActions();
			expect(results[0].statGained?.stat).toBe('intelligence');

			// Test wisdom training
			manager.startIdleAction('training', 'train-wisdom');
			action = manager.getTrainingAction('train-wisdom');
			vi.advanceTimersByTime(action!.duration + 100);
			results = manager.updateIdleActions();
			expect(results[0].statGained?.stat).toBe('wisdom');

			vi.useRealTimers();
		});
	});

	describe('Meditation Completion', () => {
		it('should unlock adventure mode on meditate-future completion', () => {
			vi.useFakeTimers();

			manager.startIdleAction('meditation', 'meditate-future');
			const action = manager.getMeditationAction('meditate-future');

			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results[0].unlocks?.adventureMode).toBe(true);
			expect(action?.completed).toBe(true);
			expect(action?.isActive).toBe(false);

			vi.useRealTimers();
		});

		it('should complete disassociate meditation', () => {
			vi.useFakeTimers();

			manager.startIdleAction('meditation', 'disassociate');
			const action = manager.getMeditationAction('disassociate');

			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results[0].expGained).toBe(0); // No EXP from meditation
			expect(action?.isActive).toBe(false);
			expect(action?.completed).toBeUndefined(); // Not a one-time action

			vi.useRealTimers();
		});
	});

	describe('Migration', () => {
		it('should migrate training actions and preserve progress', () => {
			const savedActions: { [key: string]: IdleAction } = {
				'practice-osmosis': {
					id: 'practice-osmosis',
					name: 'Old Name',
					description: 'Old description',
					progress: 0.75,
					baseDuration: 15000,
					duration: 15000,
					expCost: 0,
					isActive: true,
					lastUpdate: 12345
				}
			};

			manager.migrateTrainingActions(savedActions);

			const action = manager.getTrainingAction('practice-osmosis');
			expect(action?.progress).toBe(0.75); // Preserved
			expect(action?.isActive).toBe(true); // Preserved
			expect(action?.lastUpdate).toBe(12345); // Preserved
			expect(action?.name).toBe('Ruminate'); // Updated to new definition
		});

		it('should migrate meditation actions and preserve completed status', () => {
			const savedActions: { [key: string]: IdleAction } = {
				'meditate-future': {
					id: 'meditate-future',
					name: 'Old Name',
					description: 'Old description',
					progress: 0,
					baseDuration: 60000,
					duration: 60000,
					expCost: 50,
					isActive: false,
					lastUpdate: 12345,
					oneTime: true,
					completed: true
				}
			};

			manager.migrateMeditationActions(savedActions);

			const action = manager.getMeditationAction('meditate-future');
			expect(action?.completed).toBe(true); // Preserved
			expect(action?.name).toBe('Meditate on Your Future'); // Updated
		});

		it('should add new actions during migration', () => {
			const savedActions: { [key: string]: IdleAction } = {
				'practice-osmosis': {
					id: 'practice-osmosis',
					name: 'Ruminate',
					description: 'Learn through observation',
					progress: 0,
					baseDuration: 15000,
					duration: 15000,
					expCost: 0,
					isActive: false,
					lastUpdate: Date.now()
				}
			};

			manager.migrateTrainingActions(savedActions);

			// Should have all actions, including new ones
			const actions = manager.getTrainingActions();
			expect(actions['practice-osmosis']).toBeDefined();
			expect(actions['train-strength']).toBeDefined();
			expect(actions['train-dexterity']).toBeDefined();
			expect(actions['train-intelligence']).toBeDefined();
			expect(actions['train-wisdom']).toBeDefined();
		});
	});

	describe('Edge Cases', () => {
		it('should handle zero duration gracefully', () => {
			const manager = new IdleActionManagerBuilder()
				.withTrainingSpeed(0) // Would cause division by zero
				.build();

			// Should not throw
			expect(() => manager.startIdleAction('training', 'train-strength')).not.toThrow();
		});

		it('should handle very high speed multipliers', () => {
			const manager = new IdleActionManagerBuilder().withGlobalIdleSpeed(1000).build();

			manager.startIdleAction('training', 'practice-osmosis');
			const action = manager.getTrainingAction('practice-osmosis');

			// Should result in very short duration
			expect(action?.duration).toBe(15);
		});

		it('should not update inactive actions', () => {
			vi.useFakeTimers();

			manager.startIdleAction('training', 'practice-osmosis');
			manager.stopIdleAction('training', 'practice-osmosis');

			vi.advanceTimersByTime(100000); // Long time

			const results = manager.updateIdleActions();

			expect(results).toHaveLength(0); // No completions

			vi.useRealTimers();
		});

		it('should handle calling updateIdleActions with no active actions', () => {
			const results = manager.updateIdleActions();
			expect(results).toHaveLength(0);
		});
	});
});
