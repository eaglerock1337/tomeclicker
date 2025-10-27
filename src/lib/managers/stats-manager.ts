import {
	calculateStatLevelCost,
	calculateStatXpForLevel,
	getStatLevelFromXp
} from '../utils/calculations';
import type { Stats } from '../game';

/**
 * Stat experience tracking (separate from stat levels)
 */
export interface StatXp {
	strength: number;
	dexterity: number;
	intelligence: number;
	wisdom: number;
}

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
 * Result of adding stat XP
 */
export interface StatXpGainResult {
	xpGained: number;
	levelsGained: number;
	newLevel: number;
	newXp: number;
}

/**
 * Dependencies required by StatsManager (currently none, but placeholder for future)
 */
export interface StatsManagerDependencies {
	// Placeholder for future dependencies (e.g., character level for stat caps)
}

/**
 * Manages character stat progression and calculations
 * Handles stat levels, stat XP, cost calculations, and mutations
 */
export class StatsManager {
	private stats: Stats;
	private statXp: StatXp;

	/**
	 * Creates a new StatsManager with default or provided stats
	 * @param initialStats - Starting stat values (defaults to all 1s)
	 * @param deps - Optional dependencies for future features
	 */
	constructor(initialStats?: Stats, initialStatXp?: StatXp, deps?: StatsManagerDependencies) {
		this.stats = initialStats || { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };
		this.statXp = initialStatXp || { strength: 0, dexterity: 0, intelligence: 0, wisdom: 0 };
	}

	/**
	 * Get all stats as a read-only object
	 */
	getStats(): Stats {
		return { ...this.stats };
	}

	/**
	 * Get all stat XP as a read-only object
	 */
	getStatXp(): StatXp {
		return { ...this.statXp };
	}

	/**
	 * Get the current level of a specific stat
	 * @param stat - The stat to query
	 */
	getStatLevel(stat: keyof Stats): number {
		return this.stats[stat];
	}

	/**
	 * Get the current XP of a specific stat
	 * @param stat - The stat to query
	 */
	getStatXpAmount(stat: keyof Stats): number {
		return this.statXp[stat];
	}

	/**
	 * Get the XP required for a stat's next level
	 * @param stat - The stat to check
	 * @returns XP required to reach next level
	 */
	getStatXpForNextLevel(stat: keyof Stats): number {
		return calculateStatXpForLevel(this.stats[stat] + 1);
	}

	/**
	 * Get stat XP progress information
	 * @param stat - The stat to check
	 * @returns Object with current XP, required XP, and percentage
	 */
	getStatXpProgress(stat: keyof Stats): { current: number; required: number; percentage: number } {
		const current = this.statXp[stat];
		const required = this.getStatXpForNextLevel(stat);
		const percentage = required > 0 ? (current / required) * 100 : 0;
		return { current, required, percentage };
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
	 * Set all stat XP from a StatXp object (used for loading saved games)
	 * @param statXp - The stat XP to load
	 */
	setStatXp(statXp: StatXp): void {
		this.statXp = { ...statXp };
	}

	/**
	 * Add XP to a stat and handle level-ups automatically
	 * @param stat - The stat to add XP to
	 * @param amount - Amount of stat XP to add
	 * @returns Result with XP gained, levels gained, new level, and new XP
	 */
	addStatXp(stat: keyof Stats, amount: number): StatXpGainResult {
		if (amount < 0) {
			return {
				xpGained: 0,
				levelsGained: 0,
				newLevel: this.stats[stat],
				newXp: this.statXp[stat]
			};
		}

		this.statXp[stat] += amount;
		const initialLevel = this.stats[stat];
		let levelsGained = 0;

		// Check for level-ups
		while (this.statXp[stat] >= this.getStatXpForNextLevel(stat)) {
			const xpNeeded = this.getStatXpForNextLevel(stat);
			this.statXp[stat] -= xpNeeded;
			this.stats[stat] += 1;
			levelsGained += 1;
		}

		return {
			xpGained: amount,
			levelsGained,
			newLevel: this.stats[stat],
			newXp: this.statXp[stat]
		};
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
