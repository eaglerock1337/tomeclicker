<script>
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

    /** @typedef {import('$lib/game.js').Game} Game */
    /** @type {Game} */
    export let game;

    /** temporary hack for svelte errors since it's not used yet */
    game = game;

    function sendTick() {
        game.tick++;
        game.text = "tock " + game.tick;
    }
</script>

<div class="navbar">
    <div class="tick">
        <button class="tick" on:click="{sendTick}">
            <p>tick</p>
        </button>
    </div>
    <div class="menu">
        <button on:click="{() => game.menu = 'practice'}">
            <p class:red="{game.menu === 'practice'}"><Icon scale={1.5} data={mousePointer}/></p>
        </button>
        <button on:click="{() => game.menu = 'story'}">
            <p class:red="{game.menu === 'story'}"><Icon scale={1.5} data={edit}/></p>
        </button>
        <button on:click="{() => game.menu = 'help'}">
            <p class:red="{game.menu === 'help'}"><Icon scale={1.5} data={questionCircleO}/></p>
        </button>
        <button on:click="{() => game.menu = 'settings'}">
            <p class:red="{game.menu === 'settings'}"><Icon scale={1.5} data={gear}/></p>
        </button>
        <button on:click="{() => game.menu = 'about'}">
            <p class:red="{game.menu === 'about'}"><Icon scale={1.5} data={info}/></p>
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