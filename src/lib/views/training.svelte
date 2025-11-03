<script lang="ts">
    import type { Game } from '$lib/game';

    export let game: Game;

    function startAction(actionId: string) {
        game.startIdleAction('training', actionId);
        game = game;
    }

    function getActionCost(action: any): number {
        if (action.id === 'practice-osmosis') return 0;
        if (action.trainsStat) {
            return game.getStatTrainingCost(action.trainsStat);
        }
        return 0;
    }

    function canAffordAction(action: any): boolean {
        if (action.id === 'practice-osmosis') return true;
        if (action.trainsStat) {
            return game.exp >= game.getStatTrainingCost(action.trainsStat);
        }
        return true;
    }

    function formatNumber(num: number): string {
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(2) + 'K';
        return Math.floor(num).toString();
    }

    function formatDuration(ms: number): string {
        const totalSeconds = ms / 1000;
        if (totalSeconds >= 60) {
            const mins = Math.floor(totalSeconds / 60);
            const secs = totalSeconds % 60;
            // Show decimal if not a whole number
            const secsStr = secs % 1 === 0 ? Math.floor(secs).toString() : secs.toFixed(1);
            return `${mins}m ${secsStr}s`;
        }
        // Show decimal if not a whole number
        return totalSeconds % 1 === 0 ? `${Math.floor(totalSeconds)}s` : `${totalSeconds.toFixed(1)}s`;
    }

    // Filter actions by level
    $: availableActions = Object.values(game.trainingActions).filter(action => {
        if (action.id === 'practice-osmosis') return game.level >= 2;
        if (action.trainsStat) return game.level >= 3;
        return false;
    });

    // Get dynamic stat EXP gain with bonuses
    $: statExpGain = game.getStatExpGainPerTraining();
</script>

<div class="training-view">
<div class="training-container">
    <h2>Training</h2>

    <div class="actions-grid">
        {#each availableActions as action (action.id)}
            {@const isActive = action.isActive}
            {@const canAfford = canAffordAction(action)}
            {@const cost = getActionCost(action)}
            {@const progress = isActive ? action.progress : 0}
            {@const duration = game.getTrainingDuration(action.id)}
            {@const currentStatExp = action.trainsStat ? game.getStatExp(action.trainsStat) : 0}
            {@const requiredStatExp = action.trainsStat ? game.getStatExpRequired(action.trainsStat) : 0}
            {@const statLevel = action.trainsStat ? game.stats[action.trainsStat] : 0}
            {@const maxStatLevel = action.trainsStat ? game.getMaxStatLevel(action.trainsStat) : 0}
            {@const atCap = action.trainsStat ? statLevel >= maxStatLevel : false}

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
                        <div class="stat-info">
                            <div class="stat-name">{action.trainsStat.charAt(0).toUpperCase() + action.trainsStat.slice(1)}</div>
                            <div class="stat-level">Level {statLevel}/{maxStatLevel}</div>
                        </div>
                    {/if}
                </div>

                <div class="action-description">{action.description}</div>

                <!-- Stat EXP Progress Bar (v0.1.5+) -->
                {#if action.trainsStat && !atCap}
                    <div class="stat-exp-progress">
                        <div class="stat-exp-bar-container">
                            <div class="stat-exp-bar" style="width: {Math.min(100, (currentStatExp / requiredStatExp) * 100)}%"></div>
                        </div>
                        <div class="stat-exp-text">
                            {formatNumber(currentStatExp)} / {formatNumber(requiredStatExp)} EXP
                        </div>
                    </div>
                {:else if atCap}
                    <div class="stat-exp-progress capped">
                        <div class="stat-exp-text capped-text">Max Level Reached</div>
                    </div>
                {/if}

                <div class="action-details">
                    <!-- Row 1: Cost + Duration -->
                    <div class="detail-row">
                        <div class="detail-half">
                            <span class="detail-label">Cost:</span>
                            {#if cost > 0}
                                <span class="detail-value cost-value" class:cannot-afford={!canAfford}>
                                    {formatNumber(cost)} EXP
                                </span>
                            {:else}
                                <span class="detail-value">Free</span>
                            {/if}
                        </div>
                        <div class="detail-half">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">
                                {formatDuration(duration)}
                            </span>
                        </div>
                    </div>

                    <!-- Row 2: Reward + Crit -->
                    <div class="detail-row">
                        <div class="detail-half">
                            <span class="detail-label">Reward:</span>
                            {#if action.id === 'practice-osmosis'}
                                <span class="detail-value reward-value">
                                    +{game.getRuminateReward()} EXP
                                </span>
                            {:else if action.trainsStat}
                                <span class="detail-value reward-value">
                                    +{statExpGain} {action.trainsStat.toUpperCase().slice(0, 3)} EXP
                                </span>
                            {/if}
                        </div>
                        {#if action.trainsStat && game.trainingCritChance > 0}
                            <div class="detail-half">
                                <span class="detail-label">Crit:</span>
                                <span class="detail-value crit-value">
                                    {(game.trainingCritChance * 100).toFixed(0)}% for 2x
                                </span>
                            </div>
                        {/if}
                    </div>
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
    .training-view {
        height: 100%;
        width: 100%;
        background-color: var(--bg);
        overflow-y: auto;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
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
        min-height: 240px;
        font-family: inherit;
    }

    .action-card:hover:not(:disabled):not(.active) {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-color: var(--text);
    }

    .action-card:hover:not(:disabled):not(.active) .action-name,
    .action-card:hover:not(:disabled):not(.active) .action-description,
    .action-card:hover:not(:disabled):not(.active) .stat-level,
    .action-card:hover:not(:disabled):not(.active) .stat-name {
        color: var(--bg);
    }

    .action-card.active {
        background-color: var(--blue);
        border-color: var(--blue);
        cursor: default;
    }

    .action-card.active .action-name,
    .action-card.active .action-description,
    .action-card.active .stat-level,
    .action-card.active .stat-name {
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

    .stat-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
    }

    .stat-name {
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 400;
        font-size: 0.9rem;
        opacity: 0.8;
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

    .action-card.active .stat-level,
    .action-card.active .stat-name {
        color: var(--bg);
    }

    .action-description {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 0.9rem;
        opacity: 0.8;
        transition: color 0.2s;
    }

    /* Stat EXP Progress Bar */
    .stat-exp-progress {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.5rem 0;
    }

    .stat-exp-progress.capped {
        justify-content: center;
        align-items: center;
    }

    .stat-exp-bar-container {
        width: 100%;
        height: 6px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        overflow: hidden;
    }

    .stat-exp-bar {
        height: 100%;
        background-color: var(--blue);
        transition: width 0.3s ease;
    }

    .action-card.active .stat-exp-bar {
        background-color: var(--bg);
    }

    .stat-exp-text {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.75rem;
        color: var(--text);
        opacity: 0.8;
        transition: color 0.2s;
    }

    .stat-exp-text.capped-text {
        color: var(--yellow);
        font-weight: 600;
        opacity: 1;
    }

    .action-card.active .stat-exp-text {
        color: var(--bg);
        opacity: 0.9;
    }

    /* Action Details */
    .action-details {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin-top: auto;
        padding-top: 0.5rem;
        border-top: 1px solid rgba(128, 128, 128, 0.2);
    }

    .detail-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.75rem;
    }

    .detail-half {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
        min-width: 0; /* Allow flex items to shrink */
    }

    .detail-label {
        font-family: Lato, sans-serif;
        font-size: 0.85rem;
        color: var(--text);
        opacity: 0.7;
        transition: color 0.2s;
        min-width: 60px; /* Consistent label width for alignment */
    }

    .action-card.active .detail-label {
        color: var(--bg);
        opacity: 0.8;
    }

    .detail-value {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--red);
        transition: color 0.2s;
    }

    .action-card.active .detail-value {
        color: var(--green);
        font-weight: 700;
    }

    .cost-value.cannot-afford {
        color: var(--red);
        opacity: 0.7;
    }

    .action-card.active .cost-value.cannot-afford {
        color: var(--green);
        opacity: 0.7;
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
            min-height: 220px;
        }

        .action-name {
            font-size: 1rem;
        }

        .stat-level {
            font-size: 0.8rem;
        }

        .detail-label,
        .detail-value {
            font-size: 0.8rem;
        }

        .stat-exp-text {
            font-size: 0.7rem;
        }
    }
</style>
