// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const dev = "github" === "development";

export default {
  kit: {
    adapter: adapter({
		// default options are shown. On some platforms
		// these options are set automatically — see below
		pages: 'docs',
		assets: 'docs',
		fallback: null,
		precompress: false,

		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte"
    }),

	paths: {
		// change below to your repo name
		base: dev ? "" : "/tomeclicker",
	},

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    }
  }
};
