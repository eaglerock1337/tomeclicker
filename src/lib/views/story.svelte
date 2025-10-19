<script lang="ts">
	import type { Game } from '$lib/game';
	import UnlockHint from '$lib/components/UnlockHint.svelte';

	interface Props {
		game: Game;
	}

	let { game = $bindable() }: Props = $props();

	// Session-persisted chapter state (resets on page refresh)
	let currentChapter = $state(1);
	const totalChapters = 9;

	// Chapter content (placeholder - will eventually come from tomes.yaml)
	const chapters = [
		'This is a chapter',
		'This is another chapter',
		'Revenge of the chapter',
		"Hey look, it's a chapter!",
		'In Soviet Russia, chapter reads you',
		'Chapter Revisited',
		"YOLO, so here's a chapter",
		'The chapter to end all chapters',
		'The final chapter'
	];

	function nextChapter() {
		if (currentChapter < totalChapters) {
			currentChapter++;
		}
	}

	function prevChapter() {
		if (currentChapter > 1) {
			currentChapter--;
		}
	}
</script>

<div class="story-page">
	<div class="story-container">
		<UnlockHint {game} />

		<div class="story-content">
			<h2 class="chapter-title">Chapter {currentChapter}</h2>

			<div class="story-text">
				<p>{chapters[currentChapter - 1]}</p>
			</div>

			<div class="chapter-nav">
				<button
					class="nav-btn"
					disabled={currentChapter === 1}
					onclick={prevChapter}
				>
					← Previous
				</button>
				<span class="chapter-indicator">{currentChapter} / {totalChapters}</span>
				<button
					class="nav-btn"
					disabled={currentChapter === totalChapters}
					onclick={nextChapter}
				>
					Next →
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.story-page {
		color: var(--text);
		background-color: var(--bg);
		font-size: 1em;
		font-family: Tangerine, cursive;
		min-height: 100%;
		padding: 2rem 1rem;
		display: flex;
		justify-content: center;
		transition: color 1s cubic-bezier(0, 0.5, 0, 1),
			background-color 1s cubic-bezier(0, 0.5, 0, 1);
	}

	.story-container {
		max-width: 700px;
		width: 100%;
	}

	.story-content {
		background-color: var(--alt-bg);
		border-radius: 10px;
		border: 3px var(--text) solid;
		padding: 2rem;
		margin-top: 1rem;
	}

	.chapter-title {
		font-family: Lato, sans-serif;
		font-weight: 300;
		font-size: 2rem;
		margin: 0 0 1.5rem 0;
		text-align: center;
	}

	.story-text {
		line-height: 1.6;
		font-size: 2em;
		margin: 2rem 0;
		min-height: 200px;
	}

	.story-text p {
		margin: 1rem 0;
	}

	.chapter-nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 2px solid var(--text);
		gap: 1rem;
	}

	.nav-btn {
		color: var(--text);
		background-color: var(--bg);
		font-family: JetBrains Mono, monospace;
		font-weight: 400;
		font-size: 1rem;
		padding: 0.75rem 1.5rem;
		border: 2px solid var(--text);
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		min-width: 120px;
	}

	.nav-btn:hover:not(:disabled) {
		background-color: var(--text);
		color: var(--bg);
	}

	.nav-btn:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.chapter-indicator {
		font-family: JetBrains Mono, monospace;
		font-size: 0.9rem;
		opacity: 0.8;
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		.story-page {
			padding: 1rem 0.5rem;
		}

		.story-content {
			padding: 1.5rem;
		}

		.chapter-title {
			font-size: 1.5rem;
		}

		.story-text {
			font-size: 1.5em;
			min-height: 150px;
		}

		.chapter-nav {
			flex-direction: column;
			gap: 0.75rem;
		}

		.nav-btn {
			width: 100%;
			min-width: auto;
		}

		.chapter-indicator {
			order: -1;
		}
	}
</style>
