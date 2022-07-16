<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import toggleOn from 'svelte-awesome/icons/toggleOn';
    import toggleOff from 'svelte-awesome/icons/toggleOff';

    /** @type {string} */
    export let text;

    /** @type {number} */
    export let number;

    /** @type {string} */
    export let darkmode;

    function clickMe() {
        number += 1;
        text = 'ayy ' + number;
    }

    /** @param event {{ detail: { text: string; }; }} */
    function doTick(event) {
        text = event.detail.text;
    }

</script>

<div class="practice">
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
</div>

<style>
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