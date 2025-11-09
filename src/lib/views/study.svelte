<script lang="ts">
    import type { Game } from '$lib/game';
    import ViewLayout from '$lib/components/ViewLayout.svelte';
    import { formatNumber, formatDuration, formatCompact } from '$lib/utils/format';

    export let game: Game;

    function startAction(actionId: string) {
        game.startIdleAction('training', actionId);
        game = game;
    }

    // Filter actions by level - reactive to game.level changes
    $: availableActions = Object.values(game.trainingActions).filter(action => {
        if (action.id === 'study-research') return game.level >= 2;
        if (action.trainsStat) return game.level >= 3;
        return false;
    });

    // Get dynamic stat EXP gain with bonuses - reactive to upgrade changes
    $: statExpGain = game.getStatExpGainPerTraining();
</script>

<ViewLayout title="study" maxWidth="1200px">

    <div class="actions-grid">
        {#each availableActions as action (action.id)}
            <!-- Reactive calculations that update when game state changes -->
            {@const isActive = action.isActive}
            {@const cost = action.id === 'study-research' ? 0 : (action.trainsStat ? game.getStatTrainingCost(action.trainsStat) : 0)}
            {@const canAfford = action.id === 'study-research' || (action.trainsStat ? game.exp >= cost : true)}
            {@const progress = isActive ? action.progress : 0}
            {@const duration = game.getTrainingDuration(action.id)}
            {@const currentStatExp = action.trainsStat ? game.getStatExp(action.trainsStat) : 0}
            {@const requiredStatExp = action.trainsStat ? game.getStatExpRequired(action.trainsStat) : 0}
            {@const statLevel = action.trainsStat ? game.stats[action.trainsStat] : 0}
            {@const maxStatLevel = action.trainsStat ? game.getMaxStatLevel(action.trainsStat) : 0}
            {@const atCap = action.trainsStat ? statLevel >= maxStatLevel : false}
            {@const isBlocked = isActive && progress >= 0.99 && (!canAfford || atCap)}

            <button
                class="action-card"
                class:active={isActive && !isBlocked}
                class:blocked-active={isBlocked}
                class:blocked={(!canAfford || atCap) && !isActive}
                on:click={() => startAction(action.id)}
                disabled={isActive || !canAfford || atCap}
            >
                <div class="action-header">
                    <div class="action-name">{action.name}</div>
                    {#if action.trainsStat && !game.isStatLocked(action.trainsStat)}
                        <div class="stat-info">
                            <div class="stat-name">
                                {game.getStatDisplayName(action.trainsStat)}
                            </div>
                            <div class="stat-level">
                                Level {statLevel}/{maxStatLevel}
                            </div>
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
                        <div class="stat-exp-text capped-text">
                            Max Level (Reach Character Level {game.level + 1} to continue)
                        </div>
                    </div>
                {/if}

                <div class="action-details">
                    <!-- Row 1: Cost + Duration -->
                    <div class="detail-row">
                        <div class="detail-half">
                            <span class="detail-label">Cost:</span>
                            {#if cost > 0}
                                <span class="detail-value cost-value" class:cannot-afford={!canAfford}>
                                    {formatCompact(cost, 1)} EXP
                                </span>
                            {:else}
                                <span class="detail-value">Free</span>
                            {/if}
                        </div>
                        <div class="detail-half">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">
                                {formatDuration(duration / 1000)}
                            </span>
                        </div>
                    </div>

                    <!-- Row 2: Reward -->
                    <div class="detail-row">
                        <div class="detail-half">
                            <span class="detail-label">Reward:</span>
                            {#if action.id === 'study-research'}
                                <span class="detail-value reward-value">
                                    +{formatCompact(game.getRuminateReward(), 1)} EXP
                                </span>
                            {:else if action.trainsStat && !game.isStatLocked(action.trainsStat)}
                                <span class="detail-value reward-value">
                                    +{statExpGain} {action.trainsStat.toUpperCase().slice(0, 3)} EXP
                                </span>
                            {:else if action.trainsStat}
                                <span class="detail-value reward-value mystery">
                                    ???
                                </span>
                            {/if}
                        </div>
                    </div>

                    <!-- Row 3: Crit (if applicable) -->
                    {#if action.trainsStat && !game.isStatLocked(action.trainsStat) && game.trainingCritChance > 0}
                        <div class="detail-row">
                            <div class="detail-full">
                                <span class="detail-label">Crit:</span>
                                <span class="detail-value crit-value">
                                    {(game.trainingCritChance * 100).toFixed(0)}% chance for {(1 + game.getTrainingCritDamage()).toFixed(1)}x
                                </span>
                            </div>
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
</ViewLayout>

<style>
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
        width: 100%;
        box-sizing: border-box;
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

    .action-card.blocked-active {
        background-color: var(--blue);
        border-color: var(--red);
        border-width: 3px;
        cursor: default;
        animation: pulse-border 2s ease-in-out infinite;
    }

    @keyframes pulse-border {
        0%, 100% {
            border-color: var(--red);
            box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
        }
        50% {
            border-color: var(--red);
            box-shadow: 0 0 0 4px rgba(255, 0, 0, 0);
        }
    }

    .action-card.blocked-active .action-name,
    .action-card.blocked-active .action-description,
    .action-card.blocked-active .stat-level,
    .action-card.blocked-active .stat-name {
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
        width: 100%;
        box-sizing: border-box;
    }

    .action-name {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 400;
        font-size: 1.1rem;
        transition: color 0.2s;
        flex: 1 1 auto;
        min-width: 0;
        word-wrap: break-word;
    }

    .stat-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
        flex-shrink: 0;
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

    .reward-value.mystery {
        color: var(--text);
        opacity: 0.3;
        font-style: italic;
    }

    .action-description {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 0.9rem;
        opacity: 0.8;
        transition: color 0.2s;
        width: 100%;
        box-sizing: border-box;
    }

    /* Stat EXP Progress Bar */
    .stat-exp-progress {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.5rem 0;
        width: 100%;
        box-sizing: border-box;
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
        box-sizing: border-box;
    }

    .stat-exp-bar {
        height: 100%;
        background-color: var(--blue);
        transition: width 0.3s ease;
    }

    .action-card.active .stat-exp-bar {
        background-color: var(--bg);
    }

    .action-card.blocked-active .stat-exp-bar {
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

    .action-card.blocked-active .stat-exp-text {
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
        width: 100%;
        box-sizing: border-box;
    }

    .detail-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
    }

    .detail-half {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1 1 0%;
        min-width: 0; /* Allow flex items to shrink */
    }

    .detail-half:first-child {
        flex: 1.3 1 0%; /* Give cost side more space */
    }

    .detail-full {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
    }

    .detail-label {
        font-family: Lato, sans-serif;
        font-size: 0.85rem;
        color: var(--text);
        opacity: 0.7;
        transition: color 0.2s, opacity 0.2s;
        min-width: 60px; /* Consistent label width for alignment */
        flex-shrink: 0;
    }

    .action-card.active .detail-label {
        color: var(--alt-bg);
        opacity: 1;
        font-weight: 500;
    }

    .action-card.blocked-active .detail-label {
        color: var(--alt-bg);
        opacity: 1;
        font-weight: 500;
    }

    .action-card:hover:not(:disabled):not(.active) .detail-label {
        color: var(--bg);
        opacity: 0.9;
    }

    .detail-value {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--red);
        transition: color 0.2s;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .action-card.active .detail-value {
        color: var(--green);
        font-weight: 700;
    }

    .action-card.blocked-active .detail-value {
        color: var(--yellow);
        font-weight: 700;
    }

    .action-card:hover:not(:disabled):not(.active) .detail-value {
        color: var(--bg);
    }

    .cost-value.cannot-afford {
        color: var(--red);
        opacity: 0.7;
    }

    .action-card.active .cost-value.cannot-afford {
        color: var(--green);
        opacity: 0.7;
    }

    .action-card.blocked-active .cost-value.cannot-afford {
        color: var(--red);
        opacity: 1;
        font-weight: 700;
    }

    .progress-container {
        position: relative;
        width: 100%;
        height: 24px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        overflow: hidden;
        margin-top: 0.5rem;
        box-sizing: border-box;
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
        .action-card {
            padding: 1rem;
            min-height: 220px;
        }

        .action-header {
            gap: 0.75rem;
        }

        .action-name {
            font-size: 1rem;
        }

        .stat-name {
            font-size: 0.8rem;
        }

        .stat-level {
            font-size: 0.85rem;
        }

        .detail-row {
            gap: 0.5rem;
        }

        .detail-label {
            font-size: 0.75rem;
            min-width: 50px;
        }

        .detail-value {
            font-size: 0.75rem;
        }

        .stat-exp-text {
            font-size: 0.7rem;
        }
    }
</style>
