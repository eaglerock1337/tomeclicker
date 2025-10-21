<script lang="ts">
    import type { Game } from '$lib/game';

    interface Props {
        game: Game;
    }

    let { game }: Props = $props();

    /**
     * Calculates progress toward next major upgrade (Level Up or Discipline)
     * Only shown at Level 2+ to avoid cluttering early game
     */
    const progressInfo = $derived.by(() => {
        // Don't show progress bar until Level 2
        if (game.level < 2) return null;

        const exp = game.exp;

        // Find the cheapest next major purchase (Level Up or Discipline)
        let nextCost = Infinity;
        let canAfford = false;

        // Check level up cost
        const levelUpCost = game.getLevelUpCost();
        if (levelUpCost < nextCost) {
            nextCost = levelUpCost;
            canAfford = exp >= levelUpCost;
        }

        // Check Discipline upgrade
        const discipline = game.upgrades['discipline'];
        if (discipline && discipline.currentLevel < discipline.maxLevel) {
            const disciplineCost = game.getUpgradeCost('discipline');
            if (disciplineCost < nextCost) {
                nextCost = disciplineCost;
                canAfford = exp >= disciplineCost;
            }
        }

        // If nothing found, hide bar
        if (nextCost === Infinity) return null;

        return {
            progress: Math.min(exp / nextCost, 1),
            canAfford
        };
    });
</script>

<header>
    <div class="container">
        <div class="item">EXP: {Math.floor(game.exp).toLocaleString()}</div>
        <div class="item">Level: {game.level}</div>
    </div>
    {#if progressInfo}
        <div class="progress-container">
            <div class="progress-bar" class:full={progressInfo.canAfford} style="width: {progressInfo.progress * 100}%"></div>
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
        background-color: var(--text);
        transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                    box-shadow 0.3s ease;
        box-shadow: 0 0 4px var(--text);
    }

    .progress-bar.full {
        animation: glow 1.5s ease-in-out infinite;
    }

    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 8px var(--text),
                        0 0 16px var(--text);
        }
        50% {
            box-shadow: 0 0 16px var(--text),
                        0 0 24px var(--text),
                        0 0 32px var(--text);
        }
    }
</style>