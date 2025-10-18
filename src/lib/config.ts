import { THEMES, type ThemeName, isValidTheme } from './constants/themes';

export class Config {
	public darkmode: boolean;
	public theme: ThemeName;

	constructor(theme: string = 'prussian-blue', darkmode: boolean = true) {
		this.darkmode = darkmode;
		this.theme = isValidTheme(theme) ? theme : 'prussian-blue';
	}

	/**
	 * Gets the current theme class name for CSS
	 * @returns Theme class string (e.g., "prussian-blue-dark")
	 */
	getTheme(): string {
		const shade = this.darkmode ? 'dark' : 'light';
		return `${this.theme}-${shade}`;
	}

	/**
	 * Sets the theme with validation
	 * @param theme - Theme name to set
	 * @returns True if theme was set, false if invalid
	 */
	setTheme(theme: string): boolean {
		if (isValidTheme(theme)) {
			this.theme = theme;
			return true;
		}
		return false;
	}

	/**
	 * Toggles between light and dark mode
	 */
	toggleDarkMode(): void {
		this.darkmode = !this.darkmode;
	}

	/**
	 * Gets all available theme names
	 */
	getAvailableThemes(): ThemeName[] {
		return Object.keys(THEMES) as ThemeName[];
	}
}
