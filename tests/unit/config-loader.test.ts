/**
 * Tests for the config loader module
 * Validates YAML parsing and Zod schema validation
 */

import { describe, it, expect } from 'vitest';
import { loadUpgrades, loadUpgradesFromData } from '$lib/config/config-loader';

describe('Config Loader', () => {
	describe('loadUpgrades', () => {
		it('should load upgrade definitions from YAML', () => {
			const upgrades = loadUpgrades();

			// Should return an object with upgrade definitions
			expect(upgrades).toBeDefined();
			expect(typeof upgrades).toBe('object');

			// Should have all 16 upgrades (4 click + 5 research + 6 studying + 1 special)
			expect(Object.keys(upgrades)).toHaveLength(16);
		});

		it('should load all click category upgrades', () => {
			const upgrades = loadUpgrades();

			expect(upgrades['click-power']).toBeDefined();
			expect(upgrades['critical-clicks']).toBeDefined();
			expect(upgrades['devastating-click']).toBeDefined();
			expect(upgrades['click-mastery']).toBeDefined();

			// Verify category
			expect(upgrades['click-power'].category).toBe('click');
		});

		it('should load all research category upgrades', () => {
			const upgrades = loadUpgrades();

			expect(upgrades['research-power']).toBeDefined();
			expect(upgrades['research-speed']).toBeDefined();
			expect(upgrades['focus-flow']).toBeDefined();
			expect(upgrades['intense-thoughts']).toBeDefined();
			expect(upgrades['research-mastery']).toBeDefined();

			// Verify category
			expect(upgrades['research-power'].category).toBe('research');
		});

		it('should load all studying category upgrades', () => {
			const upgrades = loadUpgrades();

			expect(upgrades['studying-power']).toBeDefined();
			expect(upgrades['studying-speed']).toBeDefined();
			expect(upgrades['studying-efficiency']).toBeDefined();
			expect(upgrades['perfect-form']).toBeDefined();
			expect(upgrades['devastating-studying']).toBeDefined();
			expect(upgrades['studying-mastery']).toBeDefined();

			// Verify category
			expect(upgrades['studying-power'].category).toBe('studying');
		});

		it('should load special category upgrades', () => {
			const upgrades = loadUpgrades();

			expect(upgrades['discipline']).toBeDefined();
			expect(upgrades['discipline'].category).toBe('special');
		});

		it('should have valid upgrade properties', () => {
			const upgrades = loadUpgrades();
			const clickPower = upgrades['click-power'];

			expect(clickPower.id).toBe('click-power');
			expect(clickPower.name).toBe('Click Power');
			expect(clickPower.description).toBeDefined();
			expect(clickPower.effect).toBeDefined();
			expect(clickPower.baseCost).toBeGreaterThan(0);
			expect(clickPower.costMultiplier).toBeGreaterThan(0);
			expect(clickPower.maxLevel).toBeGreaterThan(0);
			expect(clickPower.effectType).toBe('clickMultiplier');
			expect(clickPower.effectValue).toBeGreaterThan(0);
		});

		it('should have correct discipline upgrade values', () => {
			const upgrades = loadUpgrades();
			const discipline = upgrades['discipline'];

			expect(discipline.baseCost).toBe(10000);
			expect(discipline.costMultiplier).toBe(10);
			expect(discipline.maxLevel).toBe(100);
			expect(discipline.effectType).toBe('discipline');
			expect(discipline.effectValue).toBe(2.0);
		});
	});

	describe('loadUpgradesFromData', () => {
		it('should validate correct upgrade data', () => {
			const validData = {
				'test-upgrade': {
					id: 'test-upgrade',
					name: 'Test Upgrade',
					description: 'A test upgrade',
					effect: '+1 test per level',
					baseCost: 100,
					costMultiplier: 1.5,
					maxLevel: 10,
					category: 'click',
					effectType: 'clickMultiplier',
					effectValue: 1
				}
			};

			const result = loadUpgradesFromData(validData);
			expect(result['test-upgrade']).toBeDefined();
			expect(result['test-upgrade'].name).toBe('Test Upgrade');
		});

		it('should reject invalid upgrade data (missing required field)', () => {
			const invalidData = {
				'test-upgrade': {
					id: 'test-upgrade',
					name: 'Test Upgrade'
					// Missing other required fields
				}
			};

			expect(() => loadUpgradesFromData(invalidData)).toThrow(/Invalid upgrade configuration/);
		});

		it('should reject invalid upgrade data (wrong type)', () => {
			const invalidData = {
				'test-upgrade': {
					id: 'test-upgrade',
					name: 'Test Upgrade',
					description: 'A test upgrade',
					effect: '+1 test per level',
					baseCost: -100, // Negative cost (invalid)
					costMultiplier: 1.5,
					maxLevel: 10,
					category: 'click',
					effectType: 'clickMultiplier',
					effectValue: 1
				}
			};

			expect(() => loadUpgradesFromData(invalidData)).toThrow(/Invalid upgrade configuration/);
		});

		it('should reject invalid category', () => {
			const invalidData = {
				'test-upgrade': {
					id: 'test-upgrade',
					name: 'Test Upgrade',
					description: 'A test upgrade',
					effect: '+1 test per level',
					baseCost: 100,
					costMultiplier: 1.5,
					maxLevel: 10,
					category: 'invalid-category', // Invalid category
					effectType: 'clickMultiplier',
					effectValue: 1
				}
			};

			expect(() => loadUpgradesFromData(invalidData)).toThrow(/Invalid upgrade configuration/);
		});

		it('should reject invalid effectType', () => {
			const invalidData = {
				'test-upgrade': {
					id: 'test-upgrade',
					name: 'Test Upgrade',
					description: 'A test upgrade',
					effect: '+1 test per level',
					baseCost: 100,
					costMultiplier: 1.5,
					maxLevel: 10,
					category: 'click',
					effectType: 'invalidEffect', // Invalid effect type
					effectValue: 1
				}
			};

			expect(() => loadUpgradesFromData(invalidData)).toThrow(/Invalid upgrade configuration/);
		});

		it('should accept optional minLevel field', () => {
			const validData = {
				'test-upgrade': {
					id: 'test-upgrade',
					name: 'Test Upgrade',
					description: 'A test upgrade',
					effect: '+1 test per level',
					baseCost: 100,
					costMultiplier: 1.5,
					maxLevel: 10,
					category: 'click',
					effectType: 'clickMultiplier',
					effectValue: 1,
					minLevel: 5
				}
			};

			const result = loadUpgradesFromData(validData);
			expect(result['test-upgrade'].minLevel).toBe(5);
		});
	});
});
