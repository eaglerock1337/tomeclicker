<script lang="ts">
    import { MousePointer } from 'lucide-svelte';

    import type { Config } from '$lib/config';
    import type { Game } from '$lib/game';

    export let config: Config;
    export let game: Game;

    function clickMe() {
        if (!game) return;

        const clickValue = game.getClickValue();
        game.addExp(clickValue);
        game = game;
    }

    /** temporary hack for svelte errors since it's not used yet */
    config = config;
</script>

<div class="thebutton">
    <button on:click={clickMe}>
        <div class="item">
            <MousePointer size={48}/><br>{game ? game.updateClickText() : 'Loading...'}
        </div>
    </button>
</div>

<style>
    /* The Button */

    .thebutton {
        height: 100%;
        width: 100%;
    }

    .thebutton button {
        color: var(--text);
        background-color: var(--bg);
        border: 0px;
        padding: 25px 50px 25px;
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 1em;
        touch-action: manipulation;
        transition: color 1s cubic-bezier(0,.5,0,1),
                    background-color 1s cubic-bezier(0,.5,0,1);
        /* Prevent text selection during rapid clicking */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .item {
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: scale 0.1s;
    }

    .item:hover {
        scale: 1.05;
    }

    .item:active {
        scale: 0.95;
    }
</style>