<script>
    import Practice from '$lib/views/practice.svelte';
    import Settings from '$lib/views/settings.svelte';

    /** @typedef {import('$lib/config.js').Config} Config */
    /** @type Config */
    export let config;

    /** @typedef {import('$lib/game.js').Game} Game */
    /** @type Game */
    export let game;

    function setMenu(menu) {
        if (game.menu === menu) { return; }
        game.menu = menu;
        game = game;
    }
</script>

<div class="view">
    <div class="page" class:active="{game.menu === 'practice'}">
        <Practice {config} {game}/>
    </div>
    <div class="page" class:active="{game.menu === 'settings'}">
        <Settings {config} {game}/>
    </div>
</div>

<style>
    .view {
        color: var(--text);
        background-color: var(--bg);
        width: 100%;
        height: 100%;
        flex-direction: column;
        flex: 1;
    }

    .page {
        min-height: 100%;
        visibility: hidden;
        z-index: auto;
    }

    .active {
        visibility: visible;
    }
</style>