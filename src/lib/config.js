export class Config {
    /** 
     * @param {string} theme
     * @param {boolean} darkmode 
     */
    constructor(theme, darkmode) {
        this.darkmode = darkmode;
        this.theme = theme;
    }

    getTheme() {
        const shade = this.darkmode ? "dark" : "light";
        return this.theme + "-" + shade;
    }
};
