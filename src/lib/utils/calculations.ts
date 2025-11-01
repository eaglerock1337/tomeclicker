/**
 * Pure calculation functions for game mechanics
 * These functions are extracted from the Game class for better testability and modularity
 */

import type { Upgrade } from '$lib/game';
import {
	BASE_LEVEL_COST,
	LEVEL_COST_MULTIPLIER,
	STAT_BASE_COST,
	STAT_COST_MULTIPLIER
} from '$lib/constants/game';

/**
 * Calculates the EXP cost to reach the next level
 * Uses exponential scaling: BASE_LEVEL_COST * LEVEL_COST_MULTIPLIER^(level-1)
 *
 * @param currentLevel - The player's current level
 * @returns EXP required for next level
 *
 * @example
 * calculateLevelUpCost(1) // 10,000
 * calculateLevelUpCost(2) // 1,000,000
 * calculateLevelUpCost(3) // 100,000,000
 */
export function calculateLevelUpCost(currentLevel: number): number {
	return BASE_LEVEL_COST * Math.pow(LEVEL_COST_MULTIPLIER, currentLevel - 1);
}

/**
 * Calculates the current cost to purchase the next level of an upgrade
 *
 * Special handling:
 * - Discipline upgrade uses pure multiplicative cost (no Math.floor)
 * - Other upgrades use floored exponential cost
 *
 * @param upgrade - The upgrade to calculate cost for
 * @returns EXP cost for next level
 *
 * @example
 * const focusedPractice = { baseCost: 50, costMultiplier: 1.15, currentLevel: 0, id: 'focused-practice' }
 * calculateUpgradeCost(focusedPractice) // 50
 *
 * const discipline = { baseCost: 1000, costMultiplier: 100, currentLevel: 1, id: 'discipline' }
 * calculateUpgradeCost(discipline) // 100,000
 */
export function calculateUpgradeCost(upgrade: Upgrade): number {
	// Special handling for Discipline (multiplicative cost like level ups)
	if (upgrade.id === 'discipline') {
		return upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.currentLevel);
	}

	return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.currentLevel));
}

/**
 * Calculates the EXP cost to level up a specific stat
 * Uses exponential scaling: STAT_BASE_COST * STAT_COST_MULTIPLIER^(level-1)
 *
 * @param currentStatLevel - The current level of the stat
 * @returns EXP cost for next stat level
 *
 * @example
 * calculateStatLevelCost(1) // 100
 * calculateStatLevelCost(2) // 150
 * calculateStatLevelCost(5) // 506
 */
export function calculateStatLevelCost(currentStatLevel: number): number {
	return Math.floor(STAT_BASE_COST * Math.pow(STAT_COST_MULTIPLIER, currentStatLevel - 1));
}

/**
 * Calculates the training speed multiplier from upgrades
 * Lower multiplier = faster training
 *
 * @param upgrades - Map of all upgrades
 * @returns Multiplier for training duration (lower is faster)
 *
 * @example
 * // No upgrades: 1.0 (100% duration)
 * calculateTrainingSpeedMultiplier({})
 *
 * // One level of -10% training time: 0.9 (90% duration)
 * calculateTrainingSpeedMultiplier({
 *   'efficient-training': { effectType: 'trainingSpeed', effectValue: 0.1, currentLevel: 1 }
 * })
 */
export function calculateTrainingSpeedMultiplier(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'trainingSpeed') {
			// v0.1.5+: -0.5s per level from 30s base
			// Convert seconds reduction to multiplier: (30 - (0.5 * level)) / 30
			const secondsReduced = upgrade.effectValue * upgrade.currentLevel; // 0.5s * level
			const baseDuration = 30; // 30 second base training time
			const newDuration = Math.max(1, baseDuration - secondsReduced); // Min 1 second
			multiplier *= newDuration / baseDuration;
		}
	}

	return multiplier;
}

/**
 * Calculates the training cost multiplier from upgrades
 * Lower multiplier = cheaper training
 *
 * @param upgrades - Map of all upgrades
 * @returns Multiplier for training EXP cost (lower is cheaper)
 *
 * @example
 * // No upgrades: 1.0 (100% cost)
 * calculateTrainingCostMultiplier({})
 *
 * // One level of -20% cost: 0.8 (80% cost)
 * calculateTrainingCostMultiplier({
 *   'cost-reduction': { effectType: 'trainingCost', effectValue: 0.2, currentLevel: 1 }
 * })
 */
export function calculateTrainingCostMultiplier(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'trainingEfficiency') {
			// v0.1.5+: -1% training cost per level
			multiplier *= Math.pow(1 - upgrade.effectValue, upgrade.currentLevel);
		}
	}

	return multiplier;
}

/**
 * Calculates the osmosis EXP bonus from upgrades
 *
 * @param upgrades - Map of all upgrades
 * @returns Additional EXP gained per osmosis completion
 *
 * @example
 * // No upgrades: 0 bonus EXP
 * calculateOsmosisExpBonus({})
 *
 * // 5 levels of +1 EXP: 5 bonus EXP
 * calculateOsmosisExpBonus({
 *   'osmotic-absorption': { effectType: 'osmosisExp', effectValue: 1, currentLevel: 5 }
 * })
 */
export function calculateOsmosisExpBonus(upgrades: { [key: string]: Upgrade }): number {
	let bonus = 0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'ruminatePower') {
			// v0.1.5+: +1 EXP per tick per level
			bonus += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return bonus;
}

/**
 * Calculates the global idle speed multiplier from upgrades
 * Higher multiplier = faster idle actions
 *
 * @param upgrades - Map of all upgrades
 * @returns Speed multiplier (higher is faster)
 *
 * @example
 * // No upgrades: 1.0 (100% speed)
 * calculateGlobalIdleSpeedMultiplier({})
 *
 * // 10 levels of +5% speed: 1.5 (150% speed = 1.5x faster)
 * calculateGlobalIdleSpeedMultiplier({
 *   'temporal-mastery': { effectType: 'globalIdleSpeed', effectValue: 0.05, currentLevel: 10 }
 * })
 */
export function calculateGlobalIdleSpeedMultiplier(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'globalIdleSpeed') {
			multiplier += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return multiplier;
}

/**
 * Calculates the osmosis-specific speed multiplier
 * Higher multiplier = faster osmosis
 *
 * @param upgrades - Map of all upgrades
 * @returns Speed multiplier for osmosis actions (higher is faster)
 *
 * @example
 * // No upgrades: 1.0 (100% speed)
 * calculateOsmosisSpeedMultiplier({})
 *
 * // 5 levels of +2% speed: 1.1 (110% speed)
 * calculateOsmosisSpeedMultiplier({
 *   'flow-state': { effectType: 'osmosisSpeed', effectValue: 0.02, currentLevel: 5 }
 * })
 */
export function calculateOsmosisSpeedMultiplier(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'ruminateSpeed') {
			// v0.1.5+: -0.1s per level from 10s base
			// Convert seconds reduction to speed multiplier
			const secondsReduced = upgrade.effectValue * upgrade.currentLevel; // 0.1s * level
			const baseDuration = 10; // 10 second base ruminate time
			const newDuration = Math.max(0.1, baseDuration - secondsReduced); // Min 0.1 second
			multiplier *= baseDuration / newDuration; // Speed multiplier (higher = faster)
		}
	}

	return multiplier;
}

/**
 * Calculates the stat EXP required to reach the next level (v0.1.5+ stat system)
 * Uses the formula: 100 × (1.5 ^ (statLevel - 1)), rounded to nearest 5
 *
 * @param currentStatLevel - The current level of the stat
 * @returns Stat EXP required to reach the next level
 *
 * @example
 * calculateStatExpRequired(1) // 100 (Level 1 → 2)
 * calculateStatExpRequired(2) // 150 (Level 2 → 3)
 * calculateStatExpRequired(3) // 225 (Level 3 → 4)
 * calculateStatExpRequired(10) // 3,885 (Level 10 → 11)
 */
export function calculateStatExpRequired(currentStatLevel: number): number {
	const rawCost = 100 * Math.pow(1.5, currentStatLevel - 1);
	// Round to nearest 5 as specified in design document
	return Math.round(rawCost / 5) * 5;
}

/**
 * Calculates the character EXP cost to start stat training (v0.1.5+ training economy)
 * Uses the formula: 100 × (statLevel ^ 1.3)
 *
 * @param currentStatLevel - The current level of the stat being trained
 * @returns Character EXP cost to start training this stat
 *
 * @example
 * calculateStatTrainingCost(1) // 100 (Train Strength 1→2)
 * calculateStatTrainingCost(5) // 900 (Train Strength 5→6)
 * calculateStatTrainingCost(10) // 2,800 (Train Strength 10→11)
 * calculateStatTrainingCost(20) // 13,000 (Train Strength 20→21)
 */
export function calculateStatTrainingCost(currentStatLevel: number): number {
	return Math.floor(100 * Math.pow(currentStatLevel, 1.3));
}

/**
 * Calculates the maximum stat level allowed based on character level (5:1 ratio)
 * Each character level unlocks 5 potential stat levels
 *
 * @param characterLevel - The player's current character level
 * @returns Maximum stat level allowed
 *
 * @example
 * calculateMaxStatLevel(3) // 15 (Character Level 3 = 15 stat levels max)
 * calculateMaxStatLevel(4) // 20 (Character Level 4 = 20 stat levels max)
 * calculateMaxStatLevel(20) // 100 (Character Level 20 = 100 stat levels max)
 */
export function calculateMaxStatLevel(characterLevel: number): number {
	// Character levels 1-2 have no stat training available
	if (characterLevel < 3) {
		return 0;
	}
	// 5:1 ratio: Each character level unlocks 5 potential stat levels
	return characterLevel * 5;
}

/**
 * Calculates the ruminate efficiency multiplier from upgrades (v0.1.5+)
 * Multiplicative bonus to all rumination EXP gain
 *
 * @param upgrades - Map of all upgrades
 * @returns Multiplier for ruminate EXP (higher is more EXP)
 *
 * @example
 * // No upgrades: 1.0 (100% EXP)
 * calculateRuminateEfficiencyMultiplier({})
 *
 * // 10 levels of +2% efficiency: 1.2 (120% EXP)
 * calculateRuminateEfficiencyMultiplier({
 *   'ruminate-efficiency': { effectType: 'ruminateEfficiency', effectValue: 0.02, currentLevel: 10 }
 * })
 */
export function calculateRuminateEfficiencyMultiplier(upgrades: {
	[key: string]: Upgrade;
}): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'ruminateEfficiency') {
			// v0.1.5+: +2% ruminate EXP gain per level (multiplicative)
			multiplier += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return multiplier;
}

/**
 * Calculates the stat gain bonus from upgrades (v0.1.5+ training system)
 * Additional stat EXP gained per training completion
 *
 * @param upgrades - Map of all upgrades
 * @returns Additional stat EXP per training completion
 *
 * @example
 * // No upgrades: 0 bonus stat EXP
 * calculateStatGainBonus({})
 *
 * // 5 levels of +1 stat EXP: 5 bonus stat EXP
 * calculateStatGainBonus({
 *   'stat-gain': { effectType: 'statGain', effectValue: 1, currentLevel: 5 }
 * })
 */
export function calculateStatGainBonus(upgrades: { [key: string]: Upgrade }): number {
	let bonus = 0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'statGain') {
			// v0.1.5+: +1 stat EXP per training per level
			bonus += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return bonus;
}

/**
 * Calculates the training crit chance from upgrades (v0.1.5+ training system)
 * Chance for training to grant double stat EXP
 *
 * @param upgrades - Map of all upgrades
 * @returns Crit chance for training (0.0 to 1.0)
 *
 * @example
 * // No upgrades: 0.0 (0% crit chance)
 * calculateTrainingCritChance({})
 *
 * // 10 levels of +2% crit: 0.2 (20% crit chance)
 * calculateTrainingCritChance({
 *   'perfect-form': { effectType: 'trainingCrit', effectValue: 0.02, currentLevel: 10 }
 * })
 */
export function calculateTrainingCritChance(upgrades: { [key: string]: Upgrade }): number {
	let critChance = 0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'trainingCrit') {
			// v0.1.5+: +2% training crit chance per level
			critChance += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return Math.min(1.0, critChance); // Cap at 100%
}
