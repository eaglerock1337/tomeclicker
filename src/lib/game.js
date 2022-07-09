/**
 * 
 * @param {string} name 
 */
export const Game = function(name) {
    this.name = name || 'A Stranger';
    this.tickrate = 1000;
    this.exp = 0;
};

Game.prototype.tick = () => {
    return 'tock';
};