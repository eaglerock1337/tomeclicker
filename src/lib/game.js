export class Game {
    /** @param {string} [name] */
    constructor(name) {
        this.name = name || 'A Stranger';
        this.tickrate = 1000;
        this.exp = 0;
        this.tick = 0;
        this.text = "click me";
        this.menu = "practice";
    }

    /** Derivative Getters */

    get level() {
        return Math.floor(Math.log10(this.exp) / 3) + 1;
    }

    /** Condiitionals */

    showHeader() {
        return this.exp > 10;
    }

    showMenu() {
        return this.exp > 50;
    }
};
