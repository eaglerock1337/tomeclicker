<script>
    import { Config } from '$lib/config.js';
    import { Game } from '$lib/game.js';

    import Header from '$lib/header.svelte';
    import Navbar from '$lib/navbar.svelte';
    import View from '$lib/view.svelte';

    // Config values
    let config = new Config("prussian-blue", true);

    // Game values
    let game = new Game();

    // Color theme
    let theme = "";
    $: theme = config.getTheme();
    $: game.text = theme;
</script>

<svelte:head>
    <title>TomeClicker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</svelte:head>

<div class="{theme}">
    <Header bind:game/>
    <View bind:game bind:config/>
    <Navbar bind:game/>
</div>

<style>
    :root {
        font-size: 16px;
        background-color: #28262cff;
        width: 100%;
        height: 98vh;
    }

    :global(body) {
        display: flex;
        height: 100%;
        flex-direction: column;
    }

    :global(div) {
        display: flex;
        height: 100%;
        flex-direction: column;
    }

    /* Red and Green Color text */

    :global(em) {
        color: var(--green);
        font-style: normal;
        font-weight: 400;
        transition: color 1s cubic-bezier(0,.5,0,1);
    }

    :global(strong) {
        color: var(--red);
        font-style: normal;
        font-weight: 500;
        transition: color 1s cubic-bezier(0,.5,0,1);
    }

    /* proto-theme stuff...pull this into its own file later */

    .prussian-blue-dark {
        --bg: #2d384eff;
        --alt-bg: #1e2534ff;
        --text: #57adefff;
        --green: #1aefc4ff;
        --red: #ffa047ff;
    }

    .prussian-blue-light {
        --bg: #97a6c3ff;
        --alt-bg: #a4b1cbff;
        --text: #0c4f83ff;
        --green: #08725dff;
        --red: #cc6300ff;
    }

    .graphite-light {
        --bg: #d5d3d9ff;
        --alt-bg: #b6b3bdff;
        --text: #1e1c21ff;
        --red: #c14b1fff;
        --green: #406354ff;
    }

    .graphite-dark {
        --bg: #28262cff;
        --alt-bg: #1e1c21ff;
        --text: #cbc8d0ff;
        --red: #e27750ff;
        --green: #6b9e88ff;
    }

</style>