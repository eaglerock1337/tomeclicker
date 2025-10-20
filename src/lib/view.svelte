<script lang="ts">
    import Practice from '$lib/views/practice.svelte';
    import Upgrades from '$lib/views/upgrades.svelte';
    import Saves from '$lib/views/saves.svelte';
    import Settings from '$lib/views/settings.svelte';
    import Story from '$lib/views/story.svelte';

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
    {:else if game && game.menu === "saves"}
        <Saves bind:config bind:game/>
    {:else if game && game.menu === "story"}
        <Story bind:game/>
    {:else if game && game.menu === "settings"}
        <Settings bind:config bind:game/>
    {:else if game && game.menu === "about"}
        <div class="placeholder">
            <h1>About page coming soon...</h1>
            <p>This will contain game facts and statistics.</p>
        </div>
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
        overflow: hidden;
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