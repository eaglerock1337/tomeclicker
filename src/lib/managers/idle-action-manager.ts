import type { Stats } from '../game';
import {
	TRAINING_BASE_COST,
	TRAINING_REWARD,
	TRAINING_CRIT_MULTIPLIER,
	RUMINATE_BASE_REWARD,
	RUMINATE_BASE_DURATION,
	TRAINING_BASE_DURATION,
	MEDITATION_FUTURE_DURATION,
	MEDITATION_FUTURE_COST,
	MEDITATION_DISASSOCIATE_DURATION,
	MEDITATION_DISASSOCIATE_COST
} from '../constants/game';
import {
	calculateRuminateMultiplierPercent,
	calculateRuminateCritChance,
	calculateRuminateCritDamage,
	calculateStatGainBonus,
	calculateStatGainMultiplierPercent,
	calculateTrainingCritDamage
} from '../utils/calculations';

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
	/** What stat this trains (if any) - only base stats, not EXP properties */
	trainsStat?: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>;
	/** Whether this is a one-time action */
	oneTime?: boolean;
	/** Whether this one-time action is completed */
	completed?: boolean;
}

/**
 * Result of completing an idle action
 */
export interface ActionCompletionResult {
	/** EXP gained from completion */
	expGained: number;
	/** Stat that was leveled up (if any) */
	statGained?: {
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>;
		amount: number;
	};
	/** EXP cost for the stat level (if training) */
	expCost?: number;
	/** Whether the action should continue running */
	shouldContinue: boolean;
	/** Special unlock effects */
	unlocks?: {
		adventureMode?: boolean;
	};
}

/**
 * Dependencies required by IdleActionManager
 */
export interface IdleActionDependencies {
	/** Get training speed multiplier from upgrades */
	getTrainingSpeedMultiplier: () => number;
	/** Get training cost multiplier from upgrades */
	getTrainingCostMultiplier: () => number;
	/** Get ruminate EXP bonus from upgrades */
	getRuminateExpBonus: () => number;
	/** Get Discipline multiplier for all EXP gains */
	getDisciplineMultiplier: () => number;
	/** Get current character level */
	getCurrentLevel: () => number;
	/** Get global idle speed multiplier from upgrades */
	getGlobalIdleSpeedMultiplier: () => number;
	/** Get ruminate-specific speed multiplier */
	getRuminateSpeedMultiplier: () => number;
	/** Get EXP cost to level up a specific stat (legacy - kept for migration) */
	getStatLevelCost: (stat: keyof Stats) => number;
	/** Get character EXP cost to start training a specific stat (v0.1.5+) */
	getStatTrainingCost: (
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	) => number;
	/** Add stat EXP and handle level ups (v0.1.5+) */
	addStatExp: (
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>,
		amount: number
	) => { success: boolean; leveledUp: boolean; newLevel: number };
	/** Get current crit chance (for training rewards) */
	getCritChance: () => number;
	/** Get current EXP balance */
	getCurrentExp: () => number;
	/** Get ruminate percentage multiplier from upgrades */
	getRuminateMultiplierPercent: () => number;
	/** Get ruminate crit chance from upgrades */
	getRuminateCritChance: () => number;
	/** Get ruminate crit damage multiplier from upgrades */
	getRuminateCritDamage: () => number;
	/** Get stat gain bonus from upgrades */
	getStatGainBonus: () => number;
	/** Get stat gain percentage multiplier from upgrades */
	getStatGainMultiplierPercent: () => number;
	/** Get training crit damage multiplier from upgrades */
	getTrainingCritDamage: () => number;
}

/**
 * Manages all idle action state and lifecycle
 * Handles training, meditation, and ruminate actions
 */
export class IdleActionManager {
	private trainingActions: { [key: string]: IdleAction };
	private meditationActions: { [key: string]: IdleAction };

	constructor(private deps: IdleActionDependencies) {
		this.trainingActions = this.initializeTrainingActions();
		this.meditationActions = this.initializeMeditationActions();
	}

	/**
	 * Initializes training actions for stat development
	 */
	private initializeTrainingActions(): { [key: string]: IdleAction } {
		return {
			'practice-ruminate': {
				id: 'practice-ruminate',
				name: 'Ruminate',
				description: 'Learn through observation and reflection',
				progress: 0,
				baseDuration: RUMINATE_BASE_DURATION,
				duration: RUMINATE_BASE_DURATION,
				expCost: 0, // Free to use!
				isActive: false,
				lastUpdate: Date.now()
			},
			'train-strength': {
				id: 'train-strength',
				name: 'Lift Heavy Objects',
				description: 'Build raw physical power',
				progress: 0,
				baseDuration: TRAINING_BASE_DURATION,
				duration: TRAINING_BASE_DURATION,
				expCost: TRAINING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'strength'
			},
			'train-agility': {
				id: 'train-agility',
				name: 'Practice Quick Movements',
				description: 'Improve speed and reflexes',
				progress: 0,
				baseDuration: TRAINING_BASE_DURATION,
				duration: TRAINING_BASE_DURATION,
				expCost: TRAINING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'agility'
			},
			'train-willpower': {
				id: 'train-willpower',
				name: 'Defensive Awareness',
				description: 'Develop instincts to protect yourself',
				progress: 0,
				baseDuration: TRAINING_BASE_DURATION,
				duration: TRAINING_BASE_DURATION,
				expCost: TRAINING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'willpower'
			},
			'train-endurance': {
				id: 'train-endurance',
				name: 'Physical Conditioning',
				description: 'Build stamina and resilience',
				progress: 0,
				baseDuration: TRAINING_BASE_DURATION,
				duration: TRAINING_BASE_DURATION,
				expCost: TRAINING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'endurance'
			}
		};
	}

	/**
	 * Initializes meditation actions
	 */
	private initializeMeditationActions(): { [key: string]: IdleAction } {
		return {
			'meditate-future': {
				id: 'meditate-future',
				name: 'Meditate on Your Future',
				description: 'Unlock the path to adventure',
				progress: 0,
				baseDuration: MEDITATION_FUTURE_DURATION,
				duration: MEDITATION_FUTURE_DURATION,
				expCost: MEDITATION_FUTURE_COST,
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
				baseDuration: MEDITATION_DISASSOCIATE_DURATION,
				duration: MEDITATION_DISASSOCIATE_DURATION,
				expCost: MEDITATION_DISASSOCIATE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				oneTime: false
			}
		};
	}

	/**
	 * Gets all training actions
	 */
	getTrainingActions(): { [key: string]: IdleAction } {
		return this.trainingActions;
	}

	/**
	 * Gets all meditation actions
	 */
	getMeditationActions(): { [key: string]: IdleAction } {
		return this.meditationActions;
	}

	/**
	 * Gets a specific training action
	 */
	getTrainingAction(actionId: string): IdleAction | undefined {
		return this.trainingActions[actionId];
	}

	/**
	 * Gets a specific meditation action
	 */
	getMeditationAction(actionId: string): IdleAction | undefined {
		return this.meditationActions[actionId];
	}

	/**
	 * Migrates saved training actions to the latest definitions
	 * Preserves progress and active state while adding new actions
	 */
	migrateTrainingActions(savedActions: { [key: string]: IdleAction }): void {
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

		this.trainingActions = freshActions;
	}

	/**
	 * Migrates saved meditation actions to the latest definitions
	 * Preserves progress and active state while adding new actions
	 */
	migrateMeditationActions(savedActions: { [key: string]: IdleAction }): void {
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

		this.meditationActions = freshActions;
	}

	/**
	 * Starts an idle action (Progress Knight style - keeps running until switched)
	 * @param actionMap - The action map (trainingActions or meditationActions)
	 * @param actionId - ID of the action to start
	 * @returns True if action started successfully
	 */
	startIdleAction(actionMap: 'training' | 'meditation', actionId: string): boolean {
		const actions = actionMap === 'training' ? this.trainingActions : this.meditationActions;
		const action = actions[actionId];
		if (!action) return false;

		// Check if already completed (for one-time actions)
		if (action.oneTime && action.completed) return false;

		// For stat training (v0.1.5+): Check character EXP cost and charge upfront
		if (action.trainsStat && actionId !== 'practice-ruminate') {
			const stat = action.trainsStat;
			const cost = this.deps.getStatTrainingCost(stat);
			const currentExp = this.deps.getCurrentExp();

			// Check if player can afford the training
			if (currentExp < cost) {
				return false; // Cannot start training - insufficient character EXP
			}

			// Note: The actual EXP deduction is handled in the Game class
			// when this method returns true, similar to how upgrade purchases work
		}

		// Stop any currently active actions in this map
		for (const a of Object.values(actions)) {
			if (a.isActive) {
				a.isActive = false;
				a.progress = 0;
			}
		}

		// Start the action
		action.isActive = true;
		action.progress = 0;
		action.lastUpdate = Date.now();

		// Apply speed multipliers based on action type
		if (actionId === 'practice-ruminate') {
			// Ruminate gets both ruminate-specific and global idle speed bonuses
			const ruminateSpeed = this.deps.getRuminateSpeedMultiplier();
			const globalSpeed = this.deps.getGlobalIdleSpeedMultiplier();
			const combinedSpeed = ruminateSpeed * globalSpeed;
			action.duration = Math.floor(action.baseDuration / combinedSpeed);
		} else if (action.trainsStat) {
			// Stat training gets training speed and global idle speed
			const trainingSpeed = this.deps.getTrainingSpeedMultiplier();
			const globalSpeed = this.deps.getGlobalIdleSpeedMultiplier();
			action.duration = Math.floor((action.baseDuration * trainingSpeed) / globalSpeed);
		} else {
			// Other idle actions just get global speed
			const globalSpeed = this.deps.getGlobalIdleSpeedMultiplier();
			action.duration = Math.floor(action.baseDuration / globalSpeed);
		}

		return true;
	}

	/**
	 * Stops an active idle action without completion
	 * @param actionMap - The action map (trainingActions or meditationActions)
	 * @param actionId - ID of the action to stop
	 */
	stopIdleAction(actionMap: 'training' | 'meditation', actionId: string): void {
		const actions = actionMap === 'training' ? this.trainingActions : this.meditationActions;
		const action = actions[actionId];
		if (!action) return;

		action.isActive = false;
		action.progress = 0;
		action.lastUpdate = Date.now();
	}

	/**
	 * Updates progress for all active idle actions
	 * Returns completion results for any actions that finished
	 */
	updateIdleActions(): ActionCompletionResult[] {
		const now = Date.now();
		const results: ActionCompletionResult[] = [];

		// Update training actions
		for (const action of Object.values(this.trainingActions)) {
			if (action.isActive) {
				const elapsed = now - action.lastUpdate;
				action.progress += elapsed / action.duration;
				action.lastUpdate = now;

				if (action.progress >= 1.0) {
					const result = this.completeTrainingAction(action.id);
					if (result) results.push(result);
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
					const result = this.completeMeditationAction(action.id);
					if (result) results.push(result);
				}
			}
		}

		return results;
	}

	/**
	 * Get the character EXP cost to start a training action (v0.1.5+)
	 * @param actionId - ID of the training action
	 * @returns Character EXP cost, or 0 if not a stat training action
	 */
	getTrainingCost(actionId: string): number {
		const action = this.trainingActions[actionId];
		if (!action || !action.trainsStat || actionId === 'practice-ruminate') {
			return 0; // Ruminate is free, non-training actions have no cost
		}

		return this.deps.getStatTrainingCost(action.trainsStat);
	}

	/**
	 * Check if a training action can be started (has enough character EXP)
	 * @param actionId - ID of the training action
	 * @returns True if the action can be started
	 */
	canStartTraining(actionId: string): boolean {
		const action = this.trainingActions[actionId];
		if (!action || !action.trainsStat || actionId === 'practice-ruminate') {
			return true; // Ruminate and non-training actions can always be started
		}

		const cost = this.getTrainingCost(actionId);
		return this.deps.getCurrentExp() >= cost;
	}

	/**
	 * Completes a training action and returns the result
	 * @param actionId - ID of the training action to complete
	 */
	private completeTrainingAction(actionId: string): ActionCompletionResult | null {
		const action = this.trainingActions[actionId];
		if (!action || !action.isActive) return null;

		// Handle ruminate completion
		if (actionId === 'practice-ruminate') {
			const bonus = this.deps.getRuminateExpBonus();
			const level = this.deps.getCurrentLevel();
			const disciplineMult = this.deps.getDisciplineMultiplier();
			const percentMult = this.deps.getRuminateMultiplierPercent();
			const critChance = this.deps.getRuminateCritChance();
			const critDamage = this.deps.getRuminateCritDamage();

			// Apply formula: (base + bonus) × percentage_mult × 10^(level-1) × 5^(discipline_level)
			let baseReward = RUMINATE_BASE_REWARD + bonus;
			baseReward *= percentMult; // Apply percentage multiplier

			// Check for crit
			const isCrit = Math.random() < critChance;
			if (isCrit) {
				baseReward *= 1 + critDamage; // Apply crit damage (e.g., 1.5x = 1 + 0.5)
			}

			const levelMult = level > 1 ? Math.pow(10, level - 1) : 1;
			const expGained = baseReward * levelMult * disciplineMult;

			// Ruminate always restarts
			action.progress = 0;
			action.lastUpdate = Date.now();

			return {
				expGained,
				shouldContinue: true
			};
		}

		// Handle stat training completion (v0.1.5+ stat EXP system)
		if (action.trainsStat) {
			const stat = action.trainsStat;
			const statGainBonus = this.deps.getStatGainBonus();
			const statGainPercent = this.deps.getStatGainMultiplierPercent();
			const critChance = this.deps.getCritChance();
			const critDamage = this.deps.getTrainingCritDamage();

			// Calculate stat EXP gained: (base + bonus) × percentage_mult × crit_mult
			let statExpGained = 10 + statGainBonus; // Base 10 + flat bonus
			statExpGained *= statGainPercent; // Apply percentage multiplier

			// Check for crit
			const isCrit = Math.random() < critChance;
			if (isCrit) {
				statExpGained *= 1 + critDamage; // Apply crit damage (e.g., 1.5x = 1 + 0.5)
			}

			// Add the stat EXP and check for level up
			const statResult = this.deps.addStatExp(stat, statExpGained);

			// Training always continues (Progress Knight style)
			action.progress = 0;
			action.lastUpdate = Date.now();

			return {
				expGained: 0, // No character EXP gained from training completion
				statGained: statResult.leveledUp
					? {
							stat,
							amount: 1
						}
					: undefined,
				shouldContinue: true
			};
		}

		return null;
	}

	/**
	 * Completes a meditation action and returns the result
	 * @param actionId - ID of the meditation action to complete
	 */
	private completeMeditationAction(actionId: string): ActionCompletionResult | null {
		const action = this.meditationActions[actionId];
		if (!action || !action.isActive) return null;

		const result: ActionCompletionResult = {
			expGained: 0,
			shouldContinue: false
		};

		// Handle specific meditation rewards
		if (actionId === 'meditate-future') {
			result.unlocks = { adventureMode: true };
			action.completed = true;
		}
		// Disassociate increases offline progress time (handled elsewhere)

		// Reset action
		action.isActive = false;
		action.progress = 0;
		action.lastUpdate = Date.now();

		return result;
	}
}
