<script lang="ts">
	import { onMount } from 'svelte';

	import { Config } from '$lib/config';
	import { Game } from '$lib/game';

	import Header from '$lib/header.svelte';
	import Navbar from '$lib/navbar.svelte';
	import View from '$lib/view.svelte';
	import StoryModal from '$lib/components/StoryModal.svelte';

	import type { StoryEntry } from '$lib/managers/story-manager';

	import '$lib/styles/themes.css';

	// Config values
	let config = new Config('prussian-blue', 'system');
	let configLoaded = false; // Track if config has been loaded from storage

	// Game values
	let game: Game;

	// Story modal queue
	let storyQueue: StoryEntry[] = [];
	let currentStory: StoryEntry | null = null;

	/**
	 * Check for newly unlocked story entries and add to queue
	 */
	function checkStoryUnlocks() {
		if (!game) return;

		const result = game.checkStoryUnlocks();

		if (result.newlyUnlocked.length > 0) {
			// Add newly unlocked entries to queue
			storyQueue = [...storyQueue, ...result.newlyUnlocked];

			// If no modal is currently showing, show the first one
			if (!currentStory && storyQueue.length > 0) {
				showNextStory();
			}
		}
	}

	/**
	 * Show the next story in the queue
	 */
	function showNextStory() {
		if (storyQueue.length === 0) {
			currentStory = null;
			return;
		}

		// Pop the first entry from the queue
		const [next, ...remaining] = storyQueue;
		currentStory = next;
		storyQueue = remaining;
	}

	/**
	 * Handle story acknowledgement (player clicked "Add to Journal")
	 */
	function handleStoryAcknowledge(entryId: string) {
		if (!game) return;

		// Acknowledge the entry in the game state
		game.acknowledgeStoryEntry(entryId);

		// Force reactivity
		game = game;

		// Show next story in queue (or clear modal)
		showNextStory();
	}

	onMount(() => {
		// Load saved config
		config.loadFromLocalStorage();
		configLoaded = true; // Mark as loaded
		config = config; // Force reactivity

		// Listen for system preference changes
		if (window.matchMedia) {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			const handleChange = () => {
				// Force reactivity when system preference changes
				if (config.displayMode === 'system') {
					config = config; // Trigger Svelte reactivity
				}
			};

			// Modern browsers
			if (mediaQuery.addEventListener) {
				mediaQuery.addEventListener('change', handleChange);
			} else {
				// Older browsers
				mediaQuery.addListener(handleChange);
			}
		}
		game = new Game();

		// Load saved data
		setTimeout(() => {
			if (game) {
				const loadedFromLocalStorage = game.loadFromLocalStorage();
				if (!loadedFromLocalStorage) {
					game.loadFromCookies();
				}
				game = game; // Force reactivity
			}
		}, 100);

		// Set up autosave every 15 seconds
		const autosaveInterval = setInterval(() => {
			if (game) {
				game.autoSave();
			}
		}, 15000);

		// Set up idle action updates every 100ms
		const idleUpdateInterval = setInterval(() => {
			if (game) {
				game.updateIdleActions();
				game = game; // Force Svelte reactivity

				// Check for story unlocks
				checkStoryUnlocks();
			}
		}, 100);

		// Cleanup on component destroy
		return () => {
			clearInterval(autosaveInterval);
			clearInterval(idleUpdateInterval);
		};

		// Setup touch event handling for iOS double-tap prevention
		let lastTouchTime = 0;

		const handleTouchStart = (event: TouchEvent) => {
			// Allow pinch-zoom (multi-touch)
			if (event.touches.length > 1) {
				return;
			}

			// Prevent double-tap zoom by checking time between taps
			const currentTime = Date.now();
			const timeDiff = currentTime - lastTouchTime;
			lastTouchTime = currentTime;

			// If touches are too close together (< 300ms), prevent default
			if (timeDiff < 300) {
				event.preventDefault();
			}
		};

		document.addEventListener('touchstart', handleTouchStart, { passive: false });

		return () => {
			document.removeEventListener('touchstart', handleTouchStart);
		};
	});

	// Color theme - reactive to config changes
	$: theme = config ? config.getTheme() : '';

	// Auto-save config whenever theme or displayMode changes (but only after initial load)
	$: if (config && configLoaded && typeof localStorage !== 'undefined') {
		// Reference the properties to make this reactive to their changes
		config.theme;
		config.displayMode;
		config.saveToLocalStorage();
	}
</script>

<svelte:head>
	<title>TomeClicker</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;700&family=Lato:wght@100;300;400;700&family=Tangerine&display=swap"
		rel="stylesheet"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="TomeClicker" />
	<meta property="og:image" content="https://tomeclicker.marks.dev/og-image.png" />
	<meta property="og:description" content="An incremental RPG clicker game that grows on you." />
	<meta name="description" content="An incremental RPG clicker game that grows on you." />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
	/>
</svelte:head>

<div class="app {theme}">
	{#if game}
		{#if game.showHeader()}
			<Header {game} />
		{/if}
		<main class="main-content">
			<View bind:game bind:config />
		</main>
		{#if game.showMenu()}
			<footer class="footer">
				<Navbar bind:game />
			</footer>
		{/if}
	{:else}
		<div class="loading">
			<h1>Loading TomeClicker...</h1>
		</div>
	{/if}

	<!-- Story Modal (overlays everything) -->
	{#if currentStory && game}
		<StoryModal
			entry={currentStory}
			playerName={game.name}
			onAcknowledge={handleStoryAcknowledge}
		/>
	{/if}
</div>

<style>
	:root {
		font-size: 18px;
		background-color: #28262cff;
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		/* Allow scrolling on body for iOS compatibility */
		overflow: visible;
		/* Prevent overscroll/rubber-band effect and pull-to-refresh */
		overscroll-behavior: none;
		/* Prevent double-tap zoom while allowing pinch-zoom */
		touch-action: manipulation;
		/* Enable momentum scrolling on iOS */
		-webkit-overflow-scrolling: touch;
	}

	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
		height: 100dvh; /* Dynamic viewport height for mobile */
		width: 100vw;
		overflow: hidden;
		/* Prevent overscroll/rubber-band effect */
		overscroll-behavior: none;
	}

	.main-content {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		/* Safe area padding for mobile devices */
		padding-bottom: env(safe-area-inset-bottom, 0);
		/* Enable momentum scrolling on iOS */
		-webkit-overflow-scrolling: touch;
	}

	.footer {
		flex-shrink: 0;
		/* Ensure footer stays above device UI on mobile */
		padding-bottom: env(safe-area-inset-bottom, 0);
		position: relative;
		z-index: 100;
	}

	.loading {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--text);
		font-family: Lato, sans-serif;
		font-weight: 300;
	}

	/* Red and Green Color text */

	:global(em) {
		color: var(--green);
		font-style: normal;
		font-weight: 400;
		transition: color 1s cubic-bezier(0, 0.5, 0, 1);
	}

	:global(strong) {
		color: var(--red);
		font-style: normal;
		font-weight: 500;
		transition: color 1s cubic-bezier(0, 0.5, 0, 1);
	}

	/* Theme definitions moved to src/lib/styles/themes.css */
</style>
