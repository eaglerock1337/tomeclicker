import { THEMES, type ThemeName, isValidTheme } from './constants/themes';

export type DisplayMode = 'light' | 'dark' | 'system';

export class Config {
	public displayMode: DisplayMode;
	public theme: ThemeName;

	constructor(theme: string = 'prussian-blue', displayMode: DisplayMode = 'system') {
		this.displayMode = displayMode;
		this.theme = isValidTheme(theme) ? theme : 'prussian-blue';
	}

	/**
	 * Gets the current theme class name for CSS
	 * @returns Theme class string (e.g., "prussian-blue-dark")
	 */
	getTheme(): string {
		const shade = this.getEffectiveShade();
		return `${this.theme}-${shade}`;
	}

	/**
	 * Determines the effective light/dark shade based on displayMode
	 * @returns 'light' or 'dark'
	 */
	private getEffectiveShade(): 'light' | 'dark' {
		if (this.displayMode === 'system') {
			// Check system preference
			if (typeof window !== 'undefined' && window.matchMedia) {
				return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			}
			return 'light'; // Fallback for SSR or browsers without matchMedia
		}
		return this.displayMode;
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
	 * Sets the display mode (light, dark, or system)
	 * @param mode - Display mode to set
	 */
	setDisplayMode(mode: DisplayMode): void {
		this.displayMode = mode;
	}

	/**
	 * Gets all available theme names
	 */
	getAvailableThemes(): ThemeName[] {
		return Object.keys(THEMES) as ThemeName[];
	}

	/**
	 * Legacy method for backward compatibility
	 * @deprecated Use displayMode property instead
	 */
	get darkmode(): boolean {
		return this.getEffectiveShade() === 'dark';
	}

	/**
	 * Legacy method for backward compatibility
	 * @deprecated Use setDisplayMode() instead
	 */
	set darkmode(value: boolean) {
		this.displayMode = value ? 'dark' : 'light';
	}

	/**
	 * Legacy method for backward compatibility
	 * @deprecated Use setDisplayMode() instead
	 */
	toggleDarkMode(): void {
		this.displayMode = this.getEffectiveShade() === 'dark' ? 'light' : 'dark';
	}
}
