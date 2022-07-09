<script>
    /**
     * @type number
     */
    export let number;
    /**
     * @type number
     */
    export let level;

</script>

<header>
    <div class="container">
        <div class="stat">EXP: {number}</div>
        <div class="title">TomeClicker</div>
        <div class="stat">Level: {level}</div>
    </div>
</header>

<style>
    header {
        background-color: var(--alt-bg);
        padding: 2px 2px;
        font-size: 1.2em;
        font-weight: 400;
        font-family: JetBrains Mono;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: var(--text);
        transition: color 1s cubic-bezier(0,.5,0,1), background-color 1s cubic-bezier(0,.5,0,1);
    }

    .container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .stat, .title {
        width: 100px;
        display: inline-flex;
        padding: 0px 5px;
        justify-content: center;

    }

    .title {
        font-family: Lato;
        font-weight: 700;
        font-size: 1.2em;
    }

    /* Red and Green Color text */
    em {
        color: var(--green);
        font-style: normal;
        font-weight: 400;
    }

    strong {
        color: var(--red);
        font-style: normal;
        font-weight: 500;
    }
</style>