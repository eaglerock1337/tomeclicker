<script>
    import { createEventDispatcher } from 'svelte';

    /** @type {boolean | null | undefined} */
    export let darkmode;

    const dispatch = createEventDispatcher();

    function toggle() {
        dispatch('message');
    }
</script>

<div class="footer">
    <footer>
        <div class="item">
            something
        </div>
        <div class="item">
            something
        </div>
        <div class="item">
            theme
            <input type="checkbox" bind:checked={darkmode} on:click={toggle} />
        </div>
    </footer>
</div>

<style>
    .footer {
        flex-direction: column;
        flex: 0;
    }

    footer {
        background-color: var(--alt-bg);
        padding: 2px 2px;
        font-size: 1.2em;
        font-weight: 400;
        font-family: JetBrains Mono, monospace;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: var(--text);
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .item {
        align-items: center;
        flex-direction: row;
    }
</style>