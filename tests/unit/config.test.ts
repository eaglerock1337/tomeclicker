import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Config, type DisplayMode } from '$lib/config';

describe('Config', () => {
	let localStorageMock: Record<string, string>;

	beforeEach(() => {
		// Reset localStorage mock
		localStorageMock = {};

		// Mock localStorage
		global.localStorage = {
			getItem: vi.fn((key: string) => localStorageMock[key] || null),
			setItem: vi.fn((key: string, value: string) => {
				localStorageMock[key] = value;
			}),
			removeItem: vi.fn((key: string) => {
				delete localStorageMock[key];
			}),
			clear: vi.fn(() => {
				localStorageMock = {};
			}),
			key: vi.fn((index: number) => Object.keys(localStorageMock)[index] || null),
			length: Object.keys(localStorageMock).length
		} as unknown as Storage;
	});

	afterEach(() => {
		vi.resetAllMocks();
	});

	describe('Constructor', () => {
		it('should create config with default values', () => {
			const config = new Config();
			expect(config.theme).toBe('prussian-blue');
			expect(config.displayMode).toBe('system');
		});

		it('should create config with custom valid theme', () => {
			const config = new Config('alizarin-crimson');
			expect(config.theme).toBe('alizarin-crimson');
			expect(config.displayMode).toBe('system');
		});

		it('should create config with custom displayMode', () => {
			const config = new Config('prussian-blue', 'dark');
			expect(config.theme).toBe('prussian-blue');
			expect(config.displayMode).toBe('dark');
		});

		it('should create config with custom theme and displayMode', () => {
			const config = new Config('sap-green', 'light');
			expect(config.theme).toBe('sap-green');
			expect(config.displayMode).toBe('light');
		});

		it('should fallback to prussian-blue for invalid theme', () => {
			const config = new Config('invalid-theme');
			expect(config.theme).toBe('prussian-blue');
		});

		it('should accept all valid theme names', () => {
			const validThemes = [
				'prussian-blue',
				'alizarin-crimson',
				'sap-green',
				'titanium-white',
				'van-dyke-brown',
				'midnight-black'
			];

			validThemes.forEach((theme) => {
				const config = new Config(theme);
				expect(config.theme).toBe(theme);
			});
		});

		it('should fallback to prussian-blue for empty string theme', () => {
			const config = new Config('');
			expect(config.theme).toBe('prussian-blue');
		});

		it('should fallback to prussian-blue for null-like theme', () => {
			const config = new Config(undefined as any);
			expect(config.theme).toBe('prussian-blue');
		});
	});

	describe('getTheme()', () => {
		it('should return theme with light shade when displayMode is light', () => {
			const config = new Config('prussian-blue', 'light');
			expect(config.getTheme()).toBe('prussian-blue-light');
		});

		it('should return theme with dark shade when displayMode is dark', () => {
			const config = new Config('prussian-blue', 'dark');
			expect(config.getTheme()).toBe('prussian-blue-dark');
		});

		it('should return correct theme name with all valid themes in light mode', () => {
			const validThemes = [
				'prussian-blue',
				'alizarin-crimson',
				'sap-green',
				'titanium-white',
				'van-dyke-brown',
				'midnight-black'
			];

			validThemes.forEach((theme) => {
				const config = new Config(theme, 'light');
				expect(config.getTheme()).toBe(`${theme}-light`);
			});
		});

		it('should return correct theme name with all valid themes in dark mode', () => {
			const validThemes = [
				'prussian-blue',
				'alizarin-crimson',
				'sap-green',
				'titanium-white',
				'van-dyke-brown',
				'midnight-black'
			];

			validThemes.forEach((theme) => {
				const config = new Config(theme, 'dark');
				expect(config.getTheme()).toBe(`${theme}-dark`);
			});
		});

		it('should handle system mode with matchMedia available', () => {
			// Mock matchMedia to return dark preference
			Object.defineProperty(window, 'matchMedia', {
				writable: true,
				value: vi.fn(() => ({
					matches: true,
					media: '(prefers-color-scheme: dark)',
					onchange: null,
					addListener: vi.fn(),
					removeListener: vi.fn(),
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
					dispatchEvent: vi.fn()
				}))
			});

			const config = new Config('prussian-blue', 'system');
			expect(config.getTheme()).toBe('prussian-blue-dark');
		});

		it('should handle system mode with light preference via matchMedia', () => {
			// Mock matchMedia to return light preference
			Object.defineProperty(window, 'matchMedia', {
				writable: true,
				value: vi.fn(() => ({
					matches: false,
					media: '(prefers-color-scheme: dark)',
					onchange: null,
					addListener: vi.fn(),
					removeListener: vi.fn(),
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
					dispatchEvent: vi.fn()
				}))
			});

			const config = new Config('prussian-blue', 'system');
			expect(config.getTheme()).toBe('prussian-blue-light');
		});
	});

	describe('setTheme()', () => {
		it('should set valid theme and return true', () => {
			const config = new Config();
			const result = config.setTheme('alizarin-crimson');
			expect(result).toBe(true);
			expect(config.theme).toBe('alizarin-crimson');
		});

		it('should not change theme for invalid theme and return false', () => {
			const config = new Config('prussian-blue');
			const result = config.setTheme('invalid-theme');
			expect(result).toBe(false);
			expect(config.theme).toBe('prussian-blue');
		});

		it('should set all valid themes', () => {
			const config = new Config();
			const validThemes = [
				'alizarin-crimson',
				'sap-green',
				'titanium-white',
				'van-dyke-brown',
				'midnight-black'
			];

			validThemes.forEach((theme) => {
				const result = config.setTheme(theme);
				expect(result).toBe(true);
				expect(config.theme).toBe(theme);
			});
		});

		it('should return false for empty string theme', () => {
			const config = new Config();
			const result = config.setTheme('');
			expect(result).toBe(false);
			expect(config.theme).toBe('prussian-blue');
		});

		it('should return false for null-like theme', () => {
			const config = new Config();
			const result = config.setTheme(null as any);
			expect(result).toBe(false);
			expect(config.theme).toBe('prussian-blue');
		});

		it('should return false for undefined theme', () => {
			const config = new Config();
			const result = config.setTheme(undefined as any);
			expect(result).toBe(false);
			expect(config.theme).toBe('prussian-blue');
		});
	});

	describe('setDisplayMode()', () => {
		it('should set displayMode to light', () => {
			const config = new Config();
			config.setDisplayMode('light');
			expect(config.displayMode).toBe('light');
		});

		it('should set displayMode to dark', () => {
			const config = new Config();
			config.setDisplayMode('dark');
			expect(config.displayMode).toBe('dark');
		});

		it('should set displayMode to system', () => {
			const config = new Config();
			config.setDisplayMode('system');
			expect(config.displayMode).toBe('system');
		});

		it('should update displayMode multiple times', () => {
			const config = new Config('prussian-blue', 'light');
			expect(config.displayMode).toBe('light');

			config.setDisplayMode('dark');
			expect(config.displayMode).toBe('dark');

			config.setDisplayMode('system');
			expect(config.displayMode).toBe('system');

			config.setDisplayMode('light');
			expect(config.displayMode).toBe('light');
		});
	});

	describe('getAvailableThemes()', () => {
		it('should return array of theme names', () => {
			const config = new Config();
			const themes = config.getAvailableThemes();
			expect(Array.isArray(themes)).toBe(true);
			expect(themes.length).toBeGreaterThan(0);
		});

		it('should return all valid theme names', () => {
			const config = new Config();
			const themes = config.getAvailableThemes();
			const expectedThemes = [
				'prussian-blue',
				'alizarin-crimson',
				'sap-green',
				'titanium-white',
				'van-dyke-brown',
				'midnight-black'
			];

			expectedThemes.forEach((theme) => {
				expect(themes).toContain(theme);
			});
		});

		it('should return exactly 6 themes', () => {
			const config = new Config();
			const themes = config.getAvailableThemes();
			expect(themes.length).toBe(6);
		});

		it('should return different instances on multiple calls', () => {
			const config = new Config();
			const themes1 = config.getAvailableThemes();
			const themes2 = config.getAvailableThemes();
			// Should have same content
			expect(themes1).toEqual(themes2);
		});
	});

	describe('Legacy darkmode getter/setter', () => {
		it('should return true for darkmode getter when shade is dark', () => {
			const config = new Config('prussian-blue', 'dark');
			expect(config.darkmode).toBe(true);
		});

		it('should return false for darkmode getter when shade is light', () => {
			const config = new Config('prussian-blue', 'light');
			expect(config.darkmode).toBe(false);
		});

		it('should set displayMode to dark when darkmode is true', () => {
			const config = new Config('prussian-blue', 'light');
			config.darkmode = true;
			expect(config.displayMode).toBe('dark');
		});

		it('should set displayMode to light when darkmode is false', () => {
			const config = new Config('prussian-blue', 'dark');
			config.darkmode = false;
			expect(config.displayMode).toBe('light');
		});

		it('should toggle darkmode correctly', () => {
			const config = new Config('prussian-blue', 'light');
			expect(config.darkmode).toBe(false);

			config.darkmode = true;
			expect(config.darkmode).toBe(true);
			expect(config.displayMode).toBe('dark');

			config.darkmode = false;
			expect(config.darkmode).toBe(false);
			expect(config.displayMode).toBe('light');
		});

		it('should work with system mode preference', () => {
			// Mock matchMedia to return dark preference
			Object.defineProperty(window, 'matchMedia', {
				writable: true,
				value: vi.fn(() => ({
					matches: true,
					media: '(prefers-color-scheme: dark)',
					onchange: null,
					addListener: vi.fn(),
					removeListener: vi.fn(),
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
					dispatchEvent: vi.fn()
				}))
			});

			const config = new Config('prussian-blue', 'system');
			expect(config.darkmode).toBe(true);
		});
	});

	describe('toggleDarkMode()', () => {
		it('should toggle from light to dark', () => {
			const config = new Config('prussian-blue', 'light');
			config.toggleDarkMode();
			expect(config.displayMode).toBe('dark');
		});

		it('should toggle from dark to light', () => {
			const config = new Config('prussian-blue', 'dark');
			config.toggleDarkMode();
			expect(config.displayMode).toBe('light');
		});

		it('should toggle multiple times', () => {
			const config = new Config('prussian-blue', 'light');
			config.toggleDarkMode();
			expect(config.displayMode).toBe('dark');

			config.toggleDarkMode();
			expect(config.displayMode).toBe('light');

			config.toggleDarkMode();
			expect(config.displayMode).toBe('dark');
		});

		it('should work with system mode', () => {
			// Mock matchMedia to return dark preference
			Object.defineProperty(window, 'matchMedia', {
				writable: true,
				value: vi.fn(() => ({
					matches: true,
					media: '(prefers-color-scheme: dark)',
					onchange: null,
					addListener: vi.fn(),
					removeListener: vi.fn(),
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
					dispatchEvent: vi.fn()
				}))
			});

			const config = new Config('prussian-blue', 'system');
			// System is dark, so toggle should switch to light
			config.toggleDarkMode();
			expect(config.displayMode).toBe('light');

			// Now toggle to dark
			config.toggleDarkMode();
			expect(config.displayMode).toBe('dark');
		});
	});

	describe('saveToLocalStorage()', () => {
		it('should save config to localStorage', () => {
			const config = new Config('alizarin-crimson', 'dark');
			config.saveToLocalStorage();

			expect(localStorage.setItem).toHaveBeenCalledWith(
				'tomeclicker_config',
				JSON.stringify({
					theme: 'alizarin-crimson',
					displayMode: 'dark'
				})
			);
		});

		it('should save all valid themes', () => {
			const validThemes = [
				'prussian-blue',
				'alizarin-crimson',
				'sap-green',
				'titanium-white',
				'van-dyke-brown',
				'midnight-black'
			];

			validThemes.forEach((theme) => {
				const config = new Config(theme, 'light');
				config.saveToLocalStorage();

				expect(localStorage.setItem).toHaveBeenCalledWith(
					'tomeclicker_config',
					JSON.stringify({
						theme,
						displayMode: 'light'
					})
				);
			});
		});

		it('should save all displayModes', () => {
			const modes: DisplayMode[] = ['light', 'dark', 'system'];

			modes.forEach((mode) => {
				const config = new Config('prussian-blue', mode);
				config.saveToLocalStorage();

				expect(localStorage.setItem).toHaveBeenCalledWith(
					'tomeclicker_config',
					JSON.stringify({
						theme: 'prussian-blue',
						displayMode: mode
					})
				);
			});
		});

		it('should update localStorage on multiple saves', () => {
			const config = new Config('prussian-blue', 'light');
			config.saveToLocalStorage();

			config.theme = 'sap-green';
			config.saveToLocalStorage();

			config.displayMode = 'dark';
			config.saveToLocalStorage();

			expect(localStorage.setItem).toHaveBeenCalledTimes(3);
		});

		it('should return early if localStorage is undefined', () => {
			const config = new Config();
			const originalLocalStorage = global.localStorage;
			delete (global as any).localStorage;

			// Should not throw
			expect(() => config.saveToLocalStorage()).not.toThrow();

			global.localStorage = originalLocalStorage;
		});

		it('should catch and log errors on save failure', () => {
			const config = new Config();
			const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

			// Make setItem throw
			(localStorage.setItem as any).mockImplementation(() => {
				throw new Error('Storage full');
			});

			config.saveToLocalStorage();

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Failed to save config to localStorage:',
				expect.any(Error)
			);
			consoleErrorSpy.mockRestore();
		});
	});

	describe('loadFromLocalStorage()', () => {
		it('should load config from localStorage with valid data', () => {
			localStorageMock['tomeclicker_config'] = JSON.stringify({
				theme: 'alizarin-crimson',
				displayMode: 'dark'
			});

			const config = new Config();
			const result = config.loadFromLocalStorage();

			expect(result).toBe(true);
			expect(config.theme).toBe('alizarin-crimson');
			expect(config.displayMode).toBe('dark');
		});

		it('should load all valid themes', () => {
			const validThemes = [
				'prussian-blue',
				'alizarin-crimson',
				'sap-green',
				'titanium-white',
				'van-dyke-brown',
				'midnight-black'
			];

			validThemes.forEach((theme) => {
				localStorageMock['tomeclicker_config'] = JSON.stringify({
					theme,
					displayMode: 'light'
				});

				const config = new Config();
				const result = config.loadFromLocalStorage();

				expect(result).toBe(true);
				expect(config.theme).toBe(theme);
			});
		});

		it('should load all displayModes', () => {
			const modes: DisplayMode[] = ['light', 'dark', 'system'];

			modes.forEach((mode) => {
				localStorageMock['tomeclicker_config'] = JSON.stringify({
					theme: 'prussian-blue',
					displayMode: mode
				});

				const config = new Config();
				const result = config.loadFromLocalStorage();

				expect(result).toBe(true);
				expect(config.displayMode).toBe(mode);
			});
		});

		it('should return false when localStorage is empty', () => {
			const config = new Config('prussian-blue', 'light');
			const result = config.loadFromLocalStorage();

			expect(result).toBe(false);
			expect(config.theme).toBe('prussian-blue');
			expect(config.displayMode).toBe('light');
		});

		it('should reject invalid theme and keep default', () => {
			localStorageMock['tomeclicker_config'] = JSON.stringify({
				theme: 'invalid-theme',
				displayMode: 'dark'
			});

			const config = new Config('prussian-blue', 'light');
			const result = config.loadFromLocalStorage();

			expect(result).toBe(true);
			expect(config.theme).toBe('prussian-blue'); // Should keep default
			expect(config.displayMode).toBe('dark'); // But should update displayMode
		});

		it('should accept any displayMode without validation', () => {
			// Note: Config class doesn't validate displayMode on load (only theme is validated)
			localStorageMock['tomeclicker_config'] = JSON.stringify({
				theme: 'alizarin-crimson',
				displayMode: 'invalid-mode'
			});

			const config = new Config('prussian-blue', 'light');
			const result = config.loadFromLocalStorage();

			expect(result).toBe(true);
			expect(config.theme).toBe('alizarin-crimson');
			expect(config.displayMode).toBe('invalid-mode'); // No validation on displayMode
		});

		it('should handle partial data (only theme)', () => {
			localStorageMock['tomeclicker_config'] = JSON.stringify({
				theme: 'sap-green'
			});

			const config = new Config('prussian-blue', 'light');
			const result = config.loadFromLocalStorage();

			expect(result).toBe(true);
			expect(config.theme).toBe('sap-green');
			expect(config.displayMode).toBe('light'); // Unchanged
		});

		it('should handle partial data (only displayMode)', () => {
			localStorageMock['tomeclicker_config'] = JSON.stringify({
				displayMode: 'dark'
			});

			const config = new Config('prussian-blue', 'light');
			const result = config.loadFromLocalStorage();

			expect(result).toBe(true);
			expect(config.theme).toBe('prussian-blue'); // Unchanged
			expect(config.displayMode).toBe('dark');
		});

		it('should return false if localStorage is undefined', () => {
			const config = new Config();
			const originalLocalStorage = global.localStorage;
			delete (global as any).localStorage;

			const result = config.loadFromLocalStorage();

			expect(result).toBe(false);

			global.localStorage = originalLocalStorage;
		});

		it('should catch and log errors on load failure', () => {
			const config = new Config();
			const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

			localStorageMock['tomeclicker_config'] = 'invalid-json{';

			const result = config.loadFromLocalStorage();

			expect(result).toBe(false);
			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Error loading config from localStorage:',
				expect.any(Error)
			);
			consoleErrorSpy.mockRestore();
		});

		it('should return false for malformed JSON', () => {
			const config = new Config('prussian-blue', 'light');
			const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

			localStorageMock['tomeclicker_config'] = '{ invalid json ]';

			const result = config.loadFromLocalStorage();

			expect(result).toBe(false);
			expect(config.theme).toBe('prussian-blue'); // Unchanged
			expect(config.displayMode).toBe('light'); // Unchanged
			consoleErrorSpy.mockRestore();
		});
	});

	describe('Round-trip save/load', () => {
		it('should save and load config identically', () => {
			const original = new Config('alizarin-crimson', 'dark');
			original.saveToLocalStorage();

			const loaded = new Config();
			loaded.loadFromLocalStorage();

			expect(loaded.theme).toBe(original.theme);
			expect(loaded.displayMode).toBe(original.displayMode);
			expect(loaded.getTheme()).toBe(original.getTheme());
		});

		it('should save and load all valid theme combinations', () => {
			const validThemes = [
				'prussian-blue',
				'alizarin-crimson',
				'sap-green',
				'titanium-white',
				'van-dyke-brown',
				'midnight-black'
			];
			const modes: DisplayMode[] = ['light', 'dark', 'system'];

			for (const theme of validThemes) {
				for (const mode of modes) {
					localStorageMock = {}; // Reset

					const original = new Config(theme, mode);
					original.saveToLocalStorage();

					const loaded = new Config();
					loaded.loadFromLocalStorage();

					expect(loaded.theme).toBe(theme);
					expect(loaded.displayMode).toBe(mode);
				}
			}
		});

		it('should preserve theme after multiple save/load cycles', () => {
			const config = new Config('van-dyke-brown', 'light');
			config.saveToLocalStorage();

			const loaded1 = new Config();
			loaded1.loadFromLocalStorage();
			loaded1.setTheme('sap-green');
			loaded1.saveToLocalStorage();

			const loaded2 = new Config();
			loaded2.loadFromLocalStorage();

			expect(loaded2.theme).toBe('sap-green');
			expect(loaded2.displayMode).toBe('light');
		});
	});

	describe('Edge cases and integration', () => {
		it('should maintain immutability of theme after failed setTheme', () => {
			const config = new Config('prussian-blue', 'light');
			config.setTheme('invalid');
			config.setTheme('another-invalid');

			expect(config.theme).toBe('prussian-blue');
		});

		it('should calculate correct theme string after displayMode changes', () => {
			const config = new Config('prussian-blue', 'light');
			expect(config.getTheme()).toBe('prussian-blue-light');

			config.setDisplayMode('dark');
			expect(config.getTheme()).toBe('prussian-blue-dark');

			config.setTheme('alizarin-crimson');
			expect(config.getTheme()).toBe('alizarin-crimson-dark');
		});

		it('should not affect localStorage on constructor call', () => {
			new Config('alizarin-crimson', 'dark');
			expect(localStorage.setItem).not.toHaveBeenCalled();
		});

		it('should handle rapid consecutive operations', () => {
			const config = new Config();

			config.setTheme('alizarin-crimson');
			config.setDisplayMode('dark');
			config.setTheme('sap-green');
			config.setDisplayMode('light');
			config.setTheme('titanium-white');

			expect(config.theme).toBe('titanium-white');
			expect(config.displayMode).toBe('light');
		});
	});
});
