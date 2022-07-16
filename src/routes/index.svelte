<script>

    import Footer from '$lib/footer.svelte';
    import Header from '$lib/header.svelte';
    import Navbar from '$lib/navbar.svelte';
    // import View from '$lib/view.svelte';

    import Icon from 'svelte-awesome/components/Icon.svelte';
    import toggleOn from 'svelte-awesome/icons/toggleOn';
    import toggleOff from 'svelte-awesome/icons/toggleOff';

    function toggle() {
        darkmode = !darkmode;
        window.document.body.classList.remove(theme);
        theme = darkmode ? "newdark" : "newlight";
        window.document.body.classList.add(theme);
    }

    function clickMe() {
        number += 1;
        text = 'ayy ' + number;
    }

    /**
     * @param event {{ detail: { text: string; }; }}
     */
    function doTick(event) {
        text = event.detail.text;
    }

    // Bound values
    let darkmode = true;
    let menu = "practice";

    // Derived values
    let text = "click me";
    let theme = darkmode ? "newdark" : "newlight";
    $: text = menu + " menu";

    // User Data
    let number = 0;
    let level = 1;

</script>

<svelte:head>
    <title>TomeClicker</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="{theme}">
    <Header {number} {level}/>
    <div class="thebutton">
        <button on:click={clickMe}>
            {#if darkmode}
                <Icon scale={3} data={toggleOn}/>
            {:else}
                <Icon scale={3} data={toggleOff}/>
            {/if}
            <br>{text}
        </button>
    </div>
    <!-- <View bind:number bind: bind:darkmode/> -->
    <Navbar bind:menu on:message={doTick}/>
    <Footer bind:darkmode on:message={toggle}/>
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

    .newdark {
        --bg: #2d384eff;
        --alt-bg: #1e2534ff;
        --text: #57adefff;
        --green: #1aefc4ff;
        --red: #ffa047ff;
    }

    .newlight {
        --bg: #97a6c3ff;
        --alt-bg: #a4b1cbff;
        --text: #0c4f83ff;
        --green: #08725dff;
        --red: #cc6300ff;
    }

    .light {
        --bg: #d5d3d9ff;
        --alt-bg: #b6b3bdff;
        --text: #1e1c21ff;
        --red: #c14b1fff;
        --green: #406354ff;
    }

    .dark {
        --bg: #28262cff;
        --alt-bg: #1e1c21ff;
        --text: #cbc8d0ff;
        --red: #e27750ff;
        --green: #6b9e88ff;
    }

    /* Red and Green Color text */
    em {
        color: var(--green);
        font-style: normal;
        font-weight: 400;
        transition: color 1s cubic-bezier(0,.5,0,1);
    }

    strong {
        color: var(--red);
        font-style: normal;
        font-weight: 500;
        transition: color 1s cubic-bezier(0,.5,0,1);
    }

    /* The Button */

    .thebutton {
        flex: 1;
        flex-direction: column;
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