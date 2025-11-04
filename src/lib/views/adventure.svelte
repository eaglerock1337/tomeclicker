<script lang="ts">
    import type { Game } from '$lib/game';

    export let game: Game;

    $: isUnlocked = game.adventureModeUnlocked;
    $: meetsStatRequirements =
        game.stats.strength >= 5 &&
        game.stats.agility >= 5 &&
        game.stats.willpower >= 5 &&
        game.stats.endurance >= 5;

    function unlockAdventure() {
        if (game.unlockAdventureMode()) {
            game = game; // Force reactivity
        }
    }
</script>

<div class="adventure-container">
    {#if !isUnlocked}
        <!-- Locked State -->
        <div class="locked-content">
            <h2>Adventure Mode</h2>
            <p class="locked-message">
                The path to adventure is not yet clear. Train all your stats to level 5 to unlock
                this path.
            </p>

            <div class="requirements-section">
                <h3>Requirements</h3>
                <div class="requirements-grid">
                    <div class="requirement-item" class:met={game.stats.strength >= 5}>
                        <span class="requirement-label">Strength:</span>
                        <span class="requirement-value">
                            {game.stats.strength} / 5
                            {#if game.stats.strength >= 5}✓{/if}
                        </span>
                    </div>
                    <div class="requirement-item" class:met={game.stats.agility >= 5}>
                        <span class="requirement-label">Agility:</span>
                        <span class="requirement-value">
                            {game.stats.agility} / 5
                            {#if game.stats.agility >= 5}✓{/if}
                        </span>
                    </div>
                    <div class="requirement-item" class:met={game.stats.willpower >= 5}>
                        <span class="requirement-label">Willpower:</span>
                        <span class="requirement-value">
                            {game.stats.willpower} / 5
                            {#if game.stats.willpower >= 5}✓{/if}
                        </span>
                    </div>
                    <div class="requirement-item" class:met={game.stats.endurance >= 5}>
                        <span class="requirement-label">Endurance:</span>
                        <span class="requirement-value">
                            {game.stats.endurance} / 5
                            {#if game.stats.endurance >= 5}✓{/if}
                        </span>
                    </div>
                </div>

                {#if meetsStatRequirements}
                    <div class="unlock-ready">
                        <p>
                            <em>All stat requirements met! You are ready to begin your adventure.</em>
                        </p>
                        <button class="unlock-button" on:click={unlockAdventure}>
                            Unlock Adventure Mode
                        </button>
                    </div>
                {:else}
                    <div class="training-hint">
                        <p>
                            <em>Visit the Training page to improve your stats.</em>
                        </p>
                    </div>
                {/if}
            </div>
        </div>
    {:else}
        <!-- Unlocked State -->
        <div class="unlocked-content">
            <h2>Adventure Mode Unlocked!</h2>
            <div class="demo-message">
                <h3>Congratulations!</h3>
                <p>You've unlocked everything in the current demo of TomeClicker.</p>

                <div class="demo-stats">
                    <p>Your journey so far:</p>
                    <ul>
                        <li>Level {game.level} adventurer</li>
                        <li>{game.lifetimeExp.toFixed(0)} lifetime EXP earned</li>
                        <li>
                            {Object.values(game.upgrades).filter((u) => u.currentLevel > 0).length} upgrades purchased
                        </li>
                        <li>All stats trained to {Math.min(...Object.values(game.stats))}+</li>
                    </ul>
                </div>

                <div class="coming-soon">
                    <h3>Coming Soon</h3>
                    <p>Future updates will include:</p>
                    <ul>
                        <li>Adventure zones with unique challenges</li>
                        <li>Equipment and loot systems</li>
                        <li>More meditation techniques</li>
                        <li>Tome discovery and magic systems</li>
                        <li>Story progression and world-building</li>
                    </ul>
                </div>

                <p class="thank-you">
                    Thank you for playing! Keep an eye on
                    <a href="https://github.com/eaglerock/tomeclicker" target="_blank">GitHub</a>
                    for updates.
                </p>
            </div>
        </div>
    {/if}
</div>

<style>
    .adventure-container {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
    }

    h2 {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 1rem;
    }

    h3 {
        color: var(--blue);
        font-family: Lato, sans-serif;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    /* Locked State Styles */
    .locked-content {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 8px;
        padding: 2rem;
    }

    .locked-message {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        text-align: center;
    }

    .requirements-section {
        margin-top: 2rem;
    }

    .requirements-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .requirement-item {
        display: flex;
        justify-content: space-between;
        padding: 0.75rem;
        background: var(--bg);
        border: 2px solid var(--red);
        border-radius: 4px;
        transition: border-color 0.3s;
    }

    .requirement-item.met {
        border-color: var(--green);
    }

    .requirement-label {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 400;
    }

    .requirement-value {
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
    }

    .requirement-item.met .requirement-value {
        color: var(--green);
    }

    .unlock-ready,
    .training-hint {
        background: var(--bg);
        border: 1px solid var(--blue);
        border-radius: 4px;
        padding: 1rem;
        margin-top: 1rem;
    }

    .unlock-ready {
        border-color: var(--green);
        text-align: center;
    }

    .unlock-ready p,
    .training-hint p {
        color: var(--blue);
        font-family: Lato, sans-serif;
        margin: 0 0 1rem 0;
    }

    .unlock-ready p {
        color: var(--green);
    }

    .unlock-button {
        background: var(--green);
        color: var(--bg);
        border: none;
        padding: 0.75rem 2rem;
        font-family: Lato, sans-serif;
        font-size: 1.1rem;
        font-weight: 700;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .unlock-button:hover {
        background: var(--blue);
        transform: scale(1.05);
    }

    .unlock-button:active {
        transform: scale(0.95);
    }

    /* Unlocked State Styles */
    .unlocked-content {
        background: var(--alt-bg);
        border: 2px solid var(--green);
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
    }

    .demo-message {
        color: var(--text);
        font-family: Lato, sans-serif;
    }

    .demo-message p {
        line-height: 1.6;
        margin-bottom: 1rem;
    }

    .demo-stats {
        background: var(--bg);
        border: 1px solid var(--text);
        border-radius: 4px;
        padding: 1.5rem;
        margin: 1.5rem 0;
        text-align: left;
    }

    .demo-stats ul,
    .coming-soon ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
    }

    .demo-stats li,
    .coming-soon li {
        margin-bottom: 0.5rem;
        color: var(--text);
    }

    .coming-soon {
        background: var(--bg);
        border: 1px solid var(--blue);
        border-radius: 4px;
        padding: 1.5rem;
        margin: 1.5rem 0;
        text-align: left;
    }

    .thank-you {
        margin-top: 2rem;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--text);
    }

    .thank-you a {
        color: var(--blue);
        text-decoration: none;
        border-bottom: 1px solid var(--blue);
    }

    .thank-you a:hover {
        color: var(--green);
        border-bottom-color: var(--green);
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
        .adventure-container {
            padding: 1rem;
        }

        .requirements-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
