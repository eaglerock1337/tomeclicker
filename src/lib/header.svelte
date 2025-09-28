<script lang="ts">
    import type { Game } from '$lib/game';
    export let game: Game;
</script>

<header>
    <div class="container">
        <div class="item">EXP: {game.exp}</div>
        <div class="item">Level: {game.level}</div>
    </div>
</header>

<style>
    header {
        background-color: var(--alt-bg);
        padding: 2px 2px;
        font-size: 1.2em;
        font-weight: 400;
        font-family: JetBrains Mono, monospace;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: var(--text);
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .item {
        min-width: 50px;
        display: inline-flex;
        padding: 0px 5px;
        text-align: center;
    }
</style>