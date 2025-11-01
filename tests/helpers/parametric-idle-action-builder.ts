/**
 * Improved IdleActionManager builder for v0.1.5 testing
 *
 * This builder abstracts constants and formulas, making tests resilient to
 * number tuning while still validating behavior and relationships.
 *
 * Key additions:
 * - Parametric training rewards and crit multipliers
 * - Stat EXP accumulation tracking and level-up simulation
 * - Realistic stat progression that responds to completed actions
 * - Flexible training costs based on stat levels
 */

import {
	IdleActionManager,
	type IdleActionDependencies,
	type ActionCompletionResult
} from '../../src/lib/managers/idle-action-manager';
import type { Stats } from '../../src/lib/game';

/**
 * Advanced builder with parametric behavior for v0.1.5 stat EXP system
 *
 * Usage:
 * ```ts
 * const manager = new ParametricIdleActionBuilder()
 *   .withTrainingRewardOf(10)
 *   .withStatLevelCostOf(1, 100)
 *   .withCurrentExp(500)
 *   .build();
 * ```
 */
export class ParametricIdleActionBuilder {
	private deps: IdleActionDependencies = {
		getTrainingSpeedMultiplier: () => 1.0,
		getTrainingCostMultiplier: () => 1.0,
		getOsmosisExpBonus: () => 0,
		getGlobalIdleSpeedMultiplier: () => 1.0,
		getOsmosisSpeedMultiplier: () => 1.0,
		getStatLevelCost: () => 100, // Legacy - kept for migration compatibility
		getStatTrainingCost: () => 10,
		addStatExp: () => ({ success: true, leveledUp: false, newLevel: 1 }),
		getCritChance: () => 0.0,
		getCurrentExp: () => 1000
	};

	// Training rewards (base stat EXP per training completion)
	private trainingReward: number = 10;

	// Crit multiplier (how much extra stat EXP on crit)
	private critMultiplier: number = 2;

	// Stat EXP requirements for each level
	// Default: 100, 150, 225, ... (100 * 1.5^(level-1))
	private statLevelCosts: { [level: number]: number } = this.generateDefaultStatCosts();

	// Current state of stats and stat EXP
	private statLevels: Stats = {
		strength: 1,
		dexterity: 1,
		intelligence: 1,
		wisdom: 1,
		strengthExp: 0,
		dexterityExp: 0,
		intelligenceExp: 0,
		wisdomExp: 0
	};

	// Training cost formula: baseCost * (1 + (statLevel - 1) * 0.3)
	private trainingCostBase: number = 10;

	// Generate default stat costs: 100 * (1.5 ^ (level - 1))
	private generateDefaultStatCosts(): { [level: number]: number } {
		const costs: { [level: number]: number } = {};
		for (let i = 1; i <= 20; i++) {
			costs[i] = Math.round((100 * Math.pow(1.5, i - 1)) / 5) * 5; // Round to nearest 5
		}
		return costs;
	}

	/**
	 * Set base stat EXP reward per training completion
	 * Default: 10
	 */
	withTrainingRewardOf(amount: number): this {
		this.trainingReward = amount;
		return this;
	}

	/**
	 * Set crit multiplier for training EXP
	 * Default: 2 (2x stat EXP on crit)
	 */
	withCritMultiplierOf(multiplier: number): this {
		this.critMultiplier = multiplier;
		return this;
	}

	/**
	 * Set stat EXP cost for a specific level
	 * Example: .withStatLevelCostOf(1, 100) = need 100 stat EXP to go level 1→2
	 *
	 * Affects:
	 * - When addStatExp() triggers leveledUp: true
	 * - Progression pacing
	 *
	 * Does NOT affect:
	 * - Training cost (getStatTrainingCost)
	 * - Actual training numbers
	 */
	withStatLevelCostOf(level: number, cost: number): this {
		this.statLevelCosts[level] = cost;
		return this;
	}

	/**
	 * Set all stat EXP costs at once
	 * Useful for testing different progression curves
	 */
	withAllStatLevelCosts(costs: { [level: number]: number }): this {
		this.statLevelCosts = costs;
		return this;
	}

	/**
	 * Set initial stat levels and EXP
	 *
	 * Example:
	 * ```ts
	 * .withInitialStats({
	 *   strength: 5,        // Strength is level 5
	 *   strengthExp: 50     // With 50 EXP toward level 6
	 * })
	 * ```
	 */
	withInitialStats(stats: Partial<Stats>): this {
		this.statLevels = { ...this.statLevels, ...stats };
		return this;
	}

	/**
	 * Set training cost (character EXP required to START training)
	 * Default: 10
	 *
	 * Note: Actual cost scales with stat level in the real game
	 * This sets the BASE cost before scaling.
	 */
	withTrainingCostOf(baseCost: number): this {
		this.trainingCostBase = baseCost;
		return this;
	}

	/**
	 * Set training speed multiplier from upgrades
	 * 1.0 = normal, 0.5 = 50% faster, 2.0 = 50% slower
	 */
	withTrainingSpeed(multiplier: number): this {
		this.deps.getTrainingSpeedMultiplier = () => multiplier;
		return this;
	}

	/**
	 * Set training cost multiplier (cost reduction upgrades)
	 * 1.0 = normal, 0.8 = 20% cheaper, 1.2 = 20% more expensive
	 */
	withTrainingCostMultiplier(multiplier: number): this {
		this.deps.getTrainingCostMultiplier = () => multiplier;
		return this;
	}

	/**
	 * Set osmosis EXP bonus from upgrades
	 */
	withOsmosisBonus(bonus: number): this {
		this.deps.getOsmosisExpBonus = () => bonus;
		return this;
	}

	/**
	 * Set global idle speed multiplier
	 */
	withGlobalIdleSpeed(multiplier: number): this {
		this.deps.getGlobalIdleSpeedMultiplier = () => multiplier;
		return this;
	}

	/**
	 * Set osmosis-specific speed multiplier
	 */
	withOsmosisSpeed(multiplier: number): this {
		this.deps.getOsmosisSpeedMultiplier = () => multiplier;
		return this;
	}

	/**
	 * Set crit chance (0.0 to 1.0)
	 */
	withCritChance(chance: number): this {
		this.deps.getCritChance = () => chance;
		return this;
	}

	/**
	 * Set current character EXP balance
	 */
	withCurrentExp(exp: number): this {
		this.deps.getCurrentExp = () => exp;
		return this;
	}

	/**
	 * Create the addStatExp function that simulates stat progression
	 *
	 * This is the CORE simulation:
	 * 1. Add stat EXP to current stat
	 * 2. Check if accumulated enough to level up
	 * 3. Return leveledUp indicator
	 *
	 * This function is called by IdleActionManager.completeTrainingAction()
	 */
	private createAddStatExpFunction(): IdleActionDependencies['addStatExp'] {
		return (stat: string, amount: number) => {
			const expKey = `${stat}Exp` as keyof Stats;
			const levelKey = stat as keyof Stats;

			const currentExp = this.statLevels[expKey] as number;
			const currentLevel = this.statLevels[levelKey] as number;

			// Get the EXP requirement for the CURRENT level
			// (i.e., to go from current → current+1)
			const requiredExp = this.statLevelCosts[currentLevel] || 100;

			const newExp = currentExp + amount;

			let leveledUp = false;
			let newLevel = currentLevel;

			if (newExp >= requiredExp) {
				// Level up! Reset EXP counter.
				this.statLevels[expKey] = newExp - requiredExp; // Carry over overflow
				this.statLevels[levelKey] = currentLevel + 1;
				leveledUp = true;
				newLevel = currentLevel + 1;
			} else {
				// Not enough yet, accumulate EXP
				this.statLevels[expKey] = newExp;
			}

			return { success: true, leveledUp, newLevel };
		};
	}

	/**
	 * Build the manager with current configuration
	 */
	build(): IdleActionManager {
		// Wire up the parametric addStatExp function
		this.deps.addStatExp = this.createAddStatExpFunction();

		// Wire up training cost function
		this.deps.getStatTrainingCost = () => this.trainingCostBase;

		return new IdleActionManager(this.deps);
	}

	/**
	 * Get current stat state (for assertions in tests)
	 * Useful to check stat levels after training completions
	 */
	getStats(): Stats {
		return { ...this.statLevels };
	}

	/**
	 * Get stat EXP for a specific stat (for detailed assertions)
	 */
	getStatExp(stat: string): number {
		const expKey = `${stat}Exp` as keyof Stats;
		return this.statLevels[expKey] as number;
	}

	/**
	 * Get stat level for a specific stat
	 */
	getStatLevel(stat: string): number {
		const levelKey = stat as keyof Stats;
		return this.statLevels[levelKey] as number;
	}
}

/**
 * Simple builder for basic tests (backwards compatible)
 *
 * This is the original builder interface - use for simple tests
 * that don't need parametric stat progression.
 *
 * For tests that need stat level-ups, use ParametricIdleActionBuilder instead.
 */
export class IdleActionManagerBuilder {
	private deps: IdleActionDependencies = {
		getTrainingSpeedMultiplier: () => 1.0,
		getTrainingCostMultiplier: () => 1.0,
		getOsmosisExpBonus: () => 0,
		getGlobalIdleSpeedMultiplier: () => 1.0,
		getOsmosisSpeedMultiplier: () => 1.0,
		getStatLevelCost: () => 100,
		getStatTrainingCost: () => 10,
		addStatExp: () => ({ success: true, leveledUp: false, newLevel: 1 }),
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

	/**
	 * Configure addStatExp for testing stat level-ups
	 *
	 * Example:
	 * ```ts
	 * .withStatLevelUp(true) // Always level up
	 * .withStatLevelUp(false) // Never level up
	 * ```
	 */
	withStatLevelUp(shouldLevelUp: boolean): this {
		this.deps.addStatExp = () => ({
			success: true,
			leveledUp: shouldLevelUp,
			newLevel: shouldLevelUp ? 2 : 1
		});
		return this;
	}

	build(): IdleActionManager {
		return new IdleActionManager(this.deps);
	}
}
