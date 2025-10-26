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
			expect(upgrades['focused-practice']).toBeDefined();
			expect(upgrades['critical-insight']).toBeDefined();
			expect(upgrades['devastating-critique']).toBeDefined();
			expect(upgrades['osmotic-absorption']).toBeDefined();
			expect(upgrades['flow-state']).toBeDefined();
			expect(upgrades['temporal-mastery']).toBeDefined();
			expect(upgrades['efficient-training']).toBeDefined();
			expect(upgrades['cost-reduction']).toBeDefined();
			expect(upgrades['discipline']).toBeDefined();
		});

		it('should initialize click multiplier upgrades correctly', () => {
			const focusedPractice = manager.getUpgrade('focused-practice');

			expect(focusedPractice).toBeDefined();
			expect(focusedPractice?.name).toBe('Focused Practice');
			expect(focusedPractice?.effectType).toBe('clickMultiplier');
			expect(focusedPractice?.effectValue).toBe(1.0);
			expect(focusedPractice?.currentLevel).toBe(0);
			expect(focusedPractice?.maxLevel).toBe(100);
			expect(focusedPractice?.minLevel).toBe(1);
		});

		it('should initialize crit upgrades correctly', () => {
			const critInsight = manager.getUpgrade('critical-insight');
			const critDamage = manager.getUpgrade('devastating-critique');

			expect(critInsight?.effectType).toBe('critChance');
			expect(critInsight?.effectValue).toBe(0.005); // 0.5% per level
			expect(critInsight?.maxLevel).toBe(50);

			expect(critDamage?.effectType).toBe('critDamage');
			expect(critDamage?.effectValue).toBe(0.05); // 5% per level
			expect(critDamage?.maxLevel).toBe(50);
		});

		it('should initialize idle/osmosis upgrades correctly', () => {
			const osmosis = manager.getUpgrade('osmotic-absorption');
			const flowState = manager.getUpgrade('flow-state');
			const temporal = manager.getUpgrade('temporal-mastery');

			expect(osmosis?.effectType).toBe('osmosisExp');
			expect(osmosis?.effectValue).toBe(1);
			expect(osmosis?.minLevel).toBe(2);

			expect(flowState?.effectType).toBe('osmosisSpeed');
			expect(flowState?.effectValue).toBe(0.02);
			expect(flowState?.minLevel).toBe(2);

			expect(temporal?.effectType).toBe('globalIdleSpeed');
			expect(temporal?.effectValue).toBe(0.05);
			expect(temporal?.minLevel).toBe(2);
		});

		it('should initialize training upgrades correctly', () => {
			const efficientTraining = manager.getUpgrade('efficient-training');
			const costReduction = manager.getUpgrade('cost-reduction');

			expect(efficientTraining?.effectType).toBe('trainingSpeed');
			expect(efficientTraining?.effectValue).toBe(0.1);
			expect(efficientTraining?.maxLevel).toBe(10);
			expect(efficientTraining?.minLevel).toBe(3);

			expect(costReduction?.effectType).toBe('trainingCost');
			expect(costReduction?.effectValue).toBe(0.2);
			expect(costReduction?.maxLevel).toBe(5);
			expect(costReduction?.minLevel).toBe(3);
		});

		it('should initialize discipline upgrade correctly', () => {
			const discipline = manager.getUpgrade('discipline');

			expect(discipline?.name).toBe('Discipline');
			expect(discipline?.effectType).toBe('clickMultiplier');
			expect(discipline?.effectValue).toBe(5.0); // 5x multiplier
			expect(discipline?.baseCost).toBe(1000);
			expect(discipline?.costMultiplier).toBe(100); // Very expensive
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
			const cost = manager.getUpgradeCost('focused-practice');
			expect(cost).toBe(50); // Base cost
		});

		it('should calculate correct cost for level 1 upgrade', () => {
			const upgrades = manager.getUpgrades();
			upgrades['focused-practice'].currentLevel = 1;

			const cost = manager.getUpgradeCost('focused-practice');
			// Base cost 50, multiplier 1.15: 50 * 1.15^1 = 57.5, floored to 57
			expect(cost).toBe(57);
		});

		it('should calculate correct cost for level 5 upgrade', () => {
			const upgrades = manager.getUpgrades();
			upgrades['focused-practice'].currentLevel = 5;

			const cost = manager.getUpgradeCost('focused-practice');
			// Base cost 50, multiplier 1.15: 50 * 1.15^5 = 100.56, floored to 100
			expect(cost).toBe(100);
		});

		it('should return 0 for non-existent upgrade', () => {
			const cost = manager.getUpgradeCost('nonexistent');
			expect(cost).toBe(0);
		});

		it('should calculate discipline costs correctly (expensive)', () => {
			const cost0 = manager.getUpgradeCost('discipline');
			expect(cost0).toBe(1000); // Base cost

			const upgrades = manager.getUpgrades();
			upgrades['discipline'].currentLevel = 1;
			const cost1 = manager.getUpgradeCost('discipline');
			// 1000 * 100^1 = 100,000
			expect(cost1).toBe(100000);

			upgrades['discipline'].currentLevel = 2;
			const cost2 = manager.getUpgradeCost('discipline');
			// 1000 * 100^2 = 10,000,000
			expect(cost2).toBe(10000000);
		});
	});

	describe('Affordability Checks', () => {
		it('should return true when player can afford upgrade', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			expect(manager.canAffordUpgrade('focused-practice')).toBe(true); // Cost 50
		});

		it('should return false when player cannot afford upgrade', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(25).build();

			expect(manager.canAffordUpgrade('focused-practice')).toBe(false); // Cost 50
		});

		it('should return false for non-existent upgrade', () => {
			expect(manager.canAffordUpgrade('nonexistent')).toBe(false);
		});

		it('should check affordability correctly with current level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(60).build();
			const upgrades = manager.getUpgrades();

			// Level 0: cost 50, can afford
			expect(manager.canAffordUpgrade('focused-practice')).toBe(true);

			// Level 1: cost 57, can afford
			upgrades['focused-practice'].currentLevel = 1;
			expect(manager.canAffordUpgrade('focused-practice')).toBe(true);

			// Level 5: cost 100, cannot afford
			upgrades['focused-practice'].currentLevel = 5;
			expect(manager.canAffordUpgrade('focused-practice')).toBe(false);
		});
	});

	describe('Purchasability Checks', () => {
		it('should return true when upgrade is affordable and not maxed', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			expect(manager.canPurchaseUpgrade('focused-practice')).toBe(true);
		});

		it('should return false when upgrade is not affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(25).build();

			expect(manager.canPurchaseUpgrade('focused-practice')).toBe(false);
		});

		it('should return false when upgrade is at max level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();
			const upgrades = manager.getUpgrades();
			upgrades['focused-practice'].currentLevel = 100; // Max level

			expect(manager.canPurchaseUpgrade('focused-practice')).toBe(false);
		});

		it('should return false for non-existent upgrade', () => {
			expect(manager.canPurchaseUpgrade('nonexistent')).toBe(false);
		});
	});

	describe('Purchase Logic', () => {
		it('should successfully purchase upgrade when affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(1000).build();

			const result = manager.purchaseUpgrade('focused-practice');

			expect(result.success).toBe(true);
			expect(result.expCost).toBe(50);
			expect(result.newLevel).toBe(1);

			// Check upgrade level increased
			const upgrade = manager.getUpgrade('focused-practice');
			expect(upgrade?.currentLevel).toBe(1);
		});

		it('should fail to purchase when not affordable', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(25).build();

			const result = manager.purchaseUpgrade('focused-practice');

			expect(result.success).toBe(false);
			expect(result.reason).toBe('cannot_afford');
			expect(result.expCost).toBeUndefined();
			expect(result.newLevel).toBeUndefined();

			// Check upgrade level unchanged
			const upgrade = manager.getUpgrade('focused-practice');
			expect(upgrade?.currentLevel).toBe(0);
		});

		it('should fail to purchase when at max level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();
			const upgrades = manager.getUpgrades();
			upgrades['focused-practice'].currentLevel = 100; // Max level

			const result = manager.purchaseUpgrade('focused-practice');

			expect(result.success).toBe(false);
			expect(result.reason).toBe('max_level');

			// Check upgrade level unchanged
			expect(upgrades['focused-practice'].currentLevel).toBe(100);
		});

		it('should fail to purchase non-existent upgrade', () => {
			const result = manager.purchaseUpgrade('nonexistent');

			expect(result.success).toBe(false);
			expect(result.reason).toBe('not_found');
		});

		it('should allow multiple purchases until max level', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();

			// Purchase 5 times
			for (let i = 0; i < 5; i++) {
				const result = manager.purchaseUpgrade('cost-reduction'); // Max level 5
				expect(result.success).toBe(true);
				expect(result.newLevel).toBe(i + 1);
			}

			// 6th purchase should fail (max level reached)
			const failResult = manager.purchaseUpgrade('cost-reduction');
			expect(failResult.success).toBe(false);
			expect(failResult.reason).toBe('max_level');
		});

		it('should calculate correct costs for sequential purchases', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();

			// First purchase: base cost 50
			const result1 = manager.purchaseUpgrade('focused-practice');
			expect(result1.expCost).toBe(50);

			// Second purchase: 50 * 1.15^1 = 57
			const result2 = manager.purchaseUpgrade('focused-practice');
			expect(result2.expCost).toBe(57);

			// Third purchase: 50 * 1.15^2 = 66
			const result3 = manager.purchaseUpgrade('focused-practice');
			expect(result3.expCost).toBe(66);
		});
	});

	describe('Migration', () => {
		it('should migrate upgrades and preserve levels', () => {
			const savedUpgrades: { [key: string]: Upgrade } = {
				'focused-practice': {
					id: 'focused-practice',
					name: 'Old Name',
					description: 'Old description',
					effect: 'Old effect',
					baseCost: 999, // Old balance
					costMultiplier: 2.0,
					maxLevel: 50,
					currentLevel: 25, // Progress to preserve
					effectType: 'clickMultiplier',
					effectValue: 2.0,
					minLevel: 1
				}
			};

			manager.migrateUpgrades(savedUpgrades);

			const upgrade = manager.getUpgrade('focused-practice');
			expect(upgrade?.currentLevel).toBe(25); // Preserved from save
			expect(upgrade?.name).toBe('Focused Practice'); // Updated to new definition
			expect(upgrade?.baseCost).toBe(50); // Updated to new balance
			expect(upgrade?.maxLevel).toBe(100); // Updated to new balance
		});

		it('should add new upgrades during migration', () => {
			const savedUpgrades: { [key: string]: Upgrade } = {
				'focused-practice': {
					id: 'focused-practice',
					name: 'Focused Practice',
					description: 'Desc',
					effect: 'Effect',
					baseCost: 50,
					costMultiplier: 1.15,
					maxLevel: 100,
					currentLevel: 10,
					effectType: 'clickMultiplier',
					effectValue: 1.0,
					minLevel: 1
				}
				// Note: saved game doesn't have 'critical-insight' yet
			};

			manager.migrateUpgrades(savedUpgrades);

			const upgrades = manager.getUpgrades();
			expect(upgrades['focused-practice'].currentLevel).toBe(10); // Preserved
			expect(upgrades['critical-insight'].currentLevel).toBe(0); // New upgrade added
			expect(upgrades['discipline'].currentLevel).toBe(0); // New upgrade added
		});

		it('should handle empty saved upgrades', () => {
			manager.migrateUpgrades({});

			const upgrades = manager.getUpgrades();
			// All upgrades should exist with level 0
			expect(upgrades['focused-practice'].currentLevel).toBe(0);
			expect(upgrades['discipline'].currentLevel).toBe(0);
		});

		it('should preserve all upgrade levels during migration', () => {
			const savedUpgrades = manager.getUpgrades();

			// Set some levels
			savedUpgrades['focused-practice'].currentLevel = 15;
			savedUpgrades['critical-insight'].currentLevel = 8;
			savedUpgrades['discipline'].currentLevel = 2;

			manager.migrateUpgrades(savedUpgrades);

			const upgrades = manager.getUpgrades();
			expect(upgrades['focused-practice'].currentLevel).toBe(15);
			expect(upgrades['critical-insight'].currentLevel).toBe(8);
			expect(upgrades['discipline'].currentLevel).toBe(2);
		});
	});

	describe('Edge Cases', () => {
		it('should handle purchasing with exact EXP amount', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(50).build();

			const result = manager.purchaseUpgrade('focused-practice'); // Cost 50

			expect(result.success).toBe(true);
			expect(result.expCost).toBe(50);
		});

		it('should handle purchasing with EXP amount one less than cost', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(49).build();

			const result = manager.purchaseUpgrade('focused-practice'); // Cost 50

			expect(result.success).toBe(false);
			expect(result.reason).toBe('cannot_afford');
		});

		it('should handle all upgrades with different cost tiers', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(10000).build();

			// Tier 1: 50
			expect(manager.getUpgradeCost('focused-practice')).toBe(50);

			// Tier 2: 100
			expect(manager.getUpgradeCost('osmotic-absorption')).toBe(100);

			// Tier 3: 250
			expect(manager.getUpgradeCost('critical-insight')).toBe(250);

			// Tier 4: 300
			expect(manager.getUpgradeCost('flow-state')).toBe(300);

			// Tier 5: 500
			expect(manager.getUpgradeCost('devastating-critique')).toBe(500);
			expect(manager.getUpgradeCost('temporal-mastery')).toBe(500);

			// Training upgrades
			expect(manager.getUpgradeCost('efficient-training')).toBe(10000);
			expect(manager.getUpgradeCost('cost-reduction')).toBe(15000);

			// Discipline
			expect(manager.getUpgradeCost('discipline')).toBe(1000);
		});

		it('should handle max level upgrades correctly', () => {
			const manager = new UpgradeManagerBuilder().withCurrentExp(999999).build();
			const upgrades = manager.getUpgrades();

			// Cost reduction: max level 5
			upgrades['cost-reduction'].currentLevel = 5;
			expect(manager.canPurchaseUpgrade('cost-reduction')).toBe(false);

			// Efficient training: max level 10
			upgrades['efficient-training'].currentLevel = 10;
			expect(manager.canPurchaseUpgrade('efficient-training')).toBe(false);

			// Crit upgrades: max level 50
			upgrades['critical-insight'].currentLevel = 50;
			expect(manager.canPurchaseUpgrade('critical-insight')).toBe(false);

			// Standard upgrades: max level 100
			upgrades['focused-practice'].currentLevel = 100;
			expect(manager.canPurchaseUpgrade('focused-practice')).toBe(false);

			// Discipline: max level 10
			upgrades['discipline'].currentLevel = 10;
			expect(manager.canPurchaseUpgrade('discipline')).toBe(false);
		});
	});
});
