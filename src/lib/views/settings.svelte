<script lang="ts">
    import { ToggleLeft, ToggleRight } from 'lucide-svelte';

    import type { Config } from '$lib/config';
    import type { Game } from '$lib/game';

    export let config: Config;
    export let game: Game;
</script>

<div class="settings">
    <h1>settings</h1>
    <p>EXP: {game.exp} Tick: {game.tick} Level: {game.level}</p>
    <h2>test buttons</h2>
    <div class="container">
        <button on:click={() => {game.exp++;}}>EXP</button>
        <button on:click={() => {game.tick++;}}>Tick</button>
        <button on:click={() => {game.exp += 100;}}>100EXP</button>    
    </div>
    <h2>game settings</h2>
    <div class="container">
        <button on:click={() => {config.darkmode = !config.darkmode;}}>Dark Mode</button>
        {#if config.darkmode}
            <ToggleRight size={48}/>
        {:else}
            <ToggleLeft size={48}/>
        {/if}
    </div>
</div>

<style>
    .settings {
        color: var(--text);
        background-color: var(--bg);
        font-size: 1em;
        font-family: JetBrains Mono, monospace;
        font-weight: 300;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: color 1s cubic-bezier(0,.5,0,1),
                    background-color 1s cubic-bezier(0,.5,0,1);
    }

    h1 {
        font-family: Lato, sans-serif;
        font-weight: 300;
    }

    h2 {
        font-family: Lato, sans-serif;
        font-weight: 300;
    }

    .container {
        height: 3.5rem;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: flex-start;
    }

    .container button {
        color: var(--text);
        background-color: var(--alt-bg);
        font-size: 1.2em;
        font-family: JetBrains Mono, monospace;
        font-weight: 300;
        margin: 2px 2px 10px;
        padding: 5px 10px;
        text-align: center;
        transition: color 1s cubic-bezier(0,.5,0,1),
                    background-color 1s cubic-bezier(0,.5,0,1);
        border: 2px solid var(--text);
        border-radius: 10px;
    }
</style>