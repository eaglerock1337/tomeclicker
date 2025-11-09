<script lang="ts">
	import type { Game } from '$lib/game';

	/**
	 * Journal Page
	 *
	 * Displays story entries in a carousel format:
	 * - Each chapter gets its own carousel page
	 * - Navigate between chapters with ← / → buttons
	 * - Story entries displayed with Caveat handwritten font
	 * - Highlighted background for new/unacknowledged entries
	 * - Click to acknowledge and remove highlight
	 */

	interface Props {
		game: Game;
	}

	let { game = $bindable() }: Props = $props();

	// Get unlocked chapters from game
	let unlockedChapters = $derived(game.getUnlockedStoryChapters());
	let totalChapters = $derived(unlockedChapters.length);

	// Session-persisted chapter state (resets on page refresh)
	// Start at the first unlocked chapter
	let currentChapterIndex = $state(0);
	let currentChapter = $derived(
		unlockedChapters.length > 0 ? unlockedChapters[currentChapterIndex] : null
	);

	// Get entries for current chapter
	let currentEntries = $derived(
		currentChapter ? game.getStoryChapterEntries(currentChapter) : []
	);
	let firstEntry = $derived(currentEntries.length > 0 ? currentEntries[0] : null);

	// Track entries that are fading out
	let fadingEntries = $state<Record<string, boolean>>({});

	/**
	 * Handle clicking on an unread entry to acknowledge it
	 */
	function acknowledgeEntry(entryId: string) {
		// Immediately acknowledge in game state
		game.acknowledgeStoryEntry(entryId);
		game = game; // Force reactivity

		// But keep fading state for animation
		fadingEntries[entryId] = true;

		// Remove fading state after animation completes
		setTimeout(() => {
			delete fadingEntries[entryId];
		}, 500); // Match CSS animation duration
	}

	/**
	 * Check if an entry has a pulsing "new" indicator
	 */
	function isNew(unlocked: boolean, acknowledged: boolean): boolean {
		return unlocked && !acknowledged;
	}

	function nextChapter() {
		if (currentChapterIndex < totalChapters - 1) {
			currentChapterIndex++;
		}
	}

	function prevChapter() {
		if (currentChapterIndex > 0) {
			currentChapterIndex--;
		}
	}
</script>

<div class="story-page">
	<div class="story-container">
		{#if totalChapters === 0}
			<!-- No chapters unlocked yet -->
			<div class="empty-state">
				<p class="empty-message">Your journal is empty.</p>
				<p class="empty-hint">Continue your journey to unlock story entries.</p>
			</div>
		{:else}
			<div class="story-content">
				<!-- Navigation Header at Top -->
				<div class="chapter-header">
					<button
						class="nav-btn nav-prev"
						disabled={currentChapterIndex === 0}
						onclick={prevChapter}
						aria-label="Previous chapter"
					>
						←
					</button>
					<div class="chapter-title">
						{#if firstEntry?.title}
							<h2 class="chapter-name">{firstEntry.title}</h2>
						{/if}
						<span class="chapter-number">Chapter {currentChapterIndex + 1}/{totalChapters}</span>
					</div>
					<button
						class="nav-btn nav-next"
						disabled={currentChapterIndex === totalChapters - 1}
						onclick={nextChapter}
						aria-label="Next chapter"
					>
						→
					</button>
				</div>

				<!-- Story Content for Current Chapter -->
				<div class="story-text">
					{#each currentEntries as entry}
						{#if entry.unlocked}
							<div
								class="entry-card"
								class:new={isNew(entry.unlocked, entry.acknowledged) && !fadingEntries[entry.id]}
								class:fading={fadingEntries[entry.id]}
								role="button"
								tabindex={entry.acknowledged ? -1 : 0}
								onclick={() => !entry.acknowledged && !fadingEntries[entry.id] && acknowledgeEntry(entry.id)}
								onkeydown={(e) => {
									if (!entry.acknowledged && !fadingEntries[entry.id] && (e.key === 'Enter' || e.key === ' ')) {
										e.preventDefault();
										acknowledgeEntry(entry.id);
									}
								}}
							>
								<!-- Story text -->
								<p class="entry-text">
									{entry.text.replace(/<adventurer-name>/g, game.name)}
								</p>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.story-page {
		color: var(--text);
		background-color: var(--bg);
		font-size: 1em;
		font-family: 'Lato', sans-serif;
		height: 100%;
		padding: 2rem 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: color 1s cubic-bezier(0, 0.5, 0, 1),
			background-color 1s cubic-bezier(0, 0.5, 0, 1);
		box-sizing: border-box;
		overflow-y: auto;
	}

	.story-container {
		max-width: 700px;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	/* Empty State */
	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 4rem 2rem;
		text-align: center;
		opacity: 0.6;
	}

	.empty-message {
		font-family: 'Caveat', cursive;
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 0 0.5rem 0;
		color: var(--text);
	}

	.empty-hint {
		font-family: 'Lato', sans-serif;
		font-size: 1rem;
		font-weight: 300;
		margin: 0;
		color: var(--text);
		opacity: 0.7;
	}

	.story-content {
		background-color: var(--alt-bg);
		border-radius: 10px;
		border: 3px var(--text) solid;
		padding: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	/* Navigation Header */
	.chapter-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		background-color: var(--bg);
		border-bottom: 2px solid var(--text);
		gap: 1rem;
	}

	.chapter-title {
		flex: 1;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.chapter-name {
		font-family: 'Caveat', cursive;
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.2;
		margin: 0;
	}

	.chapter-number {
		font-family: 'Lato', sans-serif;
		font-weight: 300;
		font-size: 1rem;
		opacity: 0.8;
	}

	/* Navigation Buttons */
	.nav-btn {
		color: var(--text);
		background-color: var(--alt-bg);
		font-family: 'JetBrains Mono', monospace;
		font-weight: 700;
		font-size: 1.5rem;
		padding: 0.75rem;
		border: 2px solid var(--text);
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.nav-btn:hover:not(:disabled) {
		background-color: var(--text);
		color: var(--bg);
		transform: scale(1.05);
	}

	.nav-btn:disabled {
		opacity: 0.2;
		cursor: not-allowed;
	}

	/* Story Content */
	.story-text {
		padding: 2rem;
		flex: 1;
		overflow-y: auto;
		min-height: 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	/* Entry Card */
	.entry-card {
		padding: 1.5rem;
		position: relative;
		transition: all 0.3s ease;
		border-radius: 8px;
	}

	/* New Entry Styling - highlighted background */
	.entry-card.new {
		background-color: var(--bg);
		border: 2px solid var(--blue);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--blue) 30%, transparent);
		cursor: pointer;
		animation: pulse-border 2s ease-in-out infinite;
	}

	/* Fading Entry - smooth fade out animation */
	.entry-card.fading {
		cursor: pointer;
		animation: fade-out-card 0.5s ease-out forwards;
	}

	@keyframes pulse-border {
		0%,
		100% {
			border-color: var(--blue);
			box-shadow: 0 0 0 2px color-mix(in srgb, var(--blue) 30%, transparent);
		}
		50% {
			border-color: color-mix(in srgb, var(--blue) 70%, white);
			box-shadow: 0 0 0 4px color-mix(in srgb, var(--blue) 20%, transparent);
		}
	}

	@keyframes fade-out-card {
		0% {
			background-color: var(--bg);
			border-color: var(--blue);
			box-shadow: 0 0 0 2px color-mix(in srgb, var(--blue) 30%, transparent);
		}
		100% {
			background-color: transparent;
			border-color: transparent;
			box-shadow: none;
		}
	}

	.entry-card.new:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px color-mix(in srgb, var(--blue) 40%, transparent);
	}

	.entry-card.new:active {
		transform: translateY(0);
	}

	/* Entry Text - Handwritten font */
	.entry-text {
		font-family: 'Caveat', cursive;
		font-size: 1.8rem;
		line-height: 1.5;
		color: var(--text);
		margin: 0;
		white-space: pre-wrap;
		word-wrap: break-word;
		font-weight: 600;
	}

	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.story-page {
			padding: 0.5rem;
			align-items: stretch;
		}

		.story-container {
			max-height: 100%;
		}

		.chapter-header {
			padding: 0.75rem 1rem;
		}

		.chapter-name {
			font-size: 2rem;
		}

		.chapter-number {
			font-size: 0.9rem;
		}

		.nav-btn {
			width: 44px;
			height: 44px;
			font-size: 1.2rem;
			padding: 0.5rem;
		}

		.story-text {
			padding: 1.5rem;
			min-height: 200px;
		}

		.entry-card {
			padding: 1.25rem;
		}

		.entry-text {
			font-size: 1.5rem;
			line-height: 1.4;
		}

		.empty-message {
			font-size: 2rem;
		}

		.empty-hint {
			font-size: 0.9rem;
		}
	}
</style>
