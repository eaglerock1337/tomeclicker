<script lang="ts">
	import { ToggleLeft, ToggleRight, Trash2, AlertTriangle } from 'lucide-svelte';

	import type { Config } from '$lib/config';
	import type { Game } from '$lib/game';

	export let config: Config;
	export let game: Game;

	let showResetConfirm = false;
	let preserveName = true;
	let confirmationStep = 0;

	function initiateHardReset() {
		showResetConfirm = true;
		confirmationStep = 1;
	}

	function confirmHardReset() {
		if (confirmationStep === 1) {
			confirmationStep = 2;
		} else if (confirmationStep === 2) {
			// Execute the hard reset
			game.hardReset(preserveName);
			showResetConfirm = false;
			confirmationStep = 0;
			// Force a page reload to ensure clean state
			if (typeof window !== 'undefined') {
				window.location.reload();
			}
		}
	}

	function cancelHardReset() {
		showResetConfirm = false;
		confirmationStep = 0;
		preserveName = true;
	}
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
			<div class="setting-row">
				<label for="darkmode-toggle">Dark Mode</label>
				<button
					id="darkmode-toggle"
					class="toggle-button"
					on:click={() => {
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

		<!-- Danger Zone -->
		<section class="settings-section danger-section">
			<h2>danger zone</h2>
			<p class="danger-description">
				Resetting your game will permanently delete all progress. This action cannot be undone.
			</p>
			<button class="danger-button" on:click={initiateHardReset}>
				<Trash2 size={20} style="vertical-align: middle; margin-right: 5px;" />
				Hard Reset Game
			</button>
		</section>
	</div>

	{#if showResetConfirm}
		<div
			class="modal-overlay"
			on:click={cancelHardReset}
			role="button"
			tabindex="0"
			on:keydown={(e) => e.key === 'Escape' && cancelHardReset()}
		>
			<div class="modal" on:click|stopPropagation on:keydown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" tabindex="-1">
				<div class="modal-header">
					<AlertTriangle size={32} color="#ff6b6b" />
					<h2>Hard Reset Confirmation</h2>
				</div>

				{#if confirmationStep === 1}
					<div class="modal-body">
						<p><strong>WARNING:</strong> This will permanently delete all progress!</p>
						<p>You will lose:</p>
						<ul>
							<li>All EXP ({game.lifetimeExp.toFixed(2)} lifetime EXP)</li>
							<li>Your current level ({game.level})</li>
							<li>All purchased upgrades</li>
							<li>All saved games</li>
						</ul>
						<div class="checkbox-container">
							<label>
								<input type="checkbox" bind:checked={preserveName} />
								Keep player name ({game.name})
							</label>
						</div>
					</div>
					<div class="modal-footer">
						<button class="cancel-button" on:click={cancelHardReset}>Cancel</button>
						<button class="danger-button" on:click={confirmHardReset}>
							Continue to Confirmation
						</button>
					</div>
				{:else if confirmationStep === 2}
					<div class="modal-body">
						<p><strong>FINAL CONFIRMATION</strong></p>
						<p>Are you absolutely sure you want to reset everything?</p>
						<p class="final-warning">This action cannot be undone!</p>
					</div>
					<div class="modal-footer">
						<button class="cancel-button" on:click={cancelHardReset}>Cancel</button>
						<button class="danger-button-final" on:click={confirmHardReset}>
							Yes, Delete Everything
						</button>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.settings {
		color: var(--text);
		background-color: var(--bg);
		font-size: 1em;
		font-family: JetBrains Mono, monospace;
		font-weight: 300;
		min-height: 100%;
		padding: 2rem 1rem;
		transition: color 1s cubic-bezier(0, 0.5, 0, 1),
			background-color 1s cubic-bezier(0, 0.5, 0, 1);
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

	/* Danger Zone */
	.danger-section {
		border-color: #ff6b6b;
	}

	.danger-description {
		margin-bottom: 1rem;
		opacity: 0.9;
		line-height: 1.5;
	}

	.danger-button {
		color: white !important;
		background-color: #ff6b6b !important;
		font-family: JetBrains Mono, monospace;
		font-weight: 500 !important;
		font-size: 1rem;
		padding: 0.75rem 1.5rem;
		border: 2px solid #ff5252 !important;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease;
		display: inline-flex;
		align-items: center;
		touch-action: manipulation;
	}

	.danger-button:hover {
		background-color: #ff5252 !important;
	}

	.danger-button-final {
		background-color: #d32f2f !important;
		color: white !important;
		border-color: #b71c1c !important;
		font-weight: 700 !important;
		animation: pulse 1.5s infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}

	/* Modal Styles */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.modal {
		background-color: var(--bg);
		border: 3px solid var(--text);
		border-radius: 15px;
		padding: 20px;
		max-width: 500px;
		width: 90%;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin-bottom: 20px;
	}

	.modal-header h2 {
		margin: 0;
		color: #ff6b6b;
	}

	.modal-body {
		margin-bottom: 20px;
		text-align: left;
	}

	.modal-body p {
		margin: 10px 0;
	}

	.modal-body ul {
		margin: 10px 0;
		padding-left: 30px;
	}

	.modal-body li {
		margin: 5px 0;
	}

	.checkbox-container {
		margin-top: 15px;
		padding: 10px;
		background-color: var(--alt-bg);
		border-radius: 8px;
	}

	.checkbox-container label {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
	}

	.checkbox-container input[type='checkbox'] {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}

	.final-warning {
		color: #ff6b6b;
		font-weight: 700;
		font-size: 1.2em;
		text-align: center;
		margin-top: 20px;
	}

	.modal-footer {
		display: flex;
		justify-content: space-between;
		gap: 10px;
	}

	.modal-footer button {
		flex: 1;
		padding: 10px 20px;
		font-size: 1em;
		border-radius: 8px;
		cursor: pointer;
		font-family: JetBrains Mono, monospace;
	}

	.cancel-button {
		background-color: var(--alt-bg);
		color: var(--text);
		border: 2px solid var(--text);
	}

	.cancel-button:hover {
		background-color: var(--bg);
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
			flex-direction: column;
			align-items: flex-start;
		}

		.toggle-button {
			align-self: flex-end;
		}
	}
</style>
