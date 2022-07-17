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

<div class="thebutton">
    <button on:click={clickMe}>
        Settings Time!<br>
        EXP: {game.exp} Tick: {game.tick}<br>
        {game.text}<br>
    </button>
</div>

<style>
    /* The Button */

    .thebutton {
        height: 100%;
        width: 100%;
    }

    .thebutton button {
        color: var(--text);
        background-color: var(--bg);
        border: 0px;
        padding: 25px 50px 25px;
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

</style>