import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

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
			base: ''
		}
	}
};
