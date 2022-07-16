
export class Game {
    /**
     * 
     * @param {string} name 
     */
    constructor(name) {
        this.name = name || 'A Stranger';
        this.tickrate = 1000;
        this.exp = 0;
    }

    tick() {
        this.exp++;
        return 'tock ' + this.exp;
    }
};
