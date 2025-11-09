import type { Stats } from '../game';
import {
	STUDYING_BASE_COST,
	STUDYING_REWARD,
	STUDYING_CRIT_MULTIPLIER,
	RUMINATE_BASE_REWARD,
	RUMINATE_BASE_DURATION,
	STUDYING_BASE_DURATION,
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
	calculateStudyingCritDamage
} from '../utils/calculations';

/**
 * Represents a studying or meditation action
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
	/** What stat this studies (if any) - only base stats, not EXP properties */
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
	/** EXP cost for the stat level (if studying) */
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
	/** Get studying speed multiplier from upgrades */
	getStudyingSpeedMultiplier: () => number;
	/** Get studying cost multiplier from upgrades */
	getStudyingCostMultiplier: () => number;
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
	/** Get character EXP cost to start studying a specific stat (v0.1.5+) */
	getStatStudyingCost: (
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	) => number;
	/** Add stat EXP and handle level ups (v0.1.5+) */
	addStatExp: (
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>,
		amount: number
	) => { success: boolean; leveledUp: boolean; newLevel: number };
	/** Get current crit chance (for studying rewards) */
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
	/** Get studying crit chance from upgrades */
	getStudyingCritChance: () => number;
	/** Get studying crit damage multiplier from upgrades */
	getStudyingCritDamage: () => number;
	/** Get max level for a specific stat */
	getMaxStatLevel: (
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	) => number;
	/** Get current level for a specific stat */
	getCurrentStatLevel: (
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	) => number;
}

/**
 * Manages all idle action state and lifecycle
 * Handles studying, meditation, and ruminate actions
 */
export class IdleActionManager {
	private studyingActions: { [key: string]: IdleAction };
	private meditationActions: { [key: string]: IdleAction };

	constructor(private deps: IdleActionDependencies) {
		this.studyingActions = this.initializeStudyingActions();
		this.meditationActions = this.initializeMeditationActions();
	}

	/**
	 * Initializes studying actions for stat development
	 */
	private initializeStudyingActions(): { [key: string]: IdleAction } {
		return {
			'study-research': {
				id: 'study-research',
				name: 'Research',
				description: 'Study academic texts to gain experience and insights',
				progress: 0,
				baseDuration: RUMINATE_BASE_DURATION,
				duration: RUMINATE_BASE_DURATION,
				expCost: 0, // Free to use!
				isActive: false,
				lastUpdate: Date.now()
			},
			'study-athletics': {
				id: 'study-athletics',
				name: 'Study Athletics',
				description: 'Theoretical Athletic Techniques',
				progress: 0,
				baseDuration: STUDYING_BASE_DURATION,
				duration: STUDYING_BASE_DURATION,
				expCost: STUDYING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'strength'
			},
			'study-kinetics': {
				id: 'study-kinetics',
				name: 'Study Kinetics',
				description: 'Kintetic Reflex Metholodogies',
				progress: 0,
				baseDuration: STUDYING_BASE_DURATION,
				duration: STUDYING_BASE_DURATION,
				expCost: STUDYING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'agility'
			},
			'study-selfdefense': {
				id: 'study-selfdefense',
				name: 'Study Self-Defense',
				description: 'Academic Principles of Defensive Tactics',
				progress: 0,
				baseDuration: STUDYING_BASE_DURATION,
				duration: STUDYING_BASE_DURATION,
				expCost: STUDYING_BASE_COST,
				isActive: false,
				lastUpdate: Date.now(),
				trainsStat: 'willpower'
			},
			'study-fitness': {
				id: 'study-fitness',
				name: 'Study Fitness',
				description: 'Application of Physical Fitness Theory',
				progress: 0,
				baseDuration: STUDYING_BASE_DURATION,
				duration: STUDYING_BASE_DURATION,
				expCost: STUDYING_BASE_COST,
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
	 * Gets all studying actions
	 */
	getStudyingActions(): { [key: string]: IdleAction } {
		return this.studyingActions;
	}

	/**
	 * Gets all meditation actions
	 */
	getMeditationActions(): { [key: string]: IdleAction } {
		return this.meditationActions;
	}

	/**
	 * Gets a specific studying action
	 */
	getStudyingAction(actionId: string): IdleAction | undefined {
		return this.studyingActions[actionId];
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
	migrateStudyingActions(savedActions: { [key: string]: IdleAction }): void {
		const freshActions = this.initializeStudyingActions();

		// Migration map for renamed actions (Training → Study rebrand)
		const migrationMap: { [oldId: string]: string } = {
			'practice-ruminate': 'study-research',
			'train-strength': 'study-athletics',
			'train-agility': 'study-kinetics',
			'train-willpower': 'study-selfdefense',
			'train-endurance': 'study-fitness'
		};

		// Preserve progress and state from saved actions
		for (const actionId in freshActions) {
			// Check both new ID and old ID (for migration)
			const savedAction =
				savedActions[actionId] ||
				savedActions[
					Object.keys(migrationMap).find((oldId) => migrationMap[oldId] === actionId) || ''
				];

			if (savedAction) {
				freshActions[actionId].progress = savedAction.progress;
				freshActions[actionId].isActive = savedAction.isActive;
				freshActions[actionId].lastUpdate = savedAction.lastUpdate;
				if (savedAction.completed !== undefined) {
					freshActions[actionId].completed = savedAction.completed;
				}
			}
		}

		this.studyingActions = freshActions;
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
	startIdleAction(actionMap: 'studying' | 'meditation', actionId: string): boolean {
		const actions = actionMap === 'studying' ? this.studyingActions : this.meditationActions;
		const action = actions[actionId];
		if (!action) return false;

		// Check if already completed (for one-time actions)
		if (action.oneTime && action.completed) return false;

		// For stat studying (v0.1.5+): Check character EXP cost and charge upfront
		if (action.trainsStat && actionId !== 'study-research') {
			const stat = action.trainsStat;
			const cost = this.deps.getStatStudyingCost(stat);
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
		if (actionId === 'study-research') {
			// Ruminate gets both ruminate-specific and global idle speed bonuses
			const ruminateSpeed = this.deps.getRuminateSpeedMultiplier();
			const globalSpeed = this.deps.getGlobalIdleSpeedMultiplier();
			const combinedSpeed = ruminateSpeed * globalSpeed;
			action.duration = Math.floor(action.baseDuration / combinedSpeed);
		} else if (action.trainsStat) {
			// Stat studying gets studying speed and global idle speed
			const trainingSpeed = this.deps.getStudyingSpeedMultiplier();
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
	stopIdleAction(actionMap: 'studying' | 'meditation', actionId: string): void {
		const actions = actionMap === 'studying' ? this.studyingActions : this.meditationActions;
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

		// Update studying actions
		for (const action of Object.values(this.studyingActions)) {
			if (action.isActive) {
				// For stat studying at completion, check if blocked before updating progress
				// This freezes progress when player can't afford restart or stat is at cap
				if (action.trainsStat && action.progress >= 1.0) {
					const cost = this.deps.getStatStudyingCost(action.trainsStat);
					const currentStatLevel = this.deps.getCurrentStatLevel(action.trainsStat);
					const maxStatLevel = this.deps.getMaxStatLevel(action.trainsStat);
					const canAfford = this.deps.getCurrentExp() >= cost;
					const atCap = currentStatLevel >= maxStatLevel;

					if (!canAfford || atCap) {
						// Blocked - freeze progress at 1.0, don't update
						continue;
					}
				}

				const elapsed = now - action.lastUpdate;
				action.progress += elapsed / action.duration;
				action.lastUpdate = now;

				if (action.progress >= 1.0) {
					const result = this.completeStudyingAction(action.id);
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
	 * Get the character EXP cost to start a studying action (v0.1.5+)
	 * @param actionId - ID of the studying action
	 * @returns Character EXP cost, or 0 if not a stat studying action
	 */
	getStudyingCost(actionId: string): number {
		const action = this.studyingActions[actionId];
		if (!action || !action.trainsStat || actionId === 'practice-ruminate') {
			return 0; // Ruminate is free, non-studying actions have no cost
		}

		return this.deps.getStatStudyingCost(action.trainsStat);
	}

	/**
	 * Check if a training action can be started (has enough character EXP)
	 * @param actionId - ID of the training action
	 * @returns True if the action can be started
	 */
	canStartStudying(actionId: string): boolean {
		const action = this.studyingActions[actionId];
		if (!action || !action.trainsStat || actionId === 'practice-ruminate') {
			return true; // Ruminate and non-training actions can always be started
		}

		const cost = this.getStudyingCost(actionId);
		return this.deps.getCurrentExp() >= cost;
	}

	/**
	 * Completes a training action and returns the result
	 * @param actionId - ID of the training action to complete
	 */
	private completeStudyingAction(actionId: string): ActionCompletionResult | null {
		const action = this.studyingActions[actionId];
		if (!action || !action.isActive) return null;

		// Handle ruminate completion
		if (actionId === 'study-research') {
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
			const critChance = this.deps.getStudyingCritChance();
			const critDamage = this.deps.getStudyingCritDamage();

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

			// Check if player can afford AND stat not at cap to RESTART training
			const cost = this.deps.getStatStudyingCost(stat);
			const currentExp = this.deps.getCurrentExp();
			const currentStatLevel = this.deps.getCurrentStatLevel(stat);
			const maxStatLevel = this.deps.getMaxStatLevel(stat);
			const canAfford = currentExp >= cost;
			const atCap = currentStatLevel >= maxStatLevel;

			if (canAfford && !atCap) {
				// Can restart - reset progress and signal to deduct cost
				action.progress = 0;
				action.lastUpdate = Date.now();

				return {
					expGained: 0,
					statGained: statResult.leveledUp ? { stat, amount: 1 } : undefined,
					expCost: cost, // Signal to game.ts to deduct this cost for restart
					shouldContinue: true
				};
			} else {
				// Can't restart (blocked) - don't reset progress
				// Progress will stay at 1.0+ and get frozen in update loop
				return {
					expGained: 0,
					statGained: statResult.leveledUp ? { stat, amount: 1 } : undefined,
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
		// (Adventure mode unlock removed - unlocked through stats instead)

		// Reset action
		action.isActive = false;
		action.progress = 0;
		action.lastUpdate = Date.now();

		return result;
	}
}
