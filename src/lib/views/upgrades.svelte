<script lang="ts">
    import type { Game, Upgrade } from '$lib/game';
    import type { Config } from '$lib/config';

    export let game: Game;
    export const config: Config = {} as Config; // Required by parent component but unused here

    let selectedUpgrade: Upgrade | null = null;

    function selectUpgrade(upgrade: Upgrade) {
        selectedUpgrade = upgrade;
    }

    function purchaseSelected() {
        if (selectedUpgrade && game.purchaseUpgrade(selectedUpgrade.id)) {
            // Refresh the selected upgrade data
            selectedUpgrade = game.upgrades[selectedUpgrade.id];
            // Force reactivity update
            game = game;
            // Save progress
            game.autoSave();
        }
    }

    function formatCost(cost: number): string {
        return cost.toLocaleString();
    }

    $: availableUpgrades = Object.values(game.upgrades).filter(u => u.id !== 'transcendent-focus');
    $: transcendentFocus = game.upgrades['transcendent-focus'];

    function levelUp() {
        if (game.levelUp()) {
            game = game; // Force reactivity
            game.autoSave(); // Save progress
        }
    }
</script>

<div class="upgrades">
    <h1>upgrades</h1>

    <div class="upgrades-layout">
        <div class="upgrade-grid">
        <!-- Special Top Row Buttons -->
        <div class="special-buttons">
            <!-- Level Up Special Button -->
            <button
                class="special-upgrade-btn"
                class:affordable={game.canLevelUp()}
                on:click={levelUp}
                disabled={!game.canLevelUp()}
            >
                <div class="upgrade-name">Level Up</div>
                <div class="upgrade-level">Level {game.level} → {game.level + 1}</div>
                <div class="upgrade-cost">{formatCost(game.getLevelUpCost())} EXP</div>
            </button>

            <!-- Transcendent Focus Special Button -->
            <button
                class="special-upgrade-btn"
                class:selected={selectedUpgrade?.id === transcendentFocus.id}
                class:affordable={game.canAffordUpgrade(transcendentFocus.id)}
                class:maxed={transcendentFocus.currentLevel >= transcendentFocus.maxLevel}
                disabled={transcendentFocus.currentLevel >= transcendentFocus.maxLevel}
                on:click={() => selectUpgrade(transcendentFocus)}
            >
                <div class="upgrade-name">{transcendentFocus.name}</div>
                <div class="upgrade-level">Level {transcendentFocus.currentLevel}/{transcendentFocus.maxLevel}</div>
                <div class="upgrade-cost">{formatCost(game.getUpgradeCost(transcendentFocus.id))} EXP</div>
            </button>
        </div>

        {#each availableUpgrades as upgrade (upgrade.id)}
            <button
                class="upgrade-btn"
                class:selected={selectedUpgrade?.id === upgrade.id}
                class:affordable={game.canAffordUpgrade(upgrade.id)}
                class:maxed={upgrade.currentLevel >= upgrade.maxLevel}
                on:click={() => selectUpgrade(upgrade)}
            >
                <div class="upgrade-name">{upgrade.name}</div>
                <div class="upgrade-level">Level {upgrade.currentLevel}/{upgrade.maxLevel}</div>
                <div class="upgrade-cost">{formatCost(game.getUpgradeCost(upgrade.id))} EXP</div>
                <div class="upgrade-benefit">
                    {#if upgrade.id === 'faster-clicking'}
                        +{(upgrade.effectValue * 100).toFixed(0)}% click value per level
                    {:else if upgrade.id === 'deep-meditation'}
                        +{(upgrade.effectValue * 100).toFixed(0)}% all EXP per level
                    {:else if upgrade.effectType === 'clickMultiplier'}
                        +{(upgrade.effectValue * 100).toFixed(0)}% click value per level
                    {:else}
                        Enhanced efficiency
                    {/if}
                </div>
            </button>
        {/each}

        <!-- Coming Soon Section -->
        <div class="coming-soon-section">
            <h3>Coming Soon</h3>
            <div class="coming-soon-grid">
                <div class="coming-soon-item">
                    <div class="upgrade-name">Adventure Training</div>
                    <div class="upgrade-description">Unlock at Level 3</div>
                </div>
                <div class="coming-soon-item">
                    <div class="upgrade-name">Stats Mastery</div>
                    <div class="upgrade-description">Unlock at Level 5</div>
                </div>
                <div class="coming-soon-item">
                    <div class="upgrade-name">Equipment Forge</div>
                    <div class="upgrade-description">Unlock at Level 7</div>
                </div>
                <div class="coming-soon-item">
                    <div class="upgrade-name">Tome Studies</div>
                    <div class="upgrade-description">Unlock at Level 10</div>
                </div>
            </div>
        </div>
        </div>

        <div class="upgrade-details">
            {#if selectedUpgrade}
                <h2>{selectedUpgrade.name}</h2>
                <p class="description">{selectedUpgrade.description}</p>
                <p class="effect"><strong>Effect:</strong> {selectedUpgrade.effect}</p>
                <p class="cost"><strong>Cost:</strong> {formatCost(game.getUpgradeCost(selectedUpgrade.id))} EXP</p>
                <p class="level"><strong>Level:</strong> {selectedUpgrade.currentLevel}/{selectedUpgrade.maxLevel}</p>

                <button
                    class="purchase-btn"
                    disabled={!game.canPurchaseUpgrade(selectedUpgrade.id)}
                    on:click={purchaseSelected}
                >
                    {#if selectedUpgrade.currentLevel >= selectedUpgrade.maxLevel}
                        MAX LEVEL
                    {:else if !game.canAffordUpgrade(selectedUpgrade.id)}
                        CANNOT AFFORD
                    {:else}
                        PURCHASE
                    {/if}
                </button>
            {:else}
                <p class="select-prompt">Select an upgrade to view details</p>
            {/if}
        </div>
    </div>
</div>

<style>
    .upgrades {
        color: var(--text);
        background-color: var(--bg);
        font-size: 1em;
        font-family: JetBrains Mono, monospace;
        font-weight: 300;
        padding: 2rem 1rem;
        text-align: center;
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
        transition: color 1s cubic-bezier(0,.5,0,1),
                    background-color 1s cubic-bezier(0,.5,0,1);
    }

    h1 {
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 1rem;
    }

    h2 {
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 0.5rem;
    }

    .upgrades-layout {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .upgrade-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    /* Mobile-specific improvements */
    @media (max-width: 768px) {
        .upgrade-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }
    }

    /* Desktop layout */
    @media (min-width: 1024px) {
        .upgrades-layout {
            flex-direction: row;
            align-items: flex-start;
        }

        .upgrade-grid {
            flex: 2;
            max-width: none;
        }

        .upgrade-details {
            flex: 1;
            position: sticky;
            top: 1rem;
            min-width: 300px;
            max-width: 400px;
        }
    }

    .upgrade-btn {
        color: var(--text);
        background-color: var(--alt-bg);
        font-family: JetBrains Mono, monospace;
        font-weight: 300;
        padding: 1rem;
        text-align: center;
        border: 2px solid var(--text);
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        min-height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* Ensure touch targets are large enough (44px minimum) */
        min-height: 100px;
        touch-action: manipulation;
    }

    @media (max-width: 768px) {
        .upgrade-btn {
            min-height: 110px;
            padding: 1rem 0.75rem;
        }
    }

    .upgrade-btn:hover {
        background-color: var(--text);
        color: var(--bg);
    }

    .special-buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1rem;
        grid-column: 1 / -1; /* Span full width */
    }

    @media (max-width: 768px) {
        .special-buttons {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }
    }

    .special-upgrade-btn {
        color: var(--text);
        background-color: var(--alt-bg);
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        padding: 1rem;
        text-align: center;
        border: 2px solid var(--text);
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        min-height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        touch-action: manipulation;
    }

    @media (max-width: 768px) {
        .special-upgrade-btn {
            min-height: 110px;
            padding: 1rem 0.75rem;
        }
    }

    .special-upgrade-btn:hover:not(:disabled):not(.maxed) {
        background-color: var(--green);
        border-color: var(--green);
        color: var(--alt-bg);
    }

    .special-upgrade-btn.affordable {
        background-color: var(--green);
        border-color: var(--green);
        color: var(--alt-bg);
    }

    .special-upgrade-btn:disabled,
    .special-upgrade-btn.maxed {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: var(--alt-bg);
        border-color: var(--text);
        color: var(--text);
    }

    .special-upgrade-btn.selected {
        background-color: var(--blue);
        color: var(--alt-bg);
        border-color: var(--blue);
    }

    .upgrade-btn.selected {
        background-color: var(--blue);
        color: var(--alt-bg);
        border-color: var(--blue);
    }

    .upgrade-btn.affordable {
        border-color: var(--green);
    }

    .upgrade-btn.maxed {
        opacity: 0.6;
        border-color: var(--yellow);
    }

    .upgrade-name {
        font-size: 1.1em;
        font-weight: 400;
        margin-bottom: 0.5rem;
    }

    .upgrade-level {
        font-size: 0.9em;
        opacity: 0.8;
        margin-bottom: 0.5rem;
    }

    .upgrade-cost {
        font-size: 1em;
        font-weight: 400;
    }

    .upgrade-benefit {
        font-size: 0.8em;
        opacity: 0.7;
        color: var(--green);
        font-weight: 400;
        margin-top: 0.25rem;
    }

    /* Coming Soon Section */
    .coming-soon-section {
        grid-column: 1 / -1;
        margin-top: 2rem;
        padding: 1.5rem;
        background-color: var(--alt-bg);
        border: 2px dashed var(--text);
        border-radius: 10px;
        opacity: 0.7;
    }

    .coming-soon-section h3 {
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 1rem;
        opacity: 0.8;
    }

    .coming-soon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    @media (max-width: 768px) {
        .coming-soon-grid {
            grid-template-columns: 1fr;
        }
    }

    .coming-soon-item {
        padding: 1rem;
        background-color: var(--bg);
        border: 1px solid var(--text);
        border-radius: 8px;
        opacity: 0.6;
    }

    .coming-soon-item .upgrade-name {
        font-size: 1em;
        font-weight: 400;
        margin-bottom: 0.5rem;
    }

    .coming-soon-item .upgrade-description {
        font-size: 0.8em;
        opacity: 0.8;
        font-style: italic;
    }

    .upgrade-details {
        background-color: var(--alt-bg);
        border: 2px solid var(--text);
        border-radius: 10px;
        padding: 1.5rem;
        text-align: left;
    }

    .description {
        font-style: italic;
        margin-bottom: 1rem;
        opacity: 0.9;
    }

    .effect, .cost, .level {
        margin-bottom: 0.5rem;
    }

    .select-prompt {
        text-align: center;
        opacity: 0.7;
        font-style: italic;
    }

    .purchase-btn {
        color: var(--alt-bg);
        background-color: var(--green);
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        font-size: 1.1em;
        padding: 0.8rem 2rem;
        border: 2px solid var(--green);
        border-radius: 10px;
        cursor: pointer;
        width: 100%;
        margin-top: 1rem;
        transition: all 0.3s ease;
    }

    .purchase-btn:disabled {
        background-color: var(--alt-bg);
        color: var(--text);
        border-color: var(--text);
        opacity: 0.6;
        cursor: not-allowed;
    }

    .purchase-btn:not(:disabled):hover {
        background-color: var(--text);
        color: var(--bg);
        border-color: var(--text);
    }
</style>