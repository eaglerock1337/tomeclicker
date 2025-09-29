# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TomeClicker is an open-source web-based incremental game built with SvelteKit. The game features an RPG-style progression system where players click to gain experience, level up, train stats, adventure, and eventually discover magical tomes.

## Development Commands

```bash
# Start development server
npm run dev

# Start development server and open in browser
npm run dev -- --open

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check

# Watch mode type checking
npm run check:watch

# Lint code (Prettier + ESLint)
npm run lint

# Format code
npm run format

# Prepare project (sync SvelteKit)
npm run prepare
```

## Architecture

### Core Game Classes

- `Game` class (`src/lib/game.js`): Main game state including exp, level, menu navigation, and progression conditions
- `Config` class (`src/lib/config.js`): Handles theme and UI configuration

### Component Structure

- **Main Layout**: `src/routes/index.svelte` - Root component with responsive layout and theme system
- **Core Components**:
  - `src/lib/header.svelte` - Game header (shows when exp > 10)
  - `src/lib/navbar.svelte` - Navigation menu (shows when exp > 50)
  - `src/lib/view.svelte` - Main content area with view switching
- **Views**: `src/lib/views/` - Individual game screens (practice, settings, story)

### Game Progression System

The game uses a tiered unlock system based on experience points:

- Header unlocks at 10+ exp
- Menu navigation unlocks at 50+ exp
- Level calculation: `Math.floor(Math.log10(exp) / 3) + 1`

### Build Configuration

- Uses `@sveltejs/adapter-static` for static site generation
- Outputs to `docs/` directory for GitHub Pages deployment
- Base path configured as `/tomeclicker` for GitHub Pages
- Prerendering enabled for all routes

### Theme System

- CSS custom properties-based theming
- Two themes: "prussian-blue" and "graphite"
- Light/dark mode variants for each theme
- Theme classes applied dynamically to root element

### Game Design Reference

The `ref/OUTLINE.md` file contains the complete game design document with detailed progression mechanics, stats system, and future features including adventure zones, equipment, retreats, and the tome magic system.

## Development Notes

- The project uses TypeScript checking via JSDoc comments
- Mobile-optimized with touch event handling to prevent zoom
- No test framework currently configured
- Uses Vite as build tool with SvelteKit

### Goals

- Iterate and flesh out game design as outlined in `ref/OUTLINE.md`
- Migrate to Typescript and use the latest-and-greatest version of Svelte
- Implement mechanics for saving and loading games locally and through a cloud save

### TODOs for next time

- Fix formatting and styling on upgrades page
- Remove debug EXP/Click display from practice page
- Enhance click text with contextual help messages
- Add level-up ready notification in click text
- Implement hard reset functionality with warning
- Refactor upgrades into separate class under Game
- Create modular class structure for better code organization
