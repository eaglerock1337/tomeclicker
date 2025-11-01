import { describe, it, expect } from 'vitest';
import { StatsManager } from '../../src/lib/managers/stats-manager';
import type { Stats } from '../../src/lib/game';

/**
 * Test fixture builder for StatsManager
 */
class StatsManagerBuilder {
	private stats: Stats = {
		strength: 1,
		dexterity: 1,
		intelligence: 1,
		wisdom: 1,
		strengthExp: 0,
		dexterityExp: 0,
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
			dexterity: level,
			intelligence: level,
			wisdom: level,
			strengthExp: 0,
			dexterityExp: 0,
			intelligenceExp: 0,
			wisdomExp: 0
		};
		return this;
	}

	withStrength(level: number): this {
		this.stats.strength = level;
		return this;
	}

	withDexterity(level: number): this {
		this.stats.dexterity = level;
		return this;
	}

	withIntelligence(level: number): this {
		this.stats.intelligence = level;
		return this;
	}

	withWisdom(level: number): this {
		this.stats.wisdom = level;
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
		it('should create StatsManager with default stats (all 1s)', () => {
			const manager = new StatsManager();
			const stats = manager.getStats();

			expect(stats.strength).toBe(1);
			expect(stats.dexterity).toBe(1);
			expect(stats.intelligence).toBe(1);
			expect(stats.wisdom).toBe(1);
		});

		it('should create StatsManager with custom stats', () => {
			const customStats = {
				strength: 10,
				dexterity: 5,
				intelligence: 8,
				wisdom: 3,
				strengthExp: 0,
				dexterityExp: 0,
				intelligenceExp: 0,
				wisdomExp: 0
			};
			const manager = new StatsManager(customStats);
			const stats = manager.getStats();

			expect(stats.strength).toBe(10);
			expect(stats.dexterity).toBe(5);
			expect(stats.intelligence).toBe(8);
			expect(stats.wisdom).toBe(3);
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
		it('should get individual stat levels', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(15)
				.withDexterity(10)
				.withIntelligence(20)
				.withWisdom(5)
				.build();

			expect(manager.getStatLevel('strength')).toBe(15);
			expect(manager.getStatLevel('dexterity')).toBe(10);
			expect(manager.getStatLevel('intelligence')).toBe(20);
			expect(manager.getStatLevel('wisdom')).toBe(5);
		});

		it('should return 1 for default stats', () => {
			const manager = new StatsManager();

			expect(manager.getStatLevel('strength')).toBe(1);
			expect(manager.getStatLevel('dexterity')).toBe(1);
			expect(manager.getStatLevel('intelligence')).toBe(1);
			expect(manager.getStatLevel('wisdom')).toBe(1);
		});
	});

	describe('Get Stat Level Cost', () => {
		it('should calculate cost for stat level 1 (starting stat)', () => {
			const manager = new StatsManager();

			// From calculations.ts: level 1 should cost 100 EXP
			expect(manager.getStatLevelCost('strength')).toBe(100);
			expect(manager.getStatLevelCost('dexterity')).toBe(100);
			expect(manager.getStatLevelCost('intelligence')).toBe(100);
			expect(manager.getStatLevelCost('wisdom')).toBe(100);
		});

		it('should calculate increasing cost for higher stat levels', () => {
			const manager = new StatsManagerBuilder().withStrength(10).build();

			const cost = manager.getStatLevelCost('strength');
			expect(cost).toBeGreaterThan(100); // Cost should scale up from level 1 cost
		});

		it('should calculate different costs for different stat levels', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(1)
				.withDexterity(10)
				.withIntelligence(20)
				.build();

			const costStr = manager.getStatLevelCost('strength');
			const costDex = manager.getStatLevelCost('dexterity');
			const costInt = manager.getStatLevelCost('intelligence');

			expect(costDex).toBeGreaterThan(costStr);
			expect(costInt).toBeGreaterThan(costDex);
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
			const manager = new StatsManagerBuilder().withDexterity(10).build();

			const result = manager.increaseStat('dexterity', 5);

			expect(result.success).toBe(true);
			expect(result.newLevel).toBe(15);
			expect(manager.getStatLevel('dexterity')).toBe(15);
		});

		it('should return correct exp cost after increase', () => {
			const manager = new StatsManagerBuilder().withIntelligence(5).build();

			const result = manager.increaseStat('intelligence', 1);

			expect(result.success).toBe(true);
			expect(result.expCost).toBe(manager.getStatLevelCost('intelligence'));
		});

		it('should reject negative amount increases', () => {
			const manager = new StatsManagerBuilder().withWisdom(10).build();

			const result = manager.increaseStat('wisdom', -5);

			expect(result.success).toBe(false);
			expect(result.error).toContain('negative');
			expect(manager.getStatLevel('wisdom')).toBe(10); // Unchanged
		});

		it('should handle increasing from level 1', () => {
			const manager = new StatsManager();

			const result = manager.increaseStat('strength', 1);

			expect(result.success).toBe(true);
			expect(result.newLevel).toBe(2);
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
				.withDexterity(15)
				.withIntelligence(20)
				.withWisdom(25)
				.build();

			manager.increaseStat('strength', 5);

			expect(manager.getStatLevel('strength')).toBe(15);
			expect(manager.getStatLevel('dexterity')).toBe(15); // Unchanged
			expect(manager.getStatLevel('intelligence')).toBe(20); // Unchanged
			expect(manager.getStatLevel('wisdom')).toBe(25); // Unchanged
		});
	});

	describe('Set Stat', () => {
		it('should set stat to exact value', () => {
			const manager = new StatsManager();

			manager.setStat('strength', 50);

			expect(manager.getStatLevel('strength')).toBe(50);
		});

		it('should enforce minimum value of 1', () => {
			const manager = new StatsManagerBuilder().withDexterity(20).build();

			manager.setStat('dexterity', 0);
			expect(manager.getStatLevel('dexterity')).toBe(1);

			manager.setStat('dexterity', -10);
			expect(manager.getStatLevel('dexterity')).toBe(1);
		});

		it('should allow setting stat to any positive value', () => {
			const manager = new StatsManager();

			manager.setStat('intelligence', 9999);

			expect(manager.getStatLevel('intelligence')).toBe(9999);
		});

		it('should not affect other stats', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(10)
				.withDexterity(10)
				.withIntelligence(10)
				.withWisdom(10)
				.build();

			manager.setStat('strength', 50);

			expect(manager.getStatLevel('strength')).toBe(50);
			expect(manager.getStatLevel('dexterity')).toBe(10);
			expect(manager.getStatLevel('intelligence')).toBe(10);
			expect(manager.getStatLevel('wisdom')).toBe(10);
		});
	});

	describe('Set Stats (Bulk)', () => {
		it('should set all stats from Stats object', () => {
			const manager = new StatsManager();
			const newStats = {
				strength: 25,
				dexterity: 30,
				intelligence: 35,
				wisdom: 40,
				strengthExp: 0,
				dexterityExp: 0,
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
				dexterity: 2,
				intelligence: 3,
				wisdom: 4,
				strengthExp: 0,
				dexterityExp: 0,
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
				dexterity: 10,
				intelligence: 10,
				wisdom: 10,
				strengthExp: 0,
				dexterityExp: 0,
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
				.withDexterity(20)
				.withIntelligence(25)
				.withWisdom(30)
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
			expect(manager.getStatLevel('dexterity')).toBe(10);
		});
	});

	describe('Edge Cases', () => {
		it('should handle all stats at minimum (1)', () => {
			const manager = new StatsManagerBuilder().withAllStats(1).build();

			expect(manager.getStats()).toEqual({
				strength: 1,
				dexterity: 1,
				intelligence: 1,
				wisdom: 1
			});
		});

		it('should handle all stats at very high levels', () => {
			const manager = new StatsManagerBuilder().withAllStats(10000).build();

			expect(manager.getStatLevel('strength')).toBe(10000);
			expect(manager.getStatLevel('dexterity')).toBe(10000);
			expect(manager.getStatLevel('intelligence')).toBe(10000);
			expect(manager.getStatLevel('wisdom')).toBe(10000);
		});

		it('should handle mixed stat levels', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(1)
				.withDexterity(100)
				.withIntelligence(5)
				.withWisdom(50)
				.build();

			const stats = manager.getStats();
			expect(stats.strength).toBe(1);
			expect(stats.dexterity).toBe(100);
			expect(stats.intelligence).toBe(5);
			expect(stats.wisdom).toBe(50);
		});

		it('should handle rapid successive increases', () => {
			const manager = new StatsManager();

			for (let i = 0; i < 10; i++) {
				manager.increaseStat('strength', 1);
			}

			expect(manager.getStatLevel('strength')).toBe(11);
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
				.withDexterity(20)
				.withIntelligence(30)
				.withWisdom(40)
				.build();

			const stats = manager.getStats();
			expect(stats.strength).toBe(10);
			expect(stats.dexterity).toBe(20);
			expect(stats.intelligence).toBe(30);
			expect(stats.wisdom).toBe(40);
		});

		it('should support withStat method', () => {
			const manager = new StatsManagerBuilder().withStat('strength', 99).build();

			expect(manager.getStatLevel('strength')).toBe(99);
		});

		it('should support withAllStats method', () => {
			const manager = new StatsManagerBuilder().withAllStats(50).build();

			const stats = manager.getStats();
			expect(stats.strength).toBe(50);
			expect(stats.dexterity).toBe(50);
			expect(stats.intelligence).toBe(50);
			expect(stats.wisdom).toBe(50);
		});

		it('should allow method chaining', () => {
			const manager = new StatsManagerBuilder()
				.withStrength(10)
				.withDexterity(20)
				.withIntelligence(30)
				.withWisdom(40)
				.build();

			expect(manager.getStats()).toEqual({
				strength: 10,
				dexterity: 20,
				intelligence: 30,
				wisdom: 40
			});
		});
	});
});
