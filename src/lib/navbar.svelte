<script>
    import { createEventDispatcher } from 'svelte';
    import Icon from 'svelte-awesome/components/Icon.svelte';

    // Font Awesome icons
    import barChart from 'svelte-awesome/icons/barChart';
    import book from 'svelte-awesome/icons/book';
    import bookmark from 'svelte-awesome/icons/bookmark';
    import copy from 'svelte-awesome/icons/copy';
    import edit from 'svelte-awesome/icons/edit';
    import gear from 'svelte-awesome/icons/gear';
    import history from 'svelte-awesome/icons/history';
    import hourglass from 'svelte-awesome/icons/hourglass';
    import info from 'svelte-awesome/icons/info';
    import listAlt from 'svelte-awesome/icons/listAlt';
    import mapMarker from 'svelte-awesome/icons/mapMarker';
    import mapSigns from 'svelte-awesome/icons/mapSigns';
    import mousePointer from 'svelte-awesome/icons/mousePointer';
    import questionCircleO from 'svelte-awesome/icons/questionCircleO';
    import shield from 'svelte-awesome/icons/shield';
    import sitemap from 'svelte-awesome/icons/sitemap';
    import trophy from 'svelte-awesome/icons/trophy';

    import { Game } from '$lib/game.js';
    /**
     * @type string
     */
    export let menu;

    let game = new Game('Peter');

    const dispatch = createEventDispatcher();

    function sendTick() {
        dispatch('message', {text: game.tick()});
    }
</script>

<div class="navbar">
    <div class="menu">
        <div class="item">
            <p class:green="{menu === '1'}">one</p>
        </div>
        <div class="item">
            <p class:green="{menu === '2'}">two</p>
        </div>
        <div class="item">
            <p class:green="{menu === '3'}">three</p>
        </div>
        <div class="item">
            <p class:green="{menu === '4'}">four</p>
        </div>
        <div class="item">
            <p class:green="{menu === '5'}">five</p>
        </div>
        <div class="item">
            <p class:green="{menu === '6'}">six</p>
        </div>
    </div>
    <div class="tick">
        <button class="tick" on:click="{sendTick}">
            <p class:red="{menu === '6'}">tick</p>
        </button>
    </div>
    <div class="menu">
        <button on:click="{() => menu = 'practice'}">
            <p class:red="{menu === 'practice'}"><Icon scale={1.5} data={mousePointer}/></p>
        </button>
        <button on:click="{() => menu = 'training'}">
            <p class:red="{menu === 'training'}"><Icon scale={1.5} data={listAlt}/></p>
        </button>
        <button on:click="{() => menu = 'studying'}">
            <p class:red="{menu === 'studying'}"><Icon scale={1.5} data={copy}/></p>
        </button>
        <button on:click="{() => menu = 'meditation'}">
            <p class:red="{menu === 'meditation'}"><Icon scale={1.5} data={hourglass}/></p>
        </button>
        <button on:click="{() => menu = 'adventure'}">
            <p class:red="{menu === 'adventure'}"><Icon scale={1.5} data={mapSigns}/></p>
        </button>
        <button on:click="{() => menu = 'equipment'}">
            <p class:red="{menu === 'equipment'}"><Icon scale={1.5} data={shield}/></p>
        </button>
        <button on:click="{() => menu = 'knowledge'}">
            <p class:red="{menu === 'knowledge'}"><Icon scale={1.5} data={bookmark}/></p>
        </button>
        <button on:click="{() => menu = 'questing'}">
            <p class:red="{menu === 'questing'}"><Icon scale={1.5} data={mapMarker}/></p>
        </button>
        <button on:click="{() => menu = 'retreat'}">
            <p class:red="{menu === 'retreat'}"><Icon scale={1.5} data={history}/></p>
        </button>
        <button on:click="{() => menu = 'tomes'}">
            <p class:red="{menu === 'tomes'}"><Icon scale={1.5} data={book}/></p>
        </button>
        <button on:click="{() => menu = 'tiers'}">
            <p class:red="{menu === 'tiers'}"><Icon scale={1.5} data={sitemap}/></p>
        </button>
        <button on:click="{() => menu = 'story'}">
            <p class:red="{menu === 'story'}"><Icon scale={1.5} data={edit}/></p>
        </button>
        <button on:click="{() => menu = 'achievements'}">
            <p class:red="{menu === 'achievements'}"><Icon scale={1.5} data={trophy}/></p>
        </button>
        <button on:click="{() => menu = 'statistics'}">
            <p class:red="{menu === 'statistics'}"><Icon scale={1.5} data={barChart}/></p>
        </button>
        <button on:click="{() => menu = 'help'}">
            <p class:red="{menu === 'help'}"><Icon scale={1.5} data={questionCircleO}/></p>
        </button>
        <button on:click="{() => menu = 'settings'}">
            <p class:red="{menu === 'settings'}"><Icon scale={1.5} data={gear}/></p>
        </button>
        <button on:click="{() => menu = 'about'}">
            <p class:red="{menu === 'about'}"><Icon scale={1.5} data={info}/></p>
        </button>
    </div>
</div>

<style>
    .navbar {
        flex-direction: column;
        flex: 0;
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
        margin: 2px 2px 10px;
        padding: 5px 10px;
        width: 100%;
        max-width: 55px;
        min-width: 50px;
        min-height: 52px;
        display: inline-flex;
        justify-content: center;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
        border: 2px solid var(--text);
        border-radius: 5px;
    }

    .tick {
        color: var(--text);
        background-color: var(--bg);
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: var(--text);
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .tick button {
        color: var(--text);
        background-color: var(--alt-bg);
        font-size: 1.4em;
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        margin: 2px 2px 10px;
        padding: 5px 10px;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
        border: 2px solid var(--text);
        border-radius: 10px;
        flex-wrap: wrap;
    }

    p {
        padding: 0px 0px;
        margin: 4px 2px;
    }

    .green {
        color: var(--green);
        font-weight: 700;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .red {
        color: var(--red);
        font-weight: 700; 
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }
</style>