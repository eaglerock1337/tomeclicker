<script lang="ts">
    import type { Game } from '$lib/game';
    import ViewLayout from '$lib/components/ViewLayout.svelte';
    import { formatCompact } from '$lib/utils/format';

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

<ViewLayout title="adventure" maxWidth="800px">
    {#if !isUnlocked}
        <!-- Locked State -->
        <div class="locked-content">
            <p class="locked-message">
                There's a whole world out there for your to explore, but you still don't feel like you're ready for action.
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
                            <em>Your training has finally paid off. You know it's time to fulfill your destiny.</em>
                        </p>
                        <button class="unlock-button" on:click={unlockAdventure}>
                            Unlock Adventure
                        </button>
                    </div>
                {:else}
                    <div class="training-hint">
                        <p>
                            <em>You really want to get out there, but know it's best to keep training.</em>
                        </p>
                    </div>
                {/if}
            </div>
        </div>
    {:else}
        <!-- Unlocked State -->
        <div class="unlocked-content">
            <h2>TomeClicker Demo Complete!</h2>
            <div class="demo-message">
                <p>You're finally ready for adventure, but unfortunately, the developer isn't.</p>

                <div class="demo-stats">
                    <p>Your journey so far:</p>
                    <ul>
                        <li>Level {game.level} adventurer</li>
                        <li>{formatCompact(game.lifetimeExp, 1)} lifetime EXP earned</li>
                        <li>
                            {Object.values(game.upgrades).reduce((sum, u) => sum + u.currentLevel, 0)} total upgrades
                        </li>
                        <li>{game.stats.strength + game.stats.agility + game.stats.willpower + game.stats.endurance} total RPG levels</li>
                    </ul>
                </div>

                <p class="thank-you">
                    Thank you for playing! Keep an eye on
                    <a href="https://github.com/eaglerock1337/tomeclicker" target="_blank">GitHub</a>
                    for updates.
                </p>

                <div class="coming-up">
                    <p>Coming up next:</p>
                    <ul>
                        <li>Idle combat and adventure zones</li>
                        <li>Adventure Points and treasures</li>
                        <li>Equipment and gear system</li>
                        <li>The mystery of the Tomes still await...</li>
                    </ul>
                </div>
            </div>
        </div>
    {/if}
</ViewLayout>

<style>
    h2 {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 0.75rem;
        font-size: 1.5rem;
    }

    h3 {
        color: var(--blue);
        font-family: Lato, sans-serif;
        font-weight: 400;
        margin-bottom: 0.75rem;
        font-size: 1.1rem;
    }

    /* Locked State Styles */
    .locked-content {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 8px;
        padding: 1.25rem;
    }

    .locked-message {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 0.95rem;
        line-height: 1.4;
        margin-bottom: 1rem;
        text-align: center;
    }

    .requirements-section {
        margin-top: 1rem;
    }

    .requirements-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
        margin-bottom: 1rem;
    }

    .requirement-item {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        background: var(--bg);
        border: 2px solid var(--red);
        border-radius: 4px;
        transition: border-color 0.3s;
        font-size: 0.9rem;
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
        padding: 0.75rem;
        margin-top: 0.75rem;
    }

    .unlock-ready {
        border-color: var(--green);
        text-align: center;
    }

    .unlock-ready p,
    .training-hint p {
        color: var(--blue);
        font-family: Lato, sans-serif;
        margin: 0 0 0.75rem 0;
        font-size: 0.9rem;
    }

    .unlock-ready p {
        color: var(--green);
    }

    .unlock-button {
        background: var(--green);
        color: var(--bg);
        border: none;
        padding: 0.625rem 1.5rem;
        font-family: Lato, sans-serif;
        font-size: 1rem;
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

    .demo-stats,
    .coming-up {
        background: var(--bg);
        border: 1px solid var(--text);
        border-radius: 4px;
        padding: 1.5rem;
        margin: 1.5rem 0;
        text-align: left;
    }

    .demo-stats ul,
    .coming-up ul {
        margin: 1rem 0;
        padding-left: 1.5rem;
    }

    .demo-stats li,
    .coming-up li {
        margin-bottom: 0.5rem;
        color: var(--text);
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
        .requirements-grid {
            grid-template-columns: 1fr;
        }

        .locked-content {
            padding: 1rem;
        }

        h2 {
            font-size: 1.25rem;
        }

        h3 {
            font-size: 1rem;
        }
    }
</style>
