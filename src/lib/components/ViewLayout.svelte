<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string; // Page title (optional)
		titleLevel?: 1 | 2; // h1 (default) or h2
		titleAlign?: 'left' | 'center'; // Default: 'center'
		maxWidth?: string; // Content max-width (default: '800px')
		noPadding?: boolean; // Disable all padding (for special cases like practice)
		children: Snippet; // Content slot
	}

	let {
		title,
		titleLevel = 1,
		titleAlign = 'center',
		maxWidth = '800px',
		noPadding = false,
		children
	}: Props = $props();
</script>

<div class="view-layout" class:no-padding={noPadding}>
	{#if title}
		{#if titleLevel === 1}
			<h1 class="view-title" class:title-left={titleAlign === 'left'} class:title-center={titleAlign === 'center'}>
				{title}
			</h1>
		{:else}
			<h2 class="view-title" class:title-left={titleAlign === 'left'} class:title-center={titleAlign === 'center'}>
				{title}
			</h2>
		{/if}
	{/if}

	<div class="view-content" style:max-width={maxWidth}>
		{@render children()}
	</div>
</div>

<style>
	.view-layout {
		height: 100%;
		width: 100%;
		background-color: var(--bg);
		color: var(--text);
		font-family: JetBrains Mono, monospace;
		font-weight: 300;
		overflow-y: auto;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		box-sizing: border-box;
		padding: 1.5rem 1rem;
		transition:
			color 1s cubic-bezier(0, 0.5, 0, 1),
			background-color 1s cubic-bezier(0, 0.5, 0, 1);
	}

	.view-layout.no-padding {
		padding: 0;
	}

	.view-title {
		font-family: Lato, sans-serif;
		font-weight: 300;
		margin: 0 0 1.5rem 0;
		color: var(--text);
	}

	.view-title.title-center {
		text-align: center;
	}

	.view-title.title-left {
		text-align: left;
	}

	h1.view-title {
		font-size: 1.75rem;
	}

	h2.view-title {
		font-size: 1.5rem;
	}

	.view-content {
		width: 100%;
		margin: 0 auto;
	}

	/* Mobile responsive padding */
	@media (max-width: 768px) {
		.view-layout {
			padding: 1rem 0.5rem;
		}

		h1.view-title {
			font-size: 1.5rem;
			margin-bottom: 1rem;
		}

		h2.view-title {
			font-size: 1.25rem;
			margin-bottom: 1rem;
		}
	}
</style>
