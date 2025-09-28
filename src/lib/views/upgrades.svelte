<script lang="ts">
    import type { Game, Upgrade } from '$lib/game';
    import type { Config } from '$lib/config';

    export let game: Game;
    export let config: Config;

    let selectedUpgrade: Upgrade | null = null;

    function selectUpgrade(upgrade: Upgrade) {
        selectedUpgrade = upgrade;
    }

    function purchaseSelected() {
        if (selectedUpgrade && game.purchaseUpgrade(selectedUpgrade.id)) {
            // Refresh the selected upgrade data
            selectedUpgrade = game.upgrades[selectedUpgrade.id];
        }
    }

    function formatCost(cost: number): string {
        return cost.toLocaleString();
    }

    $: availableUpgrades = Object.values(game.upgrades).filter(upgrade => {
        // Show all upgrades except level-up until 1000 EXP
        if (upgrade.id === 'level-up') return game.exp >= 1000;
        return true;
    });
</script>

<div class="upgrades">
    <h1>upgrades</h1>

    <div class="upgrades-layout">
        <div class="upgrade-grid">
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
            </button>
        {/each}
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
        padding: 1rem;
        text-align: center;
        height: 100%;
        overflow-y: auto;
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
    }

    .upgrade-btn:hover {
        background-color: var(--text);
        color: var(--bg);
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