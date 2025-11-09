<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { StoryEntry } from '$lib/managers/story-manager';

	/**
	 * Story Modal Component
	 *
	 * Displays story entry popups with:
	 * - JetBrains Mono fixed-width font
	 * - 3-second delay before "Add to Journal" button appears
	 * - Smooth fade-in animations
	 * - No game pause (modal is non-blocking)
	 */

	// Props
	export let entry: StoryEntry;
	export let playerName: string = 'A Stranger';
	export let onAcknowledge: (entryId: string) => void;

	// State
	let showButton = false;
	let modalElement: HTMLDivElement;

	// Button delay timer (3 seconds)
	const BUTTON_DELAY_MS = 3000;

	onMount(() => {
		// Start button delay timer
		const timer = setTimeout(() => {
			showButton = true;
		}, BUTTON_DELAY_MS);

		// Focus the modal for accessibility
		modalElement?.focus();

		return () => {
			clearTimeout(timer);
		};
	});

	/**
	 * Interpolate player name into story text
	 */
	function interpolateText(text: string): string {
		return text.replace(/<adventurer-name>/g, playerName);
	}

	/**
	 * Handle button click - acknowledge and close
	 */
	function handleAcknowledge() {
		onAcknowledge(entry.id);
	}

	/**
	 * Handle keyboard shortcuts
	 */
	function handleKeydown(event: KeyboardEvent) {
		// Only allow Enter/Space if button is visible
		if (showButton && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			handleAcknowledge();
		}
		// Escape key always closes (acknowledges)
		if (event.key === 'Escape') {
			event.preventDefault();
			handleAcknowledge();
		}
	}
</script>

<!-- Modal Backdrop -->
<div
	class="modal-backdrop"
	role="dialog"
	aria-modal="true"
	aria-labelledby="story-title"
	aria-describedby="story-text"
	bind:this={modalElement}
	tabindex="-1"
	on:keydown={handleKeydown}
>
	<!-- Modal Card -->
	<div class="modal-card">
		<!-- Header -->
		<div class="modal-header">
			<span class="new-badge">NEW ENTRY</span>
			{#if entry.title}
				<h2 id="story-title" class="chapter-title">{entry.title}</h2>
			{/if}
		</div>

		<!-- Story Text -->
		<div class="modal-body">
			<p id="story-text" class="story-text">
				{interpolateText(entry.text)}
			</p>
		</div>

		<!-- Footer with delayed button -->
		<div class="modal-footer">
			{#if showButton}
				<button class="acknowledge-button" on:click={handleAcknowledge} transition:fade>
					Add to Journal
				</button>
			{:else}
				<div class="button-placeholder">
					<div class="loading-dots">
						<span></span><span></span><span></span>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	/* Backdrop - dark overlay */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 1rem;
		animation: fadeIn 0.3s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Modal Card */
	.modal-card {
		background-color: var(--alt-bg);
		border: 3px solid var(--text);
		border-radius: 12px;
		max-width: 700px;
		width: 90%;
		max-height: 80vh;
		overflow-y: auto;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
		animation: slideUp 0.3s ease-in-out;
	}

	@keyframes slideUp {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	/* Header */
	.modal-header {
		padding: 1.5rem;
		border-bottom: 2px solid var(--text);
		background-color: var(--bg);
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.new-badge {
		font-family: 'Lato', sans-serif;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--blue);
		background-color: color-mix(in srgb, var(--blue) 20%, transparent);
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		width: fit-content;
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.6;
		}
	}

	.chapter-title {
		font-family: 'Caveat', cursive;
		font-size: 2rem;
		font-weight: 700;
		color: var(--text);
		margin: 0;
	}

	/* Body */
	.modal-body {
		padding: 2rem 1.5rem;
		background-color: var(--alt-bg);
	}

	.story-text {
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--text);
		margin: 0;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	/* Footer */
	.modal-footer {
		padding: 1.5rem;
		border-top: 2px solid var(--text);
		background-color: var(--bg);
		display: flex;
		justify-content: center;
		min-height: 80px; /* Reserve space for button */
		border-radius: 0 0 12px 12px;
	}

	/* Button */
	.acknowledge-button {
		font-family: 'Lato', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		padding: 0.75rem 2rem;
		background-color: var(--blue);
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.2s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}

	.acknowledge-button:hover {
		background-color: color-mix(in srgb, var(--blue) 85%, white);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.acknowledge-button:active {
		transform: translateY(0);
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}

	/* Button placeholder (loading state) */
	.button-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 48px;
	}

	/* Loading dots animation */
	.loading-dots {
		display: flex;
		gap: 0.5rem;
	}

	.loading-dots span {
		width: 8px;
		height: 8px;
		background-color: var(--text);
		opacity: 0.5;
		border-radius: 50%;
		animation: bounce 1.4s infinite ease-in-out both;
	}

	.loading-dots span:nth-child(1) {
		animation-delay: -0.32s;
	}

	.loading-dots span:nth-child(2) {
		animation-delay: -0.16s;
	}

	@keyframes bounce {
		0%,
		80%,
		100% {
			transform: scale(0);
			opacity: 0.5;
		}
		40% {
			transform: scale(1);
			opacity: 1;
		}
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.modal-backdrop {
			padding: 0;
		}

		.modal-card {
			width: 100%;
			max-width: 100%;
			height: 80vh;
			max-height: 80vh;
			border-radius: 12px;
			margin: auto;
		}

		.modal-header {
			padding: 1.25rem;
			border-top-left-radius: 12px;
			border-top-right-radius: 12px;
		}

		.chapter-title {
			font-size: 1.75rem;
		}

		.modal-body {
			padding: 1.75rem 1.25rem;
			flex: 1;
			overflow-y: auto;
		}

		.story-text {
			font-size: 1rem;
			line-height: 1.7;
		}

		.modal-footer {
			padding: 1.25rem;
		}
	}
</style>
