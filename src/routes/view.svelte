<script>
    /**
     * @type string
     */
    export let menu;
</script>

<div class="view">
    <div class="page" class:active="{menu === 'practice'}">
        Page go here later.
    </div>
</div>

<style>
    .view {
        color: var(--text);
        background-color: var(--bg);
        height: 100%;               
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
        display: flex;
        flex-direction: column;
        flex: 1 1 100px;
        height: 100%;
    }
    .thebutton button {
        color: var(--text);
        background-color: var(--bg);
        border: 0px;
        padding: 25px 50px 25px;
        font-family: JetBrains Mono, monospace;
        font-weight: 400;
        width: 100%;
        flex: 1 1 500px;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

</style>