<script lang="ts">
	import { Brain } from 'lucide-svelte';
</script>

<div class="meditation">
	<div class="meditation-content">
		<Brain size={64} />
		<h1>Meditation</h1>
		<p class="coming-soon">Coming Soon</p>
		<p class="description">
			Unlock deeper mysteries of the mind through meditation. This feature will be available in a
			future update.
		</p>
	</div>
</div>

<style>
	.meditation {
		color: var(--text);
		background-color: var(--bg);
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		box-sizing: border-box;
		transition:
			color 1s cubic-bezier(0, 0.5, 0, 1),
			background-color 1s cubic-bezier(0, 0.5, 0, 1);
	}

	.meditation-content {
		text-align: center;
		max-width: 600px;
		background-color: var(--alt-bg);
		border: 2px solid var(--text);
		border-radius: 10px;
		padding: 3rem 2rem;
	}

	.meditation-content :global(svg) {
		opacity: 0.6;
		margin-bottom: 1.5rem;
	}

	h1 {
		font-family: Lato, sans-serif;
		font-weight: 300;
		margin-bottom: 1rem;
		font-size: 2rem;
	}

	.coming-soon {
		font-family: JetBrains Mono, monospace;
		font-weight: 400;
		color: var(--yellow);
		font-size: 1.2rem;
		margin-bottom: 1.5rem;
	}

	.description {
		font-family: Lato, sans-serif;
		font-weight: 300;
		line-height: 1.6;
		opacity: 0.8;
	}
</style>
