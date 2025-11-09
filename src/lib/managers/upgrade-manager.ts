import { calculateUpgradeCost } from '../utils/calculations';
import { loadUpgrades, type UpgradeConfig } from '../config/config-loader';

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
	category: 'click' | 'research' | 'studying' | 'special';
	/** Type of effect this upgrade provides */
	effectType:
		| 'clickMultiplier'
		| 'clickCrit'
		| 'clickCritDamage'
		| 'clickMultiplierPercent'
		| 'researchSpeed'
		| 'researchPower'
		| 'researchCrit'
		| 'researchCritDamage'
		| 'researchMultiplierPercent'
		| 'studyingSpeed'
		| 'studyingEfficiency'
		| 'statGain'
		| 'statGainPercent'
		| 'studyingCrit'
		| 'studyingCritDamage'
		| 'levelUp'
		| 'discipline'
		| 'critChance'
		| 'critDamage'
		| 'globalIdleSpeed'
		| 'idleExp'
		| 'studyingCost';
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
	 * Initializes all available upgrades from YAML configuration
	 * Sets currentLevel to 0 for all upgrades (will be restored from save)
	 * @returns Object map of upgrade ID to upgrade definition
	 */
	private initializeUpgrades(): { [key: string]: Upgrade } {
		// Load upgrade definitions from YAML
		const upgradeConfigs = loadUpgrades();

		// Convert UpgradeConfig to Upgrade (add currentLevel)
		const upgrades: { [key: string]: Upgrade } = {};
		for (const [id, config] of Object.entries(upgradeConfigs)) {
			upgrades[id] = {
				...config,
				currentLevel: 0
			};
		}

		return upgrades;
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
	getUpgradesByCategory(category: 'click' | 'research' | 'studying' | 'special'): Upgrade[] {
		return Object.values(this.upgrades).filter((upgrade) => upgrade.category === category);
	}

	/**
	 * Gets all upgrade categories that have visible upgrades for the current level
	 */
	getVisibleCategories(currentLevel: number): ('click' | 'research' | 'studying' | 'special')[] {
		const categories = new Set<'click' | 'research' | 'studying' | 'special'>();

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
