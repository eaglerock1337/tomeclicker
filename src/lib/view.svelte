<script>
    import Practice from '$lib/views/practice.svelte';
    // import Settings from 'views/settings.svelte';

    /**
     * @type string
     */
    export let menu;
</script>

<div class="view">
    <div class="page" class:active="{menu === 'practice'}">
        <Practice/>
    </div>
    <div class="page" class:active="{menu === 'settings'}">
        Settings page go here.
        <!-- <Settings/> -->
    </div>
</div>

<style>
    .view {
        color: var(--text);
        background-color: var(--bg);
        height: 100%;
    }

    .page {
        height: 100%;
        width: 100%;
        visibility: hidden;
    }

    .active {
        visibility: active;
    }
</style>