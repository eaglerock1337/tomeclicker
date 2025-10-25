<script lang="ts">
	import { Info, Github, Globe, ExternalLink } from 'lucide-svelte';
	import type { Config } from '$lib/config';
	import type { Game } from '$lib/game';
	import { version } from '$app/environment';

	interface Props {
		game: Game;
		config: Config;
	}

	let { game = $bindable(), config = $bindable() }: Props = $props();
</script>

<div class="about">
	<h1>about</h1>

	<div class="about-content">
		<!-- Game Info Section -->
		<section class="about-section">
			<div class="section-header">
				<Info size={24} />
				<h2>TomeClicker</h2>
			</div>
			<div class="section-body">
				<p class="tagline">
					An incremental RPG clicker game that grows on you.
				</p>
				<div class="info-row">
					<span class="info-label">Version:</span>
					<span class="info-value">{version}</span>
				</div>
				<div class="info-row">
					<span class="info-label">License:</span>
					<span class="info-value">BSD 3-Clause</span>
				</div>
				<div class="info-row">
					<span class="info-label">Hosting:</span>
					<span class="info-value">
						<a
							href="https://marks.dev/#/hlc"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-link"
						>
							Happy Little Cloud
						</a>
					</span>
				</div>
			</div>
		</section>

		<!-- Links Section -->
		<section class="about-section">
			<div class="section-header">
				<Globe size={24} />
				<h2>Links</h2>
			</div>
			<div class="section-body">
				<a
					href="https://github.com/eaglerock1337/tomeclicker"
					target="_blank"
					rel="noopener noreferrer"
					class="link-item"
				>
					<Github size={20} />
					<span>GitHub Repository</span>
					<ExternalLink size={16} class="external-icon" />
				</a>
				<a
					href="https://tomeclicker.marks.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="link-item"
				>
					<Globe size={20} />
					<span>Production Site</span>
					<ExternalLink size={16} class="external-icon" />
				</a>
				<a
					href="https://tomeclicker-dev.marks.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="link-item"
				>
					<Globe size={20} />
					<span>Preview Site (GitHub Pages)</span>
					<ExternalLink size={16} class="external-icon" />
				</a>
				<a
					href="https://marks.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="link-item"
				>
					<Globe size={20} />
					<span>EagleRock's Website</span>
					<ExternalLink size={16} class="external-icon" />
				</a>
			</div>
		</section>

		<!-- Credits Section -->
		<section class="about-section">
			<div class="section-header">
				<h2>Credits</h2>
			</div>
			<div class="section-body">
				<p class="credits-text">
					Created by EagleRock with inspiration from classic incremental games like Cookie Clicker, Antimatter Dimensions, NGU Idle, Idling to Rule the Gods, Grimoire, and countless others in the genre.					

					Also inspired by <a
						href="https://hlc.marks.dev/"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-link"
					>
						Bob Ross
					</a> and the joy of happy little accidents.
				</p>
				<p class="credits-text">
					Open source and built using SvelteKit and the Boi Squad.
				</p>
			</div>
		</section>
	</div>
</div>

<style>
	.about {
		color: var(--text);
		background-color: var(--bg);
		font-size: 1em;
		font-family: JetBrains Mono, monospace;
		font-weight: 300;
		height: 100%;
		padding: 2rem 1rem;
		transition: color 1s cubic-bezier(0, 0.5, 0, 1),
			background-color 1s cubic-bezier(0, 0.5, 0, 1);
		box-sizing: border-box;
		overflow-y: auto;
	}

	.about-content {
		max-width: 800px;
		margin: 0 auto;
	}

	h1 {
		font-family: Lato, sans-serif;
		font-weight: 300;
		text-align: center;
		margin-bottom: 2rem;
	}

	h2 {
		font-family: Lato, sans-serif;
		font-weight: 300;
		font-size: 1.2rem;
		margin: 0;
	}

	/* Section Styling */
	.about-section {
		background-color: var(--alt-bg);
		border: 2px solid var(--text);
		border-radius: 10px;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--text);
		opacity: 0.9;
	}

	.section-body {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	/* Game Info */
	.tagline {
		font-size: 1.05rem;
		line-height: 1.6;
		margin: 0;
		opacity: 0.95;
	}

	.info-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		background-color: var(--bg);
		border-radius: 5px;
	}

	.info-label {
		font-weight: 400;
		opacity: 0.8;
	}

	.info-value {
		font-weight: 500;
	}

	/* Inline links within text */
	.inline-link {
		color: var(--blue);
		text-decoration: underline;
		font-weight: 400;
		transition: color 0.2s ease;
	}

	.inline-link:hover {
		color: var(--green);
		text-decoration: none;
	}

	.inline-link:focus {
		outline: 2px solid var(--blue);
		outline-offset: 2px;
		border-radius: 2px;
	}

	/* Links */
	.link-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		background-color: var(--bg);
		border: 2px solid var(--text);
		border-radius: 8px;
		color: var(--text);
		text-decoration: none;
		transition: all 0.3s ease;
		position: relative;
		font-size: 1rem;
	}

	.link-item:hover {
		background-color: var(--text);
		color: var(--bg);
		transform: translateX(5px);
	}

	.link-item:focus {
		outline: 2px solid var(--blue);
		outline-offset: 2px;
	}

	.link-item span {
		flex: 1;
	}

	.link-item :global(.external-icon) {
		opacity: 0.6;
		transition: opacity 0.3s ease;
	}

	.link-item:hover :global(.external-icon) {
		opacity: 1;
	}

	/* Credits */
	.credits-text {
		margin: 0;
		line-height: 1.6;
		opacity: 0.9;
	}

	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.about {
			padding: 1rem 0.5rem;
		}

		.about-section {
			padding: 1rem;
		}

		.section-header {
			gap: 0.5rem;
		}

		h2 {
			font-size: 1.1rem;
		}

		.tagline {
			font-size: 1rem;
		}

		.link-item {
			font-size: 0.95rem;
			padding: 0.65rem 0.85rem;
		}

		.link-item:hover {
			transform: translateX(3px);
		}
	}
</style>
