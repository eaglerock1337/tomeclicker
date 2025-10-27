<script lang="ts">
	import type { Config, DisplayMode } from '$lib/config';
	import type { Game } from '$lib/game';
	import { getThemeNames, getThemeDisplayName } from '$lib/constants/themes';

	interface Props {
		game: Game;
		config: Config;
	}

	let { game = $bindable(), config = $bindable() }: Props = $props();

	const availableThemes = getThemeNames();
</script>

<div class="settings">
	<h1>settings</h1>

	<div class="settings-content">
		<!-- Appearance Settings -->
		<section class="settings-section">
			<h2>appearance</h2>

			<!-- Theme Selector -->
			<div class="setting-row">
				<label for="theme-select">Color Theme</label>
				<select
					id="theme-select"
					class="theme-select"
					bind:value={config.theme}
				>
					{#each availableThemes as themeName}
						<option value={themeName}>
							{getThemeDisplayName(themeName)}
						</option>
					{/each}
				</select>
			</div>

			<!-- Display Mode Selector -->
			<div class="setting-row">
				<label for="display-mode">Display Mode</label>
				<div class="mode-selector">
					<button
						class="mode-btn"
						class:active={config.displayMode === 'light'}
						onclick={() => {
							config.setDisplayMode('light');
							config = config; // Force Svelte reactivity
						}}
						aria-label="Light mode"
					>
						Light
					</button>
					<button
						class="mode-btn"
						class:active={config.displayMode === 'system'}
						onclick={() => {
							config.setDisplayMode('system');
							config = config; // Force Svelte reactivity
						}}
						aria-label="System preference"
					>
						System
					</button>
					<button
						class="mode-btn"
						class:active={config.displayMode === 'dark'}
						onclick={() => {
							config.setDisplayMode('dark');
							config = config; // Force Svelte reactivity
						}}
						aria-label="Dark mode"
					>
						Dark
					</button>
				</div>
			</div>
		</section>
	</div>

</div>

<style>
	.settings {
		color: var(--text);
		background-color: var(--bg);
		font-size: 1em;
		font-family: JetBrains Mono, monospace;
		font-weight: 300;
		height: 100%;
		padding: 2rem 1rem;
		transition: color 1s cubic-bezier(0, 0.5, 0, 1),
			background-color 1s cubic-bezier(0, 0.5, 0, 1);
		box-sizing: border-box;
		overflow-y: auto;
	}

	.settings-content {
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		font-family: Lato, sans-serif;
		font-weight: 300;
		text-align: center;
		margin-bottom: 2rem;
	}

	h2 {
		font-family: Lato, sans-serif;
		font-weight: 300;
		margin-bottom: 1rem;
		font-size: 1.2rem;
	}

	.settings-section {
		background-color: var(--alt-bg);
		border: 2px solid var(--text);
		border-radius: 10px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	/* Appearance Settings */
	.setting-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.setting-row:last-child {
		margin-bottom: 0;
	}

	.setting-row label {
		font-size: 1.1rem;
	}

	/* Theme Selector */
	.theme-select {
		color: var(--text);
		background-color: var(--bg);
		font-family: JetBrains Mono, monospace;
		font-weight: 400;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		border: 2px solid var(--text);
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease;
		min-width: 200px;
	}

	.theme-select:hover {
		background-color: var(--alt-bg);
	}

	.theme-select:focus {
		outline: 2px solid var(--blue);
		outline-offset: 2px;
	}

	/* Display Mode Selector */
	.mode-selector {
		display: flex;
		gap: 0.5rem;
		border: 2px solid var(--text);
		border-radius: 10px;
		padding: 0.25rem;
		background-color: var(--bg);
	}

	.mode-btn {
		color: var(--text);
		background-color: transparent;
		font-family: JetBrains Mono, monospace;
		font-weight: 400;
		font-size: 0.9rem;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		min-width: 70px;
	}

	.mode-btn:hover {
		background-color: var(--alt-bg);
	}

	.mode-btn.active {
		background-color: var(--text);
		color: var(--bg);
		font-weight: 500;
	}


	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.settings {
			padding: 1rem 0.5rem;
		}

		.settings-section {
			padding: 1rem;
		}

		.setting-row {
			/* Keep horizontal layout on mobile for better use of space */
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		.setting-row label {
			font-size: 1rem;
		}

		.theme-select {
			min-width: 150px;
			font-size: 0.9rem;
		}

		.mode-selector {
			gap: 0.25rem;
			padding: 0.2rem;
		}

		.mode-btn {
			font-size: 0.85rem;
			padding: 0.4rem 0.6rem;
			min-width: 60px;
		}
	}
</style>
