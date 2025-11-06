<script lang="ts">
	import { Download, Upload, AlertTriangle, CheckCircle } from 'lucide-svelte';
	import type { Config, DisplayMode } from '$lib/config';
	import type { Game } from '$lib/game';
	import { getThemeNames, getThemeDisplayName } from '$lib/constants/themes';
	import ViewLayout from '$lib/components/ViewLayout.svelte';

	interface Props {
		game: Game;
		config: Config;
	}

	let { game = $bindable(), config = $bindable() }: Props = $props();

	const availableThemes = getThemeNames();

	// Save management state
	let importText = $state('');
	let message = $state('');
	let messageType = $state<'success' | 'warning' | 'error'>('success');
	let showMessage = $state(false);
	let showResetConfirm = $state(false);

	function showMessageFor(msg: string, type: 'success' | 'warning' | 'error', duration = 3000) {
		message = msg;
		messageType = type;
		showMessage = true;
		setTimeout(() => {
			showMessage = false;
		}, duration);
	}

	function exportSaveData() {
		try {
			const saveData = game.exportSave();
			navigator.clipboard.writeText(saveData);
			downloadFile(saveData, 'tomeclicker-save.json');
			showMessageFor('Save exported and copied to clipboard!', 'success');
		} catch (error) {
			showMessageFor('Failed to export save', 'error');
		}
	}

	function downloadFile(content: string, filename: string) {
		const blob = new Blob([content], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	function importSave() {
		if (!importText.trim()) {
			showMessageFor('Please paste save data first', 'error');
			return;
		}

		const result = game.importSave(importText.trim());

		if (result.success) {
			showMessageFor(
				result.warning || 'Save imported successfully!',
				result.warning ? 'warning' : 'success'
			);
			importText = '';
			game = game; // Force reactivity to update UI
			game.autoSave(); // Auto-save after successful import
		} else {
			showMessageFor(result.error || 'Failed to import save', 'error');
		}
	}

	function handleFileSelect(event: Event) {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];

		if (!file) {
			return;
		}

		const reader = new FileReader();
		reader.onload = (e) => {
			const content = e.target?.result as string;
			if (content) {
				const result = game.importSave(content.trim());

				if (result.success) {
					showMessageFor(
						result.warning || 'Save file imported successfully!',
						result.warning ? 'warning' : 'success'
					);
					game = game; // Force reactivity to update UI
					game.autoSave(); // Auto-save after successful import
				} else {
					showMessageFor(result.error || 'Failed to import save file', 'error');
				}
			}
		};
		reader.onerror = () => {
			showMessageFor('Failed to read file', 'error');
		};
		reader.readAsText(file);

		// Clear the input so the same file can be selected again
		target.value = '';
	}

	function confirmHardReset() {
		showResetConfirm = true;
	}

	function cancelReset() {
		showResetConfirm = false;
	}

	function performHardReset() {
		try {
			// Clear localStorage
			if (typeof localStorage !== 'undefined') {
				localStorage.removeItem('tomeclicker_save');
			}

			// Clear cookies
			if (typeof document !== 'undefined') {
				document.cookie =
					'tomeclicker_save=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
			}

			// Use the Game class's hard reset method
			game.hardReset(false); // Don't preserve name

			// Force Svelte reactivity
			game = game;

			showResetConfirm = false;
			showMessageFor('Game has been completely reset!', 'success');
		} catch (error) {
			showMessageFor('Failed to reset game', 'error');
		}
	}
</script>

<ViewLayout title="settings" maxWidth="800px">
	{#if showMessage}
		<div class="message {messageType}">
			{#if messageType === 'success'}
				<CheckCircle size={20} />
			{:else if messageType === 'warning'}
				<AlertTriangle size={20} />
			{:else}
				<AlertTriangle size={20} />
			{/if}
			{message}
		</div>
	{/if}

	<!-- Appearance Settings -->
	<section class="settings-section">
		<h2>appearance</h2>

		<!-- Theme Selector -->
		<div class="setting-row">
			<label for="theme-select">Color Theme</label>
			<select id="theme-select" class="theme-select" bind:value={config.theme}>
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

	<!-- Save Management -->
	<section class="settings-section">
		<h2>save file</h2>

		<!-- Export -->
		<div class="save-action">
			<h3>Export Save</h3>
			<p>Download your save file to backup or transfer between devices.</p>
			<button class="export-btn" onclick={exportSaveData}>
				<Download size={20} /> Export Save
			</button>
		</div>

		<!-- Import -->
		<div class="save-action">
			<h3>Import Save</h3>
			<p>Upload a save file or paste save data below.</p>

			<!-- File upload option -->
			<input
				type="file"
				accept=".json,application/json"
				onchange={handleFileSelect}
				style="display: none;"
				id="save-file-input"
			/>
			<label for="save-file-input" class="file-upload-label">
				<Upload size={20} /> Select Save File
			</label>

			<!-- Or paste option -->
			<p class="or-divider">or paste save data:</p>
			<textarea
				bind:value={importText}
				placeholder="Paste your save data here..."
				rows="6"
			></textarea>
			<button class="import-btn" onclick={importSave} disabled={!importText.trim()}>
				<Upload size={20} /> Import from Text
			</button>
		</div>
	</section>

	<!-- Danger Zone -->
	<section class="settings-section danger-section">
		<h2>danger zone</h2>
		<p>Permanently delete all progress and start over from the beginning.</p>
		<button class="danger-btn" onclick={confirmHardReset}>
			<AlertTriangle size={20} /> Hard Reset
		</button>
	</section>

	{#if showResetConfirm}
		<div class="modal-overlay">
			<div class="modal">
				<h3>Confirm Hard Reset</h3>
				<p>This will permanently delete ALL your progress, including:</p>
				<ul>
					<li>All EXP and levels</li>
					<li>All upgrades</li>
					<li>All save data</li>
					<li>Browser storage</li>
				</ul>
				<p><strong>This action cannot be undone!</strong></p>
				<div class="modal-buttons">
					<button class="cancel-btn" onclick={cancelReset}>Cancel</button>
					<button class="confirm-reset-btn" onclick={performHardReset}>
						<AlertTriangle size={20} /> Confirm Reset
					</button>
				</div>
			</div>
		</div>
	{/if}
</ViewLayout>

<style>
	h2 {
		font-family: Lato, sans-serif;
		font-weight: 300;
		margin-bottom: 1rem;
		font-size: 1.2rem;
	}

	h3 {
		font-family: Lato, sans-serif;
		font-weight: 400;
		font-size: 1rem;
		margin-bottom: 0.5rem;
		margin-top: 1rem;
	}

	h3:first-of-type {
		margin-top: 0;
	}

	.settings-section {
		background-color: var(--alt-bg);
		border: 2px solid var(--text);
		border-radius: 10px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.settings-section p {
		margin: 0.5rem 0;
		opacity: 0.9;
		line-height: 1.5;
	}

	/* Message Display */
	.message {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem;
		border-radius: 10px;
		margin-bottom: 1.5rem;
	}

	.message.success {
		background-color: var(--green);
		color: var(--bg);
	}

	.message.warning {
		background-color: var(--yellow);
		color: var(--bg);
	}

	.message.error {
		background-color: var(--red);
		color: var(--bg);
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

	/* Save Management */
	.save-action {
		margin-top: 1.5rem;
	}

	.save-action:first-of-type {
		margin-top: 0;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-family: JetBrains Mono, monospace;
		font-weight: 400;
		padding: 0.75rem 1rem;
		border: 2px solid;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		width: 100%;
		margin-top: 0.75rem;
	}

	.export-btn {
		background-color: var(--green);
		color: var(--bg);
		border-color: var(--green);
	}

	.export-btn:hover {
		background-color: var(--text);
		border-color: var(--text);
	}

	.import-btn {
		background-color: var(--text);
		color: var(--bg);
		border-color: var(--text);
	}

	.import-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.import-btn:not(:disabled):hover {
		background-color: var(--green);
		border-color: var(--green);
	}

	.file-upload-label {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-family: JetBrains Mono, monospace;
		font-weight: 400;
		padding: 0.75rem 1rem;
		border: 2px solid;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		width: 100%;
		margin-top: 0.75rem;
		background-color: var(--blue);
		color: var(--bg);
		border-color: var(--blue);
		box-sizing: border-box;
	}

	.file-upload-label:hover {
		background-color: var(--text);
		border-color: var(--text);
	}

	.or-divider {
		text-align: center;
		opacity: 0.6;
		font-style: italic;
		margin: 1rem 0 0.5rem 0;
		font-size: 0.9em;
	}

	textarea {
		width: 100%;
		min-height: 100px;
		padding: 0.75rem;
		font-family: JetBrains Mono, monospace;
		font-size: 0.9em;
		background-color: var(--bg);
		color: var(--text);
		border: 2px solid var(--text);
		border-radius: 8px;
		resize: vertical;
		box-sizing: border-box;
		margin-top: 0.5rem;
	}

	/* Danger Zone */
	.danger-section {
		border-color: var(--red) !important;
	}

	.danger-section h2 {
		color: var(--red);
	}

	.danger-btn {
		background-color: var(--red);
		color: var(--bg);
		border-color: var(--red);
	}

	.danger-btn:hover {
		background-color: var(--text);
		border-color: var(--text);
	}

	/* Modal */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.modal {
		background-color: var(--alt-bg);
		border: 2px solid var(--red);
		border-radius: 10px;
		padding: 2rem;
		max-width: 500px;
		width: 90%;
		text-align: left;
		color: var(--text);
	}

	.modal h3 {
		color: var(--red);
		margin-bottom: 1rem;
		font-size: 1.3rem;
		margin-top: 0;
	}

	.modal ul {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	.modal-buttons {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
	}

	.cancel-btn {
		background-color: var(--text);
		color: var(--bg);
		border-color: var(--text);
		flex: 1;
		margin-top: 0;
	}

	.confirm-reset-btn {
		background-color: var(--red);
		color: var(--bg);
		border-color: var(--red);
		flex: 1;
		margin-top: 0;
	}

	.cancel-btn:hover {
		background-color: var(--green);
		border-color: var(--green);
	}

	.confirm-reset-btn:hover {
		background-color: var(--text);
		border-color: var(--text);
	}

	/* Mobile Responsiveness */
	@media (max-width: 768px) {
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

		.modal {
			padding: 1.5rem;
		}

		.modal-buttons {
			flex-direction: column;
		}
	}
</style>
