<script lang="ts">
    import { MousePointer } from 'lucide-svelte';

    import type { Config } from '$lib/config';
    import type { Game } from '$lib/game';

    interface Props {
        game: Game;
        config: Config;
    }

    let { game = $bindable(), config = $bindable() }: Props = $props();

    let clickText = $derived(game ? game.updateClickText() : 'Loading...');

    function clickMe() {
        if (!game) return;

        const clickValue = game.getClickValue();
        game.addExp(clickValue);
        game = game;
    }
</script>

<div class="practice-container">
    <div class="thebutton">
        <button
            onclick={clickMe}
            ontouchstart={clickMe}
            aria-label="Practice to gain experience points"
        >
            <div class="item">
                <MousePointer size={48}/><br>{clickText}
            </div>
        </button>
    </div>
</div>

<style>
    .practice-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;
        box-sizing: border-box;
    }

    /* The Button */

    .thebutton {
        flex: 1;
        width: 100%;
    }

    .thebutton button {
        color: var(--text);
        background-color: var(--bg);
        border: none;
        margin: 0;
        padding: 0;
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        width: 100%;
        height: 100%;
        display: flex;
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
        outline: none;
        border-radius: 0;
        /* Prevent iOS flash on tap */
        -webkit-tap-highlight-color: transparent;
        /* Prevent accidental highlighting */
        -webkit-highlight: none;
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

    .thebutton button:active .item {
        scale: 0.95;
    }
</style>