<script lang="ts">
	import type { Game } from '$lib/game';

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
		<div class="story-content">
			<!-- Navigation Header at Top -->
			<div class="chapter-header">
				<button
					class="nav-btn nav-prev"
					disabled={currentChapter === 1}
					onclick={prevChapter}
					aria-label="Previous chapter"
				>
					←
				</button>
				<div class="chapter-title">
					<h2>Chapter {currentChapter}</h2>
					<span class="chapter-indicator">({currentChapter}/{totalChapters})</span>
				</div>
				<button
					class="nav-btn nav-next"
					disabled={currentChapter === totalChapters}
					onclick={nextChapter}
					aria-label="Next chapter"
				>
					→
				</button>
			</div>

			<!-- Story Content -->
			<div class="story-text">
				<p>{chapters[currentChapter - 1]}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.story-page {
		color: var(--text);
		background-color: var(--bg);
		font-size: 1em;
		font-family: 'Caveat', cursive;
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

	.chapter-title h2 {
		font-family: Lato, sans-serif;
		font-weight: 300;
		font-size: 1.5rem;
		margin: 0;
	}

	.chapter-indicator {
		font-family: JetBrains Mono, monospace;
		font-size: 0.8rem;
		opacity: 0.7;
		white-space: nowrap;
	}

	/* Navigation Buttons */
	.nav-btn {
		color: var(--text);
		background-color: var(--alt-bg);
		font-family: JetBrains Mono, monospace;
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
		line-height: 1.6;
		font-size: 2em;
		padding: 2rem;
		flex: 1;
		overflow-y: auto;
		min-height: 0;
	}

	.story-text p {
		margin: 1rem 0;
	}

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

		.chapter-title h2 {
			font-size: 1.2rem;
		}

		.chapter-indicator {
			font-size: 0.7rem;
		}

		.nav-btn {
			width: 44px;
			height: 44px;
			font-size: 1.2rem;
			padding: 0.5rem;
		}

		.story-text {
			font-size: 1.5em;
			padding: 1.5rem;
			min-height: 200px;
		}
	}
</style>
