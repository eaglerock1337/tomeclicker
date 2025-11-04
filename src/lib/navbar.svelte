<script lang="ts">
    // Lucide icons (modern replacement for Font Awesome)
    import {
        BarChart3,
        Book,
        Bookmark,
        Copy,
        Edit,
        Settings,
        History,
        Clock,
        Info,
        List,
        MapPin,
        Map,
        MousePointer,
        HelpCircle,
        Shield,
        Workflow,
        Trophy,
        TrendingUp,
        Save,
        Dumbbell,
        Brain,
        Compass
    } from 'lucide-svelte';

    import type { Game } from '$lib/game';

    export let game: Game;

    // Check if any unlocked upgrades are affordable or level up is available
    $: hasAvailableUpgrades = game && (
        game.canLevelUp() ||
        Object.values(game.upgrades).some(upgrade =>
            (!upgrade.minLevel || upgrade.minLevel <= game.level) &&
            game.canAffordUpgrade(upgrade.id)
        )
    );
</script>

<div class="navbar">
    <div class="page-name">
        <span>{game.menu}</span>
    </div>
    <div class="menu">
        <button on:click="{() => game.menu = 'practice'}">
            <p class:red="{game.menu === 'practice'}"><MousePointer size={24}/></p>
        </button>
        {#if game.showUpgrades()}
            <button on:click="{() => game.menu = 'upgrades'}">
                <p
                    class:red="{game.menu === 'upgrades'}"
                    class:green="{game.menu !== 'upgrades' && hasAvailableUpgrades}"
                >
                    <TrendingUp size={24}/>
                </p>
            </button>
        {/if}
        {#if game.showTraining()}
            <button on:click="{() => game.menu = 'training'}">
                <p class:red="{game.menu === 'training'}"><Dumbbell size={24}/></p>
            </button>
        {/if}
        {#if game.showMeditation()}
            <button on:click="{() => game.menu = 'meditation'}">
                <p class:red="{game.menu === 'meditation'}"><Brain size={24}/></p>
            </button>
        {/if}
        {#if game.showAdventure()}
            <button on:click="{() => game.menu = 'adventure'}">
                <p class:red="{game.menu === 'adventure'}"><Compass size={24}/></p>
            </button>
        {/if}
        <button on:click="{() => game.menu = 'story'}">
            <p class:red="{game.menu === 'story'}"><Edit size={24}/></p>
        </button>
        <button on:click="{() => game.menu = 'help'}">
            <p class:red="{game.menu === 'help'}"><HelpCircle size={24}/></p>
        </button>
        {#if game.showStats()}
            <button on:click="{() => game.menu = 'stats'}">
                <p class:red="{game.menu === 'stats'}"><BarChart3 size={24}/></p>
            </button>
        {/if}
        <button on:click="{() => game.menu = 'saves'}">
            <p class:red="{game.menu === 'saves'}"><Save size={24}/></p>
        </button>
        <button on:click="{() => game.menu = 'settings'}">
            <p class:red="{game.menu === 'settings'}"><Settings size={24}/></p>
        </button>
        <button on:click="{() => game.menu = 'about'}">
            <p class:red="{game.menu === 'about'}"><Info size={24}/></p>
        </button>
    </div>
</div>

<style>
    .navbar {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        background-color: var(--bg);
        border-top: 1px solid var(--text);
        width: 100%;
    }

    .menu {
        color: var(--text);
        background-color: var(--bg);
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: row wrap;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .menu button {
        color: var(--text);
        background-color: var(--alt-bg);
        font-size: 1.2em;
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        margin: 2px 2px 4px;
        padding: 5px 10px;
        max-width: 55px;
        min-width: 50px;
        min-height: 50px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
        border: 2px solid var(--text);
        border-radius: 5px;
    }

    .page-name {
        color: var(--text);
        background-color: var(--bg);
        font-family: JetBrains Mono, monospace;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .page-name span {
        font-size: 1em;
        opacity: 0.8;
    }

    p {
        padding: 0px 0px;
        margin: 4px 2px;
    }

    .red {
        color: var(--red);
        font-weight: 700;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .green {
        color: var(--green);
        font-weight: 700;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

</style>