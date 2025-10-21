<script lang="ts">
    import type { Game } from '$lib/game';

    export let game: Game;

    let selectedAction = 'train-strength';

    function startTraining() {
        if (game.startIdleAction(game.trainingActions, selectedAction)) {
            game = game; // Force reactivity
        }
    }

    function stopTraining() {
        game.stopIdleAction(game.trainingActions, selectedAction);
        game = game;
    }

    function getEffectiveCost(actionId: string): number {
        const action = game.trainingActions[actionId];
        if (!action) return 0;
        return Math.floor(action.expCost * game.getTrainingCostMultiplier());
    }

    // Reactive values
    $: currentAction = game.trainingActions[selectedAction];
    $: isActive = currentAction?.isActive || false;
    $: progress = currentAction?.progress || 0;
    $: canAfford = game.exp >= getEffectiveCost(selectedAction);

    // Filter actions by level
    $: availableActions = Object.values(game.trainingActions).filter(action => {
        if (action.id === 'practice-osmosis') return game.level >= 2;
        if (action.trainsStat) return game.level >= 3;
        return false;
    });

    // Auto-select first available action if current is not available
    $: if (!availableActions.find(a => a.id === selectedAction) && availableActions.length > 0) {
        selectedAction = availableActions[0].id;
    }
</script>

<div class="training-container">
    <h2>Training</h2>
    <p class="description">
        {#if game.level >= 3}
            Train your stats to prepare for adventure
        {:else}
            Practice by osmosis to gain passive experience
        {/if}
    </p>

    <div class="training-area">
        <!-- Stat Display -->
        <div class="stats-display">
            <div class="stat-item">
                <span class="stat-label">Strength:</span>
                <span class="stat-value">{game.stats.strength}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Dexterity:</span>
                <span class="stat-value">{game.stats.dexterity}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Intelligence:</span>
                <span class="stat-value">{game.stats.intelligence}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Wisdom:</span>
                <span class="stat-value">{game.stats.wisdom}</span>
            </div>
        </div>

        <!-- Training Selection -->
        <div class="training-selector">
            <label for="training-select">Choose Training:</label>
            <select id="training-select" bind:value={selectedAction} disabled={isActive}>
                {#each availableActions as action}
                    <option value={action.id}>{action.name}</option>
                {/each}
            </select>
        </div>

        <!-- Action Info -->
        {#if currentAction}
            <div class="action-info">
                <h3>{currentAction.name}</h3>
                <p>{currentAction.description}</p>
                <p class="cost">
                    Cost: <strong>{getEffectiveCost(selectedAction)} EXP</strong>
                    {#if !canAfford}
                        <span class="cannot-afford">(need {getEffectiveCost(selectedAction) - game.exp} more)</span>
                    {/if}
                </p>
                <p>Duration: {(currentAction.duration / 1000).toFixed(1)}s</p>
            </div>

            <!-- Progress Bar -->
            {#if isActive}
                <div class="progress-container">
                    <div class="progress-bar" style="width: {Math.min(progress * 100, 100)}%"></div>
                    <div class="progress-text">{Math.floor(Math.min(progress * 100, 100))}%</div>
                </div>
            {/if}

            <!-- Action Button -->
            <div class="action-buttons">
                {#if isActive}
                    <button class="stop-button" on:click={stopTraining}>
                        Stop Training
                    </button>
                {:else}
                    <button
                        class="start-button"
                        on:click={startTraining}
                        disabled={!canAfford}
                    >
                        Start Training
                    </button>
                {/if}
            </div>
        {/if}
    </div>
</div>

<style>
    .training-container {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
    }

    h2 {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 0.5rem;
    }

    .description {
        color: var(--text);
        font-family: Lato, sans-serif;
        opacity: 0.8;
        margin-bottom: 2rem;
    }

    .training-area {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 8px;
        padding: 1.5rem;
    }

    .stats-display {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .stat-item {
        display: flex;
        justify-content: space-between;
        padding: 0.75rem;
        background: var(--bg);
        border: 1px solid var(--text);
        border-radius: 4px;
    }

    .stat-label {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 400;
    }

    .stat-value {
        color: var(--blue);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
    }

    .training-selector {
        margin-bottom: 1.5rem;
    }

    .training-selector label {
        display: block;
        color: var(--text);
        font-family: Lato, sans-serif;
        margin-bottom: 0.5rem;
    }

    .training-selector select {
        width: 100%;
        padding: 0.75rem;
        background: var(--bg);
        border: 1px solid var(--text);
        border-radius: 4px;
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 1rem;
    }

    .action-info {
        margin-bottom: 1.5rem;
    }

    .action-info h3 {
        color: var(--blue);
        font-family: Lato, sans-serif;
        font-weight: 400;
        margin-bottom: 0.5rem;
    }

    .action-info p {
        color: var(--text);
        font-family: Lato, sans-serif;
        margin-bottom: 0.5rem;
    }

    .cost {
        font-weight: 700;
    }

    .cannot-afford {
        color: var(--red);
        font-weight: 400;
    }

    .progress-container {
        position: relative;
        width: 100%;
        height: 32px;
        background: var(--bg);
        border: 2px solid var(--text);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 1.5rem;
    }

    .progress-bar {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--blue);
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
        z-index: 1;
    }

    .action-buttons {
        display: flex;
        justify-content: center;
    }

    button {
        padding: 1rem 2rem;
        font-family: Lato, sans-serif;
        font-size: 1rem;
        font-weight: 700;
        border: 2px solid var(--text);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
    }

    .start-button {
        background: var(--green);
        color: var(--bg);
    }

    .start-button:hover:not(:disabled) {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .start-button:disabled {
        background: var(--alt-bg);
        color: var(--text);
        opacity: 0.5;
        cursor: not-allowed;
    }

    .stop-button {
        background: var(--red);
        color: var(--bg);
    }

    .stop-button:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
        .training-container {
            padding: 1rem;
        }

        .stats-display {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        button {
            width: 100%;
        }
    }
</style>
