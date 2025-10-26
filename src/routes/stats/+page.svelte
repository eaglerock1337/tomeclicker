<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { Game } from '$lib/game';

	// Get store from context
	const gameStore = getContext<Writable<Game | null>>('game');

	// Reactive value from store (using non-null assertion since layout ensures game exists)
	let game = $derived($gameStore!);

	function formatNumber(num: number): string {
		if (num >= 1_000_000_000_000) {
			return (num / 1_000_000_000_000).toFixed(2) + 'T';
		} else if (num >= 1_000_000_000) {
			return (num / 1_000_000_000).toFixed(2) + 'B';
		} else if (num >= 1_000_000) {
			return (num / 1_000_000).toFixed(2) + 'M';
		} else if (num >= 1_000) {
			return (num / 1_000).toFixed(2) + 'K';
		}
		return num.toFixed(2);
	}
</script>

<div class="stats-container">
	<h2>Player Stats</h2>
	<p class="description">View your progression and statistics</p>

	<!-- Player Information -->
	<div class="stats-section">
		<h3>General</h3>
		<div class="stats-grid">
			<div class="stat-card">
				<div class="stat-label">Name</div>
				<div class="stat-value">{game.name}</div>
			</div>
			<div class="stat-card">
				<div class="stat-label">Level</div>
				<div class="stat-value level">{game.level}</div>
			</div>
			<div class="stat-card">
				<div class="stat-label">Current EXP</div>
				<div class="stat-value">{formatNumber(game.exp)}</div>
			</div>
			<div class="stat-card">
				<div class="stat-label">Lifetime EXP</div>
				<div class="stat-value">{formatNumber(game.lifetimeExp)}</div>
			</div>
		</div>
	</div>

	<!-- Combat Stats (Level 3+) -->
	{#if game.level >= 3}
		<div class="stats-section">
			<h3>Combat Stats</h3>
			<div class="stats-grid">
				<div class="stat-card">
					<div class="stat-label">Strength</div>
					<div class="stat-value strength">{game.stats.strength}</div>
					<div class="stat-desc">Physical power and damage</div>
				</div>
				<div class="stat-card">
					<div class="stat-label">Dexterity</div>
					<div class="stat-value dexterity">{game.stats.dexterity}</div>
					<div class="stat-desc">Agility and precision</div>
				</div>
				<div class="stat-card">
					<div class="stat-label">Intelligence</div>
					<div class="stat-value intelligence">{game.stats.intelligence}</div>
					<div class="stat-desc">Knowledge and magic</div>
				</div>
				<div class="stat-card">
					<div class="stat-label">Wisdom</div>
					<div class="stat-value wisdom">{game.stats.wisdom}</div>
					<div class="stat-desc">Insight and awareness</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Progress Rates -->
	<div class="stats-section">
		<h3>Progress Rates</h3>
		<div class="stats-grid">
			<div class="stat-card">
				<div class="stat-label">Click Value</div>
				<div class="stat-value">{formatNumber(game.getClickValue())}</div>
				<div class="stat-desc">EXP per click</div>
			</div>
			{#if game.idleExpRate > 0}
				<div class="stat-card">
					<div class="stat-label">Idle EXP</div>
					<div class="stat-value">{formatNumber(game.idleExpRate)}/s</div>
					<div class="stat-desc">Passive EXP gain</div>
				</div>
			{/if}
			{#if game.level >= 3}
				<div class="stat-card">
					<div class="stat-label">Training Speed</div>
					<div class="stat-value"
						>{(game.getTrainingSpeedMultiplier() * 100).toFixed(0)}%</div
					>
					<div class="stat-desc">Of base duration</div>
				</div>
				<div class="stat-card">
					<div class="stat-label">Training Cost</div>
					<div class="stat-value"
						>{(game.getTrainingCostMultiplier() * 100).toFixed(0)}%</div
					>
					<div class="stat-desc">Of base cost</div>
				</div>
			{/if}
		</div>
	</div>

	<!-- Upgrade Progress -->
	<div class="stats-section">
		<h3>Upgrades Owned</h3>
		<div class="upgrades-list">
			{#each Object.values(game.upgrades).filter((u) => u.currentLevel > 0) as upgrade}
				<div class="upgrade-item">
					<span class="upgrade-name">{upgrade.name}</span>
					<span class="upgrade-level">Level {upgrade.currentLevel}</span>
				</div>
			{/each}
			{#if Object.values(game.upgrades).filter((u) => u.currentLevel > 0).length === 0}
				<p class="no-upgrades">No upgrades purchased yet</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.stats-container {
		padding: 2rem;
		max-width: 1000px;
		margin: 0 auto;
	}

	h2 {
		color: var(--text);
		font-family: Lato, sans-serif;
		font-weight: 300;
		margin-bottom: 0.5rem;
	}

	.description {
		color: var(--text);
		font-family: Lato, sans-serif;
		opacity: 0.8;
		margin-bottom: 2rem;
	}

	.stats-section {
		background: var(--alt-bg);
		border: 1px solid var(--text);
		border-radius: 8px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.stats-section h3 {
		color: var(--blue);
		font-family: Lato, sans-serif;
		font-weight: 400;
		margin-bottom: 1rem;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.stat-card {
		background: var(--bg);
		border: 1px solid var(--text);
		border-radius: 4px;
		padding: 1rem;
		text-align: center;
	}

	.stat-label {
		color: var(--text);
		font-family: Lato, sans-serif;
		font-size: 0.9rem;
		opacity: 0.8;
		margin-bottom: 0.5rem;
	}

	.stat-value {
		color: var(--text);
		font-family: 'JetBrains Mono', monospace;
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 0.25rem;
	}

	.stat-value.level {
		color: var(--yellow);
	}

	.stat-value.strength {
		color: var(--red);
	}

	.stat-value.dexterity {
		color: var(--green);
	}

	.stat-value.intelligence {
		color: var(--blue);
	}

	.stat-value.wisdom {
		color: var(--yellow);
	}

	.stat-desc {
		color: var(--text);
		font-family: Lato, sans-serif;
		font-size: 0.8rem;
		opacity: 0.6;
	}

	.upgrades-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.upgrade-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--bg);
		border: 1px solid var(--text);
		border-radius: 4px;
		padding: 0.75rem 1rem;
	}

	.upgrade-name {
		color: var(--text);
		font-family: Lato, sans-serif;
		font-weight: 400;
	}

	.upgrade-level {
		color: var(--blue);
		font-family: 'JetBrains Mono', monospace;
		font-weight: 700;
	}

	.no-upgrades {
		color: var(--text);
		font-family: Lato, sans-serif;
		opacity: 0.6;
		text-align: center;
		padding: 1rem;
	}

	/* Mobile optimizations */
	@media (max-width: 768px) {
		.stats-container {
			padding: 1rem;
		}

		.stats-grid {
			grid-template-columns: 1fr;
		}

		.stat-value {
			font-size: 1.25rem;
		}
	}
</style>
