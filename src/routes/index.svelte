<script>
    import Footer from './footer.svelte';
    import Header from './header.svelte';
    import Navbar from './navbar.svelte';

    function setText(event) {
        let newText = "Menu: {event.detail.newMenu}"
    }

    function toggle() {
        darkmode = !darkmode;
        window.document.body.classList.toggle('dark');
    }

    let text = "";
    let newText = "click me";
    let darkmode = true;
    let menu = "2";
    let number = 0;
    let level = 1;

    $: text = newText;

    function clickMe() {
        number += 1;
    }
</script>

<svelte:head>
    <title>TomeClicker</title>
</svelte:head>

<div class="{darkmode ? "dark" : "light"}">
    <Header 
        number={number}
        level={level}    
    />
    <div class="thebutton">
        <button on:click={clickMe}>{text}</button>
    </div>
    <Navbar bind:curMenu={menu} on:message={setText}/>
    <Footer darkmode={darkmode} on:message={toggle}/>
</div>

<style>
    :root {
        font-size: 16px;
        --bg: #d5d3d9ff;
        --alt-bg: #b6b3bdff;
        --text: #1e1c21ff;
        --red: #c14b1fff;
        --green: #406354ff;
        background-color: #28262cff;
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
        transition: color 1s, background-color 1s;
    }

</style>