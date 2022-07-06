<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function toggle() {
        dispatch('message');
    }
</script>

<footer>
    <div class="item">
    something
    </div>
    <div class="item">
    something
    </div>
    <div class="theme-switch-wrapper">
    theme
    <input type="checkbox" on:click={toggle} />
    <div class="slider round"></div>
</footer>

<style>
    footer {
        background-color: var(--alt-bg);
        padding: 2px 2px;
        font-size: 1.2em;
        font-weight: 400;
        font-family: JetBrains Mono;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: var(--text);
        transition: color 1s, background-color 1s;
    }
</style>