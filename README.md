# tomeclicker

An open-source web-based incremental RPG game built with SvelteKit.

[![Play on marks.dev](https://img.shields.io/badge/play-marks.dev-blue)](https://tomeclicker.marks.dev)
[![Preview on GitHub Pages](https://img.shields.io/badge/preview-github%20pages-blue)](https://tomeclicker-dev.marks.dev)
[![License](https://img.shields.io/badge/license-BSD%203-Clause-green)](LICENSE)

## about

TomeClicker is an incremental game with RPG progression mechanics where players click to gain experience, level up, purchase upgrades, and prepare for adventure. This is a passion project that combines classic incremental gameplay with a deep progression system and story elements, and is my contribution to the genre.

## features

- **Click-based progression** - Earn EXP through active clicking
- **Upgrade system** - Purchase upgrades with diminishing returns for strategic progression
- **Level system** - Exponential level scaling with powerful bonuses
- **Idle progression** - Step away and let the game play for you
- **Save system** - Automatic saves to localStorage and cookies with savefile export/import
- **Theme support** - Multiple Bob Ross-inspired color themes with light/dark mode variants
- **Mobile-optimized** - Touch-friendly interface with responsive design
- **Desktop-optimized** - Desktop-friendly interface for more interactive gameplay

## roadmap

### current status

- ✅ Basic clicking and upgrade mechanics
- ✅ Level system with exponential scaling
- ✅ Local save/load system
- ✅ Theme customization
- ✅ Hard reset functionality

### phase 1: MVP (minimum viable product)

- First sections of game complete
- Basic clicking and upgrade mechanics
- First idle actions and upgrades
- RPG Stats and training
- Storyline beginnings
- 30+ minutes of active gameplay, 2+ hours of idle gameplay
- Refactor project with proper design principles
- Cleanup other technical debt

### future: full game features

- Stats system (Strength, Agility, Willpower, etc.)
- Adventure zones with combat
- Equipment and loot system
- Retreat/prestige mechanics
- Questing and higher-order prestige
- Learn about the Tomes and unlock endgame content

## development

### prerequisites

- Node.js 20+ and npm
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

# or start and open in browser
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

## deployment

### frontend

The game is hosted in multiple places:

- **Production**: [tomeclicker.marks.dev](https://tomeclicker.marks.dev) (hosted on Happy Little Cloud)
- **Staging**: tomeclicker-stage.marks.dev (planned)
- **Development**: [tomeclicker-dev.marks.dev](https://tomeclicker-dev.marks.dev) (hosted on GitHub Pages)

Production deployment is managed via GitHub Actions and ArgoCD and is hosted on my Raspberry Pi Kubernetes cluster.
Development deployment is managed and hosted by GitHub Pages under my account at `eaglerock1337.github.io`.

### build for deployment

```bash
# Build static site for production
npm run build
ls build/ # Outputs in build/ directory

# Build static site for GitHub Pages
GITHUB_PAGES=true npm run build
ls docs/  # Output in docs/ directory
```

## technology stack

- **Framework**: SvelteKit 2.x with Svelte 5.x
- **Language**: TypeScript 5.x
- **Build Tool**: Vite 7.x
- **Deployment**: Static adapter for GitHub Pages
- **Icons**: lucide-svelte
- **Styling**: CSS with custom properties for theming
- **CI/CD**: GitHub Actions and ArgoCD
- **Infrastructure**: Docker on Kubernetes

## license

This project is open source and available under the [BSD 3-Clause License](LICENSE).

## acknowledgments

Inspired by classic incremental games like Cookie Clicker, Antimatter Dimensions, NGU Idle, Idling to Rule the Gods, Grimoire, and countless others in the genre.

Also inspired by Bob Ross and the joy of happy little accidents.
