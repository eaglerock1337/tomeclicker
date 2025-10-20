<script lang="ts">
	import type { Game } from '$lib/game';

	interface Props {
		game: Game;
	}

	let { game }: Props = $props();

	/**
	 * Determines the next feature unlock and progress toward it
	 * Returns null if all tracked unlocks are already available
	 */
	const nextUnlock = $derived.by(() => {
		const exp = game.exp;
		const lifetimeExp = game.lifetimeExp;
		const level = game.level;

		// Header unlocks at 10 lifetime exp
		if (lifetimeExp < 10) {
			return {
				feature: 'Header',
				requirement: '10 experience',
				progress: lifetimeExp / 10,
				current: lifetimeExp,
				target: 10
			};
		}

		// Menu navigation unlocks at 50 lifetime exp
		if (lifetimeExp < 50) {
			return {
				feature: 'Menu Navigation',
				requirement: '50 experience',
				progress: lifetimeExp / 50,
				current: lifetimeExp,
				target: 50
			};
		}

		// Adventures unlock at level 3 (placeholder for future feature)
		if (level < 3) {
			return {
				feature: 'Adventures',
				requirement: 'Level 3',
				progress: level / 3,
				current: level,
				target: 3
			};
		}

		// Stats training unlocks at level 5 (placeholder for future feature)
		if (level < 5) {
			return {
				feature: 'Stats Training',
				requirement: 'Level 5',
				progress: level / 5,
				current: level,
				target: 5
			};
		}

		// No more tracked unlocks
		return null;
	});
</script>

{#if nextUnlock}
	<div class="unlock-hint">
		<div class="hint-icon">🔒</div>
		<div class="hint-content">
			<p class="hint-text">
				<strong>{nextUnlock.feature}</strong> unlocks at {nextUnlock.requirement}
			</p>
			<div class="hint-progress">
				<div class="progress-bar" style="width: {nextUnlock.progress * 100}%"></div>
			</div>
			<p class="hint-progress-text">
				{Math.floor(nextUnlock.current)} / {nextUnlock.target}
			</p>
		</div>
	</div>
{/if}

<style>
	.unlock-hint {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--hint-bg, rgba(66, 135, 245, 0.1));
		border: 1px solid var(--hint-border, rgba(66, 135, 245, 0.3));
		border-radius: 8px;
		margin-bottom: 1.5rem;
		transition: all 0.3s ease;
	}

	.hint-icon {
		font-size: 1.5rem;
		flex-shrink: 0;
	}

	.hint-content {
		flex: 1;
	}

	.hint-text {
		margin: 0 0 0.5rem 0;
		font-size: 0.95rem;
		color: var(--hint-text, inherit);
	}

	.hint-text strong {
		font-weight: 500;
	}

	.hint-progress {
		height: 6px;
		background: var(--progress-bg, rgba(0, 0, 0, 0.1));
		border-radius: 3px;
		overflow: hidden;
		margin-bottom: 0.25rem;
	}

	.progress-bar {
		height: 100%;
		background: var(--progress-fill, #4287f5);
		transition: width 0.3s ease;
	}

	.hint-progress-text {
		margin: 0;
		font-size: 0.75rem;
		opacity: 0.8;
		text-align: right;
	}

	@media (max-width: 768px) {
		.unlock-hint {
			padding: 0.75rem;
		}

		.hint-icon {
			font-size: 1.25rem;
		}

		.hint-text {
			font-size: 0.9rem;
		}
	}
</style>
