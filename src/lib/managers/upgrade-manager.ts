import { calculateUpgradeCost } from '../utils/calculations';
import {
	UPGRADE_COST_TIER_1,
	UPGRADE_COST_TIER_2,
	UPGRADE_COST_TIER_3,
	UPGRADE_COST_TIER_4,
	UPGRADE_COST_TIER_5,
	UPGRADE_DISCIPLINE_BASE_COST,
	UPGRADE_TRAINING_SPEED_COST,
	UPGRADE_TRAINING_COST_REDUCTION,
	UPGRADE_MAX_STANDARD,
	UPGRADE_MAX_CRIT,
	UPGRADE_MAX_TRAINING,
	UPGRADE_MAX_COST_REDUCTION,
	UPGRADE_MAX_DISCIPLINE
} from '../constants/game';

/**
 * Represents an upgrade that can be purchased with EXP
 */
export interface Upgrade {
	/** Unique identifier for the upgrade */
	id: string;
	/** Display name shown to the player */
	name: string;
	/** Detailed description of what the upgrade does */
	description: string;
	/** Text describing the numerical effect */
	effect: string;
	/** Base cost in EXP for the first level */
	baseCost: number;
	/** Multiplier applied to cost for each level purchased */
	costMultiplier: number;
	/** Maximum number of times this upgrade can be purchased */
	maxLevel: number;
	/** Current level/times purchased */
	currentLevel: number;
	/** Category for UI organization */
	category: 'click' | 'ruminate' | 'training' | 'special';
	/** Type of effect this upgrade provides */
	effectType:
		| 'clickMultiplier'
		| 'clickCrit'
		| 'clickCritDamage'
		| 'clickMultiplierPercent'
		| 'ruminateSpeed'
		| 'ruminatePower'
		| 'ruminateEfficiency'
		| 'ruminateCrit'
		| 'ruminateCritDamage'
		| 'ruminateMultiplierPercent'
		| 'trainingSpeed'
		| 'trainingEfficiency'
		| 'statGain'
		| 'statGainPercent'
		| 'trainingCrit'
		| 'trainingCritDamage'
		| 'levelUp'
		| 'discipline'
		| 'critChance'
		| 'critDamage'
		| 'osmosisExp'
		| 'osmosisSpeed'
		| 'globalIdleSpeed'
		| 'idleExp'
		| 'trainingCost';
	/** Numeric value of the effect per level */
	effectValue: number;
	/** Minimum level required to see this upgrade */
	minLevel?: number;
}

/**
 * Result of attempting to purchase an upgrade
 */
export interface UpgradePurchaseResult {
	/** Whether the purchase was successful */
	success: boolean;
	/** EXP cost that was deducted (if successful) */
	expCost?: number;
	/** New upgrade level (if successful) */
	newLevel?: number;
	/** Reason for failure (if unsuccessful) */
	reason?: 'cannot_afford' | 'max_level' | 'not_found';
}

/**
 * Dependencies required by UpgradeManager
 */
export interface UpgradeManagerDependencies {
	/** Get current EXP balance */
	getCurrentExp: () => number;
}

/**
 * Manages all upgrade state and purchase logic
 * Handles upgrade definitions, costs, and purchase transactions
 */
export class UpgradeManager {
	private upgrades: { [key: string]: Upgrade };

	constructor(private deps: UpgradeManagerDependencies) {
		this.upgrades = this.initializeUpgrades();
	}

	/**
	 * Initializes all available upgrades with default values (v0.1.5+ multi-level system)
	 * @returns Object map of upgrade ID to upgrade definition
	 */
	private initializeUpgrades(): { [key: string]: Upgrade } {
		return {
			// === CLICK CATEGORY (Level 2) ===
			// Standardized: Power (+1), Crit (+0.5%), Crit Damage (+2%), Mastery (+5%)
			'click-power': {
				id: 'click-power',
				name: 'Click Power',
				description: 'Baseline clicking strength increases with practice',
				effect: '+1 EXP per click per level',
				baseCost: 100,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'click',
				effectType: 'clickMultiplier',
				effectValue: 1,
				minLevel: 2
			},
			'critical-clicks': {
				id: 'critical-clicks',
				name: 'Critical Clicks',
				description: 'Increases chance for clicks to critically strike for bonus EXP',
				effect: '+0.5% crit chance per level',
				baseCost: 200,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'click',
				effectType: 'clickCrit',
				effectValue: 0.005,
				minLevel: 2
			},
			'devastating-click': {
				id: 'devastating-click',
				name: 'Devastating Click',
				description: 'Increases the bonus EXP multiplier when clicks critically strike',
				effect: '+2% crit damage per level',
				baseCost: 300,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'click',
				effectType: 'clickCritDamage',
				effectValue: 0.02,
				minLevel: 2
			},
			'click-mastery': {
				id: 'click-mastery',
				name: 'Click Mastery',
				description: 'Multiplicative bonus to all click EXP gains',
				effect: '+5% EXP per click per level',
				baseCost: 400,
				costMultiplier: 2,
				maxLevel: 20,
				currentLevel: 0,
				category: 'click',
				effectType: 'clickMultiplierPercent',
				effectValue: 0.05,
				minLevel: 3
			},

			// === RUMINATE CATEGORY (Level 2-4) ===
			// Power/Speed/Efficiency at L2, Crit/Mastery at L3, Crit Damage at L4
			'ruminate-power': {
				id: 'ruminate-power',
				name: 'Ruminate Power',
				description: 'Increases EXP gained from each rumination thought',
				effect: '+1% EXP per thought per level',
				baseCost: 500,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'ruminate',
				effectType: 'ruminateMultiplierPercent',
				effectValue: 0.01,
				minLevel: 2
			},
			'ruminate-speed': {
				id: 'ruminate-speed',
				name: 'Ruminate Speed',
				description: 'Reduces time between rumination thoughts',
				effect: '-0.1s per thought per level',
				baseCost: 100,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'ruminate',
				effectType: 'ruminateSpeed',
				effectValue: 0.1,
				minLevel: 2
			},
			'ruminate-crit': {
				id: 'ruminate-crit',
				name: 'Ruminate Crit',
				description: 'Increases chance for rumination to critically strike for bonus EXP',
				effect: '+0.5% ruminate crit chance per level',
				baseCost: 800,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'ruminate',
				effectType: 'ruminateCrit',
				effectValue: 0.005,
				minLevel: 3
			},
			'devastating-ruminate': {
				id: 'devastating-ruminate',
				name: 'Devastating Ruminate',
				description: 'Increases the bonus EXP multiplier when rumination critically strikes',
				effect: '+2% ruminate crit damage per level',
				baseCost: 1000,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'ruminate',
				effectType: 'ruminateCritDamage',
				effectValue: 0.02,
				minLevel: 4
			},
			'ruminate-mastery': {
				id: 'ruminate-mastery',
				name: 'Ruminate Mastery',
				description: 'Multiplicative bonus to all rumination EXP gains',
				effect: '+5% ruminate EXP per level',
				baseCost: 1500,
				costMultiplier: 2,
				maxLevel: 20,
				currentLevel: 0,
				category: 'ruminate',
				effectType: 'ruminateMultiplierPercent',
				effectValue: 0.05,
				minLevel: 4
			},
			'ruminate-efficiency': {
				id: 'ruminate-efficiency',
				name: 'Ruminate Efficiency',
				description: 'Reduces character EXP cost to start rumination',
				effect: '-1% ruminate cost per level',
				baseCost: 1200,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'ruminate',
				effectType: 'ruminateEfficiency',
				effectValue: 0.01,
				minLevel: 2
			},

			// === TRAINING CATEGORY (Level 3-4) ===
			// Power/Speed/Efficiency at L3, Crit/Crit Damage/Mastery at L4
			'training-power': {
				id: 'training-power',
				name: 'Training Power',
				description: 'Increases stat EXP gained from each training completion',
				effect: '+1% stat EXP per training per level',
				baseCost: 2000,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'training',
				effectType: 'statGainPercent',
				effectValue: 0.01,
				minLevel: 3
			},
			'training-speed': {
				id: 'training-speed',
				name: 'Training Speed',
				description: 'Reduces time required to complete stat training exercises',
				effect: '-0.1s per training per level',
				baseCost: 500,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'training',
				effectType: 'trainingSpeed',
				effectValue: 0.1,
				minLevel: 3
			},
			'training-efficiency': {
				id: 'training-efficiency',
				name: 'Training Efficiency',
				description: 'Reduces character EXP cost to start training',
				effect: '-1% training cost per level',
				baseCost: 1000,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'training',
				effectType: 'trainingEfficiency',
				effectValue: 0.01,
				minLevel: 3
			},
			'perfect-form': {
				id: 'perfect-form',
				name: 'Perfect Form',
				description: 'Increases chance for training to critically strike for bonus stat EXP',
				effect: '+0.5% training crit chance per level',
				baseCost: 3000,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'training',
				effectType: 'trainingCrit',
				effectValue: 0.005,
				minLevel: 4
			},
			'devastating-training': {
				id: 'devastating-training',
				name: 'Devastating Training',
				description: 'Increases the bonus stat EXP multiplier when training critically strikes',
				effect: '+2% training crit damage per level',
				baseCost: 4000,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'training',
				effectType: 'trainingCritDamage',
				effectValue: 0.02,
				minLevel: 4
			},
			'training-mastery': {
				id: 'training-mastery',
				name: 'Training Mastery',
				description: 'Multiplicative bonus to all stat EXP gains from training',
				effect: '+5% stat EXP per training per level',
				baseCost: 3500,
				costMultiplier: 2,
				maxLevel: 20,
				currentLevel: 0,
				category: 'training',
				effectType: 'statGainPercent',
				effectValue: 0.05,
				minLevel: 4
			},

			// === SPECIAL CATEGORY ===
			discipline: {
				id: 'discipline',
				name: 'Discipline',
				description: 'Unified focus accelerates ALL forms of progress',
				effect: '2x all EXP gain per level',
				baseCost: UPGRADE_DISCIPLINE_BASE_COST,
				costMultiplier: 10, // 10x per level: 100k, 1M, 10M, 100M...
				maxLevel: UPGRADE_MAX_DISCIPLINE,
				currentLevel: 0,
				category: 'special',
				effectType: 'discipline',
				effectValue: 2.0,
				minLevel: 1
			}
		};
	}

	/**
	 * Gets all upgrades
	 */
	getUpgrades(): { [key: string]: Upgrade } {
		return this.upgrades;
	}

	/**
	 * Gets a specific upgrade by ID
	 */
	getUpgrade(upgradeId: string): Upgrade | undefined {
		return this.upgrades[upgradeId];
	}

	/**
	 * Gets all upgrades in a specific category
	 */
	getUpgradesByCategory(category: 'click' | 'ruminate' | 'training' | 'special'): Upgrade[] {
		return Object.values(this.upgrades).filter((upgrade) => upgrade.category === category);
	}

	/**
	 * Gets all upgrade categories that have visible upgrades for the current level
	 */
	getVisibleCategories(currentLevel: number): ('click' | 'ruminate' | 'training' | 'special')[] {
		const categories = new Set<'click' | 'ruminate' | 'training' | 'special'>();

		for (const upgrade of Object.values(this.upgrades)) {
			if (!upgrade.minLevel || currentLevel >= upgrade.minLevel) {
				categories.add(upgrade.category);
			}
		}

		return Array.from(categories);
	}

	/**
	 * Calculates the current cost to purchase the next level of an upgrade
	 * @param upgradeId - ID of the upgrade to check
	 * @returns EXP cost for next level, or 0 if upgrade doesn't exist
	 */
	getUpgradeCost(upgradeId: string): number {
		const upgrade = this.upgrades[upgradeId];
		if (!upgrade) return 0;

		return calculateUpgradeCost(upgrade);
	}

	/**
	 * Checks if player has enough EXP to afford an upgrade
	 * @param upgradeId - ID of the upgrade to check
	 * @returns True if affordable, false otherwise
	 */
	canAffordUpgrade(upgradeId: string): boolean {
		const upgrade = this.upgrades[upgradeId];
		if (!upgrade) return false;

		const cost = this.getUpgradeCost(upgradeId);
		return this.deps.getCurrentExp() >= cost;
	}

	/**
	 * Checks if an upgrade can be purchased (affordable AND not maxed)
	 * @param upgradeId - ID of the upgrade to check
	 * @returns True if purchaseable, false otherwise
	 */
	canPurchaseUpgrade(upgradeId: string): boolean {
		const upgrade = this.upgrades[upgradeId];
		if (!upgrade) return false;

		return this.canAffordUpgrade(upgradeId) && upgrade.currentLevel < upgrade.maxLevel;
	}

	/**
	 * Attempts to purchase the next level of an upgrade
	 * Returns a result object indicating success/failure and details
	 * @param upgradeId - ID of the upgrade to purchase
	 * @returns Purchase result with success status and details
	 */
	purchaseUpgrade(upgradeId: string): UpgradePurchaseResult {
		const upgrade = this.upgrades[upgradeId];

		// Check if upgrade exists
		if (!upgrade) {
			return { success: false, reason: 'not_found' };
		}

		// Check if at max level
		if (upgrade.currentLevel >= upgrade.maxLevel) {
			return { success: false, reason: 'max_level' };
		}

		// Check if can afford
		const cost = this.getUpgradeCost(upgradeId);
		if (this.deps.getCurrentExp() < cost) {
			return { success: false, reason: 'cannot_afford' };
		}

		// Purchase successful - increment level
		upgrade.currentLevel++;

		return {
			success: true,
			expCost: cost,
			newLevel: upgrade.currentLevel
		};
	}

	/**
	 * Migrates saved upgrade data to current upgrade definitions
	 * Preserves progress while allowing upgrade balance changes
	 * @param savedUpgrades - Upgrade data from a saved game
	 */
	migrateUpgrades(savedUpgrades: { [key: string]: Upgrade }): void {
		// Get fresh upgrade definitions
		const freshUpgrades = this.initializeUpgrades();

		// Preserve current levels from saved upgrades
		for (const upgradeId in freshUpgrades) {
			if (savedUpgrades[upgradeId]) {
				freshUpgrades[upgradeId].currentLevel = savedUpgrades[upgradeId].currentLevel;
			}
		}

		this.upgrades = freshUpgrades;
	}
}
