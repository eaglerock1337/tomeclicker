<script lang="ts">
    import type { Game } from '$lib/game';

    export let game: Game;

    function startAction(actionId: string) {
        game.startIdleAction(game.trainingActions, actionId);
        game = game;
    }

    function getActionCost(action: any): number {
        if (action.id === 'practice-osmosis') return 0;
        if (action.trainsStat) {
            return game.getStatLevelCost(action.trainsStat);
        }
        return 0;
    }

    function canAffordAction(action: any): boolean {
        if (action.id === 'practice-osmosis') return true;
        if (action.trainsStat) {
            return game.exp >= game.getStatLevelCost(action.trainsStat);
        }
        return true;
    }

    // Filter actions by level
    $: availableActions = Object.values(game.trainingActions).filter(action => {
        if (action.id === 'practice-osmosis') return game.level >= 2;
        if (action.trainsStat) return game.level >= 3;
        return false;
    });
</script>

<div class="training-container">
    <h2>Training</h2>

    <div class="actions-grid">
        {#each availableActions as action (action.id)}
            {@const isActive = action.isActive}
            {@const canAfford = canAffordAction(action)}
            {@const cost = getActionCost(action)}
            {@const progress = isActive ? action.progress : 0}

            <button
                class="action-card"
                class:active={isActive}
                class:blocked={!canAfford && !isActive}
                on:click={() => startAction(action.id)}
                disabled={isActive}
            >
                <div class="action-header">
                    <div class="action-name">{action.name}</div>
                    {#if action.trainsStat}
                        <div class="stat-level">
                            {action.trainsStat.toUpperCase()}: {game.stats[action.trainsStat]}
                        </div>
                    {/if}
                </div>

                <div class="action-description">{action.description}</div>

                <div class="action-info">
                    {#if cost > 0}
                        <div class="cost" class:cannot-afford={!canAfford}>
                            Cost: {cost} EXP
                        </div>
                    {:else}
                        <div class="cost free">Free</div>
                    {/if}
                    <div class="reward">+10 EXP</div>
                </div>

                {#if isActive}
                    <div class="progress-container">
                        <div class="progress-bar" style="width: {Math.min(progress * 100, 100)}%"></div>
                        <div class="progress-text">{Math.floor(Math.min(progress * 100, 100))}%</div>
                    </div>
                {/if}
            </button>
        {/each}
    </div>
</div>

<style>
    .training-container {
        color: var(--text);
        background-color: var(--bg);
        height: 100%;
        width: 100%;
        padding: 2rem;
        box-sizing: border-box;
        transition: color 1s cubic-bezier(0,.5,0,1),
                    background-color 1s cubic-bezier(0,.5,0,1);
    }

    h2 {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 2rem;
    }

    .actions-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    @media (min-width: 1024px) {
        .actions-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .action-card {
        color: var(--text);
        background-color: var(--alt-bg);
        border: 2px solid var(--text);
        border-radius: 8px;
        padding: 1.5rem;
        cursor: pointer;
        transition: all 0.2s;
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        min-height: 180px;
        font-family: inherit;
    }

    .action-card:hover:not(:disabled):not(.active) {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-color: var(--text);
    }

    .action-card:hover:not(:disabled):not(.active) .action-name,
    .action-card:hover:not(:disabled):not(.active) .action-description,
    .action-card:hover:not(:disabled):not(.active) .cost,
    .action-card:hover:not(:disabled):not(.active) .reward,
    .action-card:hover:not(:disabled):not(.active) .stat-level {
        color: var(--bg);
    }

    .action-card.active {
        background-color: var(--blue);
        border-color: var(--blue);
        cursor: default;
    }

    .action-card.active .action-name,
    .action-card.active .action-description,
    .action-card.active .cost,
    .action-card.active .reward,
    .action-card.active .stat-level {
        color: var(--bg);
    }

    .action-card.blocked {
        opacity: 0.5;
        border-color: var(--red);
    }

    .action-card:disabled {
        cursor: default;
    }

    .action-header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 1rem;
    }

    .action-name {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 400;
        font-size: 1.1rem;
        transition: color 0.2s;
    }

    .stat-level {
        color: var(--blue);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        font-size: 0.9rem;
        white-space: nowrap;
        transition: color 0.2s;
    }

    .action-card.active .stat-level {
        color: var(--bg);
    }

    .action-description {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 0.9rem;
        opacity: 0.8;
        transition: color 0.2s;
    }

    .action-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-top: auto;
    }

    .cost {
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        font-size: 0.9rem;
        transition: color 0.2s;
    }

    .cost.free {
        color: var(--green);
    }

    .cost.cannot-afford {
        color: var(--red);
    }

    .action-card.active .cost.cannot-afford {
        color: var(--red);
        opacity: 0.9;
    }

    .reward {
        color: var(--green);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        font-size: 0.9rem;
        transition: color 0.2s;
    }

    .action-card.active .reward {
        color: var(--bg);
        opacity: 0.9;
    }

    .progress-container {
        position: relative;
        width: 100%;
        height: 24px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        overflow: hidden;
        margin-top: 0.5rem;
    }

    .progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background-color: var(--bg);
        transition: width 0.1s linear;
    }

    .progress-text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        font-size: 0.8rem;
        z-index: 1;
        text-shadow: 0 0 3px var(--bg), 0 0 3px var(--bg);
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
        .training-container {
            padding: 1rem;
        }

        .action-card {
            padding: 1rem;
            min-height: 160px;
        }

        .action-name {
            font-size: 1rem;
        }

        .stat-level {
            font-size: 0.8rem;
        }
    }
</style>
