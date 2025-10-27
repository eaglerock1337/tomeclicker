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
            // Save progress
            game.autoSave();
        }
    }

    function formatCost(cost: number): string {
        return cost.toLocaleString();
    }

    $: availableUpgrades = Object.values(game.upgrades).filter(u => !u.minLevel || u.minLevel <= game.level).filter(u => u.id !== 'discipline');
    $: discipline = game.upgrades['discipline'];

    function levelUp() {
        if (game.levelUp()) {
            game.autoSave(); // Save progress
        }
    }

    // Silence unused variable warning
    config;
</script>

<div class="upgrades">
    <h1>upgrades</h1>

    <div class="upgrades-layout">
        <div class="upgrade-grid">
        <!-- Level Up Button -->
        <button
            class="upgrade-btn special-btn"
            class:affordable={game.canLevelUp()}
            on:click={levelUp}
            disabled={!game.canLevelUp()}
            aria-label="Level up from {game.level} to {game.level + 1}. Cost: {formatCost(game.getLevelUpCost())} EXP"
        >
            <div class="upgrade-name">Level Up</div>
            <div class="upgrade-level">Level {game.level} → {game.level + 1}</div>
            <div class="upgrade-cost">{formatCost(game.getLevelUpCost())} EXP</div>
        </button>

        <!-- Discipline Button -->
        <button
            class="upgrade-btn special-btn"
            class:selected={selectedUpgrade?.id === discipline.id}
            class:affordable={game.canAffordUpgrade(discipline.id)}
            class:maxed={discipline.currentLevel >= discipline.maxLevel}
            disabled={discipline.currentLevel >= discipline.maxLevel}
            on:click={() => selectUpgrade(discipline)}
            aria-label="Select {discipline.name} upgrade. Level {discipline.currentLevel} of {discipline.maxLevel}. Cost: {formatCost(game.getUpgradeCost(discipline.id))} EXP"
        >
            <div class="upgrade-name">{discipline.name}</div>
            <div class="upgrade-level">Level {discipline.currentLevel}/{discipline.maxLevel}</div>
            <div class="upgrade-cost">{formatCost(game.getUpgradeCost(discipline.id))} EXP</div>
        </button>

        {#each availableUpgrades as upgrade (upgrade.id)}
            <button
                class="upgrade-btn"
                class:selected={selectedUpgrade?.id === upgrade.id}
                class:affordable={game.canAffordUpgrade(upgrade.id)}
                class:maxed={upgrade.currentLevel >= upgrade.maxLevel}
                on:click={() => selectUpgrade(upgrade)}
                aria-label="Select {upgrade.name} upgrade. Level {upgrade.currentLevel} of {upgrade.maxLevel}. Cost: {formatCost(game.getUpgradeCost(upgrade.id))} EXP"
            >
                <div class="upgrade-name">{upgrade.name}</div>
                <div class="upgrade-level">Level {upgrade.currentLevel}/{upgrade.maxLevel}</div>
                <div class="upgrade-cost">{formatCost(game.getUpgradeCost(upgrade.id))} EXP</div>
                <div class="upgrade-benefit">
                    {#if upgrade.effectType === 'clickMultiplier'}
                        +{(upgrade.effectValue * 100).toFixed(0)}% click EXP per level
                    {:else if upgrade.effectType === 'critChance'}
                        +{(upgrade.effectValue * 100).toFixed(1)}% crit chance per level
                    {:else if upgrade.effectType === 'critDamage'}
                        +{(upgrade.effectValue * 100).toFixed(0)}% crit damage per level
                    {:else if upgrade.effectType === 'ruminateExp'}
                        +{upgrade.effectValue} rumination EXP per level
                    {:else if upgrade.effectType === 'ruminateSpeed'}
                        +{(upgrade.effectValue * 100).toFixed(0)}% rumination speed per level
                    {:else if upgrade.effectType === 'globalIdleSpeed'}
                        +{(upgrade.effectValue * 100).toFixed(0)}% all idle speed per level
                    {:else if upgrade.effectType === 'idleExp'}
                        +{upgrade.effectValue} idle EXP/s per level
                    {:else if upgrade.effectType === 'trainingSpeed'}
                        -{(upgrade.effectValue * 100).toFixed(0)}% training time per level
                    {:else if upgrade.effectType === 'trainingCost'}
                        -{(upgrade.effectValue * 100).toFixed(0)}% training cost per level
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
                    <div class="upgrade-name">Advanced Techniques</div>
                    <div class="upgrade-description">Unlock at Level 5</div>
                </div>
                <div class="coming-soon-item">
                    <div class="upgrade-name">Specialized Tools</div>
                    <div class="upgrade-description">Unlock at Level 7</div>
                </div>
                <div class="coming-soon-item">
                    <div class="upgrade-name">???</div>
                    <div class="upgrade-description">Unlock at Level 10</div>
                </div>
            </div>
        </div>
        </div>

        <div class="upgrade-details">
            {#if selectedUpgrade}
                <div class="details-header">
                    <h2>{selectedUpgrade.name}</h2>
                    <button class="close-btn" on:click={() => selectedUpgrade = null} aria-label="Close">×</button>
                </div>

                <div class="details-body">
                    <div class="details-content">
                        <p class="description">{selectedUpgrade.description}</p>
                        <p class="effect"><strong>Effect:</strong> {selectedUpgrade.effect}</p>
                        <p class="cost"><strong>Cost:</strong> {formatCost(game.getUpgradeCost(selectedUpgrade.id))} EXP</p>
                        <p class="level"><strong>Level:</strong> {selectedUpgrade.currentLevel}/{selectedUpgrade.maxLevel}</p>
                    </div>

                    <div class="details-actions">
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
                    </div>
                </div>
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
        grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
        gap: 1rem;
    }

    /* Tablet layout */
    @media (min-width: 768px) {
        .upgrade-grid {
            grid-template-columns: repeat(3, 1fr); /* 3 columns on tablet */
        }
    }

    /* Desktop layout */
    @media (min-width: 1024px) {
        .upgrades-layout {
            flex-direction: row;
            align-items: flex-start;
        }

        .upgrade-grid {
            flex: 1;
            grid-template-columns: repeat(4, 1fr); /* 4 columns on desktop */
        }

        .upgrade-details {
            flex: 0 0 300px; /* Fixed width sidebar */
            position: sticky;
            top: 1rem;
            margin-left: 1rem;
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

    /* Special buttons (Level Up, Transcendent Focus) styling */
    .upgrade-btn.special-btn {
        font-weight: 500;
    }

    .upgrade-btn.special-btn.affordable {
        background-color: var(--green);
        border-color: var(--green);
        color: var(--alt-bg);
    }

    .upgrade-btn.special-btn:hover:not(:disabled):not(.maxed) {
        background-color: var(--green);
        border-color: var(--green);
        color: var(--alt-bg);
    }

    .upgrade-btn.special-btn:disabled,
    .upgrade-btn.special-btn.maxed {
        opacity: 0.5;
        cursor: not-allowed;
        background-color: var(--alt-bg);
        border-color: var(--text);
        color: var(--text);
    }

    .upgrade-btn.special-btn.selected {
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
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .details-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .close-btn {
        display: none; /* Hidden by default on desktop */
    }

    .details-body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .details-content {
        flex: 1;
        overflow-y: auto;
    }

    .details-actions {
        flex-shrink: 0;
        padding-top: 1rem;
        border-top: 2px solid var(--text);
        background-color: var(--alt-bg);
    }

    /* Mobile: Make details panel sticky at bottom ABOVE navbar */
    @media (max-width: 1023px) {
        .upgrade-details {
            position: fixed;
            bottom: 115px; /* Position well above navbar */
            left: 0.5rem;
            right: 0.5rem;
            height: auto;
            max-height: none;
            border-radius: 10px;
            border: 2px solid var(--text);
            box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
            z-index: 50;
            margin: 0;
            padding: 0.75rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        /* Hide panel on mobile when nothing is selected */
        .upgrade-details:has(.select-prompt) {
            display: none;
        }

        .details-header {
            margin-bottom: 0;
        }

        .close-btn {
            display: flex;
            flex-shrink: 0;
            width: 28px;
            height: 28px;
            background-color: transparent;
            color: var(--text);
            border: none;
            border-radius: 5px;
            font-size: 1.6rem;
            line-height: 1;
            cursor: pointer;
            padding: 0;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s ease;
        }

        .close-btn:hover {
            background-color: var(--text);
            color: var(--bg);
        }

        .close-btn:active {
            transform: scale(0.95);
        }

        .details-body {
            display: flex;
            flex-direction: row;
            gap: 0.75rem;
            align-items: stretch;
        }

        .details-content {
            flex: 1;
            overflow-y: visible;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .details-actions {
            flex: 0 0 auto;
            width: 120px;
            padding: 0;
            border-top: none;
            background-color: transparent;
            display: flex;
            align-items: center;
        }

        .details-actions .purchase-btn {
            width: 100%;
            margin-top: 0;
            padding: 1rem 0.5rem;
            font-size: 0.9rem;
            white-space: normal;
            word-wrap: break-word;
        }

        .upgrade-grid {
            padding-bottom: 200px; /* Space for panel + navbar */
        }

        .details-header h2 {
            font-size: 1rem;
            margin: 0;
            font-weight: 400;
            flex: 1;
        }

        .details-content .description {
            font-size: 0.8rem;
            margin-bottom: 0.25rem;
            opacity: 0.8;
        }

        .details-content .effect,
        .details-content .cost,
        .details-content .level {
            font-size: 0.75rem;
            margin-bottom: 0.15rem;
            line-height: 1.3;
        }

        .details-content p {
            margin: 0;
        }
    }

    /* Extra small screens - even more compact */
    @media (max-width: 480px) {
        .upgrade-details {
            padding: 0.6rem;
            gap: 0.4rem;
        }

        .details-actions {
            width: 100px;
        }

        .details-actions .purchase-btn {
            padding: 0.75rem 0.4rem;
            font-size: 0.8rem;
        }

        .details-header h2 {
            font-size: 0.9rem;
        }

        .details-content .description {
            font-size: 0.75rem;
        }

        .details-content .effect,
        .details-content .cost,
        .details-content .level {
            font-size: 0.7rem;
        }

        .upgrade-grid {
            padding-bottom: 180px;
        }
    }

    /* Very narrow screens - single column for upgrades */
    @media (max-width: 380px) {
        .upgrade-grid {
            grid-template-columns: 1fr !important; /* Single column only on very small screens */
        }
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