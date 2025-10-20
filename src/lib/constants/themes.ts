/**
 * Theme color definitions for TomeClicker
 * Inspired by Bob Ross color palettes
 */

export interface ThemeColors {
	bg: string;
	altBg: string;
	text: string;
	blue: string;
	green: string;
	red: string;
	yellow: string;
}

export interface Theme {
	name: string;
	displayName: string;
	light: ThemeColors;
	dark: ThemeColors;
}

export const THEMES: Record<string, Theme> = {
	'prussian-blue': {
		name: 'prussian-blue',
		displayName: 'Prussian Blue',
		light: {
			bg: '#97a6c3ff',
			altBg: '#a4b1cbff',
			text: '#0c4f83ff',
			blue: '#0c4f83ff',
			green: '#047a5d',
			red: '#d94e00',
			yellow: '#d4a000'
		},
		dark: {
			bg: '#2d384eff',
			altBg: '#1e2534ff',
			text: '#57adefff',
			blue: '#57adefff',
			green: '#00ff9f',
			red: '#ff8c3a',
			yellow: '#ffea00'
		}
	},

	'alizarin-crimson': {
		name: 'alizarin-crimson',
		displayName: 'Alizarin Crimson',
		light: {
			bg: '#f4d9d9',
			altBg: '#e8b8b8',
			text: '#4a1212',
			blue: '#6b4266',
			green: '#2d7a2d',
			red: '#d92f2e',
			yellow: '#e6b500'
		},
		dark: {
			bg: '#3d1e1e',
			altBg: '#2a1414',
			text: '#e8c5c5',
			blue: '#9d7a98',
			green: '#5dd85d',
			red: '#ff6b6b',
			yellow: '#ffd93d'
		}
	},

	'sap-green': {
		name: 'sap-green',
		displayName: 'Sap Green',
		light: {
			bg: '#dde8d5',
			altBg: '#c5d9b8',
			text: '#1e3d1e',
			blue: '#4d7c8a',
			green: '#3d8a3d',
			red: '#c74a2e',
			yellow: '#d4a800'
		},
		dark: {
			bg: '#1e3d1e',
			altBg: '#142814',
			text: '#d5e8d5',
			blue: '#7db3c4',
			green: '#5cff5c',
			red: '#ff7556',
			yellow: '#ffe03d'
		}
	},

	'titanium-white': {
		name: 'titanium-white',
		displayName: 'Titanium White',
		light: {
			bg: '#f8f9fa',
			altBg: '#e9ecef',
			text: '#212529',
			blue: '#2b7fd6',
			green: '#27b300',
			red: '#e6222d',
			yellow: '#f09900'
		},
		dark: {
			bg: '#3a3d41',
			altBg: '#2d3035',
			text: '#f8f9fa',
			blue: '#5ca3ff',
			green: '#3dff3d',
			red: '#ff4757',
			yellow: '#ffd43d'
		}
	},

	'van-dyke-brown': {
		name: 'van-dyke-brown',
		displayName: 'Van Dyke Brown',
		light: {
			bg: '#e8ddd0',
			altBg: '#d4c4b0',
			text: '#3d2817',
			blue: '#6d5d4f',
			green: '#4d7a3d',
			red: '#c74a2e',
			yellow: '#d4a800'
		},
		dark: {
			bg: '#3d2817',
			altBg: '#2a1a0f',
			text: '#e8ddd0',
			blue: '#9d8d7f',
			green: '#7dd85d',
			red: '#ff8c5c',
			yellow: '#ffe03d'
		}
	},

	'midnight-black': {
		name: 'midnight-black',
		displayName: 'Midnight Black',
		light: {
			bg: '#c5cbd5',
			altBg: '#adb5c2',
			text: '#0a0e14',
			blue: '#2d6b8f',
			red: '#d93d3d',
			green: '#2d9b2d',
			yellow: '#d99800'
		},
		dark: {
			bg: '#0a0e14',
			altBg: '#000000',
			text: '#e0e6ed',
			blue: '#5ca3ff',
			green: '#3dff3d',
			red: '#ff4757',
			yellow: '#ffd43d'
		}
	}
} as const;

export type ThemeName = keyof typeof THEMES;

/**
 * Gets the list of all available theme names
 */
export function getThemeNames(): ThemeName[] {
	return Object.keys(THEMES) as ThemeName[];
}

/**
 * Gets the display name for a theme
 * @param themeName - The theme identifier
 */
export function getThemeDisplayName(themeName: ThemeName): string {
	return THEMES[themeName]?.displayName || themeName;
}

/**
 * Validates if a theme name exists
 * @param themeName - The theme identifier to validate
 */
export function isValidTheme(themeName: string): themeName is ThemeName {
	return themeName in THEMES;
}
