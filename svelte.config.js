import adapter from '@sveltejs/adapter-static';
import { execSync } from 'node:child_process';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
// eslint-disable-next-line no-unused-vars
const isProduction = process.env.NODE_ENV === 'production' && !isGitHubPages;
const commit =
	process.env.GITHUB_SHA ||
	process.env.VERCEL_GIT_COMMIT_SHA ||
	execSync('git rev-parse --short HEAD').toString().trim();

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: isGitHubPages ? 'docs' : 'build',
			assets: isGitHubPages ? 'docs' : 'build',
			fallback: null,
			precompress: false
		}),
		version: {
			name: commit
		},
		paths: {
			// No base path for production cluster deployment
			// Use /tomeclicker for GitHub Pages staging
			base: dev ? '' : isGitHubPages ? '/tomeclicker' : ''
		}
	}
};
