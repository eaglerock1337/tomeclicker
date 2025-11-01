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
		| 'ruminateSpeed'
		| 'ruminatePower'
		| 'ruminateEfficiency'
		| 'trainingSpeed'
		| 'trainingEfficiency'
		| 'statGain'
		| 'trainingCrit'
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
			// === CLICK POWER CATEGORY (Level 1+) ===
			'click-strength': {
				id: 'click-strength',
				name: 'Click Strength',
				description: 'Raw clicking power increases with focus and practice',
				effect: '+1 EXP per click per level',
				baseCost: 50,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'click',
				effectType: 'clickMultiplier',
				effectValue: 1,
				minLevel: 1
			},
			'critical-clicks': {
				id: 'critical-clicks',
				name: 'Critical Clicks',
				description: 'Occasional bursts of insight double your EXP gain',
				effect: '+2% crit chance per level',
				baseCost: 200,
				costMultiplier: 1.5,
				maxLevel: 25,
				currentLevel: 0,
				category: 'click',
				effectType: 'clickCrit',
				effectValue: 0.02,
				minLevel: 2
			},

			// === RUMINATE CATEGORY (Level 2+) ===
			'ruminate-speed': {
				id: 'ruminate-speed',
				name: 'Ruminate Speed',
				description: 'Accelerate the pace of contemplative thought',
				effect: '-0.1s per ruminate tick per level',
				baseCost: 100,
				costMultiplier: 1.5,
				maxLevel: 100,
				currentLevel: 0,
				category: 'ruminate',
				effectType: 'ruminateSpeed',
				effectValue: 0.1,
				minLevel: 2
			},
			'ruminate-power': {
				id: 'ruminate-power',
				name: 'Ruminate Power',
				description: 'Deepen the quality of each contemplative moment',
				effect: '+1 EXP per tick per level',
				baseCost: 500,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'ruminate',
				effectType: 'ruminatePower',
				effectValue: 1,
				minLevel: 2
			},
			'ruminate-efficiency': {
				id: 'ruminate-efficiency',
				name: 'Ruminate Efficiency',
				description: 'Multiplicative bonus to all rumination EXP gain',
				effect: '+2% ruminate EXP gain per level',
				baseCost: 1000,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'ruminate',
				effectType: 'ruminateEfficiency',
				effectValue: 0.02,
				minLevel: 3
			},

			// === TRAINING CATEGORY (Level 3+) ===
			'training-speed': {
				id: 'training-speed',
				name: 'Training Speed',
				description: 'Complete stat training exercises faster',
				effect: '-0.5s per training per level',
				baseCost: 500,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'training',
				effectType: 'trainingSpeed',
				effectValue: 0.5,
				minLevel: 3
			},
			'training-efficiency': {
				id: 'training-efficiency',
				name: 'Training Efficiency',
				description: 'Reduce the character EXP cost to start training',
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
			'stat-gain': {
				id: 'stat-gain',
				name: 'Stat Gain',
				description: 'Increase stat EXP gained from each training completion',
				effect: '+1 stat EXP per training per level',
				baseCost: 2000,
				costMultiplier: 1.5,
				maxLevel: 50,
				currentLevel: 0,
				category: 'training',
				effectType: 'statGain',
				effectValue: 1,
				minLevel: 3
			},
			'perfect-form': {
				id: 'perfect-form',
				name: 'Perfect Form',
				description: 'Chance for training to grant double stat EXP',
				effect: '+2% training crit chance per level',
				baseCost: 3000,
				costMultiplier: 1.5,
				maxLevel: 25,
				currentLevel: 0,
				category: 'training',
				effectType: 'trainingCrit',
				effectValue: 0.02,
				minLevel: 4
			},

			// === SPECIAL CATEGORY ===
			discipline: {
				id: 'discipline',
				name: 'Discipline',
				description: 'Unified focus accelerates ALL forms of progress',
				effect: '5x all EXP gain per level',
				baseCost: UPGRADE_DISCIPLINE_BASE_COST,
				costMultiplier: 100,
				maxLevel: UPGRADE_MAX_DISCIPLINE,
				currentLevel: 0,
				category: 'special',
				effectType: 'discipline',
				effectValue: 5.0,
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
