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
 * calculateLevelUpCost(2) // 10,000,000
 * calculateLevelUpCost(3) // 10,000,000,000
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
 * const discipline = { baseCost: 100000, costMultiplier: 10, currentLevel: 1, id: 'discipline' }
 * calculateUpgradeCost(discipline) // 1,000,000
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
 * Calculates the studying speed multiplier from upgrades
 * Lower multiplier = faster studying
 *
 * @param upgrades - Map of all upgrades
 * @returns Multiplier for studying duration (lower is faster)
 *
 * @example
 * // No upgrades: 1.0 (100% duration)
 * calculateStudyingSpeedMultiplier({})
 *
 * // One level of -10% studying time: 0.9 (90% duration)
 * calculateStudyingSpeedMultiplier({
 *   'efficient-studying': { effectType: 'trainingSpeed', effectValue: 0.1, currentLevel: 1 }
 * })
 */
export function calculateStudyingSpeedMultiplier(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'studyingSpeed') {
			// v0.1.5+: -0.1s per level from 15s base
			// Convert seconds reduction to multiplier: 15 / (15 - (0.1 * level))
			const secondsReduced = upgrade.effectValue * upgrade.currentLevel; // 0.1s * level
			const baseDuration = 15; // 15 second base studying time
			const newDuration = Math.max(1, baseDuration - secondsReduced); // Min 1 second
			multiplier *= baseDuration / newDuration;
		}
	}

	return multiplier;
}

/**
 * Calculates the studying cost multiplier from upgrades
 * Lower multiplier = cheaper studying
 *
 * @param upgrades - Map of all upgrades
 * @returns Multiplier for studying EXP cost (lower is cheaper)
 *
 * @example
 * // No upgrades: 1.0 (100% cost)
 * calculateStudyingCostMultiplier({})
 *
 * // One level of -20% cost: 0.8 (80% cost)
 * calculateStudyingCostMultiplier({
 *   'cost-reduction': { effectType: 'trainingCost', effectValue: 0.2, currentLevel: 1 }
 * })
 */
export function calculateStudyingCostMultiplier(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'studyingEfficiency') {
			// v0.1.5+: -1% studying cost per level
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
 *   'ruminate-power': { effectType: 'ruminatePower', effectValue: 1, currentLevel: 5 }
 * })
 */
export function calculateRuminateExpBonus(upgrades: { [key: string]: Upgrade }): number {
	let bonus = 0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'researchPower') {
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
 * Calculates the ruminate-specific speed multiplier
 * Higher multiplier = faster ruminate
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
 *   'ruminate-speed': { effectType: 'ruminateSpeed', effectValue: 0.02, currentLevel: 5 }
 * })
 */
export function calculateRuminateSpeedMultiplier(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'researchSpeed') {
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
 * Uses the formula: 100 × (1.5 ^ statLevel), rounded to nearest 5
 *
 * Special case: Level 0 → 1 requires exactly 100 stat EXP to unlock
 *
 * @param currentStatLevel - The current level of the stat
 * @returns Stat EXP required to reach the next level
 *
 * @example
 * calculateStatExpRequired(0) // 100 (Level 0 → 1, unlock stat)
 * calculateStatExpRequired(1) // 150 (Level 1 → 2)
 * calculateStatExpRequired(2) // 225 (Level 2 → 3)
 * calculateStatExpRequired(3) // 340 (Level 3 → 4)
 * calculateStatExpRequired(10) // 5,830 (Level 10 → 11)
 */
export function calculateStatExpRequired(currentStatLevel: number): number {
	// Special case: Level 0 → 1 requires 100 EXP to unlock
	if (currentStatLevel === 0) {
		return 100;
	}

	// Level 1+: Exponential scaling with base 1.5
	// Level 1 → 2: 150, Level 2 → 3: 225, Level 3 → 4: 340, etc.
	const rawCost = 100 * Math.pow(1.5, currentStatLevel);
	// Round to nearest 5 as specified in design document
	return Math.round(rawCost / 5) * 5;
}

/**
 * Calculates the character EXP cost to start stat studying (v0.1.5+ studying economy)
 * Uses the formula: 100,000 × (statLevel ^ 1.3)
 *
 * Special case: Level 0 studying costs 100,000 character EXP (unlock cost)
 *
 * @param currentStatLevel - The current level of the stat being studied
 * @returns Character EXP cost to start studying this stat
 *
 * @example
 * calculateStatStudyingCost(0) // 100,000 (Study to unlock stat at level 1)
 * calculateStatStudyingCost(1) // 100,000 (Study Strength 1→2)
 * calculateStatStudyingCost(5) // 900,000 (Study Strength 5→6)
 * calculateStatStudyingCost(10) // 2,800,000 (Study Strength 10→11)
 * calculateStatStudyingCost(20) // 13,000,000 (Study Strength 20→21)
 */
export function calculateStatStudyingCost(currentStatLevel: number): number {
	// Special case: Level 0 studying costs 100,000 character EXP
	if (currentStatLevel === 0) {
		return 100000;
	}

	return Math.floor(100000 * Math.pow(currentStatLevel, 1.3));
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
 * Calculates the stat gain bonus from upgrades (v0.1.5+ studying system)
 * Additional stat EXP gained per studying completion
 *
 * @param upgrades - Map of all upgrades
 * @returns Additional stat EXP per studying completion
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
			// v0.1.5+: +1 stat EXP per studying per level
			bonus += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return bonus;
}

/**
 * Calculates the studying crit chance from upgrades (v0.1.5+ studying system)
 * Chance for studying to grant double stat EXP
 *
 * @param upgrades - Map of all upgrades
 * @returns Crit chance for studying (0.0 to 1.0)
 *
 * @example
 * // No upgrades: 0.0 (0% crit chance)
 * calculateStudyingCritChance({})
 *
 * // 10 levels of +2% crit: 0.2 (20% crit chance)
 * calculateStudyingCritChance({
 *   'perfect-form': { effectType: 'trainingCrit', effectValue: 0.02, currentLevel: 10 }
 * })
 */
export function calculateStudyingCritChance(upgrades: { [key: string]: Upgrade }): number {
	let critChance = 0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'studyingCrit') {
			// v0.1.5+: +2% studying crit chance per level
			critChance += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return Math.min(0.25, critChance); // Cap at 25%
}

/**
 * Calculates the click crit chance from upgrades (v0.1.5+ click system)
 * Chance for clicks to grant double EXP
 *
 * @param upgrades - Map of all upgrades
 * @returns Crit chance for clicks (0.0 to 0.25)
 *
 * @example
 * // No upgrades: 0.0 (0% crit chance)
 * calculateClickCritChance({})
 *
 * // 10 levels of +2% crit: 0.2 (20% crit chance)
 * calculateClickCritChance({
 *   'critical-clicks': { effectType: 'clickCrit', effectValue: 0.02, currentLevel: 10 }
 * })
 */
export function calculateClickCritChance(upgrades: { [key: string]: Upgrade }): number {
	let critChance = 0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'clickCrit') {
			// v0.1.5+: +2% click crit chance per level
			critChance += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return Math.min(0.25, critChance); // Cap at 25%
}

/**
 * Calculates the click crit damage multiplier from upgrades (v0.1.5+ click system)
 * Additional damage dealt when a crit occurs
 *
 * @param upgrades - Map of all upgrades
 * @returns Crit damage multiplier (0.5 to 1.5, meaning 1.5x to 2.5x total damage)
 *
 * @example
 * // No upgrades: 0.5 (1.5x damage on crit)
 * calculateClickCritDamage({})
 *
 * // 10 levels of +5% crit damage: 1.0 (2.0x damage on crit)
 * calculateClickCritDamage({
 *   'devastating-click': { effectType: 'clickCritDamage', effectValue: 0.05, currentLevel: 10 }
 * })
 */
export function calculateClickCritDamage(upgrades: { [key: string]: Upgrade }): number {
	let critDamage = 0.5; // Base 50% bonus (1.5x damage)

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'clickCritDamage') {
			// v0.1.5+: +5% crit damage per level
			critDamage += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return Math.min(1.5, critDamage); // Cap at 150% bonus (2.5x damage)
}

/**
 * Calculates the ruminate crit chance from upgrades (v0.1.5+ ruminate system)
 * Chance for ruminate ticks to grant double EXP
 *
 * @param upgrades - Map of all upgrades
 * @returns Crit chance for ruminate (0.0 to 0.25)
 *
 * @example
 * // No upgrades: 0.0 (0% crit chance)
 * calculateRuminateCritChance({})
 *
 * // 10 levels of +2% crit: 0.2 (20% crit chance)
 * calculateRuminateCritChance({
 *   'ruminate-crit': { effectType: 'ruminateCrit', effectValue: 0.02, currentLevel: 10 }
 * })
 */
export function calculateRuminateCritChance(upgrades: { [key: string]: Upgrade }): number {
	let critChance = 0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'researchCrit') {
			// v0.1.5+: +2% ruminate crit chance per level
			critChance += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return Math.min(0.25, critChance); // Cap at 25%
}

/**
 * Calculates the ruminate crit damage multiplier from upgrades (v0.1.5+ ruminate system)
 * Additional EXP gained when a ruminate crit occurs
 *
 * @param upgrades - Map of all upgrades
 * @returns Crit damage multiplier (0.5 to 1.5, meaning 1.5x to 2.5x total EXP)
 *
 * @example
 * // No upgrades: 0.5 (1.5x EXP on crit)
 * calculateRuminateCritDamage({})
 *
 * // 10 levels of +5% crit damage: 1.0 (2.0x EXP on crit)
 * calculateRuminateCritDamage({
 *   'devastating-ruminate': { effectType: 'ruminateCritDamage', effectValue: 0.05, currentLevel: 10 }
 * })
 */
export function calculateRuminateCritDamage(upgrades: { [key: string]: Upgrade }): number {
	let critDamage = 0.5; // Base 50% bonus (1.5x EXP)

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'researchCritDamage') {
			// v0.1.5+: +5% crit damage per level
			critDamage += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return Math.min(1.5, critDamage); // Cap at 150% bonus (2.5x EXP)
}

/**
 * Calculates the studying crit damage multiplier from upgrades (v0.1.5+ studying system)
 * Additional stat EXP gained when a studying crit occurs
 *
 * @param upgrades - Map of all upgrades
 * @returns Crit damage multiplier (0.5 to 1.5, meaning 1.5x to 2.5x total stat EXP)
 *
 * @example
 * // No upgrades: 0.5 (1.5x stat EXP on crit)
 * calculateStudyingCritDamage({})
 *
 * // 10 levels of +5% crit damage: 1.0 (2.0x stat EXP on crit)
 * calculateStudyingCritDamage({
 *   'devastating-studying': { effectType: 'trainingCritDamage', effectValue: 0.05, currentLevel: 10 }
 * })
 */
export function calculateStudyingCritDamage(upgrades: { [key: string]: Upgrade }): number {
	let critDamage = 0.5; // Base 50% bonus (1.5x stat EXP)

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'studyingCritDamage') {
			// v0.1.5+: +5% crit damage per level
			critDamage += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return Math.min(1.5, critDamage); // Cap at 150% bonus (2.5x stat EXP)
}

/**
 * Calculates the click power percentage multiplier from upgrades (v0.1.5+ click system)
 * Multiplicative bonus to all click EXP gain
 *
 * @param upgrades - Map of all upgrades
 * @returns Multiplier for click EXP (higher is more EXP)
 *
 * @example
 * // No upgrades: 1.0 (100% EXP)
 * calculateClickMultiplierPercent({})
 *
 * // 10 levels of +5% bonus: 1.5 (150% EXP)
 * calculateClickMultiplierPercent({
 *   'click-mastery': { effectType: 'clickMultiplierPercent', effectValue: 0.05, currentLevel: 10 }
 * })
 */
export function calculateClickMultiplierPercent(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'clickMultiplierPercent') {
			// v0.1.5+: +5% click power per level (additive)
			multiplier += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return multiplier;
}

/**
 * Calculates the ruminate power percentage multiplier from upgrades (v0.1.5+ ruminate system)
 * Multiplicative bonus to all ruminate EXP gain
 *
 * @param upgrades - Map of all upgrades
 * @returns Multiplier for ruminate EXP (higher is more EXP)
 *
 * @example
 * // No upgrades: 1.0 (100% EXP)
 * calculateRuminateMultiplierPercent({})
 *
 * // 10 levels of +5% bonus: 1.5 (150% EXP)
 * calculateRuminateMultiplierPercent({
 *   'ruminate-mastery': { effectType: 'ruminateMultiplierPercent', effectValue: 0.05, currentLevel: 10 }
 * })
 */
export function calculateRuminateMultiplierPercent(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'researchMultiplierPercent') {
			// v0.1.5+: +5% ruminate power per level (additive)
			multiplier += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return multiplier;
}

/**
 * Calculates the stat gain percentage multiplier from upgrades (v0.1.5+ studying system)
 * Multiplicative bonus to all stat EXP gain from studying
 *
 * @param upgrades - Map of all upgrades
 * @returns Multiplier for stat EXP (higher is more stat EXP)
 *
 * @example
 * // No upgrades: 1.0 (100% stat EXP)
 * calculateStatGainMultiplierPercent({})
 *
 * // 10 levels of +5% bonus: 1.5 (150% stat EXP)
 * calculateStatGainMultiplierPercent({
 *   'studying-mastery': { effectType: 'statGainPercent', effectValue: 0.05, currentLevel: 10 }
 * })
 */
export function calculateStatGainMultiplierPercent(upgrades: { [key: string]: Upgrade }): number {
	let multiplier = 1.0;

	for (const upgrade of Object.values(upgrades)) {
		if (upgrade.effectType === 'statGainPercent') {
			// v0.1.5+: +5% stat gain per level (additive)
			multiplier += upgrade.effectValue * upgrade.currentLevel;
		}
	}

	return multiplier;
}
