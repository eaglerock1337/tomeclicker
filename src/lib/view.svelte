<script lang="ts">
    import Practice from '$lib/views/practice.svelte';
    import Upgrades from '$lib/views/upgrades.svelte';
    import Study from '$lib/views/study.svelte';
    import Stats from '$lib/views/stats.svelte';
    import Meditation from '$lib/views/meditation.svelte';
    import Adventure from '$lib/views/adventure.svelte';
    import Settings from '$lib/views/settings.svelte';
    import Journal from '$lib/views/journal.svelte';
    import About from '$lib/views/about.svelte';

    import type { Config } from '$lib/config';
    import type { Game } from '$lib/game';

    export let config: Config;
    export let game: Game;

    // Reactive variable to track menu changes
    $: currentMenu = game?.menu;
</script>

<div class="view">
    {#key currentMenu}
    {#if game && game.menu === "practice"}
        <Practice bind:config bind:game/>
    {:else if game && game.menu === "upgrades"}
        <Upgrades bind:config bind:game/>
    {:else if game && game.menu === "study"}
        <Study bind:game/>
    {:else if game && game.menu === "stats"}
        <Stats bind:game/>
    {:else if game && game.menu === "meditation"}
        <Meditation bind:game/>
    {:else if game && game.menu === "adventure"}
        <Adventure bind:game/>
    {:else if game && game.menu === "journal"}
        <Journal bind:game/>
    {:else if game && game.menu === "settings"}
        <Settings bind:config bind:game/>
    {:else if game && game.menu === "help"}
        <div class="placeholder">
            <h1>Help page coming soon...</h1>
            <p>This will contain guides and tutorials.</p>
        </div>
    {:else if game && game.menu === "about"}
        <About bind:config bind:game/>
    {:else if !game}
        <div class="placeholder">
            <h1>Loading...</h1>
        </div>
    {:else}
        <h1>???????????????????????????<br>???????????????????????????<br>???????????????????????????<br>???????????????????????????<br>???????????????????????????<br>???????????????????????????</h1>
    {/if}
    {/key}
</div>

<style>
    .view {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    .placeholder {
        color: var(--text);
        background-color: var(--bg);
        font-family: JetBrains Mono, monospace;
        text-align: center;
        padding: 2rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .placeholder h1 {
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 1rem;
    }
</style>