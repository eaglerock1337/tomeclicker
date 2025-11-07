import { describe, it, expect } from 'vitest';
import {
	calculateLevelUpCost,
	calculateUpgradeCost,
	calculateStatLevelCost,
	calculateTrainingSpeedMultiplier,
	calculateTrainingCostMultiplier,
	calculateRuminateExpBonus,
	calculateGlobalIdleSpeedMultiplier,
	calculateRuminateSpeedMultiplier
} from '$lib/utils/calculations';
import type { Upgrade } from '$lib/game';

describe('Level Calculations', () => {
	describe('calculateLevelUpCost', () => {
		it('should calculate cost for level 1', () => {
			expect(calculateLevelUpCost(1)).toBe(1000);
		});

		it('should calculate cost for level 2', () => {
			expect(calculateLevelUpCost(2)).toBe(1000000);
		});

		it('should calculate cost for level 3', () => {
			expect(calculateLevelUpCost(3)).toBe(1000000000);
		});

		it('should use exponential scaling with base 1000', () => {
			// Formula: 1,000 * 1000^(level-1)
			for (let level = 1; level <= 5; level++) {
				const expected = 1000 * Math.pow(1000, level - 1);
				expect(calculateLevelUpCost(level)).toBe(expected);
			}
		});
	});

	describe('calculateStatLevelCost', () => {
		it('should calculate cost for stat level 1', () => {
			expect(calculateStatLevelCost(1)).toBe(100);
		});

		it('should calculate cost for stat level 2', () => {
			expect(calculateStatLevelCost(2)).toBe(150);
		});

		it('should calculate cost for stat level 5', () => {
			// 100 * 1.5^4 = 100 * 5.0625 = 506.25 -> floor to 506
			expect(calculateStatLevelCost(5)).toBe(506);
		});

		it('should use exponential scaling with base 1.5', () => {
			// Formula: floor(100 * 1.5^(level-1))
			for (let level = 1; level <= 10; level++) {
				const expected = Math.floor(100 * Math.pow(1.5, level - 1));
				expect(calculateStatLevelCost(level)).toBe(expected);
			}
		});
	});
});

describe('Upgrade Calculations', () => {
	describe('calculateUpgradeCost', () => {
		it('should calculate cost for level 0 upgrade', () => {
			const upgrade: Upgrade = {
				id: 'focused-practice',
				name: 'Focused Practice',
				description: 'Test',
				effect: 'Test',
				baseCost: 50,
				costMultiplier: 1.15,
				maxLevel: 100,
				currentLevel: 0,
				effectType: 'clickMultiplier',
				effectValue: 1.0,
				category: 'click'
			};

			expect(calculateUpgradeCost(upgrade)).toBe(50);
		});

		it('should calculate cost for level 1 upgrade', () => {
			const upgrade: Upgrade = {
				id: 'focused-practice',
				name: 'Focused Practice',
				description: 'Test',
				effect: 'Test',
				baseCost: 50,
				costMultiplier: 1.15,
				maxLevel: 100,
				currentLevel: 1,
				effectType: 'clickMultiplier',
				effectValue: 1.0,
				category: 'click'
			};

			// 50 * 1.15^1 = 57.5 -> floor to 57
			expect(calculateUpgradeCost(upgrade)).toBe(57);
		});

		it('should calculate cost for level 10 upgrade', () => {
			const upgrade: Upgrade = {
				id: 'focused-practice',
				name: 'Focused Practice',
				description: 'Test',
				effect: 'Test',
				baseCost: 50,
				costMultiplier: 1.15,
				maxLevel: 100,
				currentLevel: 10,
				effectType: 'clickMultiplier',
				effectValue: 1.0,
				category: 'click'
			};

			// 50 * 1.15^10 = 202.27... -> floor to 202
			expect(calculateUpgradeCost(upgrade)).toBe(202);
		});

		it('should use special handling for Discipline upgrade (no floor)', () => {
			const discipline: Upgrade = {
				id: 'discipline',
				name: 'Discipline',
				description: 'Test',
				effect: 'Test',
				baseCost: 100000,
				costMultiplier: 10,
				maxLevel: 10,
				currentLevel: 1,
				effectType: 'clickMultiplier',
				effectValue: 5.0,
				category: 'click'
			};

			// 100000 * 10^1 = 1,000,000 (no floor)
			expect(calculateUpgradeCost(discipline)).toBe(1000000);
		});

		it('should handle Discipline at level 2', () => {
			const discipline: Upgrade = {
				id: 'discipline',
				name: 'Discipline',
				description: 'Test',
				effect: 'Test',
				baseCost: 100000,
				costMultiplier: 10,
				maxLevel: 10,
				currentLevel: 2,
				effectType: 'clickMultiplier',
				effectValue: 5.0,
				category: 'click'
			};

			// 100000 * 10^2 = 10,000,000
			expect(calculateUpgradeCost(discipline)).toBe(10000000);
		});

		it('should floor non-Discipline upgrades', () => {
			const upgrade: Upgrade = {
				id: 'test-upgrade',
				name: 'Test',
				description: 'Test',
				effect: 'Test',
				baseCost: 100,
				costMultiplier: 1.5,
				maxLevel: 10,
				currentLevel: 3,
				effectType: 'clickMultiplier',
				effectValue: 1.0,
				category: 'click'
			};

			// 100 * 1.5^3 = 337.5 -> floor to 337
			expect(calculateUpgradeCost(upgrade)).toBe(337);
		});
	});
});

describe('Upgrade Effect Calculations', () => {
	describe('calculateTrainingSpeedMultiplier', () => {
		it('should return 1.0 with no upgrades', () => {
			expect(calculateTrainingSpeedMultiplier({})).toBe(1.0);
		});

		it('should calculate multiplier for single upgrade level', () => {
			const upgrades = {
				'training-speed': {
					id: 'training-speed',
					effectType: 'trainingSpeed',
					effectValue: 0.5,
					currentLevel: 1,
					category: 'training'
				} as Upgrade
			};

			// 15 / (15 - 0.5) = 15 / 14.5 = 1.0345
			expect(calculateTrainingSpeedMultiplier(upgrades)).toBeCloseTo(1.0345, 4);
		});

		it('should calculate multiplier for multiple upgrade levels', () => {
			const upgrades = {
				'training-speed': {
					id: 'training-speed',
					effectType: 'trainingSpeed',
					effectValue: 0.5,
					currentLevel: 2,
					category: 'training'
				} as Upgrade
			};

			// 15 / (15 - (0.5 * 2)) = 15 / 14 = 1.0714
			expect(calculateTrainingSpeedMultiplier(upgrades)).toBeCloseTo(1.0714, 4);
		});

		it('should stack multiple different upgrades', () => {
			const upgrades = {
				'upgrade-1': {
					id: 'upgrade-1',
					effectType: 'trainingSpeed',
					effectValue: 0.5, // 0.5s per level (v0.1.5)
					currentLevel: 2, // 1s total reduction
					category: 'training'
				} as Upgrade,
				'upgrade-2': {
					id: 'upgrade-2',
					effectType: 'trainingSpeed',
					effectValue: 0.5,
					currentLevel: 4, // 2s total reduction
					category: 'training'
				} as Upgrade
			};

			// v0.1.5: 15 / (15 - 1) * 15 / (15 - 2) = 1.0714 * 1.1538 = 1.2363
			expect(calculateTrainingSpeedMultiplier(upgrades)).toBeCloseTo(1.2363, 4);
		});

		it('should ignore non-trainingSpeed upgrades', () => {
			const upgrades = {
				'training-speed': {
					id: 'training-speed',
					effectType: 'trainingSpeed',
					effectValue: 0.5, // v0.1.5: 0.5s per level
					currentLevel: 2, // 1s total reduction
					category: 'training'
				} as Upgrade,
				'other-upgrade': {
					id: 'other-upgrade',
					effectType: 'clickMultiplier',
					effectValue: 1.0,
					currentLevel: 5,
					category: 'click'
				} as Upgrade
			};

			// v0.1.5: 15 / (15 - 1) = 1.0714 (only training-speed affects this)
			expect(calculateTrainingSpeedMultiplier(upgrades)).toBeCloseTo(1.0714, 4);
		});
	});

	describe('calculateTrainingCostMultiplier', () => {
		it('should return 1.0 with no upgrades', () => {
			expect(calculateTrainingCostMultiplier({})).toBe(1.0);
		});

		it('should calculate multiplier for single upgrade level', () => {
			const upgrades = {
				'training-efficiency': {
					id: 'training-efficiency',
					effectType: 'trainingEfficiency', // v0.1.5
					effectValue: 0.01, // v0.1.5: 1% per level
					currentLevel: 10, // 10% total reduction
					category: 'training'
				} as Upgrade
			};

			// (1 - 0.01)^10 = 0.9044
			expect(calculateTrainingCostMultiplier(upgrades)).toBeCloseTo(0.9044, 4);
		});

		it('should calculate multiplier for multiple upgrade levels', () => {
			const upgrades = {
				'training-efficiency': {
					id: 'training-efficiency',
					effectType: 'trainingEfficiency', // v0.1.5
					effectValue: 0.01, // v0.1.5: 1% per level
					currentLevel: 20, // 20% total reduction
					category: 'training'
				} as Upgrade
			};

			// (1 - 0.01)^20 = 0.8179
			expect(calculateTrainingCostMultiplier(upgrades)).toBeCloseTo(0.8179, 4);
		});
	});

	describe('calculateRuminateExpBonus', () => {
		it('should return 0 with no upgrades', () => {
			expect(calculateRuminateExpBonus({})).toBe(0);
		});

		it('should calculate bonus for single upgrade level', () => {
			const upgrades = {
				'osmotic-absorption': {
					id: 'osmotic-absorption',
					effectType: 'ruminatePower',
					effectValue: 1,
					currentLevel: 1,
					category: 'click'
				} as Upgrade
			};

			expect(calculateRuminateExpBonus(upgrades)).toBe(1);
		});

		it('should calculate bonus for multiple upgrade levels', () => {
			const upgrades = {
				'osmotic-absorption': {
					id: 'osmotic-absorption',
					effectType: 'ruminatePower',
					effectValue: 1,
					currentLevel: 5,
					category: 'click'
				} as Upgrade
			};

			expect(calculateRuminateExpBonus(upgrades)).toBe(5);
		});

		it('should sum multiple different upgrades', () => {
			const upgrades = {
				'upgrade-1': {
					id: 'upgrade-1',
					effectType: 'ruminatePower',
					effectValue: 1,
					currentLevel: 3,
					category: 'click'
				} as Upgrade,
				'upgrade-2': {
					id: 'upgrade-2',
					effectType: 'ruminatePower',
					effectValue: 2,
					currentLevel: 2,
					category: 'click'
				} as Upgrade
			};

			// (1 * 3) + (2 * 2) = 3 + 4 = 7
			expect(calculateRuminateExpBonus(upgrades)).toBe(7);
		});
	});

	describe('calculateGlobalIdleSpeedMultiplier', () => {
		it('should return 1.0 with no upgrades', () => {
			expect(calculateGlobalIdleSpeedMultiplier({})).toBe(1.0);
		});

		it('should calculate multiplier for single upgrade level', () => {
			const upgrades = {
				'temporal-mastery': {
					id: 'temporal-mastery',
					effectType: 'globalIdleSpeed',
					effectValue: 0.05,
					currentLevel: 1,
					category: 'click'
				} as Upgrade
			};

			// 1.0 + (0.05 * 1) = 1.05
			expect(calculateGlobalIdleSpeedMultiplier(upgrades)).toBe(1.05);
		});

		it('should calculate multiplier for multiple upgrade levels', () => {
			const upgrades = {
				'temporal-mastery': {
					id: 'temporal-mastery',
					effectType: 'globalIdleSpeed',
					effectValue: 0.05,
					currentLevel: 10,
					category: 'click'
				} as Upgrade
			};

			// 1.0 + (0.05 * 10) = 1.5
			expect(calculateGlobalIdleSpeedMultiplier(upgrades)).toBe(1.5);
		});

		it('should sum multiple different upgrades', () => {
			const upgrades = {
				'upgrade-1': {
					id: 'upgrade-1',
					effectType: 'globalIdleSpeed',
					effectValue: 0.05,
					currentLevel: 10,
					category: 'click'
				} as Upgrade,
				'upgrade-2': {
					id: 'upgrade-2',
					effectType: 'globalIdleSpeed',
					effectValue: 0.1,
					currentLevel: 5,
					category: 'click'
				} as Upgrade
			};

			// 1.0 + (0.05 * 10) + (0.1 * 5) = 1.0 + 0.5 + 0.5 = 2.0
			expect(calculateGlobalIdleSpeedMultiplier(upgrades)).toBe(2.0);
		});
	});

	describe('calculateRuminateSpeedMultiplier', () => {
		it('should return 1.0 with no upgrades', () => {
			expect(calculateRuminateSpeedMultiplier({})).toBe(1.0);
		});

		it('should calculate multiplier for single upgrade level', () => {
			const upgrades = {
				'ruminate-speed': {
					id: 'ruminate-speed',
					effectType: 'ruminateSpeed',
					effectValue: 0.1, // -0.1s per level
					currentLevel: 1,
					category: 'ruminate'
				} as Upgrade
			};

			// Base 10s - 0.1s = 9.9s, so multiplier = 10/9.9 = 1.0101...
			expect(calculateRuminateSpeedMultiplier(upgrades)).toBeCloseTo(1.0101, 4);
		});

		it('should calculate multiplier for multiple upgrade levels', () => {
			const upgrades = {
				'ruminate-speed': {
					id: 'ruminate-speed',
					effectType: 'ruminateSpeed',
					effectValue: 0.1, // -0.1s per level
					currentLevel: 10,
					category: 'ruminate'
				} as Upgrade
			};

			// Base 10s - 1.0s = 9.0s, so multiplier = 10/9 = 1.1111...
			expect(calculateRuminateSpeedMultiplier(upgrades)).toBeCloseTo(1.1111, 4);
		});

		it('should handle near-zero duration with safety limit', () => {
			const upgrades = {
				'ruminate-speed': {
					id: 'ruminate-speed',
					effectType: 'ruminateSpeed',
					effectValue: 0.1,
					currentLevel: 100, // Would be -0.1s without limit
					category: 'ruminate'
				} as Upgrade
			};

			// Max reduction, should cap at 0.1s minimum: 10/0.1 = 100x speed
			expect(calculateRuminateSpeedMultiplier(upgrades)).toBe(100);
		});
	});
});
