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

# Run tests
npm test                # Run tests in watch mode
npm run test:run        # Run tests once
npm run test:ui         # Run tests with UI
npm run test:coverage   # Run tests with coverage report
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
- **GitHub Pages**: Builds to `docs/` with `/tomeclicker` base path when `GITHUB_PAGES=true`
- **Production**: Builds to `build/` with no base path for tomeclicker.marks.dev deployment
- Prerendering enabled for all routes
- Pre-commit hooks automatically build and commit docs/ for GitHub Pages

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
- **docs/** - GitHub Pages build output (auto-generated, do not edit manually)
  - Built by pre-commit hooks with `GITHUB_PAGES=true`
  - Served at https://eaglerock1337.github.io/tomeclicker
- **CLAUDE.md** - Development guidelines for Claude Code agents
- **README.md** - Project overview and quick start

## Development Notes

- The project uses TypeScript (game.ts, config.ts fully migrated; components partially migrated)
- Mobile-optimized with touch event handling to prevent zoom
- Test framework: Vitest with happy-dom
- Uses Vite as build tool with SvelteKit
- Svelte 5.39.6 installed but using Svelte 4 patterns (migration planned)

### Testing

- **Framework**: Vitest 3.x with happy-dom environment
- **Coverage**: Target 80%+ for core game logic (game.ts)
- **Test Structure**:
  - `tests/unit/` - Unit tests for core classes
  - `tests/integration/` - Integration tests for game flows
  - `tests/helpers/` - Test utilities and factories
- **Continuous Integration**: GitHub Actions runs tests on all pushes and PRs
- **Writing Tests**: Use the `GameBuilder` helper for creating test fixtures

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

### Versioning & Conventional Commits

**Semantic Versioning:**

TomeClicker follows [Semantic Versioning](https://semver.org/) with automated releases via `semantic-release`:

- **0.x.x** - Pre-v1, active development (current state)
- **1.0.0** - Cloud saves launched, core game loop complete
- **1.x.x** - Post-launch features (new tomes, adventure zones, etc.)
- **2.0.0** - Major redesign or breaking save format changes

**Conventional Commits:**

All commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) format. The pre-commit hook enforces this via `commitlint`.

**Commit message format:**

```
<type>: <description>

[optional body]

[optional footer]
```

**Version bump rules:**

```
Commit type        → Version bump
──────────────────────────────────────
feat:              → MINOR (0.1.0 → 0.2.0)  - New significant feature
fix:               → PATCH (0.1.0 → 0.1.1)  - Bug fix
perf:              → PATCH (0.1.0 → 0.1.1)  - Performance improvement
improvement:       → PATCH (0.1.0 → 0.1.1)  - Small enhancement to existing feature
refactor:          → PATCH (0.1.0 → 0.1.1)  - Code quality improvement
feat!:             → MAJOR (0.1.0 → 1.0.0)  - Breaking change
BREAKING CHANGE:   → MAJOR (0.1.0 → 1.0.0)  - Breaking change

docs:              → No release  - Documentation only
chore:             → No release  - Maintenance tasks
style:             → No release  - Code formatting
test:              → No release  - Test changes
ci:                → No release  - CI/CD changes
```

**Commit Message Style:**

IMPORTANT: Keep commit messages **succinct** with **short synopses** only.

- Do NOT use many lines of bullet points in commit bodies
- Keep it brief and to the point
- Short summary in the subject line only

**Examples:**

```
feat: add auto-adventure system
fix: resolve mobile scrolling on story page
improvement: add tooltip to upgrade buttons
perf: optimize game state serialization
refactor: extract adventure logic to separate class
test: add format and config tests (100% coverage)
feat!: redesign save system with cloud sync

BREAKING CHANGE: Save format changed, old saves cannot be loaded
```

**Bad Example (too verbose):**

```
test: comprehensive test coverage improvements

- Add 113 tests for format.ts utility functions
- Add 62 tests for Config class with localStorage mocking
- Achieve 100% coverage on calculations.ts
- Achieve 100% coverage on format.ts
- Achieve 97.36% coverage on config.ts
```

**Good Example (succinct):**

```
test: add format and config tests (100% coverage)
```

**Release Process:**

Releases are **fully automated** via GitHub Actions when you push to `main`:

1. **During development**: Make commits following conventional format on feature branches
2. **Open PR**: Create pull request to main
3. **Merge to main**: Squash merge or regular merge (use conventional format for squash commit message)
4. **Automated release**: GitHub Actions workflow triggers automatically:
   - Analyzes conventional commits since last release
   - Determines version bump type (MAJOR/MINOR/PATCH)
   - Updates `package.json` version
   - Generates/updates `CHANGELOG.md`
   - Creates git commit authored by "Autobob <bob@marks.dev>" with message: `chore(release): X.Y.Z [skip ci]`
   - Pushes release commit back to main
   - Creates Git tag (e.g., `v0.2.0`)
   - Creates GitHub release with changelog notes

**Pre-release branches** (optional, for future use):

- `alpha` branch → versions like `0.2.0-alpha.1`
- `beta` branch → versions like `0.2.0-beta.1`
- `main` branch → stable versions like `0.2.0`

**Git Tags:**

- Every release creates a permanent Git tag (e.g., `v0.2.0`)
- These tags serve as long-term stable build references
- Use for Docker image tags, deployments, rollbacks

**GitHub Token:**

- Uses automatic `GITHUB_TOKEN` provided by GitHub Actions
- No custom token setup required
- Permissions configured in workflow file

### Code Quality Standards

When making changes, ensure:

- **TypeScript**: Strict typing, no `any` types
- **Svelte 5**: Use runes ($state, $derived, $effect) when refactoring
- **Build**: `npm run build` succeeds without errors
- **Type Check**: `npm run check` passes
- **Tests**: `npm run test:run` passes with all tests green
- **Coverage**: Maintain or improve test coverage for modified files
- **Performance**: Keep bundle sizes small (< 100KB gzipped target)
- **Mobile**: Test on mobile viewports

### Pre-commit Hooks & CI/CD

**Pre-commit Hooks** (using Husky):

The repository uses pre-commit hooks to enforce quality standards locally before code is committed:

1. Type checking (`npm run check`)
2. Linting (`npm run lint`)
3. Tests (`npm run test:run`)

**To bypass hooks** (not recommended): `git commit --no-verify`

**GitHub Actions CI/CD**:

- **Test & Validate** (`.github/workflows/test.yml`): Runs on all PRs
  - Runs type check, lint, tests, and coverage
  - Uploads coverage reports to Codecov on PRs

- **Semantic Release** (`.github/workflows/release.yml`): Runs on push to main
  - Analyzes conventional commits to determine version bump
  - Updates package.json and CHANGELOG.md
  - Creates Git tags and GitHub releases
  - Uses PAT (`SEMANTIC_RELEASE_TOKEN`) to bypass branch protection

- **Deploy to GitHub Pages** (`.github/workflows/deploy-preview.yml`): Deploys to GitHub Pages
  - **Push to main**: Builds and deploys to `gh-pages` branch (dev environment)
  - **PR labeled `preview`**: Builds and deploys to `preview` branch (testing environment)
  - GitHub Pages serves from `gh-pages` branch by default (dev site)
  - Manually switch to `preview` branch in repo settings to test PRs on mobile
  - Access at: `https://eaglerock1337.github.io/tomeclicker/`

- **Build & Deploy** (`.github/workflows/build-and-deploy.yml.disabled`): Future production workflow
  - Multi-arch Docker builds (arm/v7, arm64)
  - Updates happy-little-cloud K8s manifests for ArgoCD
  - Currently disabled, ready for tomeclicker.marks.dev production deployment

**Deployment Architecture**:

- **Source code**: Committed to `main` branch (no build artifacts)
- **Dev site**: Auto-deployed to `gh-pages` branch on every push to main
- **Preview site**: Deployed to `preview` branch when PR labeled with `preview`
- **Production site**: tomeclicker.marks.dev (via ArgoCD, future)

### Recent Major Implementations (2025-10-19)

**Interface Polish & UX Improvements:** ✅ **COMPLETED**

- Subtle progress bar in header (Level 2+, tracks next unlock)
- Seamless practice page button (100% space utilization)
- Desktop scrolling fixes (Story/Settings pages)
- Upgrades page enhancements (benefit display, "Coming Soon" section)
- Hard reset removal from Settings (moving to dedicated save page)

**Production Deployment Infrastructure:** ✅ **COMPLETED**

- Complete Docker containerization with security hardening
- GitHub Actions CI/CD pipeline for multi-arch builds
- Helm chart following marks.dev patterns (Traefik ingress)
- ArgoCD GitOps configuration for tomeclicker.marks.dev
- Environment-aware SvelteKit configuration

**Test Infrastructure & Pre-commit Hooks:** ✅ **COMPLETED** (2025-10-21)

- Vitest test framework with happy-dom environment
- 59 comprehensive tests for Game class (60.82% coverage)
- GameBuilder test helper with fluent API
- Pre-commit hooks for quality enforcement (type check, lint, test, build)
- GitHub Actions validation pipeline (ensures hooks ran properly)
- Build output configured to go directly to docs/ for GitHub Pages
