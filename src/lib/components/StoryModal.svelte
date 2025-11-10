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

<!-- Modal Container (no dimmed backdrop) -->
<div
	class="modal-container"
	role="dialog"
	aria-modal="true"
	aria-describedby="story-text"
	bind:this={modalElement}
	tabindex="-1"
	on:keydown={handleKeydown}
>
	<!-- Modal Card -->
	<div class="modal-card">
		<!-- Story Text -->
		<div class="modal-content">
			<p id="story-text" class="story-text">
				{interpolateText(entry.text)}
			</p>
		</div>

		<!-- Button container - always reserves space -->
		<div class="button-container">
			{#if showButton}
				<button class="acknowledge-button" on:click={handleAcknowledge} transition:fade>
					Add to Journal
				</button>
			{/if}
		</div>
	</div>
</div>

<style>
	/* Modal Container - no dark backdrop, just centered */
	.modal-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 6rem 1rem 1rem 1rem; /* Top padding to avoid header/navbar */
		pointer-events: none; /* Allow clicks through container */
	}

	/* Modal Card - portrait oriented, taller than wider */
	.modal-card {
		background-color: var(--alt-bg);
		border: 3px solid var(--text);
		border-radius: 12px;
		width: 90%;
		max-width: 500px;
		height: 70vh;
		max-height: 700px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
		animation: slideUp 0.3s ease-in-out;
		pointer-events: auto; /* Re-enable clicks on card */
		padding: 2.5rem 2rem;
		gap: 0;
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

	/* Content area - takes up available space */
	.modal-content {
		flex: 1;
		overflow-y: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 0;
	}

	.story-text {
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--text);
		margin: 0;
		white-space: pre-wrap;
		word-wrap: break-word;
		text-align: center;
	}

	/* Button container - always reserves space, equal padding to top */
	.button-container {
		margin-top: 1.5rem;
		min-height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Button - fades in within reserved space */
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

	/* Mobile responsiveness - 80% of viewport dimensions */
	@media (max-width: 768px) {
		.modal-container {
			padding: 4rem 0 0 0; /* Adjust for mobile header */
		}

		.modal-card {
			width: 80%;
			height: 80%;
			max-height: 80%;
			padding: 2rem 1.5rem;
		}

		.story-text {
			font-size: 1rem;
			line-height: 1.7;
		}
	}
</style>
