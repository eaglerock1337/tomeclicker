import { describe, it, expect } from 'vitest';
import { StatsManager } from '../../src/lib/managers/stats-manager';
import type { Stats } from '../../src/lib/game';

/**
 * Test fixture builder for StatsManager
 */
class StatsManagerBuilder {
	private stats: Stats = {
		strength: 1,
		agility: 1,
		willpower: 1,
		endurance: 1,
		intelligence: 1,
		wisdom: 1,
		strengthExp: 0,
		agilityExp: 0,
		willpowerExp: 0,
		enduranceExp: 0,
		intelligenceExp: 0,
		wisdomExp: 0
	};

	withStat(stat: keyof Stats, level: number): this {
		this.stats[stat] = level;
		return this;
	}

	withAllStats(level: number): this {
		this.stats = {
			strength: level,
			agility: level,
			willpower: 1,
			endurance: 1,
			intelligence: level,
			wisdom: level,
			strengthExp: 0,
			agilityExp: 0,
			willpowerExp: 0,
			enduranceExp: 0,
			intelligenceExp: 0,
			wisdomExp: 0
		};
		return this;
	}

	withStrength(level: number): this {
		this.stats.strength = level;
		return this;
	}

	withAgility(level: number): this {
		this.stats.agility = level;
		return this;
	}

	withWillpower(level: number): this {
		this.stats.willpower = level;
		return this;
	}

	withEndurance(level: number): this {
		this.stats.endurance = level;
		return this;
	}

	build(): StatsManager {
		return new StatsManager(this.stats);
	}

	getStats(): Stats {
		return this.stats;
	}
}

describe('StatsManager', () => {
	describe('Initialization', () => {
		it('should create StatsManager with default stats (all 0s - locked)', () => {
			const manager = new StatsManager();
			const stats = manager.getStats();

			// Active stats (strength, agility, willpower, endurance)
			expect(stats.strength).toBe(0);
			expect(stats.agility).toBe(0);
			expect(stats.willpower).toBe(0);
			expect(stats.endurance).toBe(0);
			// Future stats (intelligence, wisdom)
			expect(stats.intelligence).toBe(0);
			expect(stats.wisdom).toBe(0);
		});

		it('should create StatsManager with custom stats', () => {
			const customStats = {
				strength: 10,
				agility: 5,
				willpower: 8,
				endurance: 3,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			};
			const manager = new StatsManager(customStats);
			const stats = manager.getStats();

			expect(stats.strength).toBe(10);
			expect(stats.agility).toBe(5);
			expect(stats.willpower).toBe(8);
			expect(stats.endurance).toBe(3);
		});

		it('should return a copy of stats (not a reference)', () => {
			const manager = new StatsManager();
			const stats1 = manager.getStats();
			const stats2 = manager.getStats();

			expect(stats1).not.toBe(stats2); // Different objects
			expect(stats1).toEqual(stats2); // Same values
		});
	});

	describe('Get Stat Level', () => {
		it('should get individual stat levels for active stats', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(15)
				.withAgility(10)
				.withWillpower(20)
				.withEndurance(5)
				.build();

			expect(manager.getStatLevel('strength')).toBe(15);
			expect(manager.getStatLevel('agility')).toBe(10);
			expect(manager.getStatLevel('willpower')).toBe(20);
			expect(manager.getStatLevel('endurance')).toBe(5);
		});

		it('should return 0 for default stats (locked)', () => {
			const manager = new StatsManager();

			// Active stats
			expect(manager.getStatLevel('strength')).toBe(0);
			expect(manager.getStatLevel('agility')).toBe(0);
			expect(manager.getStatLevel('willpower')).toBe(0);
			expect(manager.getStatLevel('endurance')).toBe(0);
			// Future stats
			expect(manager.getStatLevel('intelligence')).toBe(0);
			expect(manager.getStatLevel('wisdom')).toBe(0);
		});
	});

	describe('Get Stat Level Cost', () => {
		it('should calculate cost for stat level 1 (unlocked)', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(1)
				.withAgility(1)
				.withWillpower(1)
				.withEndurance(1)
				.build();

			// From calculations.ts: level 1 should cost 100 EXP
			expect(manager.getStatLevelCost('strength')).toBe(100);
			expect(manager.getStatLevelCost('agility')).toBe(100);
			expect(manager.getStatLevelCost('willpower')).toBe(100);
			expect(manager.getStatLevelCost('endurance')).toBe(100);
		});

		it('should calculate increasing cost for higher stat levels', () => {
			const manager = new StatsManagerBuilder().withStrength(10).build();

			const cost = manager.getStatLevelCost('strength');
			expect(cost).toBeGreaterThan(100); // Cost should scale up from level 1 cost
		});

		it('should calculate different costs for different stat levels', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(1)
				.withAgility(10)
				.withWillpower(20)
				.build();

			const costStr = manager.getStatLevelCost('strength');
			const costAgi = manager.getStatLevelCost('agility');
			const costWil = manager.getStatLevelCost('willpower');

			expect(costAgi).toBeGreaterThan(costStr);
			expect(costWil).toBeGreaterThan(costAgi);
		});
	});

	describe('Increase Stat', () => {
		it('should increase stat by 1 (default amount)', () => {
			const manager = new StatsManagerBuilder().withStrength(5).build();

			const result = manager.increaseStat('strength');

			expect(result.success).toBe(true);
			expect(result.newLevel).toBe(6);
			expect(manager.getStatLevel('strength')).toBe(6);
		});

		it('should increase stat by custom amount', () => {
			const manager = new StatsManagerBuilder().withAgility(10).build();

			const result = manager.increaseStat('agility', 5);

			expect(result.success).toBe(true);
			expect(result.newLevel).toBe(15);
			expect(manager.getStatLevel('agility')).toBe(15);
		});

		it('should return correct exp cost after increase', () => {
			const manager = new StatsManagerBuilder().withWillpower(5).build();

			const result = manager.increaseStat('willpower', 1);

			expect(result.success).toBe(true);
			expect(result.expCost).toBe(manager.getStatLevelCost('willpower'));
		});

		it('should reject negative amount increases', () => {
			const manager = new StatsManagerBuilder().withEndurance(10).build();

			const result = manager.increaseStat('endurance', -5);

			expect(result.success).toBe(false);
			expect(result.error).toContain('negative');
			expect(manager.getStatLevel('endurance')).toBe(10); // Unchanged
		});

		it('should handle increasing from level 0 (locked)', () => {
			const manager = new StatsManager();

			const result = manager.increaseStat('strength', 1);

			expect(result.success).toBe(true);
			expect(result.newLevel).toBe(1);
		});

		it('should allow large increases', () => {
			const manager = new StatsManagerBuilder().withStrength(5).build();

			const result = manager.increaseStat('strength', 100);

			expect(result.success).toBe(true);
			expect(result.newLevel).toBe(105);
			expect(manager.getStatLevel('strength')).toBe(105);
		});

		it('should not affect other stats when increasing one stat', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(10)
				.withAgility(15)
				.withWillpower(20)
				.withEndurance(25)
				.build();

			manager.increaseStat('strength', 5);

			expect(manager.getStatLevel('strength')).toBe(15);
			expect(manager.getStatLevel('agility')).toBe(15); // Unchanged
			expect(manager.getStatLevel('willpower')).toBe(20); // Unchanged
			expect(manager.getStatLevel('endurance')).toBe(25); // Unchanged
		});
	});

	describe('Set Stat', () => {
		it('should set stat to exact value', () => {
			const manager = new StatsManager();

			manager.setStat('strength', 50);

			expect(manager.getStatLevel('strength')).toBe(50);
		});

		it('should enforce minimum value of 0', () => {
			const manager = new StatsManagerBuilder().withAgility(20).build();

			manager.setStat('agility', 0);
			expect(manager.getStatLevel('agility')).toBe(0);

			manager.setStat('agility', -10);
			expect(manager.getStatLevel('agility')).toBe(0);
		});

		it('should allow setting stat to any positive value', () => {
			const manager = new StatsManager();

			manager.setStat('willpower', 9999);

			expect(manager.getStatLevel('willpower')).toBe(9999);
		});

		it('should not affect other stats', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(10)
				.withAgility(10)
				.withWillpower(10)
				.withEndurance(10)
				.build();

			manager.setStat('strength', 50);

			expect(manager.getStatLevel('strength')).toBe(50);
			expect(manager.getStatLevel('agility')).toBe(10);
			expect(manager.getStatLevel('willpower')).toBe(10);
			expect(manager.getStatLevel('endurance')).toBe(10);
		});
	});

	describe('Set Stats (Bulk)', () => {
		it('should set all stats from Stats object', () => {
			const manager = new StatsManager();
			const newStats = {
				strength: 25,
				agility: 30,
				willpower: 35,
				endurance: 40,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			};

			manager.setStats(newStats);
			const stats = manager.getStats();

			expect(stats).toEqual(newStats);
		});

		it('should replace all previous stat values', () => {
			const manager = new StatsManagerBuilder().withAllStats(50).build();
			const newStats = {
				strength: 1,
				agility: 2,
				willpower: 3,
				endurance: 4,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			};

			manager.setStats(newStats);
			const stats = manager.getStats();

			expect(stats).toEqual(newStats);
		});

		it('should create independent copy of stats', () => {
			const manager = new StatsManager();
			const externalStats = {
				strength: 10,
				agility: 10,
				willpower: 10,
				endurance: 10,
				intelligence: 0,
				wisdom: 0,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			};

			manager.setStats(externalStats);
			externalStats.strength = 999; // Modify external object

			expect(manager.getStatLevel('strength')).toBe(10); // Manager stats unchanged
		});
	});

	describe('Round-trip Save/Load', () => {
		it('should preserve stats through save/load cycle', () => {
			const originalManager = new StatsManagerBuilder()
				.withStrength(15)
				.withAgility(20)
				.withWillpower(25)
				.withEndurance(30)
				.build();

			const savedStats = originalManager.getStats();

			const loadedManager = new StatsManager(savedStats);
			const loadedStats = loadedManager.getStats();

			expect(loadedStats).toEqual(savedStats);
		});

		it('should handle multiple save/load cycles', () => {
			let manager = new StatsManagerBuilder().withAllStats(10).build();

			// Save/load cycle 1
			let saved = manager.getStats();
			manager = new StatsManager(saved);

			// Modify
			manager.increaseStat('strength', 5);

			// Save/load cycle 2
			saved = manager.getStats();
			manager = new StatsManager(saved);

			expect(manager.getStatLevel('strength')).toBe(15);
			expect(manager.getStatLevel('agility')).toBe(10);
		});
	});

	describe('Edge Cases', () => {
		it('should handle all stats at minimum (1)', () => {
			const manager = new StatsManagerBuilder().withAllStats(1).build();

			expect(manager.getStats()).toEqual({
				strength: 1,
				agility: 1,
				willpower: 1,
				endurance: 1,
				intelligence: 1,
				wisdom: 1,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			});
		});

		it('should handle all stats at very high levels', () => {
			const manager = new StatsManagerBuilder().withAllStats(10000).build();

			expect(manager.getStatLevel('strength')).toBe(10000);
			expect(manager.getStatLevel('agility')).toBe(10000);
			expect(manager.getStatLevel('intelligence')).toBe(10000);
			expect(manager.getStatLevel('wisdom')).toBe(10000);
		});

		it('should handle mixed stat levels', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(1)
				.withAgility(100)
				.withWillpower(5)
				.withEndurance(50)
				.build();

			const stats = manager.getStats();
			expect(stats.strength).toBe(1);
			expect(stats.agility).toBe(100);
			expect(stats.willpower).toBe(5);
			expect(stats.endurance).toBe(50);
		});

		it('should handle rapid successive increases', () => {
			const manager = new StatsManager();

			for (let i = 0; i < 10; i++) {
				manager.increaseStat('strength', 1);
			}

			expect(manager.getStatLevel('strength')).toBe(10);
		});

		it('should handle zero amount increase', () => {
			const manager = new StatsManagerBuilder().withStrength(10).build();

			const result = manager.increaseStat('strength', 0);

			expect(result.success).toBe(true);
			expect(result.newLevel).toBe(10); // Unchanged
			expect(manager.getStatLevel('strength')).toBe(10);
		});
	});

	describe('StatsManagerBuilder', () => {
		it('should build with custom stats', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(10)
				.withAgility(20)
				.withWillpower(30)
				.withEndurance(40)
				.build();

			const stats = manager.getStats();
			expect(stats.strength).toBe(10);
			expect(stats.agility).toBe(20);
			expect(stats.willpower).toBe(30);
			expect(stats.endurance).toBe(40);
		});

		it('should support withStat method', () => {
			const manager = new StatsManagerBuilder().withStat('strength', 99).build();

			expect(manager.getStatLevel('strength')).toBe(99);
		});

		it('should support withAllStats method', () => {
			const manager = new StatsManagerBuilder().withAllStats(50).build();

			const stats = manager.getStats();
			expect(stats.strength).toBe(50);
			expect(stats.agility).toBe(50);
			expect(stats.intelligence).toBe(50);
			expect(stats.wisdom).toBe(50);
		});

		it('should allow method chaining', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(10)
				.withAgility(20)
				.withWillpower(30)
				.withEndurance(40)
				.build();

			expect(manager.getStats()).toEqual({
				strength: 10,
				agility: 20,
				willpower: 30,
				endurance: 40,
				intelligence: 1,
				wisdom: 1,
				strengthExp: 0,
				agilityExp: 0,
				willpowerExp: 0,
				enduranceExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			});
		});
	});
});
