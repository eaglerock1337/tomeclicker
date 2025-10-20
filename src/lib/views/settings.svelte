<script lang="ts">
	import { ToggleLeft, ToggleRight } from 'lucide-svelte';

	import type { Config } from '$lib/config';
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
		<!-- Game Info Section -->
		<section class="settings-section">
			<h2>game information</h2>
			<div class="info-grid">
				<div class="info-item">
					<span class="info-label">Player:</span>
					<span class="info-value">{game.name}</span>
				</div>
				<div class="info-item">
					<span class="info-label">Level:</span>
					<span class="info-value">{game.level}</span>
				</div>
				<div class="info-item">
					<span class="info-label">Experience:</span>
					<span class="info-value">{Math.floor(game.exp).toLocaleString()}</span>
				</div>
				<div class="info-item">
					<span class="info-label">Lifetime EXP:</span>
					<span class="info-value">{Math.floor(game.lifetimeExp).toLocaleString()}</span>
				</div>
			</div>
		</section>

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

			<!-- Dark Mode Toggle -->
			<div class="setting-row">
				<label for="darkmode-toggle">Dark Mode</label>
				<button
					id="darkmode-toggle"
					class="toggle-button"
					onclick={() => {
						config.darkmode = !config.darkmode;
					}}
				>
					{#if config.darkmode}
						<ToggleRight size={32} />
					{:else}
						<ToggleLeft size={32} />
					{/if}
					<span class="toggle-label">{config.darkmode ? 'On' : 'Off'}</span>
				</button>
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

	/* Game Info Section */
	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.info-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		background-color: var(--bg);
		border-radius: 5px;
	}

	.info-label {
		font-weight: 400;
		opacity: 0.8;
	}

	.info-value {
		font-weight: 500;
	}

	/* Appearance Settings */
	.setting-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
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

	/* Dark Mode Toggle */
	.toggle-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--text);
		background-color: var(--bg);
		font-family: JetBrains Mono, monospace;
		font-weight: 400;
		padding: 0.5rem 1rem;
		border: 2px solid var(--text);
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.toggle-button:hover {
		background-color: var(--text);
		color: var(--bg);
	}

	.toggle-label {
		min-width: 3rem;
	}


	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.settings {
			padding: 1rem 0.5rem;
		}

		.settings-section {
			padding: 1rem;
		}

		.info-grid {
			grid-template-columns: 1fr;
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

		.toggle-button {
			/* Toggle stays on the side */
			padding: 0.4rem 0.8rem;
		}
	}
</style>
