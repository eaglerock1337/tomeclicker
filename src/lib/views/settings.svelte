<script>
    /** @typedef {import('$lib/config.js').Config} Config */
    /** @type Config */
    export let config;

    /** @typedef {import('$lib/game.js').Game} Game */
    /** @type {Game} */
    export let game;
</script>

<div class="settings">
    <h2>Settings Time!</h2>
    <p>EXP: {game.exp} Tick: {game.tick} Level: {game.level}<br>
    {game.text}</p>
    <h3>Test Incrementals</h3>
    <div class="container">
        <button on:click={() => {game.exp++;}}>EXP</button>
        <button on:click={() => {game.tick++;}}>Tick</button>
        <button on:click={() => {game.level++;}}>Level</button>    
    </div>
    <h3>Dark Mode Toggle</h3>
    <div class="container">
        <button on:click={() => {config.darkmode = !config.darkmode;}}>Dark Mode</button>
    </div>
</div>

<style>
    .settings {
        color: var(--text);
        background-color: var(--bg);
        font-size: 1em;
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .container {
        height: 3.5rem;
        display: flex;
        flex-flow: row;
        justify-content: center;
    }

    .container button {
        color: var(--text);
        background-color: var(--alt-bg);
        font-size: 1.2em;
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