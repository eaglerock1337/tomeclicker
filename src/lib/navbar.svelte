<script lang="ts">
	// Lucide icons (modern replacement for Font Awesome)
	import {
		BarChart3,
		Book,
		Bookmark,
		Copy,
		Edit,
		Settings,
		History,
		Clock,
		Info,
		List,
		MapPin,
		Map,
		MousePointer,
		HelpCircle,
		Shield,
		Workflow,
		Trophy,
		TrendingUp,
		Save,
		Dumbbell,
		Brain,
		Compass
	} from 'lucide-svelte';

	import { page } from '$app/stores';
	import type { Game } from '$lib/game';

	export let game: Game;

	// Check if any upgrades are affordable or level up is available
	$: hasAvailableUpgrades =
		game &&
		(game.canLevelUp() ||
			Object.values(game.upgrades).some((upgrade) => game.canAffordUpgrade(upgrade.id)));

	// Get current page path for active state
	$: currentPath = $page.url.pathname;

	// Map routes to display names
	$: pageName = (() => {
		if (currentPath === '/') return 'practice';
		return currentPath.slice(1); // Remove leading slash
	})();
</script>

<div class="navbar">
	<div class="page-name">
		<span>{pageName}</span>
	</div>
	<div class="menu">
		<a href="/" class="nav-btn">
			<p class:red={currentPath === '/'}><MousePointer size={24} /></p>
		</a>
		{#if game.showUpgrades()}
			<a href="/upgrades" class="nav-btn">
				<p
					class:red={currentPath === '/upgrades'}
					class:green={currentPath !== '/upgrades' && hasAvailableUpgrades}
				>
					<TrendingUp size={24} />
				</p>
			</a>
		{/if}
		{#if game.showTraining()}
			<a href="/training" class="nav-btn">
				<p class:red={currentPath === '/training'}><Dumbbell size={24} /></p>
			</a>
		{/if}
		{#if game.showStats()}
			<a href="/stats" class="nav-btn">
				<p class:red={currentPath === '/stats'}><BarChart3 size={24} /></p>
			</a>
		{/if}
		{#if game.showMeditation()}
			<a href="/meditation" class="nav-btn">
				<p class:red={currentPath === '/meditation'}><Brain size={24} /></p>
			</a>
		{/if}
		{#if game.showAdventure()}
			<a href="/adventure" class="nav-btn">
				<p class:red={currentPath === '/adventure'}><Compass size={24} /></p>
			</a>
		{/if}
		<a href="/story" class="nav-btn">
			<p class:red={currentPath === '/story'}><Edit size={24} /></p>
		</a>
		<a href="/help" class="nav-btn">
			<p class:red={currentPath === '/help'}><HelpCircle size={24} /></p>
		</a>
		<a href="/saves" class="nav-btn">
			<p class:red={currentPath === '/saves'}><Save size={24} /></p>
		</a>
		<a href="/settings" class="nav-btn">
			<p class:red={currentPath === '/settings'}><Settings size={24} /></p>
		</a>
		<a href="/about" class="nav-btn">
			<p class:red={currentPath === '/about'}><Info size={24} /></p>
		</a>
	</div>
</div>

<style>
    .navbar {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        background-color: var(--bg);
        border-top: 1px solid var(--text);
        width: 100%;
    }

    .menu {
        color: var(--text);
        background-color: var(--bg);
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row wrap;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

	.menu .nav-btn {
		color: var(--text);
		background-color: var(--alt-bg);
		font-size: 1.2em;
		font-family: JetBrains Mono, monospace;
		font-weight: 400;
		margin: 2px 2px 10px;
		padding: 5px 10px;
		max-width: 55px;
		min-width: 50px;
		min-height: 50px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		transition:
			color 1s cubic-bezier(0, 0.5, 0, 1),
			background-color 1s cubic-bezier(0, 0.5, 0, 1);
		border: 2px solid var(--text);
		border-radius: 5px;
		text-decoration: none;
		cursor: pointer;
	}

    .page-name {
        color: var(--text);
        background-color: var(--bg);
        font-family: JetBrains Mono, monospace;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .page-name span {
        font-size: 1em;
        opacity: 0.8;
    }

    p {
        padding: 0px 0px;
        margin: 4px 2px;
    }

    .red {
        color: var(--red);
        font-weight: 700;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .green {
        color: var(--green);
        font-weight: 700;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

</style>