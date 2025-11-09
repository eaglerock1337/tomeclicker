<script lang="ts">
    import { onMount } from 'svelte';
    import type { Game, Upgrade } from '$lib/game';
    import type { Config } from '$lib/config';
    import ViewLayout from '$lib/components/ViewLayout.svelte';
    import { formatCompact } from '$lib/utils/format';

    export let game: Game;
    export let config: Config;

    let selectedUpgrade: Upgrade | null = null;
    let isLevelUpSelected = false;

    function selectUpgrade(upgrade: Upgrade) {
        selectedUpgrade = upgrade;
        isLevelUpSelected = false;
    }

    function selectLevelUp() {
        selectedUpgrade = null;
        isLevelUpSelected = true;
    }

    function purchaseSelected() {
        if (isLevelUpSelected) {
            // Handle level up
            if (game.levelUp()) {
                game = game; // Force reactive update across all components
                game.autoSave();
            }
        } else if (selectedUpgrade && game.purchaseUpgrade(selectedUpgrade.id)) {
            // Refresh the selected upgrade data
            selectedUpgrade = game.upgrades[selectedUpgrade.id];
            game = game; // Force reactive update across all components
            // Save progress
            game.autoSave();
        }
    }

    function formatCost(cost: number): string {
        return formatCompact(cost, 1);
    }

    $: visibleCategories = game.getVisibleUpgradeCategories();
    $: discipline = game.upgrades['discipline'];

    // Track which categories are expanded (with localStorage persistence)
    let expandedCategories: Set<string> = new Set(['click']); // Default: click category expanded
    let accordionStateLoaded = false;

    // Load accordion state from localStorage on mount
    onMount(() => {
        try {
            const saved = localStorage.getItem('tomeclicker-upgrade-accordion');
            if (saved) {
                const parsed = JSON.parse(saved);
                expandedCategories = new Set(parsed);
            }
        } catch (e) {
            console.warn('Failed to load accordion state:', e);
        }
        accordionStateLoaded = true;
    });

    // Save accordion state to localStorage whenever it changes
    $: if (accordionStateLoaded) {
        try {
            localStorage.setItem('tomeclicker-upgrade-accordion', JSON.stringify([...expandedCategories]));
        } catch (e) {
            console.warn('Failed to save accordion state:', e);
        }
    }

    function toggleCategory(category: string) {
        expandedCategories = expandedCategories.has(category)
            ? new Set([...expandedCategories].filter(c => c !== category))
            : new Set([...expandedCategories, category]);
    }

    function getCategoryDisplayName(category: string): string {
        switch (category) {
            case 'click': return 'Click Power';
            case 'research': return 'Research';
            case 'studying': return 'Studying';
            case 'special': return 'Special';
            default: return category;
        }
    }

    function getCategoryDescription(category: string): string {
        switch (category) {
            case 'click': return 'Enhance your active practice sessions';
            case 'research': return 'Improve your research and experience gain';
            case 'studying': return 'Prepare and improve stat development and training';
            case 'special': return 'Powerful universal bonuses';
            default: return '';
        }
    }

    function levelUp() {
        if (game.levelUp()) {
            game = game; // Force reactive update across all components
            game.autoSave(); // Save progress
        }
    }

    // Silence unused variable warning
    config;
</script>

<ViewLayout title="upgrades" maxWidth="1200px">
    <div class="upgrades-layout">
        <div class="upgrade-grid">
        <!-- Level Up Button -->
        <button
            class="upgrade-btn special-btn"
            class:selected={isLevelUpSelected}
            class:affordable={game.canLevelUp()}
            on:click={selectLevelUp}
            aria-label="Select Level Up. Level {game.level} → {game.level + 1}. Cost: {formatCost(game.getLevelUpCost())} EXP"
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
            <div class="upgrade-benefit">
                {discipline.effectValue}x all EXP gain per level
            </div>
        </button>

        <!-- Categorized Upgrades -->
        {#each visibleCategories.filter(cat => cat !== 'special') as category (category)}
            {@const categoryUpgrades = game.getUpgradesByCategory(category).filter(u => !u.minLevel || u.minLevel <= game.level)}
            {#if categoryUpgrades.length > 0 && (category !== 'studying' || game.areAllStatsUnlocked())}
                <div class="category-section">
                    <button
                        class="category-header"
                        class:expanded={expandedCategories.has(category)}
                        on:click={() => toggleCategory(category)}
                    >
                        <div class="category-info">
                            <div class="category-name">{getCategoryDisplayName(category)}</div>
                            <div class="category-description">{getCategoryDescription(category)}</div>
                        </div>
                        <div class="category-toggle">
                            {expandedCategories.has(category) ? '−' : '+'}
                        </div>
                    </button>

                    {#if expandedCategories.has(category)}
                        <div class="category-upgrades">
                            {#each categoryUpgrades as upgrade (upgrade.id)}
                                <button
                                    class="upgrade-btn category-upgrade"
                                    class:selected={selectedUpgrade?.id === upgrade.id}
                                    class:affordable={game.canAffordUpgrade(upgrade.id)}
                                    class:maxed={upgrade.currentLevel >= upgrade.maxLevel}
                                    on:click={() => selectUpgrade(upgrade)}
                                    disabled={upgrade.currentLevel >= upgrade.maxLevel}
                                    aria-label="Select {upgrade.name} upgrade. Level {upgrade.currentLevel} of {upgrade.maxLevel}. Cost: {formatCost(game.getUpgradeCost(upgrade.id))} EXP"
                                >
                                    <div class="upgrade-name">{upgrade.name}</div>
                                    <div class="upgrade-level">Level {upgrade.currentLevel}/{upgrade.maxLevel}</div>
                                    <div class="upgrade-cost">{formatCost(game.getUpgradeCost(upgrade.id))} EXP</div>
                                    <div class="upgrade-benefit">
                                        {#if upgrade.effectType === 'clickMultiplier'}
                                            +{upgrade.effectValue} EXP per click per level
                                        {:else if upgrade.effectType === 'clickMultiplierPercent'}
                                            +{(upgrade.effectValue * 100).toFixed(0)}% click EXP per level
                                        {:else if upgrade.effectType === 'clickCrit'}
                                            +{(upgrade.effectValue * 100).toFixed(1)}% crit chance per level
                                        {:else if upgrade.effectType === 'clickCritDamage'}
                                            +{(upgrade.effectValue * 100).toFixed(0)}% crit damage per level
                                        {:else if upgrade.effectType === 'researchMultiplierPercent'}
                                            +{(upgrade.effectValue * 100).toFixed(0)}% ruminate EXP per level
                                        {:else if upgrade.effectType === 'researchSpeed'}
                                            -{upgrade.effectValue}s per thought per level
                                        {:else if upgrade.effectType === 'researchCrit'}
                                            +{(upgrade.effectValue * 100).toFixed(1)}% ruminate crit per level
                                        {:else if upgrade.effectType === 'researchCritDamage'}
                                            +{(upgrade.effectValue * 100).toFixed(0)}% ruminate crit damage per level
                                        {:else if upgrade.effectType === 'statGainPercent'}
                                            +{(upgrade.effectValue * 100).toFixed(0)}% stat EXP per level
                                        {:else if upgrade.effectType === 'studyingSpeed'}
                                            -{upgrade.effectValue}s per training per level
                                        {:else if upgrade.effectType === 'studyingCrit'}
                                            +{(upgrade.effectValue * 100).toFixed(1)}% training crit per level
                                        {:else if upgrade.effectType === 'studyingCritDamage'}
                                            +{(upgrade.effectValue * 100).toFixed(0)}% training crit damage per level
                                        {:else if upgrade.effectType === 'studyingEfficiency'}
                                            -{(upgrade.effectValue * 100).toFixed(0)}% training cost per level
                                        {:else if upgrade.effectType === 'discipline'}
                                            {upgrade.effectValue}x all EXP per level
                                        {:else}
                                            {upgrade.effect}
                                        {/if}
                                    </div>
                                </button>
                            {/each}
                        </div>
                    {/if}
                </div>
            {/if}
        {/each}
        </div>

        <div class="upgrade-details">
            {#if isLevelUpSelected}
                <div class="details-header">
                    <h2>Level Up</h2>
                    <button class="close-btn" on:click={() => isLevelUpSelected = false} aria-label="Close">×</button>
                </div>

                <div class="details-body">
                    <div class="details-content">
                        <p class="description">Advance to the next level and unlock greater power</p>
                        <p class="effect"><strong>Effect:</strong> 8x multiplier to all EXP gains</p>
                        <p class="cost"><strong>Cost:</strong> {formatCost(game.getLevelUpCost())} EXP</p>
                        <p class="level"><strong>Current Level:</strong> {game.level}</p>
                    </div>

                    <div class="details-actions">
                        <button
                            class="purchase-btn"
                            disabled={!game.canLevelUp()}
                            on:click={purchaseSelected}
                        >
                            {#if !game.canLevelUp()}
                                CANNOT AFFORD
                            {:else}
                                LEVEL UP
                            {/if}
                        </button>
                    </div>
                </div>
            {:else if selectedUpgrade}
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
</ViewLayout>

<style>
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

    /* Mobile: Make details panel overlay just above navbar */
    @media (max-width: 1023px) {
        .upgrade-details {
            position: fixed;
            left: 0.5rem;
            right: 0.5rem;
            bottom: 180px; /* Well above navbar (allows for 2 rows + gap) */
            height: auto;
            max-height: 30vh;
            border-radius: 10px;
            border: 2px solid var(--text);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            z-index: 100;
            margin: 0;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
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
            padding-bottom: calc(30vh + 200px); /* Space for popup + navbar + gap */
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
            padding-bottom: calc(30vh + 190px);
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

    /* Category Accordion Styles */
    .category-section {
        width: 100%;
        margin-bottom: 1rem;
        border: 1px solid var(--text);
        border-radius: 8px;
        overflow: hidden;
        grid-column: 1 / -1; /* Span full width of grid */
    }

    .category-header {
        width: 100%;
        padding: 1rem;
        background-color: var(--alt-bg);
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background-color 0.3s ease;
        font-family: inherit;
    }

    .category-header:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    .category-header.expanded {
        background-color: var(--blue);
        color: var(--bg);
    }

    .category-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
    }

    .category-name {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 400;
        font-size: 1.1rem;
    }

    .category-header.expanded .category-name {
        color: var(--bg);
    }

    .category-description {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 0.85rem;
        opacity: 0.7;
    }

    .category-header.expanded .category-description {
        color: var(--bg);
        opacity: 0.9;
    }

    .category-toggle {
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        font-size: 1.5rem;
        font-weight: 700;
        min-width: 2rem;
        text-align: center;
    }

    .category-header.expanded .category-toggle {
        color: var(--bg);
    }

    .category-upgrades {
        padding: 0.5rem;
        background-color: var(--bg);
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Start with 2 columns like main grid */
        gap: 0.5rem;
    }

    .category-upgrade {
        margin: 0;
        border-radius: 6px;
    }

    /* Responsive breakpoints for category upgrades (match main grid) */
    @media (min-width: 768px) {
        .category-upgrades {
            grid-template-columns: repeat(3, 1fr); /* 3 columns on tablet */
        }
    }

    @media (min-width: 1024px) {
        .category-upgrades {
            grid-template-columns: repeat(4, 1fr); /* 4 columns on desktop */
        }
    }

    /* Mobile optimizations for categories */
    @media (max-width: 768px) {
        .category-header {
            padding: 0.75rem;
        }

        .category-name {
            font-size: 1rem;
        }

        .category-description {
            font-size: 0.8rem;
        }

        .category-toggle {
            font-size: 1.25rem;
        }
    }

    @media (max-width: 380px) {
        .category-upgrades {
            grid-template-columns: 1fr !important; /* Single column on very small screens */
        }
    }
</style>