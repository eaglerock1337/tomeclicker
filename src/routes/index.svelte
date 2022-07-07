<script>
    import Footer from './footer.svelte';
    import Header from './header.svelte';
    import Navbar from './navbar.svelte';

    import Icon from 'svelte-awesome/components/Icon.svelte';
    import toggleOn from 'svelte-awesome/icons/toggleOn';
    import toggleOff from 'svelte-awesome/icons/toggleOff';

    function toggle() {
        darkmode = !darkmode;
        theme = darkmode ? "dark" : "light"
        window.document.body.classList.toggle(theme);
    }

    function clickMe() {
        number += 1;
        text = 'ayy ' + number;
    }

    // Bound values
    let darkmode = true;
    let menu = "2";

    // Derived values
    let text = "click me";
    let theme = "";
    $: text = 'menu ' + menu;
    $: theme = darkmode ? "newdark" : "newlight";

    // User Data
    let number = 0;
    let level = 1;

</script>

<svelte:head>
    <title>TomeClicker</title>
</svelte:head>

<div class="{theme}">
    <Header number={number} level={level}/>
    <div class="thebutton">
        <button on:click={clickMe}>
            {#if darkmode}
                <Icon scale="3" data={toggleOn}/>
            {:else}
                <Icon scale="3" data={toggleOff}/>
            {/if}
            <br>{text}
        </button>
    </div>
    <Navbar bind:menu/>
    <Footer bind:darkmode on:message={toggle}/>
</div>

<style>
    :root {
        font-size: 16px;
        background-color: #28262cff;
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
        transition: color 1s;
    }

    strong {
        color: var(--red);
        font-style: normal;
        font-weight: 500;
        transition: color 1s;
    }

    /* The Button */

    .thebutton button {
        color: var(--text);
        background-color: var(--bg);
        border: 0px;
        padding: 25px 50px 25px;
        font-family: JetBrains Mono;
        font-weight: 400;
        width: 100%;
        height: 400px;
        display: center;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: color 1s, background-color 1s;
    }

</style>