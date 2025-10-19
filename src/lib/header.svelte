<script lang="ts">
    import type { Game } from '$lib/game';

    interface Props {
        game: Game;
    }

    let { game }: Props = $props();

    /**
     * Calculates progress toward next meaningful unlock
     * Only shown at Level 2+ to avoid cluttering early game
     */
    const progressInfo = $derived.by(() => {
        // Don't show progress bar until Level 2
        if (game.level < 2) return null;

        const exp = game.exp;
        const lifetimeExp = game.lifetimeExp;
        const level = game.level;

        // Menu navigation unlocks at 50 lifetime exp
        if (lifetimeExp < 50) {
            return {
                progress: lifetimeExp / 50
            };
        }

        // Adventures unlock at level 3 (placeholder for future feature)
        if (level < 3) {
            return {
                progress: level / 3
            };
        }

        // Stats training unlocks at level 5 (placeholder for future feature)
        if (level < 5) {
            return {
                progress: level / 5
            };
        }

        // Equipment unlocks at level 7 (placeholder for future feature)
        if (level < 7) {
            return {
                progress: level / 7
            };
        }

        // Tomes unlock at level 10 (placeholder for future feature)
        if (level < 10) {
            return {
                progress: level / 10
            };
        }

        // No more tracked unlocks
        return null;
    });
</script>

<header>
    <div class="container">
        <div class="item">EXP: {Math.floor(game.exp).toLocaleString()}</div>
        <div class="item">Level: {game.level}</div>
    </div>
    {#if progressInfo}
        <div class="progress-container">
            <div class="progress-bar" style="width: {progressInfo.progress * 100}%"></div>
        </div>
    {/if}
</header>

<style>
    header {
        background-color: var(--alt-bg);
        padding: 2px 2px;
        font-size: 1.2em;
        font-weight: 400;
        font-family: JetBrains Mono, monospace;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: var(--text);
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
        position: relative;
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .item {
        min-width: 50px;
        display: inline-flex;
        padding: 0px 5px;
        text-align: center;
    }

    .progress-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    .progress-bar {
        height: 100%;
        background: linear-gradient(90deg,
            var(--text) 0%,
            rgba(66, 135, 245, 0.8) 50%,
            var(--text) 100%);
        transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 0 8px rgba(66, 135, 245, 0.3);
    }
</style>