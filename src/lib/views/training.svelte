<script lang="ts">
    import type { Game } from '$lib/game';
    import { TRAINING_STAT_XP_GAIN } from '$lib/constants/game';

    export let game: Game;

    function startAction(actionId: string) {
        game.startIdleAction('training', actionId);
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

    function formatDuration(milliseconds: number): string {
        const seconds = milliseconds / 1000;
        return seconds.toFixed(1) + 's';
    }

    // Filter actions by level
    $: availableActions = Object.values(game.trainingActions).filter(action => {
        if (action.id === 'practice-osmosis') return game.level >= 2;
        if (action.trainsStat) return game.level >= 3;
        return false;
    });
</script>

<div class="training-page">
    <div class="training-container">
        <h2>Training</h2>

        <div class="actions-grid">
            {#each availableActions as action (action.id)}
                {@const isActive = action.isActive}
                {@const canAfford = canAffordAction(action)}
                {@const cost = getActionCost(action)}
                {@const progress = isActive ? action.progress : 0}
                {@const currentDuration = game.getActionCurrentDuration('training', action.id)}

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
                        <div class="info-row">
                            <span class="info-label">Duration:</span>
                            <span class="info-value duration">{formatDuration(currentDuration)}</span>
                        </div>
                        {#if action.trainsStat}
                            <div class="info-row">
                                <span class="info-label">Stat XP:</span>
                                <span class="info-value stat-xp">+{TRAINING_STAT_XP_GAIN}</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Cost:</span>
                                <span class="info-value cost" class:cannot-afford={!canAfford}>
                                    {cost} EXP
                                </span>
                            </div>
                        {:else}
                            <div class="info-row">
                                <span class="info-label">Reward:</span>
                                <span class="info-value reward">+{game.getRuminateCurrentReward()} EXP</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Cost:</span>
                                <span class="info-value free">Free</span>
                            </div>
                        {/if}
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
</div>

<style>
    .training-page {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        background-color: var(--bg);
        transition: background-color 1s cubic-bezier(0,.5,0,1);
    }

    .training-container {
        color: var(--text);
        padding: 2rem;
        box-sizing: border-box;
        transition: color 1s cubic-bezier(0,.5,0,1);
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
        min-height: 200px;
        font-family: inherit;
    }

    .action-card:hover:not(:disabled):not(.active) {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-color: var(--text);
    }

    .action-card:hover:not(:disabled):not(.active) .action-name,
    .action-card:hover:not(:disabled):not(.active) .action-description,
    .action-card:hover:not(:disabled):not(.active) .info-label,
    .action-card:hover:not(:disabled):not(.active) .info-value,
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
    .action-card.active .info-label,
    .action-card.active .info-value,
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
        flex-direction: column;
        gap: 0.5rem;
        margin-top: auto;
    }

    .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .info-label {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 0.85rem;
        opacity: 0.8;
        transition: color 0.2s;
    }

    .info-value {
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        font-size: 0.9rem;
        transition: color 0.2s;
    }

    .info-value.duration {
        color: var(--text);
    }

    .info-value.stat-xp {
        color: var(--green);
    }

    .info-value.cost {
        color: var(--text);
    }

    .info-value.cannot-afford {
        color: var(--red);
    }

    .info-value.reward {
        color: var(--green);
    }

    .info-value.free {
        color: var(--green);
    }

    .action-card.active .info-value.cannot-afford {
        color: var(--red);
        opacity: 0.9;
    }

    .action-card.active .info-value.stat-xp,
    .action-card.active .info-value.reward,
    .action-card.active .info-value.free {
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
        text-shadow:
            0 0 4px var(--bg), 0 0 4px var(--bg),
            0 0 8px var(--bg), 0 0 8px var(--bg),
            1px 1px 2px var(--bg), -1px -1px 2px var(--bg),
            1px -1px 2px var(--bg), -1px 1px 2px var(--bg);
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
        .training-container {
            padding: 1rem;
        }

        .action-card {
            padding: 1rem;
            min-height: 180px;
        }

        .action-name {
            font-size: 1rem;
        }

        .stat-level {
            font-size: 0.8rem;
        }
    }
</style>
