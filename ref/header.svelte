<script>
    /** @typedef {import('$lib/game.js').Game} Game */
    /** @type {Game} */
    export let game;

    /** temporary hack for svelte errors since it's not used yet */
    game = game;
</script>

<header>
    <div class="container">
        <div class="stat">EXP: {game.exp}</div>
        <div class="title">TomeClicker</div>
        <div class="stat">Level: {game.level}</div>
    </div>
</header>

<style>
    header {
        background-color: var(--alt-bg);
        padding: 2px 2px;
        font-size: 1.2em;
        font-weight: 400;
        font-family: JetBrains Mono, monospace;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: var(--text);
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .stat, .title {
        min-width: 50px;
        display: inline-flex;
        padding: 0px 5px;
        text-align: center;
    }

    .title {
        flex: 1;
        text-align: center;
        font-family: Lato, sans-serif;
        font-weight: 700;
        font-size: 1.2em;
    }
</style>