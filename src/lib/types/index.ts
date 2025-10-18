/**
 * Central type definitions for TomeClicker
 * Re-exports all type definitions from the game modules
 */

export type { ThemeColors, Theme, ThemeName } from '../constants/themes';
export type { BreakpointName } from '../constants/breakpoints';

/**
 * Upgrade effect types
 */
export type UpgradeEffectType = 'clickMultiplier' | 'levelUp';

/**
 * Upgrade interface
 */
export interface Upgrade {
	id: string;
	name: string;
	description: string;
	effect: string;
	baseCost: number;
	costMultiplier: number;
	maxLevel: number;
	currentLevel: number;
	effectType: UpgradeEffectType;
	effectValue: number;
}

/**
 * Save data structure for game state persistence
 */
export interface SaveData {
	name: string;
	exp: number;
	lifetimeExp: number;
	level: number;
	clickMultiplier: number;
	upgrades: Record<string, Upgrade>;
	saveIntegrity: string;
	lastValidation: number;
	version: string;
	timestamp: number;
}

/**
 * Save wrapper for encrypted saves
 */
export interface EncryptedSave {
	encrypted: true;
	data: string;
	hash: string;
	version: string;
}

/**
 * Save wrapper for unencrypted saves
 */
export interface UnencryptedSave extends SaveData {
	encrypted: false;
	warning: string;
}

/**
 * Result of import operations
 */
export interface ImportResult {
	success: boolean;
	warning?: string;
	error?: string;
}

/**
 * Device size categories for responsive design
 */
export type DeviceCategory = 'mobile' | 'tablet' | 'desktop';

/**
 * Menu/View identifiers
 */
export type MenuView =
	| 'practice'
	| 'upgrades'
	| 'story'
	| 'help'
	| 'saves'
	| 'settings'
	| 'about';
