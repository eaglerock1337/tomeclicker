<script lang="ts">
    import type { Game } from '$lib/game';
    import ViewLayout from '$lib/components/ViewLayout.svelte';
    import { formatNumber, formatCompact } from '$lib/utils/format';

    export let game: Game;

    // Define all 4 physical stats with their effects (v0.1.5+ stat system)
    // Magic stats (INT/WIS) will be unlocked later through meditation
    interface StatDisplay {
        id: keyof Pick<typeof game.stats, 'strength' | 'agility' | 'willpower' | 'endurance'>;
        name: string;
        shortName: string;
        level: number;
        currentExp: number;
        requiredExp: number;
        maxLevel: number;
        trainingCost: number;
        effect: string;
        color: string;
        available: boolean;
        atCap: boolean;
        isLocked: boolean;
    }

    $: rpgStats = [
        {
            id: 'strength' as const,
            name: game.isStatLocked('strength') ? '???' : 'Strength',
            shortName: game.isStatLocked('strength') ? '???' : 'STR',
            level: game.stats.strength,
            currentExp: game.getStatExp('strength'),
            requiredExp: game.getStatExpRequired('strength'),
            maxLevel: game.getMaxStatLevel('strength'),
            trainingCost: game.getStatTrainingCost('strength'),
            effect: game.isStatLocked('strength') ? '???' : 'Attack',
            color: 'var(--red)',
            available: game.level >= 3,
            atCap: game.stats.strength >= game.getMaxStatLevel('strength'),
            isLocked: game.isStatLocked('strength')
        },
        {
            id: 'agility' as const,
            name: game.isStatLocked('agility') ? '???' : 'Agility',
            shortName: game.isStatLocked('agility') ? '???' : 'AGI',
            level: game.stats.agility,
            currentExp: game.getStatExp('agility'),
            requiredExp: game.getStatExpRequired('agility'),
            maxLevel: game.getMaxStatLevel('agility'),
            trainingCost: game.getStatTrainingCost('agility'),
            effect: game.isStatLocked('agility') ? '???' : 'Attack Speed',
            color: 'var(--green)',
            available: game.level >= 3,
            atCap: game.stats.agility >= game.getMaxStatLevel('agility'),
            isLocked: game.isStatLocked('agility')
        },
        {
            id: 'willpower' as const,
            name: game.isStatLocked('willpower') ? '???' : 'Willpower',
            shortName: game.isStatLocked('willpower') ? '???' : 'WIL',
            level: game.stats.willpower,
            currentExp: game.getStatExp('willpower'),
            requiredExp: game.getStatExpRequired('willpower'),
            maxLevel: game.getMaxStatLevel('willpower'),
            trainingCost: game.getStatTrainingCost('willpower'),
            effect: game.isStatLocked('willpower') ? '???' : 'Defense',
            color: 'var(--blue)',
            available: game.level >= 3,
            atCap: game.stats.willpower >= game.getMaxStatLevel('willpower'),
            isLocked: game.isStatLocked('willpower')
        },
        {
            id: 'endurance' as const,
            name: game.isStatLocked('endurance') ? '???' : 'Endurance',
            shortName: game.isStatLocked('endurance') ? '???' : 'END',
            level: game.stats.endurance,
            currentExp: game.getStatExp('endurance'),
            requiredExp: game.getStatExpRequired('endurance'),
            maxLevel: game.getMaxStatLevel('endurance'),
            trainingCost: game.getStatTrainingCost('endurance'),
            effect: game.isStatLocked('endurance') ? '???' : 'HP',
            color: 'var(--yellow)',
            available: game.level >= 3,
            atCap: game.stats.endurance >= game.getMaxStatLevel('endurance'),
            isLocked: game.isStatLocked('endurance')
        }
    ] as StatDisplay[];
</script>

<ViewLayout title="statistics" maxWidth="700px">
    <!-- Player Information - Compact single column -->
    <div class="info-section">
        <div class="info-row">
            <span class="info-label">Name:</span>
            <span class="info-value">{game.name}</span>
        </div>
        <div class="info-row highlight">
            <span class="info-label">Level:</span>
            <span class="info-value level">{game.level}</span>
        </div>
        {#if !game.isStatLocked('endurance')}
            <div class="info-row highlight">
                <span class="info-label">HP:</span>
                <span class="info-value level">{game.stats.endurance * 5}</span>
            </div>
        {/if}
        {#if !game.isStatLocked('strength')}
            <div class="info-row highlight">
                <span class="info-label">Attack:</span>
                <span class="info-value level">{game.stats.strength}</span>
            </div>
        {/if}
        {#if !game.isStatLocked('willpower')}
            <div class="info-row highlight">
                <span class="info-label">Defense:</span>
                <span class="info-value level">{game.stats.willpower}</span>
            </div>
        {/if}
        {#if !game.isStatLocked('agility')}
            <div class="info-row highlight">
                <span class="info-label">Attack Speed:</span>
                <span class="info-value level">{game.stats.agility}</span>
            </div>
        {/if}
        <div class="info-row">
            <span class="info-label">Current EXP:</span>
            <span class="info-value">{formatCompact(game.exp, 1)}</span>
        </div>
        <div class="info-row">
            <span class="info-label">Lifetime EXP:</span>
            <span class="info-value">{formatCompact(game.lifetimeExp, 1)}</span>
        </div>
    </div>

    <!-- RPG Stats - 6 stats in single column -->
    {#if game.level >= 3}
        <div class="section-header">RPG Statistics</div>
        <div class="rpg-stats">
            {#each rpgStats as stat (stat.id)}
                <div class="stat-row" class:locked={!stat.available || stat.isLocked}>
                    <div class="stat-main">
                        <div class="stat-name-group">
                            <span class="stat-short" class:mystery={stat.isLocked} style="color: {stat.isLocked ? 'var(--text)' : stat.color}">{stat.shortName}</span>
                            <span class="stat-name" class:mystery={stat.isLocked}>{stat.name}</span>
                            <span class="stat-effect" class:mystery={stat.isLocked}>+{stat.effect}</span>
                        </div>
                        <div class="stat-values">
                            <span class="stat-value" class:mystery={stat.isLocked} style="color: {stat.isLocked ? 'var(--text)' : stat.color}">
                                {stat.isLocked ? '?' : stat.level}
                            </span>
                            <span class="stat-level" class:mystery={stat.isLocked}>
                                {stat.isLocked ? 'Locked' : `Lv.${stat.level}/${stat.maxLevel}`}
                            </span>
                        </div>
                    </div>
                    <!-- Stat EXP Progress Bar (v0.1.5+) -->
                    <div class="stat-progress">
                        <div class="progress-bar-container">
                            {#if stat.isLocked}
                                <div class="progress-bar" style="width: {Math.min(100, (stat.currentExp / stat.requiredExp) * 100)}%; background-color: var(--text); opacity: 0.3;"></div>
                            {:else if stat.available && !stat.atCap}
                                <div class="progress-bar" style="width: {Math.min(100, (stat.currentExp / stat.requiredExp) * 100)}%; background-color: {stat.color}"></div>
                            {:else if stat.atCap}
                                <div class="progress-bar" style="width: 100%; background-color: var(--yellow)"></div>
                            {:else}
                                <div class="progress-bar" style="width: 0%; background-color: var(--text)"></div>
                            {/if}
                        </div>
                        <div class="progress-info">
                            {#if !stat.available}
                                <span class="progress-text locked-text">Unlock at Level 3</span>
                            {:else if stat.isLocked}
                                <span class="progress-text locked-text">Train to unlock (0 / {formatNumber(stat.requiredExp)} EXP)</span>
                            {:else if stat.atCap}
                                <span class="progress-text capped-text">Max Level (Character Level {game.level})</span>
                            {:else}
                                <span class="progress-text">{formatNumber(stat.currentExp)} / {formatNumber(stat.requiredExp)} EXP</span>
                                <span class="progress-cost">Training: {formatNumber(stat.trainingCost)} EXP</span>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {/if}

    <!-- Progress Rates - Derived stats -->
    <div class="section-header">Progress Rates</div>
    <div class="rates-section">
        <div class="rate-row">
            <span class="rate-label">Click Value:</span>
            <span class="rate-value">{formatNumber(game.getClickValue())} EXP</span>
        </div>
        {#if game.idleExpRate > 0}
            <div class="rate-row">
                <span class="rate-label">Idle EXP:</span>
                <span class="rate-value">{formatNumber(game.idleExpRate)}/s</span>
            </div>
        {/if}
        {#if game.level >= 3}
            <div class="rate-row">
                <span class="rate-label">Training Speed:</span>
                <span class="rate-value">{(game.getTrainingSpeedMultiplier() * 100).toFixed(0)}%</span>
            </div>
            <div class="rate-row">
                <span class="rate-label">Training Cost:</span>
                <span class="rate-value">{(game.getTrainingCostMultiplier() * 100).toFixed(0)}%</span>
            </div>
        {/if}
    </div>

    <!-- Upgrades Owned - Condensed -->
    <div class="section-header">Upgrades Owned ({Object.values(game.upgrades).reduce((sum, u) => sum + u.currentLevel, 0)} total)</div>
    <div class="upgrades-section">
        {#each Object.values(game.upgrades).filter(u => u.currentLevel > 0) as upgrade}
            <div class="upgrade-row">
                <span class="upgrade-name">{upgrade.name}</span>
                <span class="upgrade-level">Lv.{upgrade.currentLevel}</span>
            </div>
        {/each}
        {#if Object.values(game.upgrades).filter(u => u.currentLevel > 0).length === 0}
            <div class="empty-message">No upgrades purchased yet</div>
        {/if}
    </div>
</ViewLayout>

<style>
    /* Section Headers */
    .section-header {
        color: var(--blue);
        font-family: Lato, sans-serif;
        font-weight: 400;
        font-size: 1.1rem;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid var(--text);
        opacity: 0.9;
    }

    /* Player Info Section - Compact rows */
    .info-section {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 4px;
        padding: 0.5rem;
        margin-bottom: 1rem;
    }

    .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.35rem 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .info-row:last-child {
        border-bottom: none;
    }

    .info-row.highlight {
        background: rgba(255, 255, 255, 0.05);
    }

    .info-label {
        color: var(--text);
        font-size: 0.85rem;
        opacity: 0.8;
    }

    .info-value {
        color: var(--text);
        font-size: 0.9rem;
        font-weight: 700;
    }

    .info-value.level {
        color: var(--yellow);
        font-size: 1rem;
    }

    /* RPG Stats Section - Dense single column */
    .rpg-stats {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .stat-row {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 4px;
        padding: 0.5rem;
        transition: opacity 0.3s;
    }

    .stat-row.locked {
        opacity: 0.4;
        border-color: rgba(255, 255, 255, 0.3);
    }

    .stat-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.35rem;
    }

    .stat-name-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .stat-short {
        font-weight: 700;
        font-size: 0.85rem;
        min-width: 2.5rem;
    }

    .stat-name {
        color: var(--text);
        font-size: 0.85rem;
        font-weight: 400;
    }

    .stat-short.mystery,
    .stat-name.mystery,
    .stat-effect.mystery,
    .stat-value.mystery,
    .stat-level.mystery {
        opacity: 0.3;
        font-style: italic;
    }

    .stat-effect {
        color: var(--text);
        font-size: 0.75rem;
        opacity: 0.6;
        font-style: italic;
    }

    .stat-values {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .stat-level {
        color: var(--text);
        font-size: 0.75rem;
        opacity: 0.7;
    }

    .stat-value {
        font-size: 1.1rem;
        font-weight: 700;
    }


    .progress-bar-container {
        height: 8px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        overflow: hidden;
    }

    .progress-bar {
        height: 100%;
        background: var(--green);
        transition: width 0.3s ease;
    }

    .progress-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.7rem;
    }

    .progress-text {
        color: var(--text);
        opacity: 0.7;
    }

    .progress-text.locked-text {
        color: var(--red);
        opacity: 0.8;
    }

    .progress-text.capped-text {
        color: var(--yellow);
        opacity: 0.9;
        font-weight: 600;
    }

    .progress-cost {
        color: var(--blue);
        opacity: 0.8;
    }

    /* Rates Section - Compact rows */
    .rates-section {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 4px;
        padding: 0.5rem;
    }

    .rate-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.35rem 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .rate-row:last-child {
        border-bottom: none;
    }

    .rate-label {
        color: var(--text);
        font-size: 0.85rem;
        opacity: 0.8;
    }

    .rate-value {
        color: var(--green);
        font-size: 0.9rem;
        font-weight: 700;
    }

    /* Upgrades Section - Compact list */
    .upgrades-section {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 4px;
        padding: 0.5rem;
        max-height: 300px;
        overflow-y: auto;
    }

    .upgrade-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.35rem 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .upgrade-row:last-child {
        border-bottom: none;
    }

    .upgrade-name {
        color: var(--text);
        font-size: 0.85rem;
        opacity: 0.9;
    }

    .upgrade-level {
        color: var(--blue);
        font-size: 0.85rem;
        font-weight: 700;
    }

    .empty-message {
        color: var(--text);
        font-size: 0.85rem;
        opacity: 0.6;
        text-align: center;
        padding: 1rem;
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
        .section-header {
            font-size: 1rem;
            margin-top: 1rem;
        }

        .info-row,
        .rate-row,
        .upgrade-row {
            padding: 0.3rem 0.4rem;
        }

        .stat-row {
            padding: 0.4rem;
        }

        .stat-short {
            font-size: 0.8rem;
            min-width: 2.25rem;
        }

        .stat-name {
            font-size: 0.8rem;
        }

        .stat-effect {
            font-size: 0.7rem;
        }

        .stat-value {
            font-size: 1rem;
        }
    }
</style>
