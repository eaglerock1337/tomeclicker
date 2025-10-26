<script lang="ts">
	import { HelpCircle } from 'lucide-svelte';
</script>

<div class="help">
	<h1>help</h1>

	<div class="help-content">
		<section class="help-section">
			<div class="section-header">
				<HelpCircle size={24} />
				<h2>How to Play</h2>
			</div>
			<div class="section-body">
				<p>
					TomeClicker is an incremental RPG game. Click the practice button to gain experience,
					level up, and unlock new features as you progress.
				</p>
			</div>
		</section>

		<section class="help-section">
			<h2>Game Progression</h2>
			<div class="section-body">
				<ul>
					<li><strong>Practice:</strong> Click to gain experience points (EXP)</li>
					<li><strong>Level Up:</strong> Spend EXP to increase your level and unlock new features</li>
					<li><strong>Upgrades:</strong> Purchase upgrades to improve your clicking power</li>
					<li><strong>Training:</strong> Unlock at level 3 to train your stats</li>
					<li><strong>Stats:</strong> View your progress and statistics</li>
				</ul>
			</div>
		</section>

		<section class="help-section">
			<h2>Tips</h2>
			<div class="section-body">
				<ul>
					<li>Your game auto-saves every 15 seconds to browser storage</li>
					<li>Green highlights in the upgrades menu indicate affordable purchases</li>
					<li>Level up strategically - some features unlock at specific levels</li>
					<li>Export your save frequently from the Saves page for backup</li>
				</ul>
			</div>
		</section>

		<section class="help-section">
			<h2>Need More Help?</h2>
			<div class="section-body">
				<p>
					Visit the <a href="/about" class="inline-link">About</a> page for links to the GitHub repository
					where you can report bugs or request features.
				</p>
			</div>
		</section>
	</div>
</div>

<style>
	.help {
		color: var(--text);
		background-color: var(--bg);
		font-size: 1em;
		font-family: JetBrains Mono, monospace;
		font-weight: 300;
		height: 100%;
		padding: 2rem 1rem;
		transition:
			color 1s cubic-bezier(0, 0.5, 0, 1),
			background-color 1s cubic-bezier(0, 0.5, 0, 1);
		box-sizing: border-box;
		overflow-y: auto;
	}

	.help-content {
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

	.help-section {
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
		line-height: 1.6;
	}

	.section-body p {
		margin: 0.5rem 0;
	}

	.section-body ul {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
	}

	.section-body li {
		margin: 0.75rem 0;
	}

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

	@media (max-width: 768px) {
		.help {
			padding: 1rem 0.5rem;
		}

		.help-section {
			padding: 1rem;
		}
	}
</style>
