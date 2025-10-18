# tomeclicker

An open-source web-based incremental RPG game built with SvelteKit.

[![Play on GitHub Pages](https://img.shields.io/badge/play-github%20pages-blue)](https://eaglerock1337.github.io/tomeclicker/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## about

TomeClicker is an incremental game with RPG progression mechanics where players click to gain experience, level up, purchase upgrades, and eventually discover magical tomes. This is a passion project that combines classic incremental gameplay with a deep progression system and story elements.

## features

- **Click-based progression** - Earn EXP through active clicking
- **Upgrade system** - Purchase upgrades with diminishing returns for strategic progression
- **Level system** - Exponential level scaling with powerful bonuses
- **Save system** - Automatic saves to localStorage and cookies with encryption
- **Theme support** - Multiple color themes with light/dark mode variants
- **Mobile-optimized** - Touch-friendly interface with responsive design

## roadmap

See [PROPOSAL.md](PROPOSAL.md) for the complete modernization and enhancement roadmap, and [ref/OUTLINE.md](ref/OUTLINE.md) for the full game design document.

### current (v0.1.0 mvp)
- ✅ Basic clicking and upgrade mechanics
- ✅ Level system with exponential scaling
- ✅ Local save/load system
- ✅ Theme customization
- ✅ Hard reset functionality

### phase 1: polish & qol
- Enhanced UI feedback and visual polish
- Comprehensive documentation
- Production-ready code cleanup

### phase 2: technical modernization
- Full TypeScript migration
- Svelte 5 runes adoption
- Modular architecture refactoring

### phase 3: cloud saves & backend
- Backend API on Raspberry Pi K8s cluster
- Cloud save synchronization
- Anti-cheat system
- Leaderboards

### future: full game features
- Stats system (Strength, Agility, Willpower, etc.)
- Adventure zones with combat
- Equipment and loot system
- Retreat/prestige mechanics
- Tomes of Magic (endgame content)

## development

### prerequisites

- Node.js 18+ and npm
- Modern web browser

### setup

```bash
# Clone the repository
git clone https://github.com/eaglerock1337/tomeclicker.git
cd tomeclicker

# Install dependencies
npm install

# Start development server
npm run dev

# Or start and open in browser
npm run dev -- --open
```

### available scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Run TypeScript type checking
npm run check:watch  # Watch mode for type checking
npm run lint         # Run linter (Prettier + ESLint)
npm run format       # Format code with Prettier
npm run prepare      # Sync SvelteKit (runs automatically)
```

### project structure

```
tomeclicker/
├── src/
│   ├── lib/
│   │   ├── game.ts          # Main game logic
│   │   ├── config.ts        # Configuration/theme system
│   │   ├── views/           # Game view components
│   │   └── styles/          # CSS and theme definitions
│   └── routes/
│       └── +page.svelte     # Main application entry
├── docs/                    # Built static site (GitHub Pages)
├── PROPOSAL.md              # Detailed roadmap and architecture
├── ref/OUTLINE.md           # Complete game design document
└── CLAUDE.md                # Project guidelines for Claude Code
```

## deployment

### frontend (github pages)

The game is deployed as a static site to GitHub Pages at:
- **Preview**: https://eaglerock1337.github.io/tomeclicker/

Production deployment to `tomeclicker.marks.dev` is managed via ArgoCD on a Raspberry Pi Kubernetes cluster.

### build for deployment

```bash
# Build static site
npm run build

# Output in docs/ directory for GitHub Pages
ls docs/
```

## contributing

Contributions are welcome! This project uses:
- **TypeScript** for type safety
- **Svelte/SvelteKit** for the UI framework
- **Prettier** and **ESLint** for code formatting and linting

Please ensure your code:
- Passes type checking (`npm run check`)
- Follows formatting rules (`npm run lint`)
- Builds successfully (`npm run build`)

## technology stack

- **Framework**: SvelteKit 2.x with Svelte 5.x
- **Language**: TypeScript 5.x
- **Build Tool**: Vite 7.x
- **Deployment**: Static adapter for GitHub Pages
- **Icons**: lucide-svelte
- **Styling**: CSS with custom properties for theming

## license

This project is open source and available under the [MIT License](LICENSE).

## acknowledgments

Inspired by classic incremental games like Cookie Clicker, Antimatter Dimensions, and countless others in the genre.
