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
	/** Type of effect this upgrade provides */
	effectType:
		| 'clickMultiplier'
		| 'idleExp'
		| 'trainingSpeed'
		| 'trainingCost'
		| 'levelUp'
		| 'critChance'
		| 'critDamage'
		| 'ruminateExp'
		| 'ruminateSpeed'
		| 'globalIdleSpeed';
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
	 * Initializes all available upgrades with default values
	 * @returns Object map of upgrade ID to upgrade definition
	 */
	private initializeUpgrades(): { [key: string]: Upgrade } {
		return {
			// Level 1 Click upgrades
			'focused-practice': {
				id: 'focused-practice',
				name: 'Focused Practice',
				description: 'Deep concentration yields exponentially greater rewards',
				effect: '+100% EXP per click per level',
				baseCost: UPGRADE_COST_TIER_1,
				costMultiplier: 1.15,
				maxLevel: UPGRADE_MAX_STANDARD,
				currentLevel: 0,
				effectType: 'clickMultiplier',
				effectValue: 1.0,
				minLevel: 1
			},
			'critical-insight': {
				id: 'critical-insight',
				name: 'Critical Insight',
				description: 'Moments of clarity grant bursts of understanding',
				effect: '+0.5% crit chance per level',
				baseCost: UPGRADE_COST_TIER_3,
				costMultiplier: 1.75,
				maxLevel: UPGRADE_MAX_CRIT,
				currentLevel: 0,
				effectType: 'critChance',
				effectValue: 0.005,
				minLevel: 1
			},
			'devastating-critique': {
				id: 'devastating-critique',
				name: 'Devastating Critique',
				description: 'Critical insights become increasingly profound',
				effect: '+5% crit damage per level',
				baseCost: UPGRADE_COST_TIER_5,
				costMultiplier: 2.0,
				maxLevel: UPGRADE_MAX_CRIT,
				currentLevel: 0,
				effectType: 'critDamage',
				effectValue: 0.05,
				minLevel: 1
			},

			// Level 2 Idle/Rumination upgrades
			'osmotic-absorption': {
				id: 'osmotic-absorption',
				name: 'Deep Contemplation',
				description: 'Thoughtful reflection yields greater insights',
				effect: '+1 EXP per rumination level',
				baseCost: UPGRADE_COST_TIER_2,
				costMultiplier: 1.18,
				maxLevel: UPGRADE_MAX_STANDARD,
				currentLevel: 0,
				effectType: 'ruminateExp',
				effectValue: 1,
				minLevel: 2
			},
			'flow-state': {
				id: 'flow-state',
				name: 'Flow State',
				description: 'Enter a state of effortless focus',
				effect: '+2% rumination speed per level',
				baseCost: UPGRADE_COST_TIER_4,
				costMultiplier: 1.2,
				maxLevel: UPGRADE_MAX_CRIT,
				currentLevel: 0,
				effectType: 'ruminateSpeed',
				effectValue: 0.02,
				minLevel: 2
			},
			'temporal-mastery': {
				id: 'temporal-mastery',
				name: 'Temporal Mastery',
				description: 'Bend time itself to your will (affects ALL idle actions)',
				effect: '+5% global idle speed per level',
				baseCost: UPGRADE_COST_TIER_5,
				costMultiplier: 1.25,
				maxLevel: UPGRADE_MAX_STANDARD,
				currentLevel: 0,
				effectType: 'globalIdleSpeed',
				effectValue: 0.05,
				minLevel: 2
			},

			// Level 3+ Training upgrades
			'efficient-training': {
				id: 'efficient-training',
				name: 'Efficient Training',
				description: 'Complete training exercises faster',
				effect: '-10% training time per level',
				baseCost: UPGRADE_TRAINING_SPEED_COST,
				costMultiplier: 1.3,
				maxLevel: UPGRADE_MAX_TRAINING,
				currentLevel: 0,
				effectType: 'trainingSpeed',
				effectValue: 0.1,
				minLevel: 3
			},
			'cost-reduction': {
				id: 'cost-reduction',
				name: 'Cost Reduction',
				description: 'Training requires less EXP to start',
				effect: '-20% training cost per level',
				baseCost: UPGRADE_TRAINING_COST_REDUCTION,
				costMultiplier: 1.35,
				maxLevel: UPGRADE_MAX_COST_REDUCTION,
				currentLevel: 0,
				effectType: 'trainingCost',
				effectValue: 0.2,
				minLevel: 3
			},

			// Special: Discipline upgrade (available early, expensive)
			discipline: {
				id: 'discipline',
				name: 'Discipline',
				description: 'Unified focus accelerates all progress',
				effect: '5x all EXP gain per level',
				baseCost: UPGRADE_DISCIPLINE_BASE_COST,
				costMultiplier: 100, // Expensive scaling like level-ups
				maxLevel: UPGRADE_MAX_DISCIPLINE,
				currentLevel: 0,
				effectType: 'clickMultiplier',
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
