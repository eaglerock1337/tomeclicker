export class Config {
	public darkmode: boolean;
	public theme: string;

	constructor(theme: string, darkmode: boolean) {
		this.darkmode = darkmode;
		this.theme = theme;
	}

	getTheme(): string {
		const shade = this.darkmode ? 'dark' : 'light';
		return this.theme + '-' + shade;
	}
}
