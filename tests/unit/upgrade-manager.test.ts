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

			// Check that all expected upgrades exist
			expect(upgrades['click-strength']).toBeDefined();
			expect(upgrades['critical-clicks']).toBeDefined();
			expect(upgrades['ruminate-speed']).toBeDefined();
			expect(upgrades['ruminate-power']).toBeDefined();
			expect(upgrades['ruminate-efficiency']).toBeDefined();
			expect(upgrades['training-speed']).toBeDefined();
			expect(upgrades['training-efficiency']).toBeDefined();
			expect(upgrades['stat-gain']).toBeDefined();
			expect(upgrades['perfect-form']).toBeDefined();
			expect(upgrades['discipline']).toBeDefined();
		});

		it('should initialize click multiplier upgrades correctly', () => {
			const clickStrength = manager.getUpgrade('click-strength');

			expect(clickStrength).toBeDefined();
			expect(clickStrength?.name).toBe('Click Strength');
			expect(clickStrength?.effectType).toBe('clickMultiplier');
			expect(clickStrength?.effectValue).toBe(1);
			expect(clickStrength?.currentLevel).toBe(0);
			expect(clickStrength?.maxLevel).toBe(50);
			expect(clickStrength?.minLevel).toBe(1);
		});

		it('should initialize crit upgrades correctly', () => {
			const critClicks = manager.getUpgrade('critical-clicks');

			expect(critClicks?.effectType).toBe('clickCrit');
			expect(critClicks?.effectValue).toBe(0.02); // 2% per level
			expect(critClicks?.maxLevel).toBe(25);
		});

		it('should initialize ruminate upgrades correctly', () => {
			const ruminateSpeed = manager.getUpgrade('ruminate-speed');
			const ruminatePower = manager.getUpgrade('ruminate-power');
			const ruminateEff = manager.getUpgrade('ruminate-efficiency');

			expect(ruminateSpeed?.effectType).toBe('ruminateSpeed');
			expect(ruminateSpeed?.effectValue).toBe(0.1);
			expect(ruminateSpeed?.minLevel).toBe(2);

			expect(ruminatePower?.effectType).toBe('ruminatePower');
			expect(ruminatePower?.effectValue).toBe(1);
			expect(ruminatePower?.minLevel).toBe(2);

			expect(ruminateEff?.effectType).toBe('ruminateEfficiency');
			expect(ruminateEff?.effectValue).toBe(0.02);
			expect(ruminateEff?.minLevel).toBe(3);
		});

		it('should initialize training upgrades correctly', () => {
			const trainingSpeed = manager.getUpgrade('training-speed');
			const trainingEff = manager.getUpgrade('training-efficiency');
			const statGain = manager.getUpgrade('stat-gain');
			const perfectForm = manager.getUpgrade('perfect-form');

			expect(trainingSpeed?.effectType).toBe('trainingSpeed');
			expect(trainingSpeed?.effectValue).toBe(0.5);
			expect(trainingSpeed?.maxLevel).toBe(50);
			expect(trainingSpeed?.minLevel).toBe(3);

			expect(trainingEff?.effectType).toBe('trainingEfficiency');
			expect(trainingEff?.effectValue).toBe(0.01);
			expect(trainingEff?.maxLevel).toBe(50);
			expect(trainingEff?.minLevel).toBe(3);

			expect(statGain?.effectType).toBe('statGain');
			expect(statGain?.effectValue).toBe(1);
			expect(statGain?.maxLevel).toBe(50);
			expect(statGain?.minLevel).toBe(3);

			expect(perfectForm?.effectType).toBe('trainingCrit');
			expect(perfectForm?.effectValue).toBe(0.02);
			expect(perfectForm?.maxLevel).toBe(25);
			expect(perfectForm?.minLevel).toBe(4);
		});

		it('should initialize discipline upgrade correctly', () => {
			const discipline = manager.getUpgrade('discipline');

			expect(discipline?.name).toBe('Discipline');
			expect(discipline?.effectType).toBe('discipline');
			expect(discipline?.effectValue).toBe(5.0); // 5x multiplier
			expect(discipline?.baseCost).toBe(100000);
			expect(discipline?.costMultiplier).toBe(10); // Very expensive
			expect(discipline?.maxLevel).toBe(10);
			expect(discipline?.minLevel).toBe(1);
		});

		it('should return undefined for non-existent upgrade', () => {
			const upgrade = manager.getUpgrade('nonexistent');
			expect(upgrade).toBeUndefined();
		});
	});

	describe('Upgrade Costs', () => {
		it('should calculate correct cost for level 0 upgrade', () => {
			const cost = manager.getUpgradeCost('click-strength');
			expect(cost).toBe(50); // Base cost
		});

		it('should calculate correct cost for level 1 upgrade', () => {
			const upgrades = manager.getUpgrades();
			upgrades['click-strength'].currentLevel = 1;

			const cost = manager.getUpgradeCost('click-strength');
			// Base cost 50, multiplier 1.5: 50 * 1.5^1 = 75
			expect(cost).toBe(75);
		});

		it('should calculate correct cost for level 5 upgrade', () => {
			const upgrades = manager.getUpgrades();
			upgrades['click-strength'].currentLevel = 5;

			const cost = manager.getUpgradeCost('click-strength');
			// Base cost 50, multiplier 1.5: 50 * 1.5^5 = 50 * 7.59375 = 379.6875, floored to 379
			expect(cost).toBe(379);
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

			expect(manager.canAffordUpgrade('click-strength')).toBe(true); // Cost 50
		});

		it('should return false when player cannot afford upgrade', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(25).build();

			expect(manager.canAffordUpgrade('click-strength')).toBe(false); // Cost 50
		});

		it('should return false for non-existent upgrade', () => {
			expect(manager.canAffordUpgrade('nonexistent')).toBe(false);
		});

		it('should check affordability correctly with current level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(100).build();
			const upgrades = manager.getUpgrades();

			// Level 0: cost 50, can afford
			expect(manager.canAffordUpgrade('click-strength')).toBe(true);

			// Level 1: cost 75, can afford
			upgrades['click-strength'].currentLevel = 1;
			expect(manager.canAffordUpgrade('click-strength')).toBe(true);

			// Level 2: cost 112.5 -> 112, cannot afford (we have 100)
			upgrades['click-strength'].currentLevel = 2;
			expect(manager.canAffordUpgrade('click-strength')).toBe(false);
		});
	});

	describe('Purchasability Checks', () => {
		it('should return true when upgrade is affordable and not maxed', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			expect(manager.canPurchaseUpgrade('click-strength')).toBe(true);
		});

		it('should return false when upgrade is not affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(25).build();

			expect(manager.canPurchaseUpgrade('click-strength')).toBe(false);
		});

		it('should return false when upgrade is at max level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();
			const upgrades = manager.getUpgrades();
			upgrades['click-strength'].currentLevel = 100; // Max level

			expect(manager.canPurchaseUpgrade('click-strength')).toBe(false);
		});

		it('should return false for non-existent upgrade', () => {
			expect(manager.canPurchaseUpgrade('nonexistent')).toBe(false);
		});
	});

	describe('Purchase Logic', () => {
		it('should successfully purchase upgrade when affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			const result = manager.purchaseUpgrade('click-strength');

			expect(result.success).toBe(true);
			expect(result.expCost).toBe(50);
			expect(result.newLevel).toBe(1);

			// Check upgrade level increased
			const upgrade = manager.getUpgrade('click-strength');
			expect(upgrade?.currentLevel).toBe(1);
		});

		it('should fail to purchase when not affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(25).build();

			const result = manager.purchaseUpgrade('click-strength');

			expect(result.success).toBe(false);
			expect(result.reason).toBe('cannot_afford');
			expect(result.expCost).toBeUndefined();
			expect(result.newLevel).toBeUndefined();

			// Check upgrade level unchanged
			const upgrade = manager.getUpgrade('click-strength');
			expect(upgrade?.currentLevel).toBe(0);
		});

		it('should fail to purchase when at max level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();
			const upgrades = manager.getUpgrades();
			upgrades['click-strength'].currentLevel = 100; // Max level

			const result = manager.purchaseUpgrade('click-strength');

			expect(result.success).toBe(false);
			expect(result.reason).toBe('max_level');

			// Check upgrade level unchanged
			expect(upgrades['click-strength'].currentLevel).toBe(100);
		});

		it('should fail to purchase non-existent upgrade', () => {
			const result = manager.purchaseUpgrade('nonexistent');

			expect(result.success).toBe(false);
			expect(result.reason).toBe('not_found');
		});

		it('should allow multiple purchases until max level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999999).build();

			// Purchase critical-clicks up to max level (25)
			for (let i = 0; i < 25; i++) {
				const result = manager.purchaseUpgrade('critical-clicks'); // Max level 25
				expect(result.success).toBe(true);
				expect(result.newLevel).toBe(i + 1);
			}

			// 26th purchase should fail (max level reached)
			const failResult = manager.purchaseUpgrade('critical-clicks');
			expect(failResult.success).toBe(false);
			expect(failResult.reason).toBe('max_level');
		});

		it('should calculate correct costs for sequential purchases', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();

			// First purchase: base cost 50
			const result1 = manager.purchaseUpgrade('click-strength');
			expect(result1.expCost).toBe(50);

			// Second purchase: 50 * 1.5^1 = 75
			const result2 = manager.purchaseUpgrade('click-strength');
			expect(result2.expCost).toBe(75);

			// Third purchase: 50 * 1.5^2 = 112.5 -> 112
			const result3 = manager.purchaseUpgrade('click-strength');
			expect(result3.expCost).toBe(112);
		});
	});

	describe('Migration', () => {
		it('should migrate upgrades and preserve levels', () => {
			const savedUpgrades: { [key: string]: Upgrade } = {
				'click-strength': {
					id: 'click-strength',
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

			const upgrade = manager.getUpgrade('click-strength');
			expect(upgrade?.currentLevel).toBe(25); // Preserved from save
			expect(upgrade?.name).toBe('Click Strength'); // Updated to new definition
			expect(upgrade?.baseCost).toBe(50); // Updated to new balance
			expect(upgrade?.maxLevel).toBe(50); // Updated to new balance
		});

		it('should add new upgrades during migration', () => {
			const savedUpgrades: { [key: string]: Upgrade } = {
				'click-strength': {
					id: 'click-strength',
					name: 'Focused Practice',
					description: 'Desc',
					effect: 'Effect',
					baseCost: 50,
					costMultiplier: 1.15,
					maxLevel: 100,
					currentLevel: 10,
					effectType: 'clickMultiplier',
					effectValue: 1.0,
					minLevel: 1,
					category: 'click'
				}
				// Note: saved game doesn't have 'critical-clicks' yet
			};

			manager.migrateUpgrades(savedUpgrades);

			const upgrades = manager.getUpgrades();
			expect(upgrades['click-strength'].currentLevel).toBe(10); // Preserved
			expect(upgrades['critical-clicks'].currentLevel).toBe(0); // New upgrade added
			expect(upgrades['discipline'].currentLevel).toBe(0); // New upgrade added
		});

		it('should handle empty saved upgrades', () => {
			manager.migrateUpgrades({});

			const upgrades = manager.getUpgrades();
			// All upgrades should exist with level 0
			expect(upgrades['click-strength'].currentLevel).toBe(0);
			expect(upgrades['discipline'].currentLevel).toBe(0);
		});

		it('should preserve all upgrade levels during migration', () => {
			const savedUpgrades = manager.getUpgrades();

			// Set some levels
			savedUpgrades['click-strength'].currentLevel = 15;
			savedUpgrades['critical-clicks'].currentLevel = 8;
			savedUpgrades['discipline'].currentLevel = 2;

			manager.migrateUpgrades(savedUpgrades);

			const upgrades = manager.getUpgrades();
			expect(upgrades['click-strength'].currentLevel).toBe(15);
			expect(upgrades['critical-clicks'].currentLevel).toBe(8);
			expect(upgrades['discipline'].currentLevel).toBe(2);
		});
	});

	describe('Edge Cases', () => {
		it('should handle purchasing with exact EXP amount', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(50).build();

			const result = manager.purchaseUpgrade('click-strength'); // Cost 50

			expect(result.success).toBe(true);
			expect(result.expCost).toBe(50);
		});

		it('should handle purchasing with EXP amount one less than cost', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(49).build();

			const result = manager.purchaseUpgrade('click-strength'); // Cost 50

			expect(result.success).toBe(false);
			expect(result.reason).toBe('cannot_afford');
		});

		it('should handle all upgrades with different cost tiers', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(10000).build();

			// Click upgrades
			expect(manager.getUpgradeCost('click-strength')).toBe(50);
			expect(manager.getUpgradeCost('critical-clicks')).toBe(200);

			// Ruminate upgrades
			expect(manager.getUpgradeCost('ruminate-speed')).toBe(100);
			expect(manager.getUpgradeCost('ruminate-power')).toBe(500);
			expect(manager.getUpgradeCost('ruminate-efficiency')).toBe(1000);

			// Training upgrades
			expect(manager.getUpgradeCost('training-speed')).toBe(500);
			expect(manager.getUpgradeCost('training-efficiency')).toBe(1000);
			expect(manager.getUpgradeCost('stat-gain')).toBe(2000);
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

			// Critical clicks: max level 25
			upgrades['critical-clicks'].currentLevel = 25;
			expect(manager.canPurchaseUpgrade('critical-clicks')).toBe(false);

			// Click strength: max level 50
			upgrades['click-strength'].currentLevel = 50;
			expect(manager.canPurchaseUpgrade('click-strength')).toBe(false);

			// Perfect form: max level 25
			upgrades['perfect-form'].currentLevel = 25;
			expect(manager.canPurchaseUpgrade('perfect-form')).toBe(false);

			// Discipline: max level 10
			upgrades['discipline'].currentLevel = 10;
			expect(manager.canPurchaseUpgrade('discipline')).toBe(false);
		});
	});
});
