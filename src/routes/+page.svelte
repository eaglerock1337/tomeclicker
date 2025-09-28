<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        document.addEventListener('touchstart', function (event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        }, { passive: false });

        return () => {
            document.removeEventListener('touchstart', function (event) {
                if (event.touches.length > 1) {
                    event.preventDefault();
                }
            });
        };
    });

    import { Config } from '$lib/config';
    import { Game } from '$lib/game';

    import Header from '$lib/header.svelte';
    import Navbar from '$lib/navbar.svelte';
    import View from '$lib/view.svelte';

    // Config values
    let config = new Config("prussian-blue", true);

    // Game values
    let game: Game;

    // Initialize game in browser only
    onMount(() => {
        game = new Game();
        game.loadFromCookies();
    });

    // Color theme
    let theme = "";
    $: theme = config.getTheme();
</script>

<svelte:head>
    <title>TomeClicker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Lato:wght@100;300;400;700&family=Tangerine&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
</svelte:head>

<div class="app {theme}">
    {#if game}
        {#if game.showHeader()}
            <Header bind:game/>
        {/if}
        <main class="main-content">
            <View bind:game bind:config/>
        </main>
        {#if game.showMenu()}
            <footer class="footer">
                <Navbar bind:game/>
            </footer>
        {/if}
    {:else}
        <div class="loading">
            <h1>Loading TomeClicker...</h1>
        </div>
    {/if}
</div>

<style>
    :root {
        font-size: 18px;
        background-color: #28262cff;
    }

    :global(html, body) {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }

    .app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        height: 100dvh; /* Dynamic viewport height for mobile */
        width: 100vw;
        overflow: hidden;
    }

    .main-content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        /* Safe area padding for mobile devices */
        padding-bottom: env(safe-area-inset-bottom, 0);
    }

    .footer {
        flex-shrink: 0;
        /* Ensure footer stays above device UI on mobile */
        padding-bottom: env(safe-area-inset-bottom, 0);
        position: relative;
        z-index: 100;
    }

    .loading {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text);
        font-family: Lato, sans-serif;
        font-weight: 300;
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