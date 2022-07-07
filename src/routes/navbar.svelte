<script>
    export let menu;
</script>

<div class="menu">
    <div class="item">
        <p class:active="{menu === '1'}">one</p>
    </div>
    <div class="item">
        <p class:active="{menu === '2'}">two</p>
    </div>
    <div class="item">
        <p class:active="{menu === '3'}">three</p>
    </div>
    <div class="item">
        <p class:active="{menu === '4'}">four</p>
    </div>
    <div class="item">
        <p class:active="{menu === '5'}">five</p>
    </div>
    <div class="item">
        <p class:active="{menu === '6'}">six</p>
    </div>
</div>
<div class="menu">
    <button on:click="{() => menu = '1'}">
        <p class:active="{menu === '1'}">1</p>
    </button>
    <button on:click="{() => menu = '2'}">
        <p class:active="{menu === '2'}">2</p>
    </button>
    <button on:click="{() => menu = '3'}">
        <p class:active="{menu === '3'}">3</p>
    </button>
    <button on:click="{() => menu = '4'}">
        <p class:active="{menu === '4'}">4</p>
    </button>
    <button on:click="{() => menu = '5'}">
        <p class:active="{menu === '5'}">5</p>
    </button>
    <button on:click="{() => menu = '6'}">
        <p class:active="{menu === '6'}">6</p>
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