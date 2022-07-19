<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import mousePointer from 'svelte-awesome/icons/mousePointer';

    /** @typedef {import('$lib/config.js').Config} Config */
    /** @type Config */
    export let config;

    /** @typedef {import('$lib/game.js').Game} Game */
    /** @type {Game} */
    export let game;

    function clickMe() {
        game.exp++;
        game.text = 'ayy ' + game.exp;
    }

    /** temporary hack for svelte errors since it's not used yet */
    config = config;
</script>

<div class="thebutton">
    <button on:click={clickMe}>
        <div class="item">
            <Icon scale={3} data={mousePointer}/><br>{game.text}
        </div>
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
        text-align: center;
        font-size: 1em;
        transition: color 1s cubic-bezier(0,.5,0,1),
                    background-color 1s cubic-bezier(0,.5,0,1),
    }

    .item {
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .item:hover {
        scale: 1.05;
    }

    .item:active {
        scale: 0.95;
    }
</style>