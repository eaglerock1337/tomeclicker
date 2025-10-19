# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TomeClicker is an open-source web-based incremental game built with SvelteKit. The game features an RPG-style progression system where players click to gain experience, level up, train stats, adventure, and eventually discover magical tomes.

### Deployment Architecture

- **Frontend**: Static SvelteKit build
  - **Preview/Staging**: GitHub Pages at `/tomeclicker` path
  - **Production**: `tomeclicker.marks.dev` via ArgoCD GitOps deployment
- **Backend** (planned): Self-hosted Raspberry Pi Kubernetes cluster
  - Current cluster serves `marks.dev` ✅
  - ArgoCD for GitOps deployments
  - No shared storage currently (local PVs with node affinity)
  - Planned: Raspberry Pi 5 + NVMe storage (Linux support pending)
  - See `design/PROPOSAL.md` for detailed infrastructure plans

### Related Repositories

- **tomeclicker** (this repo): Game application code
- **happy-little-cloud**: K8s manifests, ArgoCD applications, infrastructure config
- **nix-config**: System configuration, Raspberry Pi setup, NixOS configs

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

- `Game` class (`src/lib/game.ts`): Main game state including exp, level, menu navigation, and progression conditions
- `Config` class (`src/lib/config.ts`): Handles theme and UI configuration

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

The `design/OUTLINE.md` file contains the complete game design document with detailed progression mechanics, stats system, and future features including adventure zones, equipment, retreats, and the tome magic system.

### Documentation Architecture

- **design/** - Internal design documents and source of truth
  - `OUTLINE.md` - Complete game design document
  - `PROPOSAL.md` - Technical roadmap and modernization plans
  - `tomes.yaml` - All 50 Tomes structure and metadata
  - `tiers.yaml` - Tome tier hierarchy
  - `design-analysis-doc.md` - Design philosophy and architectural notes
- **docs/** (future) - Public-facing documentation
  - Player guides, API documentation, architecture docs
- **CLAUDE.md** - Development guidelines for Claude Code agents
- **README.md** - Project overview and quick start

## Development Notes

- The project uses TypeScript (game.ts, config.ts fully migrated; components partially migrated)
- Mobile-optimized with touch event handling to prevent zoom
- No test framework currently configured
- Uses Vite as build tool with SvelteKit
- Svelte 5.39.6 installed but using Svelte 4 patterns (migration planned)

### Current Project State

- **TypeScript**: Partial migration (core classes done, components need migration)
- **Svelte**: Using v5 but with v4 patterns (runes not yet adopted)
- **Architecture**: Monolithic Game class (~500 lines, needs refactoring)
- **Save System**: Basic localStorage + cookies (cloud saves planned)
- **Architecture Decision (2025-10-18)**: Hybrid state management
  - Core game logic in testable TypeScript classes
  - Svelte 5 runes for UI reactivity
  - Backend-ready for Phase 3

### Roadmap

See `design/PROPOSAL.md` for the complete modernization and enhancement roadmap, including:
- **Phase 1.x (Current)**: Immediate QoL improvements
  - Upgrades menu: Fix mobile navigation issues
  - Story page: Center layout, add navigation system
  - Settings/Saves: Polish layout, remove test buttons
- **Phase 1.5 (Next)**: Test infrastructure (ESLint, Vitest, CI/CD)
- **Phase 2**: Technical modernization (Svelte 5, TypeScript, modular architecture)
- **Phase 3**: Cloud save system on Raspberry Pi Kubernetes cluster

### Goals

- Iterate and flesh out game design as outlined in `design/OUTLINE.md`
- Complete migration to TypeScript and Svelte 5 (with runes)
- Implement modular class structure for better maintainability
- Deploy backend services to home Raspberry Pi Kubernetes cluster
- Implement cloud save system with anti-cheat validation

## Workflow & Git Strategy

### Slash Commands

**Multi-Agent Collaboration:**

- **`/1:1 <agent>`**: One-on-one meeting with a specific agent for deep domain expertise
  - Use for focused discussions, context updates, expert consultation
  - Available agents: staffy-boi, fronty-boi, gamey-boi, story-boi, docy-boi, backy-boi, sre-boi, testy-boi, secury-boi, learny-boi, designy-boi

- **`/scrum <topic>`**: Quick full-team standup for fast feedback
  - 2-4 sentences per agent, surface-level validation
  - All agents self-select based on relevance
  - Use for: "Does this sound okay?" or "Any concerns?"

- **`/huddle [agents] <topic>`**: Deep multi-agent collaboration session
  - Full team OR targeted agents, paragraphs of detailed discussion
  - Agents build on each other's ideas, in-depth problem solving
  - Use for: "Let's design this together" or "How should we approach this?"

- **`/debrief`**: Synchronize conversation context across all agent configurations
  - Updates agent files, commands, reference docs with session learnings
  - Run after scrums, huddles, 1:1s, or major decisions
  - Ensures future sessions have current context

- **`/demo <PR|branch|commit>`**: Interactive PR demonstration with live dev server
  - Walk through commits one-by-one with agent commentary
  - Test changes interactively in dev environment
  - Supports frontend, backend, and infrastructure changes

**Implementation:**

- **`/thinky-time`**: Deep work mode for comprehensive PRs with multiple file changes
  - Use for feature implementation, refactoring, migrations
  - Make logical commits authored by Claude during branch work
  - PRs will be reviewed with full commit history
  - Final merge will be squashed into user-authored commit

### Branch & PR Strategy

- Feature branches for all work
- Commits on branches are authored by Claude with signature:
  ```
  🤖 Generated with [Claude Code](https://claude.com/claude-code)

  Co-Authored-By: Claude <noreply@anthropic.com>
  ```
- PRs maintained for session history and review
- Squash merge to main branch (final commit authored by user)
- This keeps main branch clean while preserving work history in PRs

### Code Quality Standards

When making changes, ensure:
- **TypeScript**: Strict typing, no `any` types
- **Svelte 5**: Use runes ($state, $derived, $effect) when refactoring
- **Build**: `npm run build` succeeds without errors
- **Type Check**: `npm run check` passes
- **Performance**: Keep bundle sizes small (< 100KB gzipped target)
- **Mobile**: Test on mobile viewports
