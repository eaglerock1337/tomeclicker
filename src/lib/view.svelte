<script>
    import Practice from '$lib/views/practice.svelte';
    import Settings from '$lib/views/settings.svelte';
    import Story from '$lib/views/story.svelte';

    /** @typedef {import('$lib/config.js').Config} Config */
    /** @type Config */
    export let config;

    /** @typedef {import('$lib/game.js').Game} Game */
    /** @type Game */
    export let game;
</script>

<div class="view">
    {#if game.menu === "practice"}
        <Practice bind:config bind:game/>
    {:else if game.menu === "story"}
        <Story bind:game/>
    {:else if game.menu === "settings"}
        <Settings bind:config bind:game/>
    {:else}
        <h1>???????????????????????????<br>???????????????????????????<br>???????????????????????????<br>???????????????????????????<br>???????????????????????????<br>???????????????????????????</h1>
    {/if}
</div>

<style>
    .view {
        flex-direction: column;
        flex: 1;
        /* max-height: 82%; */
    }
</style>