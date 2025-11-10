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
	 * Handle button click - dismiss modal (don't acknowledge yet)
	 * Entry stays unread until viewed in journal
	 */
	function handleDismiss() {
		onAcknowledge(entry.id);
	}

	/**
	 * Handle keyboard shortcuts
	 */
	function handleKeydown(event: KeyboardEvent) {
		// Only allow Enter/Space if button is visible
		if (showButton && (event.key === 'Enter' || event.key === ' ')) {
			event.preventDefault();
			handleDismiss();
		}
		// Escape key always dismisses
		if (event.key === 'Escape') {
			event.preventDefault();
			handleDismiss();
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
				<button class="dismiss-button" on:click={handleDismiss} transition:fade>
					Add to Journal
				</button>
			{/if}
		</div>
	</div>
</div>

<style>
	/* Modal Container - no dark backdrop, positions within main content area */
	.modal-container {
		position: fixed;
		top: 5rem; /* Below header (mobile) */
		left: 0;
		right: 0;
		bottom: 4rem; /* Above navbar */
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		padding: 10% 10% 20% 10%; /* 10% top, 10% sides, 20% bottom */
		pointer-events: auto; /* Enable clicks on modal */
	}

	/* Modal Card - fills container (60% of content area), capped at max size */
	.modal-card {
		background-color: var(--alt-bg);
		border: 3px solid var(--text);
		border-radius: 12px;
		width: 100%; /* Fill container */
		height: 100%; /* Fill container */
		max-width: 600px;
		max-height: 800px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
		animation: slideUp 0.3s ease-in-out;
		padding: 2.5rem 1rem; /* Narrower horizontal padding for more vertical text */
		touch-action: manipulation; /* Prevent double-tap zoom on button */
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
		min-height: 0; /* Allow flex shrink */
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

	/* Button container - always reserves space */
	.button-container {
		flex-shrink: 0;
		min-height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 1.5rem;
	}

	/* Button - fades in within reserved space */
	.dismiss-button {
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
		touch-action: manipulation; /* Prevent double-tap zoom */
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); /* iOS tap feedback */
		user-select: none; /* Prevent text selection on touch */
	}

	/* Desktop hover effects */
	@media (hover: hover) and (pointer: fine) {
		.dismiss-button:hover {
			background-color: color-mix(in srgb, var(--blue) 85%, white);
			transform: translateY(-2px);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		}
	}

	.dismiss-button:active {
		transform: translateY(0);
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.modal-container {
			top: 5rem; /* Mobile header height */
			bottom: 4rem; /* Mobile navbar height */
		}

		.modal-card {
			padding: 2rem 0.75rem; /* Even narrower on mobile for more vertical text */
		}

		.story-text {
			font-size: 1rem;
			line-height: 1.7;
		}
	}

	/* Desktop adjustments */
	@media (min-width: 769px) {
		.modal-container {
			top: 7rem; /* Desktop header height */
			bottom: 4rem; /* Navbar height */
		}
	}
</style>
