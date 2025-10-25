import { describe, it, expect } from 'vitest';
import {
	calculateLevelUpCost,
	calculateUpgradeCost,
	calculateStatLevelCost,
	calculateTrainingSpeedMultiplier,
	calculateTrainingCostMultiplier,
	calculateOsmosisExpBonus,
	calculateGlobalIdleSpeedMultiplier,
	calculateOsmosisSpeedMultiplier
} from '$lib/utils/calculations';
import type { Upgrade } from '$lib/game';

describe('Level Calculations', () => {
	describe('calculateLevelUpCost', () => {
		it('should calculate cost for level 1', () => {
			expect(calculateLevelUpCost(1)).toBe(10000);
		});

		it('should calculate cost for level 2', () => {
			expect(calculateLevelUpCost(2)).toBe(1000000);
		});

		it('should calculate cost for level 3', () => {
			expect(calculateLevelUpCost(3)).toBe(100000000);
		});

		it('should use exponential scaling with base 100', () => {
			// Formula: 10,000 * 100^(level-1)
			for (let level = 1; level <= 5; level++) {
				const expected = 10000 * Math.pow(100, level - 1);
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
				effectValue: 1.0
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
				effectValue: 1.0
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
				effectValue: 1.0
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
				baseCost: 1000,
				costMultiplier: 100,
				maxLevel: 10,
				currentLevel: 1,
				effectType: 'clickMultiplier',
				effectValue: 5.0
			};

			// 1000 * 100^1 = 100,000 (no floor)
			expect(calculateUpgradeCost(discipline)).toBe(100000);
		});

		it('should handle Discipline at level 2', () => {
			const discipline: Upgrade = {
				id: 'discipline',
				name: 'Discipline',
				description: 'Test',
				effect: 'Test',
				baseCost: 1000,
				costMultiplier: 100,
				maxLevel: 10,
				currentLevel: 2,
				effectType: 'clickMultiplier',
				effectValue: 5.0
			};

			// 1000 * 100^2 = 10,000,000
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
				effectValue: 1.0
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
				'efficient-training': {
					id: 'efficient-training',
					effectType: 'trainingSpeed',
					effectValue: 0.1,
					currentLevel: 1
				} as Upgrade
			};

			// (1 - 0.1)^1 = 0.9
			expect(calculateTrainingSpeedMultiplier(upgrades)).toBe(0.9);
		});

		it('should calculate multiplier for multiple upgrade levels', () => {
			const upgrades = {
				'efficient-training': {
					id: 'efficient-training',
					effectType: 'trainingSpeed',
					effectValue: 0.1,
					currentLevel: 2
				} as Upgrade
			};

			// (1 - 0.1)^2 = 0.81
			expect(calculateTrainingSpeedMultiplier(upgrades)).toBeCloseTo(0.81, 5);
		});

		it('should stack multiple different upgrades', () => {
			const upgrades = {
				'upgrade-1': {
					id: 'upgrade-1',
					effectType: 'trainingSpeed',
					effectValue: 0.1,
					currentLevel: 1
				} as Upgrade,
				'upgrade-2': {
					id: 'upgrade-2',
					effectType: 'trainingSpeed',
					effectValue: 0.2,
					currentLevel: 1
				} as Upgrade
			};

			// (1 - 0.1) * (1 - 0.2) = 0.9 * 0.8 = 0.72
			expect(calculateTrainingSpeedMultiplier(upgrades)).toBeCloseTo(0.72, 5);
		});

		it('should ignore non-trainingSpeed upgrades', () => {
			const upgrades = {
				'efficient-training': {
					id: 'efficient-training',
					effectType: 'trainingSpeed',
					effectValue: 0.1,
					currentLevel: 1
				} as Upgrade,
				'other-upgrade': {
					id: 'other-upgrade',
					effectType: 'clickMultiplier',
					effectValue: 1.0,
					currentLevel: 5
				} as Upgrade
			};

			expect(calculateTrainingSpeedMultiplier(upgrades)).toBe(0.9);
		});
	});

	describe('calculateTrainingCostMultiplier', () => {
		it('should return 1.0 with no upgrades', () => {
			expect(calculateTrainingCostMultiplier({})).toBe(1.0);
		});

		it('should calculate multiplier for single upgrade level', () => {
			const upgrades = {
				'cost-reduction': {
					id: 'cost-reduction',
					effectType: 'trainingCost',
					effectValue: 0.2,
					currentLevel: 1
				} as Upgrade
			};

			// (1 - 0.2)^1 = 0.8
			expect(calculateTrainingCostMultiplier(upgrades)).toBe(0.8);
		});

		it('should calculate multiplier for multiple upgrade levels', () => {
			const upgrades = {
				'cost-reduction': {
					id: 'cost-reduction',
					effectType: 'trainingCost',
					effectValue: 0.2,
					currentLevel: 2
				} as Upgrade
			};

			// (1 - 0.2)^2 = 0.64
			expect(calculateTrainingCostMultiplier(upgrades)).toBeCloseTo(0.64, 5);
		});
	});

	describe('calculateOsmosisExpBonus', () => {
		it('should return 0 with no upgrades', () => {
			expect(calculateOsmosisExpBonus({})).toBe(0);
		});

		it('should calculate bonus for single upgrade level', () => {
			const upgrades = {
				'osmotic-absorption': {
					id: 'osmotic-absorption',
					effectType: 'osmosisExp',
					effectValue: 1,
					currentLevel: 1
				} as Upgrade
			};

			expect(calculateOsmosisExpBonus(upgrades)).toBe(1);
		});

		it('should calculate bonus for multiple upgrade levels', () => {
			const upgrades = {
				'osmotic-absorption': {
					id: 'osmotic-absorption',
					effectType: 'osmosisExp',
					effectValue: 1,
					currentLevel: 5
				} as Upgrade
			};

			expect(calculateOsmosisExpBonus(upgrades)).toBe(5);
		});

		it('should sum multiple different upgrades', () => {
			const upgrades = {
				'upgrade-1': {
					id: 'upgrade-1',
					effectType: 'osmosisExp',
					effectValue: 1,
					currentLevel: 3
				} as Upgrade,
				'upgrade-2': {
					id: 'upgrade-2',
					effectType: 'osmosisExp',
					effectValue: 2,
					currentLevel: 2
				} as Upgrade
			};

			// (1 * 3) + (2 * 2) = 3 + 4 = 7
			expect(calculateOsmosisExpBonus(upgrades)).toBe(7);
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
					currentLevel: 1
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
					currentLevel: 10
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
					currentLevel: 10
				} as Upgrade,
				'upgrade-2': {
					id: 'upgrade-2',
					effectType: 'globalIdleSpeed',
					effectValue: 0.1,
					currentLevel: 5
				} as Upgrade
			};

			// 1.0 + (0.05 * 10) + (0.1 * 5) = 1.0 + 0.5 + 0.5 = 2.0
			expect(calculateGlobalIdleSpeedMultiplier(upgrades)).toBe(2.0);
		});
	});

	describe('calculateOsmosisSpeedMultiplier', () => {
		it('should return 1.0 with no upgrades', () => {
			expect(calculateOsmosisSpeedMultiplier({})).toBe(1.0);
		});

		it('should calculate multiplier for single upgrade level', () => {
			const upgrades = {
				'flow-state': {
					id: 'flow-state',
					effectType: 'osmosisSpeed',
					effectValue: 0.02,
					currentLevel: 1
				} as Upgrade
			};

			// 1.0 + (0.02 * 1) = 1.02
			expect(calculateOsmosisSpeedMultiplier(upgrades)).toBe(1.02);
		});

		it('should calculate multiplier for multiple upgrade levels', () => {
			const upgrades = {
				'flow-state': {
					id: 'flow-state',
					effectType: 'osmosisSpeed',
					effectValue: 0.02,
					currentLevel: 5
				} as Upgrade
			};

			// 1.0 + (0.02 * 5) = 1.1
			expect(calculateOsmosisSpeedMultiplier(upgrades)).toBeCloseTo(1.1, 5);
		});
	});
});
