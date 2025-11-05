import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
	plugins: [sveltekit(), yaml()],
	test: {
		include: ['tests/**/*.{test,spec}.{js,ts}'],
		environment: 'happy-dom',
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			include: ['src/lib/**/*.{js,ts}'],
			exclude: [
				'src/lib/**/*.spec.{js,ts}',
				'src/lib/**/*.test.{js,ts}',
				'**/*.d.ts',
				'**/*.config.*'
			],
			thresholds: {
				lines: 80,
				functions: 80,
				branches: 75,
				statements: 80
			}
		},
		globals: true
	}
});
