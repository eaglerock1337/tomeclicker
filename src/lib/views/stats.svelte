<script lang="ts">
    import type { Game } from '$lib/game';

    export let game: Game;

    function formatNumber(num: number): string {
        if (num >= 1_000_000_000_000) {
            return (num / 1_000_000_000_000).toFixed(2) + 'T';
        } else if (num >= 1_000_000_000) {
            return (num / 1_000_000_000).toFixed(2) + 'B';
        } else if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(2) + 'M';
        } else if (num >= 1_000) {
            return (num / 1_000).toFixed(2) + 'K';
        }
        return Math.floor(num).toString();
    }

    // Get stat colors
    const statColors: Record<string, string> = {
        strength: 'var(--red)',
        dexterity: 'var(--green)',
        intelligence: 'var(--blue)',
        wisdom: 'var(--yellow)'
    };
</script>

<div class="stats-page">
    <div class="stats-container">
        <h2>Player Statistics</h2>

        <!-- Player Information -->
        <div class="stats-section">
            <h3>General</h3>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-label">Name</div>
                    <div class="stat-value">{game.name}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Level</div>
                    <div class="stat-value level">{game.level}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Current EXP</div>
                    <div class="stat-value">{formatNumber(game.exp)}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Lifetime EXP</div>
                    <div class="stat-value">{formatNumber(game.lifetimeExp)}</div>
                </div>
            </div>
        </div>

        <!-- Combat Stats (Level 3+) -->
        {#if game.level >= 3}
            <div class="stats-section">
                <h3>Combat Stats</h3>
                <div class="stats-list">
                    {#each (['strength', 'dexterity', 'intelligence', 'wisdom'] as const) as stat}
                        {@const statProgress = game.getStatXpProgress(stat)}
                        {@const statLevel = game.stats[stat]}
                        <div class="stat-detailed-card">
                            <div class="stat-detailed-header">
                                <div class="stat-name" style="color: {statColors[stat]}">
                                    {stat.charAt(0).toUpperCase() + stat.slice(1)}
                                </div>
                                <div class="stat-level-display" style="color: {statColors[stat]}">
                                    Level {statLevel}
                                </div>
                            </div>
                            <div class="stat-xp-info">
                                <span class="xp-current">{Math.floor(statProgress.current)} XP</span>
                                <span class="xp-separator">/</span>
                                <span class="xp-required">{Math.floor(statProgress.required)} XP</span>
                            </div>
                            <div class="progress-bar-container">
                                <div
                                    class="progress-bar-fill"
                                    style="width: {Math.min(statProgress.percentage, 100)}%; background-color: {statColors[stat]}"
                                ></div>
                            </div>
                            <div class="stat-description">
                                {#if stat === 'strength'}
                                    Physical power and damage
                                {:else if stat === 'dexterity'}
                                    Agility and precision
                                {:else if stat === 'intelligence'}
                                    Knowledge and magic
                                {:else if stat === 'wisdom'}
                                    Insight and awareness
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/if}

        <!-- Progress Rates -->
        <div class="stats-section">
            <h3>Progress Rates</h3>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-label">Click Value</div>
                    <div class="stat-value">{formatNumber(game.getClickValue())}</div>
                    <div class="stat-desc">EXP per click</div>
                </div>
                {#if game.idleExpRate > 0}
                    <div class="stat-card">
                        <div class="stat-label">Idle EXP</div>
                        <div class="stat-value">{formatNumber(game.idleExpRate)}/s</div>
                        <div class="stat-desc">Passive EXP gain</div>
                    </div>
                {/if}
                {#if game.level >= 3}
                    <div class="stat-card">
                        <div class="stat-label">Training Speed</div>
                        <div class="stat-value">{(game.getTrainingSpeedMultiplier() * 100).toFixed(0)}%</div>
                        <div class="stat-desc">Of base duration</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">Training Cost</div>
                        <div class="stat-value">{(game.getTrainingCostMultiplier() * 100).toFixed(0)}%</div>
                        <div class="stat-desc">Of base cost</div>
                    </div>
                {/if}
            </div>
        </div>

        <!-- Upgrade Progress -->
        <div class="stats-section">
            <h3>Upgrades Owned</h3>
            <div class="upgrades-list">
                {#each Object.values(game.upgrades).filter(u => u.currentLevel > 0) as upgrade}
                    <div class="upgrade-item">
                        <span class="upgrade-name">{upgrade.name}</span>
                        <span class="upgrade-level">Level {upgrade.currentLevel}</span>
                    </div>
                {/each}
                {#if Object.values(game.upgrades).filter(u => u.currentLevel > 0).length === 0}
                    <p class="no-upgrades">No upgrades purchased yet</p>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    .stats-page {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        background-color: var(--bg);
        transition: background-color 1s cubic-bezier(0,.5,0,1);
    }

    .stats-container {
        padding: 2rem;
        max-width: 1000px;
        margin: 0 auto;
        color: var(--text);
    }

    h2 {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 300;
        margin-bottom: 2rem;
    }

    .stats-section {
        background: var(--alt-bg);
        border: 1px solid var(--text);
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .stats-section h3 {
        color: var(--blue);
        font-family: Lato, sans-serif;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .stats-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .stat-card {
        background: var(--bg);
        border: 1px solid var(--text);
        border-radius: 4px;
        padding: 1rem;
        text-align: center;
    }

    .stat-label {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 0.9rem;
        opacity: 0.8;
        margin-bottom: 0.5rem;
    }

    .stat-value {
        color: var(--text);
        font-family: 'JetBrains Mono', monospace;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    .stat-value.level {
        color: var(--yellow);
    }

    .stat-desc {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 0.8rem;
        opacity: 0.6;
    }

    /* Detailed stat cards with progress bars */
    .stat-detailed-card {
        background: var(--bg);
        border: 2px solid var(--text);
        border-radius: 6px;
        padding: 1rem;
    }

    .stat-detailed-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .stat-name {
        font-family: Lato, sans-serif;
        font-size: 1.1rem;
        font-weight: 500;
    }

    .stat-level-display {
        font-family: 'JetBrains Mono', monospace;
        font-size: 1rem;
        font-weight: 700;
    }

    .stat-xp-info {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        color: var(--text);
        margin-bottom: 0.5rem;
        opacity: 0.9;
    }

    .xp-current {
        font-weight: 700;
    }

    .xp-separator {
        opacity: 0.6;
        margin: 0 0.25rem;
    }

    .xp-required {
        opacity: 0.8;
    }

    .progress-bar-container {
        width: 100%;
        height: 12px;
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 0.5rem;
    }

    .progress-bar-fill {
        height: 100%;
        transition: width 0.3s ease;
        border-radius: 6px;
    }

    .stat-description {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-size: 0.85rem;
        opacity: 0.7;
        font-style: italic;
    }

    .upgrades-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .upgrade-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--bg);
        border: 1px solid var(--text);
        border-radius: 4px;
        padding: 0.75rem 1rem;
    }

    .upgrade-name {
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 400;
    }

    .upgrade-level {
        color: var(--blue);
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
    }

    .no-upgrades {
        color: var(--text);
        font-family: Lato, sans-serif;
        opacity: 0.6;
        text-align: center;
        padding: 1rem;
    }

    /* Mobile optimizations */
    @media (max-width: 768px) {
        .stats-container {
            padding: 1rem;
        }

        .stats-grid {
            grid-template-columns: 1fr;
        }

        .stat-value {
            font-size: 1.25rem;
        }

        h2 {
            margin-bottom: 1rem;
        }
    }
</style>
