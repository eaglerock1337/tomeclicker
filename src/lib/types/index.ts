/**
 * Central type definitions for TomeClicker
 * Re-exports all type definitions from the game modules
 */

export type { ThemeColors, Theme, ThemeName } from '../constants/themes';
export type { BreakpointName } from '../constants/breakpoints';

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
	| 'training'
	| 'meditation'
	| 'adventure'
	| 'story'
	| 'help'
	| 'stats'
	| 'settings'
	| 'about';
