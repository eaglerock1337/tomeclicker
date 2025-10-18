<script lang="ts">
    import { onMount } from 'svelte';

    import { Config } from '$lib/config';
    import { Game } from '$lib/game';

    import Header from '$lib/header.svelte';
    import Navbar from '$lib/navbar.svelte';
    import View from '$lib/view.svelte';

    import '$lib/styles/themes.css';

    // Config values
    let config = new Config("prussian-blue", true);

    // Game values
    let game: Game;

    onMount(() => {
        game = new Game();

        // Load saved data
        setTimeout(() => {
            if (game) {
                console.log('🔄 Attempting to load saved data...');
                const loadedFromLocalStorage = game.loadFromLocalStorage();
                if (!loadedFromLocalStorage) {
                    console.log('📱 LocalStorage failed, trying cookies...');
                    game.loadFromCookies();
                } else {
                    console.log('✅ Game loaded from localStorage');
                }
                console.log('🎮 Final game state after load attempt:', { exp: game.exp, lifetimeExp: game.lifetimeExp });
                game = game; // Force reactivity
            }
        }, 100);

        // Set up autosave every 15 seconds
        const autosaveInterval = setInterval(() => {
            if (game) {
                game.autoSave();
            }
        }, 15000);

        // Cleanup on component destroy
        return () => {
            clearInterval(autosaveInterval);
        };

        // Setup touch event handling for iOS double-tap prevention
        let lastTouchTime = 0;

        const handleTouchStart = (event: TouchEvent) => {
            // Allow pinch-zoom (multi-touch)
            if (event.touches.length > 1) {
                return;
            }

            // Prevent double-tap zoom by checking time between taps
            const currentTime = Date.now();
            const timeDiff = currentTime - lastTouchTime;
            lastTouchTime = currentTime;

            // If touches are too close together (< 300ms), prevent default
            if (timeDiff < 300) {
                event.preventDefault();
            }
        };

        document.addEventListener('touchstart', handleTouchStart, { passive: false });

        return () => {
            document.removeEventListener('touchstart', handleTouchStart);
        };
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
        /* Prevent double-tap zoom while allowing pinch-zoom */
        touch-action: manipulation;
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

    /* Theme definitions moved to src/lib/styles/themes.css */

</style>