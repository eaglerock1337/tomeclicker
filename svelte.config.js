import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
// const isProduction = process.env.NODE_ENV === 'production' && !isGitHubPages;

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: isGitHubPages ? 'docs' : 'build',
			assets: isGitHubPages ? 'docs' : 'build',
			fallback: null,
			precompress: false
		}),
		paths: {
			// No base path for production cluster deployment
			// Use /tomeclicker for GitHub Pages staging
			base: dev ? '' : isGitHubPages ? '/tomeclicker' : ''
		}
	}
};
