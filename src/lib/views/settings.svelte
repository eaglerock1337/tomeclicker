<script>
    /** @typedef {import('$lib/config.js').Config} Config */
    /** @type Config */
    export let config;

    /** @typedef {import('$lib/game.js').Game} Game */
    /** @type {Game} */
    export let game;

    function clickMe() {
        game.exp += 10;
        game.text = 'ayy ' + game.exp;
    }
</script>

<div class="settings">
    Settings Time!<br>
    EXP: {game.exp} Tick: {game.tick}<br>
    {game.text}<br>
    <div class="container">
        <button on:click={clickMe}>
            Test
        </button>
        <button on:click={clickMe}>
            Test
        </button>    
    </div>
</div>

<style>
    .settings {
        color: var(--text);
        background-color: var(--bg);
        font-size: 1.5em;
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
    }

    .container {
        height: 4.5rem;
        display: flex;
        flex-flow: row;
    }

    .container button {
        color: var(--text);
        background-color: var(--alt-bg);
        font-size: 1.4em;
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        margin: 2px 2px 10px;
        padding: 5px 10px;
        text-align: center;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
        border: 2px solid var(--text);
        border-radius: 10px;
    }
</style>