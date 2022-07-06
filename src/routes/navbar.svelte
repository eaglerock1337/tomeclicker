<script>
    import { createEventDispatcher } from 'svelte';
    export let curMenu = "1";

    const dispatch = createEventDispatcher();

    function notifyMenu(page) {
        curMenu = page;
        dispatch('message', {
            newMenu: {page}
        })
    }

    $: { curMenu = curMenu; }
</script>

<div class="menu">
    <div class="item">
        <p class:active="{curMenu === '1'}">one</p>
    </div>
    <div class="item">
        <p class:active="{curMenu === '2'}">two</p>
    </div>
    <div class="item">
        <p class:active="{curMenu === '3'}">three</p>
    </div>
    <div class="item">
        <p class:active="{curMenu === '4'}">four</p>
    </div>
    <div class="item">
        <p class:active="{curMenu === '5'}">five</p>
    </div>
    <div class="item">
        <p class:active="{curMenu === '6'}">six</p>
    </div>
</div>
<div class="menu">
    <button on:click="{() => curMenu = '1'}">
        <p class:active="{curMenu === '1'}">1</p>
    </button>
    <button on:click="{() => curMenu = '2'}">
        <p class:active="{curMenu === '2'}">2</p>
    </button>
    <button on:click="{() => curMenu = '3'}">
        <p class:active="{curMenu === '3'}">3</p>
    </button>
    <button on:click="{() => curMenu = '4'}">
        <p class:active="{curMenu === '4'}">4</p>
    </button>
    <button on:click="{() => curMenu = '5'}">
        <p class:active="{curMenu === '5'}">5</p>
    </button>
    <button on:click="{() => curMenu = '6'}">
        <p class:active="{curMenu === '6'}">6</p>
    </button>
</div>
<style>
    /* Red and Green Color text */
    em {
        color: var(--green);
        font-style: normal;
        font-weight: 400;
        transition: color 1s;
    }

    strong {
        color: var(--red);
        font-style: normal;
        font-weight: 500;
        transition: color 1s;
    }

    .menu {
        color: var(--text);
        background-color: var(--bg);
        font-family: JetBrains Mono;
        font-weight: 400;
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: var(--text);
        transition: color 1s, background-color 1s;
    }

    .menu button {
        color: var(--text);
        background-color: var(--alt-bg);
        font-size: 1.2em;
        font-family: JetBrains Mono;
        font-weight: 400;
        margin: 0px 0px 10px;
        padding: 5px 10px;
        transition: color 1s, background-color 1s;
    }

    p {
        padding: 0px 0px;
        margin: 4px 2px;
    }

    .item {
        margin: 0px 5px;
    }

    .active {
        color: var(--green);
        font-weight: 700; 
    }
</style>