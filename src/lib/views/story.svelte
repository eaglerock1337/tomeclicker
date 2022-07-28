<script>
    /** @typedef {import('$lib/game.js').Game} Game */
    /** @type {Game} */
    export let game;

    /** temporary hack for svelte errors since it's not used yet */
    game = game;
</script>

<div class="story">
    <div class="scrollbox">
        <h1>storyline</h1>
        <ol>
            <li>This is a chapter</li>
            <li>This is another chapter</li>
            <li>Revenge of the chapter</li>
            <li>Hey look, it's a chapter!</li>
            <li>In Soviet Russia, chapter reads you</li>
        </ol>
    </div>
</div>

<style>
    .story {
        color: var(--text);
        background-color: var(--bg);
        font-size: 1em;
        font-family: Tangerine, cursive;
        align-items: center;
        justify-content: center;
        text-align: left;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .scrollbox {
        background-color: var(--alt-bg);
        max-width: 80%;
        border-radius: 5px;
        border: 5px var(--text) solid;
        outline: 20px var(--alt-bg) solid;
        margin: 30px;
        padding: 20px;
    }

    li {
        font-family: Tangerine, cursive;
        font-size: 2em;
    }

    h1 {
        font-family: Lato, sans-serif;
        font-weight: 300;
    }

</style>