/**
 * Pure calculation functions for game mechanics
 * These functions are extracted from the Game class for better testability and modularity
 */

import type { Upgrade } from '$lib/game';
import {
	BASE_LEVEL_COST,
	LEVEL_COST_MULTIPLIER,
	STAT_BASE_COST,
	STAT_COST_MULTIPLIER,
	STAT_XP_BASE,
	STAT_XP_MULTIPLIER
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
 * Calculates the stat XP required to reach a specific stat level
 * Uses exponential scaling: STAT_XP_BASE * STAT_XP_MULTIPLIER^(level-1)
 *
 * @param targetLevel - The level to calculate XP requirement for
 * @returns Stat XP required to reach this level
 *
 * @example
 * calculateStatXpForLevel(1) // 0 (starting level)
 * calculateStatXpForLevel(2) // 100
 * calculateStatXpForLevel(3) // 150
 * calculateStatXpForLevel(4) // 225
 */
export function calculateStatXpForLevel(targetLevel: number): number {
	if (targetLevel <= 1) return 0;
	return Math.floor(STAT_XP_BASE * Math.pow(STAT_XP_MULTIPLIER, targetLevel - 2));
}

/**
 * Calculates the stat level from total accumulated stat XP
 * Inverse of calculateStatXpForLevel
 *
 * @param currentXp - Current stat XP amount
 * @returns The stat level this XP corresponds to
 *
 * @example
 * getStatLevelFromXp(0) // 1
 * getStatLevelFromXp(100) // 2
 * getStatLevelFromXp(250) // 3
 */
export function getStatLevelFromXp(currentXp: number): number {
	if (currentXp < STAT_XP_BASE) return 1;

	// Calculate level using logarithm (inverse of exponential formula)
	const level = Math.floor(Math.log(currentXp / STAT_XP_BASE) / Math.log(STAT_XP_MULTIPLIER)) + 2;
	return Math.max(1, level);
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
			multiplier *= Math.pow(1 - upgrade.effectValue, upgrade.currentLevel);
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
		if (upgrade.effectType === 'trainingCost') {
			multiplier *= Math.pow(1 - upgrade.effectValue, upgrade.currentLevel);
		}
	}

	return multiplier;
}

/**
 * Calculates the ruminate EXP bonus from upgrades
 *
 * @param upgrades - Map of all upgrades
 * @returns Additional EXP gained per ruminate completion
 *
 * @example
 * // No upgrades: 0 bonus EXP
 * calculateRuminateExpBonus({})
 *
 * // 5 levels of +1 EXP: 5 bonus EXP
 * calculateRuminateExpBonus({
 *   'osmotic-absorption': { effectType: 'ruminateExp', effectValue: 1, currentLevel: 5 }
 * })
 */
export function calculateRuminateExpBonus(upgrades: { [key: string]: Upgrade }): number {
	let bonus = 0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'ruminateExp') {
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
 * Calculates the ruminate-specific speed multiplier
 * Higher multiplier = faster osmosis
 *
 * @param upgrades - Map of all upgrades
 * @returns Speed multiplier for ruminate actions (higher is faster)
 *
 * @example
 * // No upgrades: 1.0 (100% speed)
 * calculateRuminateSpeedMultiplier({})
 *
 * // 5 levels of +2% speed: 1.1 (110% speed)
 * calculateRuminateSpeedMultiplier({
 *   'flow-state': { effectType: 'ruminateSpeed', effectValue: 0.02, currentLevel: 5 }
 * })
 */
export function calculateRuminateSpeedMultiplier(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'ruminateSpeed') {
			multiplier += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return multiplier;
}
