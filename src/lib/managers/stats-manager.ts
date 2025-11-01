import {
	calculateStatLevelCost,
	calculateStatExpRequired,
	calculateStatTrainingCost,
	calculateMaxStatLevel
} from '../utils/calculations';
import type { Stats } from '../game';

/**
 * Result of attempting to increase a stat
 */
export interface StatIncreaseResult {
	success: boolean;
	newLevel: number;
	expCost: number;
	error?: string;
}

/**
 * Result of attempting to add stat EXP and potentially level up
 */
export interface StatExpGainResult {
	success: boolean;
	statExpAdded: number;
	leveledUp: boolean;
	newLevel: number;
	newStatExp: number;
	error?: string;
}

/**
 * Dependencies required by StatsManager
 */
export interface StatsManagerDependencies {
	/** Get current character level for stat cap enforcement */
	getCharacterLevel: () => number;
}

/**
 * Manages character stat progression and calculations
 * Handles stat levels, cost calculations, and mutations
 */
export class StatsManager {
	private stats: Stats;
	private deps?: StatsManagerDependencies;

	/**
	 * Creates a new StatsManager with default or provided stats
	 * @param initialStats - Starting stat values (defaults to all 1s with 0 EXP)
	 * @param deps - Dependencies for character level checks
	 */
	constructor(initialStats?: Stats, deps?: StatsManagerDependencies) {
		this.stats = initialStats || {
			// Stat levels (start at 1)
			strength: 1,
			dexterity: 1,
			intelligence: 1,
			wisdom: 1,
			// Stat EXP (start at 0)
			strengthExp: 0,
			dexterityExp: 0,
			intelligenceExp: 0,
			wisdomExp: 0
		};
		this.deps = deps;
	}

	/**
	 * Get all stats as a read-only object
	 */
	getStats(): Stats {
		return { ...this.stats };
	}

	/**
	 * Get the current level of a specific stat
	 * @param stat - The stat to query
	 */
	getStatLevel(stat: keyof Stats): number {
		return this.stats[stat];
	}

	/**
	 * Calculate the EXP cost to level up a specific stat
	 * @param stat - The stat to calculate cost for
	 * @returns EXP required to increase this stat by 1
	 */
	getStatLevelCost(stat: keyof Stats): number {
		return calculateStatLevelCost(this.stats[stat]);
	}

	/**
	 * Increase a stat by the specified amount
	 * @param stat - The stat to increase
	 * @param amount - How much to increase the stat (default: 1)
	 * @returns Result containing success status, new level, and exp cost
	 */
	increaseStat(stat: keyof Stats, amount: number = 1): StatIncreaseResult {
		if (amount < 0) {
			return {
				success: false,
				newLevel: this.stats[stat],
				expCost: 0,
				error: 'Cannot increase stat by negative amount'
			};
		}

		this.stats[stat] += amount;
		const newLevel = this.stats[stat];

		return {
			success: true,
			newLevel,
			expCost: this.getStatLevelCost(stat)
		};
	}

	/**
	 * Set a specific stat to an exact value
	 * @param stat - The stat to set
	 * @param value - The new value
	 */
	setStat(stat: keyof Stats, value: number): void {
		if (value < 1) {
			this.stats[stat] = 1; // Minimum stat value is 1
		} else {
			this.stats[stat] = value;
		}
	}

	/**
	 * Set all stats from a Stats object (used for loading saved games)
	 * @param stats - The stats to load
	 */
	setStats(stats: Stats): void {
		this.stats = { ...stats };
	}

	/**
	 * Get the current EXP for a specific stat
	 * @param stat - The stat to query (only the base stat names)
	 */
	getStatExp(
		stat: keyof Pick<Stats, 'strength' | 'dexterity' | 'intelligence' | 'wisdom'>
	): number {
		const expKey = `${stat}Exp` as keyof Stats;
		return this.stats[expKey] as number;
	}

	/**
	 * Get the EXP required for the next level of a specific stat
	 * @param stat - The stat to query
	 */
	getStatExpRequired(
		stat: keyof Pick<Stats, 'strength' | 'dexterity' | 'intelligence' | 'wisdom'>
	): number {
		const currentLevel = this.getStatLevel(stat);
		return calculateStatExpRequired(currentLevel);
	}

	/**
	 * Get the character EXP cost to start training a specific stat
	 * @param stat - The stat to query
	 */
	getStatTrainingCost(
		stat: keyof Pick<Stats, 'strength' | 'dexterity' | 'intelligence' | 'wisdom'>
	): number {
		const currentLevel = this.getStatLevel(stat);
		return calculateStatTrainingCost(currentLevel);
	}

	/**
	 * Get the maximum allowed level for a stat based on character level
	 * @param stat - The stat to query
	 */
	getMaxStatLevel(
		stat: keyof Pick<Stats, 'strength' | 'dexterity' | 'intelligence' | 'wisdom'>
	): number {
		if (!this.deps?.getCharacterLevel) {
			return 100; // Fallback for when no character level dependency
		}
		return calculateMaxStatLevel(this.deps.getCharacterLevel());
	}

	/**
	 * Check if a stat can be leveled up (has enough EXP and hasn't hit cap)
	 * @param stat - The stat to check
	 */
	canStatLevelUp(
		stat: keyof Pick<Stats, 'strength' | 'dexterity' | 'intelligence' | 'wisdom'>
	): boolean {
		const currentLevel = this.getStatLevel(stat);
		const currentExp = this.getStatExp(stat);
		const requiredExp = this.getStatExpRequired(stat);
		const maxLevel = this.getMaxStatLevel(stat);

		return currentExp >= requiredExp && currentLevel < maxLevel;
	}

	/**
	 * Add EXP to a stat and automatically level up if enough EXP is gained
	 * @param stat - The stat to add EXP to
	 * @param expAmount - Amount of stat EXP to add (default: 10 from design doc)
	 */
	addStatExp(
		stat: keyof Pick<Stats, 'strength' | 'dexterity' | 'intelligence' | 'wisdom'>,
		expAmount: number = 10
	): StatExpGainResult {
		const expKey = `${stat}Exp` as keyof Stats;
		const currentLevel = this.getStatLevel(stat);
		const currentExp = this.getStatExp(stat);
		const maxLevel = this.getMaxStatLevel(stat);

		// Check if stat is already at cap
		if (currentLevel >= maxLevel) {
			return {
				success: false,
				statExpAdded: 0,
				leveledUp: false,
				newLevel: currentLevel,
				newStatExp: currentExp,
				error: 'Stat is at maximum level for current character level'
			};
		}

		// Add EXP
		const newExp = currentExp + expAmount;
		(this.stats[expKey] as number) = newExp;

		// Check for level up
		const requiredExp = this.getStatExpRequired(stat);
		let leveledUp = false;
		let newLevel = currentLevel;

		if (newExp >= requiredExp && currentLevel < maxLevel) {
			// Level up!
			newLevel = currentLevel + 1;
			this.stats[stat] = newLevel;

			// Subtract the required EXP for the level
			(this.stats[expKey] as number) = newExp - requiredExp;
			leveledUp = true;
		}

		return {
			success: true,
			statExpAdded: expAmount,
			leveledUp,
			newLevel,
			newStatExp: this.stats[expKey] as number
		};
	}

	/**
	 * Update dependencies (used when character level changes)
	 * @param deps - New dependencies
	 */
	updateDependencies(deps: StatsManagerDependencies): void {
		this.deps = deps;
	}
}
