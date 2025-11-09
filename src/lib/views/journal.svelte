<script lang="ts">
	import type { Game } from '$lib/game';
	import ViewLayout from '$lib/components/ViewLayout.svelte';

	/**
	 * Journal Page
	 *
	 * Displays story entries organized by chapter:
	 * - Chapter titles in Caveat handwritten font
	 * - Individual story blurbs with JetBrains Mono
	 * - Blue pulsing borders for new/unacknowledged entries
	 * - Click to acknowledge and mark as read
	 */

	interface Props {
		game: Game;
	}

	let { game = $bindable() }: Props = $props();

	// Get unlocked chapters from game
	let unlockedChapters = $derived(game.getUnlockedStoryChapters());

	/**
	 * Handle clicking on an unread entry to acknowledge it
	 */
	function acknowledgeEntry(entryId: string) {
		game.acknowledgeStoryEntry(entryId);
		game = game; // Force reactivity
	}

	/**
	 * Check if an entry has a pulsing "new" indicator
	 */
	function isNew(unlocked: boolean, acknowledged: boolean): boolean {
		return unlocked && !acknowledged;
	}
</script>

<ViewLayout title="journal" maxWidth="900px">
	{#if unlockedChapters.length === 0}
		<!-- No chapters unlocked yet -->
		<div class="empty-state">
			<p class="empty-message">Your journal is empty.</p>
			<p class="empty-hint">Continue your journey to unlock story entries.</p>
		</div>
	{:else}
		<!-- Render each unlocked chapter -->
		{#each unlockedChapters as chapterNum}
			{@const entries = game.getStoryChapterEntries(chapterNum)}
			{@const firstEntry = entries[0]}

			<div class="chapter-section">
				<!-- Chapter Header -->
				<div class="chapter-header">
					<div class="chapter-progress">Chapter {chapterNum}</div>
					{#if firstEntry?.title}
						<h2 class="chapter-title">{firstEntry.title}</h2>
					{/if}
				</div>

				<!-- Story Entries -->
				<div class="entries-list">
					{#each entries as entry}
						{#if entry.unlocked}
							<div
								class="entry-card"
								class:new={isNew(entry.unlocked, entry.acknowledged)}
								role="button"
								tabindex={entry.acknowledged ? -1 : 0}
								onclick={() => !entry.acknowledged && acknowledgeEntry(entry.id)}
								onkeydown={(e) => {
									if (!entry.acknowledged && (e.key === 'Enter' || e.key === ' ')) {
										e.preventDefault();
										acknowledgeEntry(entry.id);
									}
								}}
							>
								<!-- New badge -->
								{#if isNew(entry.unlocked, entry.acknowledged)}
									<span class="new-badge">NEW</span>
								{/if}

								<!-- Story text -->
								<p class="entry-text">
									{entry.text.replace(/<adventurer-name>/g, game.name)}
								</p>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</ViewLayout>

<style>
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
		color: var(--text-primary);
	}

	.empty-hint {
		font-family: 'Lato', sans-serif;
		font-size: 1rem;
		font-weight: 300;
		margin: 0;
		color: var(--text-secondary);
	}

	/* Chapter Section */
	.chapter-section {
		margin-bottom: 3rem;
	}

	.chapter-section:last-child {
		margin-bottom: 0;
	}

	/* Chapter Header */
	.chapter-header {
		margin-bottom: 1.5rem;
		padding-bottom: 0.75rem;
		border-bottom: 2px solid var(--border-primary);
	}

	.chapter-progress {
		font-family: 'Lato', sans-serif;
		font-size: 0.875rem;
		font-weight: 400;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}

	.chapter-title {
		font-family: 'Caveat', cursive;
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 0;
		line-height: 1.2;
	}

	/* Entries List */
	.entries-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	/* Entry Card */
	.entry-card {
		background-color: var(--bg-secondary);
		border: 2px solid var(--border-primary);
		border-radius: 8px;
		padding: 1.5rem;
		position: relative;
		transition: all 0.3s ease;
	}

	/* New Entry Styling */
	.entry-card.new {
		border-color: var(--blue);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--blue) 30%, transparent);
		cursor: pointer;
		animation: pulse-border 2s ease-in-out infinite;
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

	.entry-card.new:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px color-mix(in srgb, var(--blue) 40%, transparent);
	}

	.entry-card.new:active {
		transform: translateY(0);
	}

	/* New Badge */
	.new-badge {
		position: absolute;
		top: -10px;
		right: 1rem;
		font-family: 'Lato', sans-serif;
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: white;
		background-color: var(--blue);
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
		animation: pulse-badge 2s ease-in-out infinite;
	}

	@keyframes pulse-badge {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.7;
		}
	}

	/* Entry Text */
	.entry-text {
		font-family: 'JetBrains Mono', 'Courier New', monospace;
		font-size: 1rem;
		line-height: 1.7;
		color: var(--text-primary);
		margin: 0;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.chapter-section {
			margin-bottom: 2rem;
		}

		.chapter-title {
			font-size: 2rem;
		}

		.entry-card {
			padding: 1.25rem;
		}

		.entry-text {
			font-size: 0.95rem;
			line-height: 1.6;
		}

		.empty-message {
			font-size: 2rem;
		}

		.empty-hint {
			font-size: 0.9rem;
		}
	}
</style>
