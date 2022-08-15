# tomeclicker

An open-source web-based incremental game.

I've been wanting to make my own incremental game pretty much since the genre was invented, so here it is.

## about

This is a game idea I've had floating around in my head since I was a teenager, and didn't even really have the genre of the game in mind. Since the inception of the incremental game genre, it became clear my ideas were well-suited for this type of game.

## mvp

My first true iteration of the game I'm calling version `0.1.0 alpha` and designating as my MVP (minimim viable product) release. The following will be included in the MVP release:

- the basic incremental game with at least 30 minutes of active gameplay
- the basic clicking, upgrade, and standard advancement system
- the first stable iteration of the game's UI
- basic gameplay settings (light vs dark mode, color themes, etc.)
- proper gameplay saving through browser cookies
- proper game saving and loading mechanics

## after mvp

Here are the main features I am hoping to build in after MVP is released:

- a high-score system and central game API for saving games
- a proper anti-cheating system for leaderboard gameplay
- the adventure mechanic, including active and idle adventuring and questing

There's much more to come, of course, as this is only the tip of the iceberg!

## development

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## building

To create a production version of tomeclicker:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
