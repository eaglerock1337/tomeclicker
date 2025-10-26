import { calculateStatLevelCost } from '../utils/calculations';
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
 * Dependencies required by StatsManager (currently none, but placeholder for future)
 */
export interface StatsManagerDependencies {
	// Placeholder for future dependencies (e.g., character level for stat caps)
}

/**
 * Manages character stat progression and calculations
 * Handles stat levels, cost calculations, and mutations
 */
export class StatsManager {
	private stats: Stats;

	/**
	 * Creates a new StatsManager with default or provided stats
	 * @param initialStats - Starting stat values (defaults to all 1s)
	 * @param deps - Optional dependencies for future features
	 */
	constructor(initialStats?: Stats, deps?: StatsManagerDependencies) {
		this.stats = initialStats || { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };
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

	// Future: Stat caps based on character level
	// getStatCap(stat: keyof Stats, characterLevel: number): number {
	//   return characterLevel * 10;
	// }

	// Future: Equipment bonuses
	// getEffectiveStatValue(stat: keyof Stats, equipment?: Equipment): number {
	//   let value = this.stats[stat];
	//   // Add equipment bonuses when implemented
	//   return value;
	// }
}
