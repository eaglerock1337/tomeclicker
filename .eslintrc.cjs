module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	ignorePatterns: [
		'*.svelte', // Temporary: svelte plugin has circular dependency issue with ESLint 8
		'docs/', // Built files (GitHub Pages)
		'build/', // Built files (production)
		'.svelte-kit/', // Generated files
		'coverage/' // Test coverage reports
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
