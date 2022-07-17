
export class Config {
    constructor() {
        this.darkmode = true;
        this.theme = 'prussian-blue';
    }

    toggleMode() {
        this.darkmode = !this.darkmode;
    }

    /** @param {boolean} isDarkmode */
    setMode(isDarkmode) {
        this.darkmode = isDarkmode;
    }
};
