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
			green: '#08725dff',
			red: '#cc6300ff',
			yellow: '#b8860bff'
		},
		dark: {
			bg: '#2d384eff',
			altBg: '#1e2534ff',
			text: '#57adefff',
			blue: '#57adefff',
			green: '#1aefc4ff',
			red: '#ffa047ff',
			yellow: '#ffd700ff'
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
			green: '#4d6b4d',
			red: '#b8302f',
			yellow: '#d6a82e'
		},
		dark: {
			bg: '#3d1e1e',
			altBg: '#2a1414',
			text: '#e8c5c5',
			blue: '#9d7a98',
			green: '#7d9d7d',
			red: '#e27777',
			yellow: '#f7dc6f'
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
			green: '#5b8c5b',
			red: '#a84d3d',
			yellow: '#c9a843'
		},
		dark: {
			bg: '#1e3d1e',
			altBg: '#142814',
			text: '#d5e8d5',
			blue: '#7db3c4',
			green: '#8cc58c',
			red: '#d77a6a',
			yellow: '#f5d66e'
		}
	},

	'titanium-white': {
		name: 'titanium-white',
		displayName: 'Titanium White',
		light: {
			bg: '#f8f9fa',
			altBg: '#e9ecef',
			text: '#212529',
			blue: '#4a90e2',
			green: '#52c41a',
			red: '#f5222d',
			yellow: '#faad14'
		},
		dark: {
			bg: '#1a1d21',
			altBg: '#0d0f12',
			text: '#f8f9fa',
			blue: '#74b3ff',
			green: '#73d13d',
			red: '#ff5566',
			yellow: '#ffc53d'
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
			green: '#6b7d5a',
			red: '#a85a3d',
			yellow: '#d6a843'
		},
		dark: {
			bg: '#3d2817',
			altBg: '#2a1a0f',
			text: '#e8ddd0',
			blue: '#9d8d7f',
			green: '#9bb083',
			red: '#d8876a',
			yellow: '#f5d66e'
		}
	},

	'midnight-black': {
		name: 'midnight-black',
		displayName: 'Midnight Black',
		light: {
			bg: '#e0e6ed',
			altBg: '#c7d1dd',
			text: '#0a0e14',
			blue: '#3b7ea1',
			green: '#4d9b4d',
			red: '#c14b4b',
			yellow: '#d69e2e'
		},
		dark: {
			bg: '#0a0e14',
			altBg: '#000000',
			text: '#e0e6ed',
			blue: '#6bb4d1',
			green: '#7dd17d',
			red: '#e27777',
			yellow: '#f7dc6f'
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
