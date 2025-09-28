// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const dev = "github" === "development";

export default {
  kit: {
    adapter: adapter({
		// default options are shown. On some platforms
		// these options are set automatically — see below
		pages: 'build',
		assets: 'build',
		fallback: null,
		precompress: false,
    }),
	paths: {
		// change below to your repo name
		base: dev ? "" : "/tomeclicker",
	},
    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    },
  }
};
