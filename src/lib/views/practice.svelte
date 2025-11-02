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
    let showCrit = $state(false);
    let critAmount = $state(0);
    let showCritAmount = $state(false);

    function clickMe() {
        if (!game) return;

        let clickValue = game.getClickValue();

        // Roll for crit
        const isCrit = Math.random() < game.critChance;
        if (isCrit) {
            clickValue *= (1 + game.critDamage);
            critAmount = Math.floor(clickValue);
            showCrit = true;
            showCritAmount = true;
            setTimeout(() => showCrit = false, 300);
            setTimeout(() => showCritAmount = false, 1500);
        }

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
            <div class="icon-container">
                {#if showCrit}
                    <div class="crit-text">CRIT!</div>
                {/if}
                <div class="item">
                    <MousePointer size={48}/>
                    <div class="click-text" class:crit-active={showCritAmount}>
                        {#if showCritAmount}
                            +{critAmount} EXP
                        {:else}
                            {clickText}
                        {/if}
                    </div>
                </div>
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

    .icon-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 0.5rem;
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

    .click-text {
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        font-size: 1em;
        color: var(--text);
        transition: color 0.3s ease;
    }

    .click-text.crit-active {
        color: var(--red);
        font-weight: 700;
        animation: critTextPulse 1.5s ease-out;
    }

    .crit-text {
        position: absolute;
        top: -60px; /* Fixed offset above icon */
        left: 50%;
        transform: translateX(-50%);
        font-size: 2em;
        font-weight: 700;
        color: var(--yellow);
        text-shadow: 0 0 10px var(--yellow);
        animation: critPulse 0.3s ease-out;
        pointer-events: none;
        white-space: nowrap;
    }

    @keyframes critPulse {
        0% {
            transform: translateX(-50%) scale(0.5);
            opacity: 0;
        }
        50% {
            transform: translateX(-50%) scale(1.2);
            opacity: 1;
        }
        100% {
            transform: translateX(-50%) scale(1);
            opacity: 0;
        }
    }

    @keyframes critTextPulse {
        0%, 100% {
            color: var(--red);
        }
        50% {
            color: var(--red);
            text-shadow: 0 0 8px var(--red);
        }
    }
</style>