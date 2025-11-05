/// <reference types="svelte" />
/// <reference types="vite/client" />

// Declaration for YAML imports via @rollup/plugin-yaml
declare module '*.yaml' {
	const content: Record<string, any>;
	export default content;
}
