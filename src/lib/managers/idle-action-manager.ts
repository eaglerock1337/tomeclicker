import type { Stats } from '../game';
import {
	TRAINING_BASE_COST,
	TRAINING_REWARD,
	TRAINING_CRIT_MULTIPLIER,
	OSMOSIS_BASE_REWARD,
	OSMOSIS_BASE_DURATION,
	TRAINING_BASE_DURATION,
	MEDITATION_FUTURE_DURATION,
	MEDITATION_FUTURE_COST,
	MEDITATION_DISASSOCIATE_DURATION,
	MEDITATION_DISASSOCIATE_COST
} from '../constants/game';

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
 * Result of completing an idle action
 */
export interface ActionCompletionResult {
	/** EXP gained from completion */
	expGained: number;
	/** Stat that was leveled up (if any) */
	statGained?: {
		stat: keyof Stats;
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
	/** Get osmosis EXP bonus from upgrades */
	getOsmosisExpBonus: () => number;
	/** Get global idle speed multiplier from upgrades */
	getGlobalIdleSpeedMultiplier: () => number;
	/** Get osmosis-specific speed multiplier */
	getOsmosisSpeedMultiplier: () => number;
	/** Get EXP cost to level up a specific stat */
	getStatLevelCost: (stat: keyof Stats) => number;
	/** Get current crit chance (for training rewards) */
	getCritChance: () => number;
	/** Get current EXP balance */
	getCurrentExp: () => number;
}

/**
 * Manages all idle action state and lifecycle
 * Handles training, meditation, and osmosis actions
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
			'practice-osmosis': {
				id: 'practice-osmosis',
				name: 'Ruminate',
				description: 'Learn through observation and reflection',
				progress: 0,
				baseDuration: OSMOSIS_BASE_DURATION,
				duration: OSMOSIS_BASE_DURATION,
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
			'train-dexterity': {
				id: 'train-dexterity',
				name: 'Practice Quick Movements',
				description: 'Improve agility and reflexes',
				progress: 0,
				baseDuration: TRAINING_BASE_DURATION,
				duration: TRAINING_BASE_DURATION,
				expCost: TRAINING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'dexterity'
			},
			'train-intelligence': {
				id: 'train-intelligence',
				name: 'Study Ancient Texts',
				description: 'Expand knowledge and understanding',
				progress: 0,
				baseDuration: TRAINING_BASE_DURATION,
				duration: TRAINING_BASE_DURATION,
				expCost: TRAINING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'intelligence'
			},
			'train-wisdom': {
				id: 'train-wisdom',
				name: 'Meditate on Meaning',
				description: 'Deepen insight and awareness',
				progress: 0,
				baseDuration: TRAINING_BASE_DURATION,
				duration: TRAINING_BASE_DURATION,
				expCost: TRAINING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'wisdom'
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

		// Stop any currently active actions in this map
		for (const a of Object.values(actions)) {
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
			const osmosisSpeed = this.deps.getOsmosisSpeedMultiplier();
			const globalSpeed = this.deps.getGlobalIdleSpeedMultiplier();
			const combinedSpeed = osmosisSpeed * globalSpeed;
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
	 * Completes a training action and returns the result
	 * @param actionId - ID of the training action to complete
	 */
	private completeTrainingAction(actionId: string): ActionCompletionResult | null {
		const action = this.trainingActions[actionId];
		if (!action || !action.isActive) return null;

		// Handle osmosis completion
		if (actionId === 'practice-osmosis') {
			const bonus = this.deps.getOsmosisExpBonus();
			const expGained = OSMOSIS_BASE_REWARD + bonus;

			// Osmosis always restarts
			action.progress = 0;
			action.lastUpdate = Date.now();

			return {
				expGained,
				shouldContinue: true
			};
		}

		// Handle stat training completion
		if (action.trainsStat) {
			const stat = action.trainsStat;
			const cost = this.deps.getStatLevelCost(stat);

			// Give back some EXP (TRAINING_REWARD base, with crit chance for bonus)
			let expReward = TRAINING_REWARD;
			const isCrit = Math.random() < this.deps.getCritChance();
			if (isCrit) {
				expReward = Math.floor(expReward * TRAINING_CRIT_MULTIPLIER);
			}

			// Check if we can afford to level up the stat
			const currentExp = this.deps.getCurrentExp();
			if (currentExp >= cost) {
				// Can afford - return result with stat gain
				action.progress = 0;
				action.lastUpdate = Date.now();

				return {
					expGained: expReward,
					statGained: {
						stat,
						amount: 1
					},
					expCost: cost,
					shouldContinue: true
				};
			} else {
				// Can't afford - stop the action
				action.isActive = false;
				action.progress = 0;
				action.lastUpdate = Date.now();

				return {
					expGained: expReward,
					shouldContinue: false
				};
			}
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
