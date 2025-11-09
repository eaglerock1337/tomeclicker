import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
	IdleActionManager,
	type IdleActionDependencies,
	type IdleAction
} from '../../src/lib/managers/idle-action-manager';
import type { Stats } from '../../src/lib/game';
import { ParametricIdleActionBuilder } from '../helpers/parametric-idle-action-builder';

/**
 * Test helper builder for creating IdleActionManager with mock dependencies
 */
class IdleActionManagerBuilder {
	private deps: IdleActionDependencies = {
		getTrainingSpeedMultiplier: () => 1.0,
		getTrainingCostMultiplier: () => 1.0,
		getRuminateExpBonus: () => 0,
		getDisciplineMultiplier: () => 1.0,
		getCurrentLevel: () => 1,
		getGlobalIdleSpeedMultiplier: () => 1.0,
		getRuminateSpeedMultiplier: () => 1.0,
		getStatLevelCost: () => 100,
		getStatTrainingCost: () => 100,
		addStatExp: () => ({ success: true, leveledUp: false, newLevel: 1 }),
		getCritChance: () => 0.0,
		getCurrentExp: () => 1000,
		getRuminateMultiplierPercent: () => 1.0,
		getRuminateCritChance: () => 0.0,
		getRuminateCritDamage: () => 0.5,
		getStatGainBonus: () => 0,
		getStatGainMultiplierPercent: () => 1.0,
		getTrainingCritChance: () => 0.0,
		getTrainingCritDamage: () => 0.5,
		getMaxStatLevel: () => 10,
		getCurrentStatLevel: () => 1
	};

	withTrainingSpeed(multiplier: number): this {
		this.deps.getTrainingSpeedMultiplier = () => multiplier;
		return this;
	}

	withGlobalIdleSpeed(multiplier: number): this {
		this.deps.getGlobalIdleSpeedMultiplier = () => multiplier;
		return this;
	}

	withRuminateSpeed(multiplier: number): this {
		this.deps.getRuminateSpeedMultiplier = () => multiplier;
		return this;
	}

	withRuminateBonus(bonus: number): this {
		this.deps.getRuminateExpBonus = () => bonus;
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

	withTrainingCritChance(chance: number): this {
		this.deps.getTrainingCritChance = () => chance;
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

			expect(actions['study-research']).toBeDefined();
			expect(actions['study-research'].name).toBe('Research');
			expect(actions['study-research'].expCost).toBe(0); // Free!
			expect(actions['study-research'].isActive).toBe(false);
			expect(actions['study-research'].progress).toBe(0);

			expect(actions['study-athletics']).toBeDefined();
			expect(actions['study-athletics'].trainsStat).toBe('strength');
			expect(actions['study-athletics'].expCost).toBe(10);

			expect(actions['study-kinetics']).toBeDefined();
			expect(actions['study-kinetics'].trainsStat).toBe('agility');

			expect(actions['study-selfdefense']).toBeDefined();
			expect(actions['study-selfdefense'].trainsStat).toBe('willpower');

			expect(actions['study-fitness']).toBeDefined();
			expect(actions['study-fitness'].trainsStat).toBe('endurance');
		});

		it('should initialize meditation actions with correct defaults', () => {
			const actions = manager.getMeditationActions();

			expect(actions['disassociate']).toBeDefined();
			expect(actions['disassociate'].oneTime).toBe(false);
			expect(actions['disassociate'].expCost).toBe(100);
		});

		it('should allow getting individual actions', () => {
			const ruminate = manager.getTrainingAction('study-research');
			expect(ruminate).toBeDefined();
			expect(ruminate?.name).toBe('Research');

			const meditation = manager.getMeditationAction('disassociate');
			expect(meditation).toBeDefined();
			expect(meditation?.name).toBe('Disassociate');
		});

		it('should return undefined for non-existent actions', () => {
			expect(manager.getTrainingAction('nonexistent')).toBeUndefined();
			expect(manager.getMeditationAction('nonexistent')).toBeUndefined();
		});
	});

	describe('Action Lifecycle', () => {
		it('should start an action and set it as active', () => {
			const result = manager.startIdleAction('training', 'study-research');

			expect(result).toBe(true);
			const action = manager.getTrainingAction('study-research');
			expect(action?.isActive).toBe(true);
			expect(action?.progress).toBe(0);
		});

		it('should stop other actions when starting a new one', () => {
			// Start first action
			manager.startIdleAction('training', 'study-research');
			expect(manager.getTrainingAction('study-research')?.isActive).toBe(true);

			// Start second action
			manager.startIdleAction('training', 'study-athletics');

			// First action should be stopped
			expect(manager.getTrainingAction('study-research')?.isActive).toBe(false);
			expect(manager.getTrainingAction('study-athletics')?.isActive).toBe(true);
		});

		it('should allow stopping an active action', () => {
			manager.startIdleAction('training', 'study-research');
			expect(manager.getTrainingAction('study-research')?.isActive).toBe(true);

			manager.stopIdleAction('training', 'study-research');

			const action = manager.getTrainingAction('study-research');
			expect(action?.isActive).toBe(false);
			expect(action?.progress).toBe(0);
		});

		it('should return false when starting non-existent action', () => {
			const result = manager.startIdleAction('training', 'nonexistent');
			expect(result).toBe(false);
		});

		it('should apply training speed multiplier', () => {
			const manager = new IdleActionManagerBuilder().withTrainingSpeed(0.5).build();

			manager.startIdleAction('training', 'study-athletics');

			const action = manager.getTrainingAction('study-athletics');
			// Base duration is 15000ms, training speed 0.5 means 50% faster (duration * 0.5)
			expect(action?.duration).toBe(15000 * 0.5);
		});

		it('should apply global idle speed multiplier', () => {
			const manager = new IdleActionManagerBuilder().withGlobalIdleSpeed(2.0).build();

			manager.startIdleAction('training', 'study-athletics');

			const action = manager.getTrainingAction('study-athletics');
			// Base 15000ms, global speed 2.0 means 2x faster (duration / 2.0)
			expect(action?.duration).toBe(15000 / 2.0);
		});

		it('should apply combined training and global speed multipliers', () => {
			const manager = new IdleActionManagerBuilder()
				.withTrainingSpeed(0.8) // 20% faster (multiply)
				.withGlobalIdleSpeed(2.0) // 2x faster (divide)
				.build();

			manager.startIdleAction('training', 'study-athletics');

			const action = manager.getTrainingAction('study-athletics');
			// (15000 * 0.8) / 2.0 = 12000 / 2.0 = 6000
			expect(action?.duration).toBe(6000);
		});

		it('should apply ruminate-specific and global speed multipliers', () => {
			const manager = new IdleActionManagerBuilder()
				.withRuminateSpeed(1.5) // 1.5x faster
				.withGlobalIdleSpeed(2.0) // 2x faster
				.build();

			manager.startIdleAction('training', 'study-research');

			const action = manager.getTrainingAction('study-research');
			// 15000 / (1.5 * 2.0) = 15000 / 3.0 = 5000
			expect(action?.duration).toBe(5000);
		});
	});

	describe('Progress Calculation', () => {
		it('should update progress based on elapsed time', () => {
			vi.useFakeTimers();
			const startTime = Date.now();

			manager.startIdleAction('training', 'study-research');
			const action = manager.getTrainingAction('study-research');

			// Advance time by half the duration
			vi.advanceTimersByTime(action!.duration / 2);

			manager.updateIdleActions();

			expect(action?.progress).toBeCloseTo(0.5, 1);

			vi.useRealTimers();
		});

		it('should complete action when progress >= 1.0', () => {
			vi.useFakeTimers();

			const manager = new IdleActionManagerBuilder().withRuminateBonus(5).build();

			manager.startIdleAction('training', 'study-research');
			const action = manager.getTrainingAction('study-research');

			// Advance time to complete the action
			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results).toHaveLength(1);
			expect(results[0].expGained).toBe(15); // 10 base + 5 bonus
			expect(results[0].shouldContinue).toBe(true);

			// Ruminate should restart
			expect(action?.isActive).toBe(true);
			expect(action?.progress).toBe(0);

			vi.useRealTimers();
		});

		it('should handle multiple completions in one update', () => {
			vi.useFakeTimers();

			manager.startIdleAction('training', 'study-research');
			manager.startIdleAction('meditation', 'disassociate');

			const trainingAction = manager.getTrainingAction('study-research');
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

	describe('Ruminate Completion', () => {
		it('should award base EXP on ruminate completion', () => {
			vi.useFakeTimers();

			manager.startIdleAction('training', 'study-research');
			const action = manager.getTrainingAction('study-research');

			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results[0].expGained).toBe(10); // Base reward
			expect(results[0].shouldContinue).toBe(true);
			expect(results[0].statGained).toBeUndefined();

			vi.useRealTimers();
		});

		it('should add ruminate bonus to EXP reward', () => {
			vi.useFakeTimers();

			const manager = new IdleActionManagerBuilder().withRuminateBonus(25).build();

			manager.startIdleAction('training', 'study-research');
			const action = manager.getTrainingAction('study-research');

			vi.advanceTimersByTime(action!.duration + 100);

			const results = manager.updateIdleActions();

			expect(results[0].expGained).toBe(35); // 10 base + 25 bonus

			vi.useRealTimers();
		});

		it('should automatically restart ruminate after completion', () => {
			vi.useFakeTimers();

			manager.startIdleAction('training', 'study-research');
			const action = manager.getTrainingAction('study-research');

			vi.advanceTimersByTime(action!.duration + 100);
			manager.updateIdleActions();

			// Should still be active and reset to 0 progress
			expect(action?.isActive).toBe(true);
			expect(action?.progress).toBe(0);

			vi.useRealTimers();
		});
	});

	describe('Training Completion', () => {
		it('should level up stat after accumulating training EXP', () => {
			vi.useFakeTimers();

			const manager = new ParametricIdleActionBuilder()
				.withTrainingRewardOf(10) // 10 stat EXP per training
				.withStatLevelCostOf(1, 50) // Need 50 EXP to level 1→2
				.withCurrentExp(500) // Sufficient character EXP for training costs
				.build();

			// Complete 5 trainings = 50 stat EXP = level up
			for (let i = 0; i < 5; i++) {
				manager.startIdleAction('training', 'study-athletics');
				const action = manager.getTrainingAction('study-athletics');
				vi.advanceTimersByTime(action!.duration + 100);
				const results = manager.updateIdleActions();

				// v0.1.5+: Training no longer awards character EXP
				expect(results[0].expGained).toBe(0);
				expect(results[0].shouldContinue).toBe(true);

				// On final training, should level up
				if (i === 4) {
					expect(results[0].statGained).toBeDefined();
					expect(results[0].statGained?.stat).toBe('strength');
					expect(results[0].statGained?.amount).toBe(1);
				}
			}

			// Training should still be active (Progress Knight style - never stops)
			const action = manager.getTrainingAction('study-athletics');
			expect(action?.isActive).toBe(true);

			vi.useRealTimers();
		});

		it('should continue training indefinitely without level-up', () => {
			vi.useFakeTimers();

			const manager = new ParametricIdleActionBuilder()
				.withTrainingRewardOf(10) // 10 stat EXP per training
				.withStatLevelCostOf(1, 100) // Need 100 EXP to level (won't reach it)
				.withCurrentExp(500)
				.build();

			// Complete 5 trainings (50 stat EXP - not enough to level up)
			for (let i = 0; i < 5; i++) {
				manager.startIdleAction('training', 'study-athletics');
				const action = manager.getTrainingAction('study-athletics');
				vi.advanceTimersByTime(action!.duration + 100);
				const results = manager.updateIdleActions();

				// v0.1.5+: Training continues indefinitely (Progress Knight style)
				expect(results[0].expGained).toBe(0);
				expect(results[0].shouldContinue).toBe(true);
				expect(results[0].statGained).toBeUndefined(); // No level-up yet

				// Training should continue
				expect(action?.isActive).toBe(true);
				expect(action?.progress).toBe(0);
			}

			vi.useRealTimers();
		});

		it('should level up faster with crits (2x stat EXP)', () => {
			vi.useFakeTimers();

			// Mock Math.random to always crit
			const originalRandom = Math.random;
			Math.random = () => 0.01; // Always less than crit chance

			const manager = new ParametricIdleActionBuilder()
				.withTrainingRewardOf(10) // 10 base stat EXP
				.withTrainingCritDamage(1.0) // +100% damage = 2x total on crit
				.withStatLevelCostOf(1, 60) // Need 60 EXP to level
				.withTrainingCritChance(1.0) // 100% training crit chance
				.withCurrentExp(500)
				.build();

			// With crits (10 * 2.0 = 20 EXP each), need only 3 trainings (60 EXP)
			// Without crits (10 EXP each), would need 6 trainings
			for (let i = 0; i < 3; i++) {
				manager.startIdleAction('training', 'study-athletics');
				const action = manager.getTrainingAction('study-athletics');
				vi.advanceTimersByTime(action!.duration + 100);
				const results = manager.updateIdleActions();

				// On final training, should level up
				if (i === 2) {
					expect(results[0].statGained).toBeDefined();
					expect(results[0].statGained?.stat).toBe('strength');
				}
			}

			Math.random = originalRandom;
			vi.useRealTimers();
		});

		it('should train different stats correctly', () => {
			vi.useFakeTimers();

			const manager = new ParametricIdleActionBuilder()
				.withTrainingRewardOf(10)
				.withStatLevelCostOf(1, 50) // Each stat needs 50 EXP to level
				.withCurrentExp(500)
				.build();

			// Train each stat 5 times (50 stat EXP each = level up)
			const stats = [
				{ action: 'study-kinetics', stat: 'agility' },
				{ action: 'study-selfdefense', stat: 'willpower' },
				{ action: 'study-fitness', stat: 'endurance' }
			];

			for (const { action: actionName, stat } of stats) {
				for (let i = 0; i < 5; i++) {
					manager.startIdleAction('training', actionName);
					const action = manager.getTrainingAction(actionName);
					vi.advanceTimersByTime(action!.duration + 100);
					const results = manager.updateIdleActions();

					// On final training, should level up the correct stat
					if (i === 4) {
						expect(results[0].statGained?.stat).toBe(stat);
					}
				}
			}

			vi.useRealTimers();
		});
	});

	describe('Meditation Completion', () => {
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
				'study-research': {
					id: 'study-research',
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

			const action = manager.getTrainingAction('study-research');
			expect(action?.progress).toBe(0.75); // Preserved
			expect(action?.isActive).toBe(true); // Preserved
			expect(action?.lastUpdate).toBe(12345); // Preserved
			expect(action?.name).toBe('Research'); // Updated to new definition
		});

		it('should add new actions during migration', () => {
			const savedActions: { [key: string]: IdleAction } = {
				'study-research': {
					id: 'study-research',
					name: 'Research',
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
			expect(actions['study-research']).toBeDefined();
			expect(actions['study-athletics']).toBeDefined();
			expect(actions['study-kinetics']).toBeDefined();
			expect(actions['study-selfdefense']).toBeDefined();
			expect(actions['study-fitness']).toBeDefined();
		});
	});

	describe('Edge Cases', () => {
		it('should handle zero duration gracefully', () => {
			const manager = new IdleActionManagerBuilder()
				.withTrainingSpeed(0) // Would cause division by zero
				.build();

			// Should not throw
			expect(() => manager.startIdleAction('training', 'study-athletics')).not.toThrow();
		});

		it('should handle very high speed multipliers', () => {
			const manager = new IdleActionManagerBuilder().withGlobalIdleSpeed(1000).build();

			manager.startIdleAction('training', 'study-research');
			const action = manager.getTrainingAction('study-research');

			// Should result in very short duration
			expect(action?.duration).toBe(15);
		});

		it('should not update inactive actions', () => {
			vi.useFakeTimers();

			manager.startIdleAction('training', 'study-research');
			manager.stopIdleAction('training', 'study-research');

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
