import { describe, it, expect, beforeEach } from 'vitest';
import {
	UpgradeManager,
	type UpgradeManagerDependencies,
	type Upgrade
} from '../../src/lib/managers/upgrade-manager';

/**
 * Test helper builder for creating UpgradeManager with mock dependencies
 */
class UpgradeManagerBuilder {
	private deps: UpgradeManagerDependencies = {
		getCurrentExp: () => 10000 // Default high EXP for testing
	};

	withCurrentExp(exp: number): this {
		this.deps.getCurrentExp = () => exp;
		return this;
	}

	build(): UpgradeManager {
		return new UpgradeManager(this.deps);
	}
}

describe('UpgradeManager', () => {
	let manager: UpgradeManager;

	beforeEach(() => {
		manager = new UpgradeManagerBuilder().build();
	});

	describe('Initialization', () => {
		it('should initialize all upgrades with correct defaults', () => {
			const upgrades = manager.getUpgrades();

			// Check that all expected upgrades exist (v0.1.5)
			expect(upgrades['click-power']).toBeDefined();
			expect(upgrades['critical-clicks']).toBeDefined();
			expect(upgrades['devastating-click']).toBeDefined();
			expect(upgrades['click-mastery']).toBeDefined();
			expect(upgrades['ruminate-speed']).toBeDefined();
			expect(upgrades['ruminate-power']).toBeDefined();
			expect(upgrades['focus-flow']).toBeDefined();
			expect(upgrades['intense-thoughts']).toBeDefined();
			expect(upgrades['ruminate-mastery']).toBeDefined();
			expect(upgrades['training-speed']).toBeDefined();
			expect(upgrades['training-efficiency']).toBeDefined();
			expect(upgrades['training-power']).toBeDefined();
			expect(upgrades['perfect-form']).toBeDefined();
			expect(upgrades['devastating-training']).toBeDefined();
			expect(upgrades['training-mastery']).toBeDefined();
			expect(upgrades['discipline']).toBeDefined();
		});

		it('should initialize click multiplier upgrades correctly', () => {
			const clickPower = manager.getUpgrade('click-power');

			expect(clickPower).toBeDefined();
			expect(clickPower?.name).toBe('Click Power');
			expect(clickPower?.effectType).toBe('clickMultiplier');
			expect(clickPower?.effectValue).toBe(1);
			expect(clickPower?.currentLevel).toBe(0);
			expect(clickPower?.maxLevel).toBe(50);
			expect(clickPower?.minLevel).toBe(2);
		});

		it('should initialize crit upgrades correctly', () => {
			const critClicks = manager.getUpgrade('critical-clicks');

			expect(critClicks?.effectType).toBe('clickCrit');
			expect(critClicks?.effectValue).toBe(0.005); // 0.5% per level
			expect(critClicks?.maxLevel).toBe(50);
		});

		it('should initialize ruminate upgrades correctly', () => {
			const ruminateSpeed = manager.getUpgrade('ruminate-speed');
			const ruminatePower = manager.getUpgrade('ruminate-power');

			expect(ruminateSpeed?.effectType).toBe('ruminateSpeed');
			expect(ruminateSpeed?.effectValue).toBe(0.1);
			expect(ruminateSpeed?.minLevel).toBe(2);

			expect(ruminatePower?.effectType).toBe('ruminatePower');
			expect(ruminatePower?.effectValue).toBe(10);
			expect(ruminatePower?.minLevel).toBe(2);
		});

		it('should initialize training upgrades correctly', () => {
			const trainingSpeed = manager.getUpgrade('training-speed');
			const trainingEff = manager.getUpgrade('training-efficiency');
			const trainingPower = manager.getUpgrade('training-power');
			const perfectForm = manager.getUpgrade('perfect-form');

			expect(trainingSpeed?.effectType).toBe('trainingSpeed');
			expect(trainingSpeed?.effectValue).toBe(0.1);
			expect(trainingSpeed?.maxLevel).toBe(50);
			expect(trainingSpeed?.minLevel).toBe(3);

			expect(trainingEff?.effectType).toBe('trainingEfficiency');
			expect(trainingEff?.effectValue).toBe(0.01);
			expect(trainingEff?.maxLevel).toBe(50);
			expect(trainingEff?.minLevel).toBe(3);

			expect(trainingPower?.effectType).toBe('statGainPercent');
			expect(trainingPower?.effectValue).toBe(0.01);
			expect(trainingPower?.maxLevel).toBe(50);
			expect(trainingPower?.minLevel).toBe(3);

			expect(perfectForm?.effectType).toBe('trainingCrit');
			expect(perfectForm?.effectValue).toBe(0.005);
			expect(perfectForm?.maxLevel).toBe(50);
			expect(perfectForm?.minLevel).toBe(4);
		});

		it('should initialize discipline upgrade correctly', () => {
			const discipline = manager.getUpgrade('discipline');

			expect(discipline?.name).toBe('Discipline');
			expect(discipline?.effectType).toBe('discipline');
			expect(discipline?.effectValue).toBe(2.0); // 2x multiplier per level
			expect(discipline?.baseCost).toBe(100000);
			expect(discipline?.costMultiplier).toBe(10); // Very expensive
			expect(discipline?.maxLevel).toBe(100);
			expect(discipline?.minLevel).toBe(1);
		});

		it('should return undefined for non-existent upgrade', () => {
			const upgrade = manager.getUpgrade('nonexistent');
			expect(upgrade).toBeUndefined();
		});
	});

	describe('Upgrade Costs', () => {
		it('should calculate correct cost for level 0 upgrade', () => {
			const cost = manager.getUpgradeCost('click-power');
			expect(cost).toBe(100); // Base cost
		});

		it('should calculate correct cost for level 1 upgrade', () => {
			const upgrades = manager.getUpgrades();
			upgrades['click-power'].currentLevel = 1;

			const cost = manager.getUpgradeCost('click-power');
			// Base cost 100, multiplier 1.5: 100 * 1.5^1 = 150
			expect(cost).toBe(150);
		});

		it('should calculate correct cost for level 5 upgrade', () => {
			const upgrades = manager.getUpgrades();
			upgrades['click-power'].currentLevel = 5;

			const cost = manager.getUpgradeCost('click-power');
			// Base cost 100, multiplier 1.5: 100 * 1.5^5 = 100 * 7.59375 = 759.375, floored to 759
			expect(cost).toBe(759);
		});

		it('should return 0 for non-existent upgrade', () => {
			const cost = manager.getUpgradeCost('nonexistent');
			expect(cost).toBe(0);
		});

		it('should calculate discipline costs correctly (expensive)', () => {
			const cost0 = manager.getUpgradeCost('discipline');
			expect(cost0).toBe(100000); // Base cost

			const upgrades = manager.getUpgrades();
			upgrades['discipline'].currentLevel = 1;
			const cost1 = manager.getUpgradeCost('discipline');
			// 100000 * 10^1 = 1,000,000
			expect(cost1).toBe(1000000);

			upgrades['discipline'].currentLevel = 2;
			const cost2 = manager.getUpgradeCost('discipline');
			// 100000 * 10^2 = 10,000,000
			expect(cost2).toBe(10000000);
		});
	});

	describe('Affordability Checks', () => {
		it('should return true when player can afford upgrade', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			expect(manager.canAffordUpgrade('click-power')).toBe(true); // Cost 100
		});

		it('should return false when player cannot afford upgrade', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(50).build();

			expect(manager.canAffordUpgrade('click-power')).toBe(false); // Cost 100
		});

		it('should return false for non-existent upgrade', () => {
			expect(manager.canAffordUpgrade('nonexistent')).toBe(false);
		});

		it('should check affordability correctly with current level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(200).build();
			const upgrades = manager.getUpgrades();

			// Level 0: cost 100, can afford
			expect(manager.canAffordUpgrade('click-power')).toBe(true);

			// Level 1: cost 150, can afford
			upgrades['click-power'].currentLevel = 1;
			expect(manager.canAffordUpgrade('click-power')).toBe(true);

			// Level 2: cost 225, cannot afford (we have 200)
			upgrades['click-power'].currentLevel = 2;
			expect(manager.canAffordUpgrade('click-power')).toBe(false);
		});
	});

	describe('Purchasability Checks', () => {
		it('should return true when upgrade is affordable and not maxed', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			expect(manager.canPurchaseUpgrade('click-power')).toBe(true);
		});

		it('should return false when upgrade is not affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(50).build();

			expect(manager.canPurchaseUpgrade('click-power')).toBe(false);
		});

		it('should return false when upgrade is at max level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();
			const upgrades = manager.getUpgrades();
			upgrades['click-power'].currentLevel = 50; // Max level

			expect(manager.canPurchaseUpgrade('click-power')).toBe(false);
		});

		it('should return false for non-existent upgrade', () => {
			expect(manager.canPurchaseUpgrade('nonexistent')).toBe(false);
		});
	});

	describe('Purchase Logic', () => {
		it('should successfully purchase upgrade when affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			const result = manager.purchaseUpgrade('click-power');

			expect(result.success).toBe(true);
			expect(result.expCost).toBe(100);
			expect(result.newLevel).toBe(1);

			// Check upgrade level increased
			const upgrade = manager.getUpgrade('click-power');
			expect(upgrade?.currentLevel).toBe(1);
		});

		it('should fail to purchase when not affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(50).build();

			const result = manager.purchaseUpgrade('click-power');

			expect(result.success).toBe(false);
			expect(result.reason).toBe('cannot_afford');
			expect(result.expCost).toBeUndefined();
			expect(result.newLevel).toBeUndefined();

			// Check upgrade level unchanged
			const upgrade = manager.getUpgrade('click-power');
			expect(upgrade?.currentLevel).toBe(0);
		});

		it('should fail to purchase when at max level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();
			const upgrades = manager.getUpgrades();
			upgrades['click-power'].currentLevel = 50; // Max level

			const result = manager.purchaseUpgrade('click-power');

			expect(result.success).toBe(false);
			expect(result.reason).toBe('max_level');

			// Check upgrade level unchanged
			expect(upgrades['click-power'].currentLevel).toBe(50);
		});

		it('should fail to purchase non-existent upgrade', () => {
			const result = manager.purchaseUpgrade('nonexistent');

			expect(result.success).toBe(false);
			expect(result.reason).toBe('not_found');
		});

		it('should allow multiple purchases until max level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(Number.MAX_SAFE_INTEGER).build();

			// Purchase critical-clicks up to max level (50)
			for (let i = 0; i < 50; i++) {
				const result = manager.purchaseUpgrade('critical-clicks'); // Max level 50
				expect(result.success).toBe(true);
				expect(result.newLevel).toBe(i + 1);
			}

			// 51st purchase should fail (max level reached)
			const failResult = manager.purchaseUpgrade('critical-clicks');
			expect(failResult.success).toBe(false);
			expect(failResult.reason).toBe('max_level');
		});

		it('should calculate correct costs for sequential purchases', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();

			// First purchase: base cost 100
			const result1 = manager.purchaseUpgrade('click-power');
			expect(result1.expCost).toBe(100);

			// Second purchase: 100 * 1.5^1 = 150
			const result2 = manager.purchaseUpgrade('click-power');
			expect(result2.expCost).toBe(150);

			// Third purchase: 100 * 1.5^2 = 225
			const result3 = manager.purchaseUpgrade('click-power');
			expect(result3.expCost).toBe(225);
		});
	});

	describe('Migration', () => {
		it('should migrate upgrades and preserve levels', () => {
			const savedUpgrades: { [key: string]: Upgrade } = {
				'click-power': {
					id: 'click-power',
					name: 'Old Name',
					description: 'Old description',
					effect: 'Old effect',
					baseCost: 999, // Old balance
					costMultiplier: 2.0,
					maxLevel: 50,
					currentLevel: 25, // Progress to preserve
					effectType: 'clickMultiplier',
					effectValue: 2.0,
					minLevel: 1,
					category: 'click'
				}
			};

			manager.migrateUpgrades(savedUpgrades);

			const upgrade = manager.getUpgrade('click-power');
			expect(upgrade?.currentLevel).toBe(25); // Preserved from save
			expect(upgrade?.name).toBe('Click Power'); // Updated to new definition
			expect(upgrade?.baseCost).toBe(100); // Updated to new balance
			expect(upgrade?.maxLevel).toBe(50); // Updated to new balance
		});

		it('should add new upgrades during migration', () => {
			const savedUpgrades: { [key: string]: Upgrade } = {
				'click-power': {
					id: 'click-power',
					name: 'Click Power',
					description: 'Desc',
					effect: 'Effect',
					baseCost: 100,
					costMultiplier: 1.5,
					maxLevel: 50,
					currentLevel: 10,
					effectType: 'clickMultiplier',
					effectValue: 1.0,
					minLevel: 2,
					category: 'click'
				}
				// Note: saved game doesn't have 'critical-clicks' yet
			};

			manager.migrateUpgrades(savedUpgrades);

			const upgrades = manager.getUpgrades();
			expect(upgrades['click-power'].currentLevel).toBe(10); // Preserved
			expect(upgrades['critical-clicks'].currentLevel).toBe(0); // New upgrade added
			expect(upgrades['discipline'].currentLevel).toBe(0); // New upgrade added
		});

		it('should handle empty saved upgrades', () => {
			manager.migrateUpgrades({});

			const upgrades = manager.getUpgrades();
			// All upgrades should exist with level 0
			expect(upgrades['click-power'].currentLevel).toBe(0);
			expect(upgrades['discipline'].currentLevel).toBe(0);
		});

		it('should preserve all upgrade levels during migration', () => {
			const savedUpgrades = manager.getUpgrades();

			// Set some levels
			savedUpgrades['click-power'].currentLevel = 15;
			savedUpgrades['critical-clicks'].currentLevel = 8;
			savedUpgrades['discipline'].currentLevel = 2;

			manager.migrateUpgrades(savedUpgrades);

			const upgrades = manager.getUpgrades();
			expect(upgrades['click-power'].currentLevel).toBe(15);
			expect(upgrades['critical-clicks'].currentLevel).toBe(8);
			expect(upgrades['discipline'].currentLevel).toBe(2);
		});
	});

	describe('Edge Cases', () => {
		it('should handle purchasing with exact EXP amount', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(100).build();

			const result = manager.purchaseUpgrade('click-power'); // Cost 100

			expect(result.success).toBe(true);
			expect(result.expCost).toBe(100);
		});

		it('should handle purchasing with EXP amount one less than cost', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(99).build();

			const result = manager.purchaseUpgrade('click-power'); // Cost 100

			expect(result.success).toBe(false);
			expect(result.reason).toBe('cannot_afford');
		});

		it('should handle all upgrades with different cost tiers', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(10000).build();

			// Click upgrades
			expect(manager.getUpgradeCost('click-power')).toBe(100);
			expect(manager.getUpgradeCost('critical-clicks')).toBe(200);

			// Ruminate upgrades
			expect(manager.getUpgradeCost('ruminate-speed')).toBe(100);
			expect(manager.getUpgradeCost('ruminate-power')).toBe(500);

			// Training upgrades
			expect(manager.getUpgradeCost('training-speed')).toBe(500);
			expect(manager.getUpgradeCost('training-efficiency')).toBe(1000);
			expect(manager.getUpgradeCost('training-power')).toBe(2000);
			expect(manager.getUpgradeCost('perfect-form')).toBe(3000);

			// Discipline
			expect(manager.getUpgradeCost('discipline')).toBe(100000);
		});

		it('should handle max level upgrades correctly', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();
			const upgrades = manager.getUpgrades();

			// Training efficiency: max level 50
			upgrades['training-efficiency'].currentLevel = 50;
			expect(manager.canPurchaseUpgrade('training-efficiency')).toBe(false);

			// Training speed: max level 50
			upgrades['training-speed'].currentLevel = 50;
			expect(manager.canPurchaseUpgrade('training-speed')).toBe(false);

			// Critical clicks: max level 50
			upgrades['critical-clicks'].currentLevel = 50;
			expect(manager.canPurchaseUpgrade('critical-clicks')).toBe(false);

			// Click power: max level 50
			upgrades['click-power'].currentLevel = 50;
			expect(manager.canPurchaseUpgrade('click-power')).toBe(false);

			// Perfect form: max level 50
			upgrades['perfect-form'].currentLevel = 50;
			expect(manager.canPurchaseUpgrade('perfect-form')).toBe(false);

			// Discipline: max level 100
			upgrades['discipline'].currentLevel = 100;
			expect(manager.canPurchaseUpgrade('discipline')).toBe(false);
		});
	});
});
