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
			expect(upgrades['research-speed']).toBeDefined();
			expect(upgrades['research-power']).toBeDefined();
			expect(upgrades['focus-flow']).toBeDefined();
			expect(upgrades['intense-thoughts']).toBeDefined();
			expect(upgrades['research-mastery']).toBeDefined();
			expect(upgrades['studying-speed']).toBeDefined();
			expect(upgrades['studying-efficiency']).toBeDefined();
			expect(upgrades['studying-power']).toBeDefined();
			expect(upgrades['perfect-form']).toBeDefined();
			expect(upgrades['devastating-studying']).toBeDefined();
			expect(upgrades['studying-mastery']).toBeDefined();
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
			expect(clickPower?.minLevel).toBe(1);
		});

		it('should initialize crit upgrades correctly', () => {
			const critClicks = manager.getUpgrade('critical-clicks');

			expect(critClicks?.effectType).toBe('clickCrit');
			expect(critClicks?.effectValue).toBe(0.005); // 0.5% per level
			expect(critClicks?.maxLevel).toBe(50);
		});

		it('should initialize research upgrades correctly', () => {
			const researchSpeed = manager.getUpgrade('research-speed');
			const researchPower = manager.getUpgrade('research-power');

			expect(researchSpeed?.effectType).toBe('researchSpeed');
			expect(researchSpeed?.effectValue).toBe(0.1);
			expect(researchSpeed?.minLevel).toBe(2);

			expect(researchPower?.effectType).toBe('researchPower');
			expect(researchPower?.effectValue).toBe(25);
			expect(researchPower?.minLevel).toBe(2);
		});

		it('should initialize studying upgrades correctly', () => {
			const studyingSpeed = manager.getUpgrade('studying-speed');
			const studyingEff = manager.getUpgrade('studying-efficiency');
			const studyingPower = manager.getUpgrade('studying-power');
			const perfectForm = manager.getUpgrade('perfect-form');

			expect(studyingSpeed?.effectType).toBe('studyingSpeed');
			expect(studyingSpeed?.effectValue).toBe(0.1);
			expect(studyingSpeed?.maxLevel).toBe(50);
			expect(studyingSpeed?.minLevel).toBe(3);

			expect(studyingEff?.effectType).toBe('studyingEfficiency');
			expect(studyingEff?.effectValue).toBe(0.01);
			expect(studyingEff?.maxLevel).toBe(50);
			expect(studyingEff?.minLevel).toBe(3);

			expect(studyingPower?.effectType).toBe('statGainPercent');
			expect(studyingPower?.effectValue).toBe(0.01);
			expect(studyingPower?.maxLevel).toBe(50);
			expect(studyingPower?.minLevel).toBe(3);

			expect(perfectForm?.effectType).toBe('studyingCrit');
			expect(perfectForm?.effectValue).toBe(0.005);
			expect(perfectForm?.maxLevel).toBe(50);
			expect(perfectForm?.minLevel).toBe(4);
		});

		it('should initialize discipline upgrade correctly', () => {
			const discipline = manager.getUpgrade('discipline');

			expect(discipline?.name).toBe('Discipline');
			expect(discipline?.effectType).toBe('discipline');
			expect(discipline?.effectValue).toBe(2.0); // 2x multiplier per level
			expect(discipline?.baseCost).toBe(10000);
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
			expect(cost).toBe(50); // Base cost
		});

		it('should calculate correct cost for level 1 upgrade', () => {
			const upgrades = manager.getUpgrades();
			upgrades['click-power'].currentLevel = 1;

			const cost = manager.getUpgradeCost('click-power');
			// Base cost 50, multiplier 1.4: 50 * 1.4^1 = 70
			expect(cost).toBe(70);
		});

		it('should calculate correct cost for level 5 upgrade', () => {
			const upgrades = manager.getUpgrades();
			upgrades['click-power'].currentLevel = 5;

			const cost = manager.getUpgradeCost('click-power');
			expect(cost).toBe(268);
		});

		it('should return 0 for non-existent upgrade', () => {
			const cost = manager.getUpgradeCost('nonexistent');
			expect(cost).toBe(0);
		});

		it('should calculate discipline costs correctly (expensive)', () => {
			const cost0 = manager.getUpgradeCost('discipline');
			expect(cost0).toBe(10000); // Base cost

			const upgrades = manager.getUpgrades();
			upgrades['discipline'].currentLevel = 1;
			const cost1 = manager.getUpgradeCost('discipline');
			// 10000 * 10^1 = 100,000
			expect(cost1).toBe(100000);

			upgrades['discipline'].currentLevel = 2;
			const cost2 = manager.getUpgradeCost('discipline');
			// 10000 * 10^2 = 1,000,000
			expect(cost2).toBe(1000000);
		});
	});

	describe('Affordability Checks', () => {
		it('should return true when player can afford upgrade', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			expect(manager.canAffordUpgrade('click-power')).toBe(true); // Cost 50
		});

		it('should return false when player cannot afford upgrade', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(40).build();

			expect(manager.canAffordUpgrade('click-power')).toBe(false); // Cost 50
		});

		it('should return false for non-existent upgrade', () => {
			expect(manager.canAffordUpgrade('nonexistent')).toBe(false);
		});

		it('should check affordability correctly with current level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(100).build();
			const upgrades = manager.getUpgrades();

			// Level 0: cost 50, can afford
			expect(manager.canAffordUpgrade('click-power')).toBe(true);

			// Level 1: cost 70, can afford
			upgrades['click-power'].currentLevel = 1;
			expect(manager.canAffordUpgrade('click-power')).toBe(true);

			// Level 2: cost 98, can afford
			upgrades['click-power'].currentLevel = 2;
			expect(manager.canAffordUpgrade('click-power')).toBe(true);

			// Level 3: cost 137, cannot afford (we have 100)
			upgrades['click-power'].currentLevel = 3;
			expect(manager.canAffordUpgrade('click-power')).toBe(false);
		});
	});

	describe('Purchasability Checks', () => {
		it('should return true when upgrade is affordable and not maxed', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			expect(manager.canPurchaseUpgrade('click-power')).toBe(true);
		});

		it('should return false when upgrade is not affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(40).build();

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
			expect(result.expCost).toBe(50);
			expect(result.newLevel).toBe(1);

			// Check upgrade level increased
			const upgrade = manager.getUpgrade('click-power');
			expect(upgrade?.currentLevel).toBe(1);
		});

		it('should fail to purchase when not affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(30).build();

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

			// First purchase: base cost 50
			const result1 = manager.purchaseUpgrade('click-power');
			expect(result1.expCost).toBe(50);

			// Second purchase: 50 * 1.4^1 = 70
			const result2 = manager.purchaseUpgrade('click-power');
			expect(result2.expCost).toBe(70);

			// Third purchase: floor(50 * 1.4^2) = floor(97.999...) = 97
			const result3 = manager.purchaseUpgrade('click-power');
			expect(result3.expCost).toBe(97);
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
			expect(upgrade?.baseCost).toBe(50); // Updated to new balance
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
			expect(result.expCost).toBe(50);
		});

		it('should handle purchasing with EXP amount one less than cost', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(49).build();

			const result = manager.purchaseUpgrade('click-power'); // Cost 50

			expect(result.success).toBe(false);
			expect(result.reason).toBe('cannot_afford');
		});

		it('should handle all upgrades with different cost tiers', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(10000).build();

			// Click upgrades
			expect(manager.getUpgradeCost('click-power')).toBe(50);
			expect(manager.getUpgradeCost('critical-clicks')).toBe(200);

			// Research upgrades
			expect(manager.getUpgradeCost('research-speed')).toBe(800);
			expect(manager.getUpgradeCost('research-power')).toBe(500);

			// Studying upgrades
			expect(manager.getUpgradeCost('studying-speed')).toBe(2500);
			expect(manager.getUpgradeCost('studying-efficiency')).toBe(3000);
			expect(manager.getUpgradeCost('studying-power')).toBe(2000);
			expect(manager.getUpgradeCost('perfect-form')).toBe(4000);

			// Discipline
			expect(manager.getUpgradeCost('discipline')).toBe(10000);
		});

		it('should handle max level upgrades correctly', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();
			const upgrades = manager.getUpgrades();

			// studying efficiency: max level 50
			upgrades['studying-efficiency'].currentLevel = 50;
			expect(manager.canPurchaseUpgrade('studying-efficiency')).toBe(false);

			// studying speed: max level 50
			upgrades['studying-speed'].currentLevel = 50;
			expect(manager.canPurchaseUpgrade('studying-speed')).toBe(false);

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
