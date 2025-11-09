/**
 * Configuration loader for game balance and upgrade definitions
 * Loads YAML config files and validates them with Zod schemas
 */

import { z } from 'zod';
import upgradesYaml from './upgrades.yaml';

// Zod schema for upgrade definitions
const UpgradeConfigSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	effect: z.string(),
	baseCost: z.number().positive(),
	costMultiplier: z.number().positive(),
	maxLevel: z.number().int().positive(),
	category: z.enum(['click', 'research', 'studying', 'special']),
	effectType: z.enum([
		'clickMultiplier',
		'clickCrit',
		'clickCritDamage',
		'clickMultiplierPercent',
		'researchSpeed',
		'researchPower',
		'researchCrit',
		'researchCritDamage',
		'researchMultiplierPercent',
		'studyingSpeed',
		'studyingEfficiency',
		'statGain',
		'statGainPercent',
		'studyingCrit',
		'studyingCritDamage',
		'levelUp',
		'discipline',
		'critChance',
		'critDamage',
		'globalIdleSpeed',
		'idleExp',
		'studyingCost'
	]),
	effectValue: z.number(),
	minLevel: z.number().int().positive().optional()
});

// Type inference from Zod schema
export type UpgradeConfig = z.infer<typeof UpgradeConfigSchema>;

// Schema for the entire upgrades YAML file
const UpgradesFileSchema = z.record(z.string(), UpgradeConfigSchema);

/**
 * Loads and validates upgrade definitions from parsed YAML data
 * @param yamlData - Parsed YAML data object
 * @returns Validated upgrade configurations indexed by ID
 * @throws {Error} If validation fails
 */
export function loadUpgradesFromData(yamlData: unknown): Record<string, UpgradeConfig> {
	try {
		// Validate against schema
		const validated = UpgradesFileSchema.parse(yamlData);
		return validated;
	} catch (error) {
		if (error instanceof z.ZodError) {
			throw new Error(
				`Invalid upgrade configuration: ${error.issues.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ')}`
			);
		}
		throw new Error(`Failed to load upgrades: ${error}`);
	}
}

/**
 * Loads upgrade definitions from the bundled YAML file
 * Uses Rollup YAML plugin to import and parse at build time
 * This makes it work synchronously in both dev and production
 */
export function loadUpgrades(): Record<string, UpgradeConfig> {
	return loadUpgradesFromData(upgradesYaml);
}
