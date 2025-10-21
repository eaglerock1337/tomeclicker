<script lang="ts">
    import type { Game } from '$lib/game';

    export let game: Game;

    let selectedAction = 'meditate-future';

    function startMeditation() {
        if (game.startIdleAction(game.meditationActions, selectedAction)) {
            game = game; // Force reactivity
        }
    }

    function stopMeditation() {
        game.stopIdleAction(game.meditationActions, selectedAction);
        game = game;
    }

    // Reactive values
    $: availableActions = Object.values(game.meditationActions).filter(
        (action) => !action.oneTime || !action.completed
    );
    $: currentAction = game.meditationActions[selectedAction];
    $: isActive = currentAction?.isActive || false;
    $: progress = currentAction?.progress || 0;
    $: canAfford = currentAction ? game.exp >= currentAction.expCost : false;
    $: isCompleted = currentAction?.oneTime && currentAction?.completed;
</script>

<div class="meditation-container">
    <h2>Meditation</h2>
    <p class="description">Meditate on the mysteries of the Tomes</p>

    {#if availableActions.length === 0}
        <div class="no-actions">
            <p>You have completed all available meditations.</p>
            <p class="hint">More will be unlocked as you progress through the game.</p>
        </div>
    {:else}
        <div class="meditation-area">
            <!-- Meditation Selection -->
            <div class="meditation-selector">
                <label for="meditation-select">Choose Meditation:</label>
                <select id="meditation-select" bind:value={selectedAction} disabled={isActive}>
                    {#each availableActions as action}
                        <option value={action.id}>
                            {action.name}
                            {#if action.oneTime}(One-time){/if}
                        </option>
                    {/each}
                </select>
            </div>

            <!-- Action Info -->
            {#if currentAction && !isCompleted}
                <div class="action-info">
                    <h3>{currentAction.name}</h3>
                    <p>{currentAction.description}</p>
                    <p class="cost">
                        Cost: <strong>{currentAction.expCost} EXP</strong>
                        {#if !canAfford}
                            <span class="cannot-afford">(need {currentAction.expCost - game.exp} more)</span>
                        {/if}
                    </p>
                    <p>Duration: {(currentAction.duration / 1000).toFixed(1)}s</p>
                    {#if currentAction.oneTime}
                        <p class="one-time-notice">
                            <em>This meditation can only be completed once.</em>
                        </p>
                    {/if}
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
                        <button class="stop-button" on:click={stopMeditation}>
                            Stop Meditating
                        </button>
                    {:else}
                        <button class="start-button" on:click={startMeditation} disabled={!canAfford}>
                            Begin Meditation
                        </button>
                    {/if}
                </div>
            {/if}
        </div>

        <!-- Completed Meditations -->
        {#if Object.values(game.meditationActions).some((a) => a.oneTime && a.completed)}
            <div class="completed-section">
                <h3>Completed Meditations</h3>
                <div class="completed-list">
                    {#each Object.values(game.meditationActions).filter((a) => a.oneTime && a.completed) as action}
                        <div class="completed-item">
                            <span class="completed-name">{action.name}</span>
                            <span class="completed-badge">✓ Complete</span>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}
    {/if}
</div>

<style>
    .meditation-container {
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

    .no-actions {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
    }

    .no-actions p {
        color: var(--text);
        font-family: Lato, sans-serif;
        margin-bottom: 0.5rem;
    }

    .no-actions .hint {
        opacity: 0.7;
        font-size: 0.9rem;
    }

    .meditation-area {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .meditation-selector {
        margin-bottom: 1.5rem;
    }

    .meditation-selector label {
        display: block;
        color: var(--text);
        font-family: Lato, sans-serif;
        margin-bottom: 0.5rem;
    }

    .meditation-selector select {
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

    .one-time-notice {
        color: var(--yellow);
        font-style: italic;
        margin-top: 1rem;
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
        background: var(--blue);
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

    .completed-section {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 8px;
        padding: 1.5rem;
    }

    .completed-section h3 {
        color: var(--green);
        font-family: Lato, sans-serif;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    .completed-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .completed-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--bg);
        border: 1px solid var(--green);
        border-radius: 4px;
        padding: 0.75rem 1rem;
    }

    .completed-name {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 400;
    }

    .completed-badge {
        color: var(--green);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
        .meditation-container {
            padding: 1rem;
        }

        button {
            width: 100%;
        }
    }
</style>
