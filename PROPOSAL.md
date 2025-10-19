# TomeClicker Modernization & Enhancement Proposal

## Executive Summary

This proposal outlines a comprehensive plan to modernize and enhance TomeClicker, bringing it up to current best practices while preparing for long-term feature development. The work is divided into three phases: immediate fixes, technical modernization, and feature enhancement.

---

## Phase 1: Immediate Quality-of-Life Improvements

### Priority: High | Estimated Time: 1-2 days

These changes address current TODOs and polish the existing experience without requiring major refactoring.

#### 1.1 UI/UX Polish

**Upgrades Page Formatting**
- Fix grid layout responsiveness on mobile devices
- Ensure proper spacing and alignment of upgrade cards
- Improve special button styling consistency
- Add visual feedback for level-up availability

**Practice Page Cleanup**
- Remove debug EXP/Click display (currently visible in production)
- Clean up development artifacts
- Ensure proper text sizing and alignment

**Enhanced Click Feedback**
- Implement contextual help messages in click text
  - "level up available" → Already implemented
  - "upgrade available" → Already implemented
  - Add hints for next milestones (e.g., "50 more EXP unlocks upgrades")
  - Add achievement notifications
- Add level-up ready notification with pulsing animation or visual indicator

#### 1.2 Safety Features

**Hard Reset Functionality**
- Implement hard reset button in settings
- Add multi-step confirmation dialog with warning
- Preserve player name option during reset
- Clear all saves (localStorage and cookies)

---

## Phase 1.5: Quality Infrastructure

### Priority: High | Estimated Time: 3-5 days

**Added 2025-10-18**: This phase was inserted between Phase 1 and Phase 2 based on user feedback to establish quality guardrails before major refactoring work.

This phase sets up testing and code quality infrastructure to enable confident refactoring in Phase 2.

#### 1.5.1 Linting & Code Quality

**ESLint Setup**:
- Install and configure ESLint
- Add TypeScript ESLint plugin
- Add Svelte ESLint plugin
- Configure rules for code consistency
- Add `.eslintrc.js` with project-specific rules

**TypeScript Strict Mode**:
- Enable stricter compiler options
- Add `noImplicitAny`, `strictNullChecks`, etc.
- Fix any type errors that surface

**Prettier Integration**:
- Ensure ESLint and Prettier work together
- Configure auto-format on save

#### 1.5.2 Testing Framework Setup

**Vitest Configuration**:
1. Install Vitest and testing dependencies
2. Configure `vite.config.ts` for testing
3. Set up test file structure (`src/**/*.spec.ts`)
4. Configure code coverage reporting (target: 80%+)

**First Unit Tests**:
- Write tests for `Game` class core methods:
  - `calculateLevel(exp)` with edge cases
  - `getUpgradeCost()` with various tiers
  - `clickMultiplier` calculation
  - `save()` and `load()` functionality
- Establish testing patterns for future tests

**Component Testing** (optional for Phase 1.5):
- Set up Svelte Testing Library
- Write basic component tests
- Can be deferred to Phase 2 if time-constrained

#### 1.5.3 Pre-Commit Hooks

**Husky + lint-staged Setup**:
- Install Husky for Git hooks
- Configure lint-staged for pre-commit
- Run linting on staged files
- Run formatting on staged files
- Prevent commits with lint errors

**Pre-Push Hooks**:
- Run `npm run check` (type checking)
- Run `npm run test` (unit tests)
- Ensure builds succeed before push

#### 1.5.4 CI/CD Pipeline

**GitHub Actions Workflow**:
```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run check
      - run: npm run test
      - run: npm run build
      - uses: codecov/codecov-action@v3
```

**Branch Protection**:
- Require CI checks to pass before merge
- Require code review (optional)
- Enable auto-merge when checks pass

#### 1.5.5 E2E Testing Setup (Basic)

**Playwright Configuration**:
- Install Playwright
- Configure for Chromium, Firefox, Webkit
- Set up basic smoke tests:
  - Page loads successfully
  - Click button works
  - Navigation between views works
- Full E2E suite can grow in Phase 2

**Benefits of Phase 1.5**:
- Catch bugs before they reach production
- Enable confident refactoring in Phase 2
- Establish quality baseline
- Automated checks prevent regressions
- Test-driven development becomes possible

---

## Phase 2: Technical Modernization

### Priority: High | Estimated Time: 1-2 weeks

This phase brings the codebase up to modern standards and sets the foundation for complex feature development.

**Note**: Phase 2 now has a safety net from Phase 1.5 testing infrastructure.

#### 2.1 Svelte 5 Migration

**Current State:**
- Using Svelte 5.39.6 but with Svelte 4 patterns
- Missing Svelte 5 features: runes, snippets, improved reactivity

**Migration Tasks:**
1. **Adopt Svelte 5 Runes**
   - Replace `let` with `$state` for reactive variables
   - Replace `$:` with `$derived` for computed values
   - Use `$effect` for side effects instead of `$:` blocks
   - Update component props to use `$props()` destructuring

2. **Modernize Component Patterns**
   - Convert existing components to use new composition patterns
   - Leverage snippets for reusable template fragments
   - Implement better type safety with Svelte 5's improved TypeScript support

3. **Testing & Validation**
   - Ensure all functionality works post-migration
   - Verify reactivity behavior matches expectations
   - Test save/load functionality thoroughly

**Benefits:**
- Better performance (Svelte 5 is significantly faster)
- Improved developer experience with clearer reactivity
- Better TypeScript integration
- Smaller bundle sizes

#### 2.2 Full TypeScript Migration

**Current State:**
- game.ts and config.ts already in TypeScript
- Most Svelte components still use JSDoc-style typing
- Mixed .js and .ts files

**Migration Tasks:**
1. **Convert Remaining JavaScript Files**
   - Migrate all `.js` files to `.ts`
   - Add proper type definitions for all functions and variables
   - Create shared type definitions file (extend existing `src/lib/types/index.ts`)

2. **Enhance Type Safety**
   - Define interfaces for all game state objects
   - Add strict type checking for save/load serialization
   - Create type guards for runtime validation
   - Add generics where appropriate

3. **Update Svelte Components**
   - Convert all `<script>` tags to `<script lang="ts">`
   - Add proper prop types
   - Type all event handlers
   - Ensure all imports use proper types

4. **Configuration Updates**
   - Enable stricter TypeScript compiler options
   - Add type checking to build process
   - Set up pre-commit hooks for type checking

**Benefits:**
- Catch bugs at compile time instead of runtime
- Better IDE autocomplete and refactoring support
- Easier onboarding for new developers
- Self-documenting code

#### 2.3 Architecture Refactoring

**Current State:**
- Game logic concentrated in single `Game` class (500+ lines)
- Upgrades hardcoded in initialization method
- No separation of concerns for different game systems

**Refactoring Tasks:**
1. **Modular Class Structure**
   ```
   src/lib/
   ├── game.ts (main orchestrator, reduced size)
   ├── systems/
   │   ├── UpgradeSystem.ts
   │   ├── LevelSystem.ts
   │   ├── ExperienceSystem.ts
   │   ├── StatSystem.ts (future)
   │   ├── AdventureSystem.ts (future)
   │   └── SaveSystem.ts
   ├── config/
   │   ├── upgrades.ts (data-driven upgrade definitions)
   │   ├── levels.ts (level progression formulas)
   │   └── constants.ts
   └── types/
       ├── index.ts
       ├── upgrades.ts
       ├── stats.ts
       └── saves.ts
   ```

2. **System Separation**
   - **UpgradeSystem**: Manage all upgrade logic, costs, and effects
   - **LevelSystem**: Handle leveling calculations and bonuses
   - **ExperienceSystem**: Track EXP gains and multipliers
   - **SaveSystem**: Centralize all save/load/validation logic

3. **Data-Driven Design**
   - Move upgrade definitions to configuration files
   - Use JSON/YAML for game data that may change frequently
   - Implement upgrade effect system that's extensible
   - Support modding potential in the future

**Benefits:**
- Easier to find and modify specific game systems
- Better testability (can unit test individual systems)
- Reduced merge conflicts when working on different features
- Clearer dependencies between systems
- Easier to add new game mechanics

---

## Phase 3: Feature Enhancement

### Priority: Medium | Estimated Time: Ongoing

This phase implements the save system improvements outlined in the TODOs.

**UPDATED 2025-10-18:** Save system architecture finalized based on user direction during backy-boi 1:1 session.

#### 3.1 Enhanced Local Save System

**Current State:**
- Basic localStorage and cookie support
- Simple encryption/validation
- No versioning or migration system

**Enhancements:**
1. **Save Versioning**
   - Implement semantic versioning for save files
   - Create migration system for upgrading old saves
   - Add deprecation warnings for old save formats

2. **Save Type System (NEW - 2025-10-18)**
   - **Two Save Types:**
     - **Local-Only Saves:** Hand-editable, cheat-friendly, never leaderboard-eligible
     - **Server-Validated Saves:** Leaderboard-eligible, validated by server
   - **UI for Save Type Selection:**
     - Clear communication of trade-offs
     - Warning: Local-only saves can NEVER become server-validated
     - Visual distinction between save types
   - **Implementation:**
     - Add `saveType` field to save format
     - Add `saveId` field (null for local-only, UUID for server-validated)
     - Add `saveVersion` field for migration support

3. **JSON Blob Format (Cookie Clicker/Antimatter Dimensions Style)**
   - File-based saves, exportable/importable
   - Players can manually back up save files
   - Compatible with future cloud sync

4. **Auto-Save Improvements**
   - Configurable auto-save intervals
   - Visual feedback when auto-save occurs
   - Recovery from corrupted auto-saves
   - Detect and warn about save conflicts

#### 3.2 Cloud Save System

**UPDATED ARCHITECTURE (2025-10-18):**

**Key Design Principles:**
- Security via **server-side `saveId` tracking**, NOT client-side encryption
- Two save types: Server-validated (leaderboard) vs Local-only (cheat-friendly)
- JSON blob format (like Cookie Clicker/Antimatter Dimensions)
- Conflict resolution: Show both saves, recommend most progressed, user chooses

**Architecture:**
- REST API backend (NestJS or Fastify)
- **Database: PostgreSQL + JSONB** (MongoDB on table for Phase 3 discussion)
- User authentication (Email/OAuth - "sre-boi approved")
- Anti-cheat validation via server-side progression checks

**Implementation Phases:**

**Phase 3.2.1: Backend Infrastructure**
1. **API Design**
   - RESTful endpoints for save management
   - Authentication/authorization (coordinate with **secury-boi**)
   - Rate limiting (1 save per 5 seconds to prevent spam)
   - **saveId tracking and validation**

2. **Database Schema (PostgreSQL + JSONB)**
   ```sql
   users (
     id UUID PRIMARY KEY,
     email VARCHAR UNIQUE,
     password_hash VARCHAR,
     created_at TIMESTAMP,
     last_login TIMESTAMP
   )

   saves (
     id UUID PRIMARY KEY,
     user_id UUID REFERENCES users(id),
     save_id UUID UNIQUE, -- Generated on first upload
     save_data JSONB,     -- Full game state as JSON blob
     save_version INTEGER,
     created_at TIMESTAMP,
     updated_at TIMESTAMP,
     verified BOOLEAN DEFAULT FALSE,
     validation_errors JSONB
   )

   save_history (
     id UUID PRIMARY KEY,
     save_id UUID REFERENCES saves(id),
     save_data JSONB,
     created_at TIMESTAMP
   )

   leaderboard (
     -- Materialized view or separate table
     user_id UUID,
     highest_level INTEGER,
     total_exp BIGINT,
     verified BOOLEAN
   )
   ```

3. **Security (Coordinate with secury-boi)**
   - **saveId validation** (server tracks all valid saveIds)
   - Server-side progression validation (detect impossible jumps)
   - Encryption at rest (save_data stored encrypted)
   - HTTPS only (enforced by K8s Ingress)
   - Input sanitization (Prisma/TypeORM prevents SQL injection)
   - JWT token management
   - Rate limiting on auth and save endpoints

**Phase 3.2.2: Client Integration**
1. **Save Sync UI (Coordinate with fronty-boi)**
   - Login/registration interface
   - Cloud save management panel
   - Sync status indicators
   - **Conflict resolution interface:**
     - Show BOTH saves with comparison stats
     - Display: Total gameplay time, level, key milestones
     - **Recommend** save with most progress
     - **User chooses** which to keep (like Antimatter Dimensions)

2. **Sync Logic**
   - Compare local vs cloud timestamps
   - **No automatic merge** - user chooses on conflict
   - Offline mode support (local saves always available)
   - Automatic background sync when online

**Phase 3.2.3: Anti-Cheat System (Coordinate with secury-boi + gamey-boi)**
1. **saveId Tracking (Primary Security Mechanism)**
   - Server generates `saveId` on first cloud upload
   - Server stores: `(saveId, userId, createdAt, lastValidatedAt)`
   - Client stores `saveId` in save file
   - On upload: Server validates "Do I have this saveId?"
   - **Local-only saves never get saveId** (permanent ineligibility)

2. **Progression Validation (with gamey-boi)**
   - Time-based progression checks (EXP vs time-played)
   - Statistical anomaly detection (1000 levels in 5 seconds = impossible)
   - Expected EXP curves based on game mechanics
   - Validate level vs retreat count (gamey-boi defines rules)
   - Save history tracking for forensics

3. **Leaderboard System**
   - Only **verified saves** appear on leaderboard
   - Filter by progression milestones
   - Display player stats
   - Achievement showcase
   - **Local-only saves excluded** (permanent)

---

## Deployment Architecture

### Raspberry Pi Kubernetes Cluster

**Current Infrastructure:**
- Home-hosted Raspberry Pi Kubernetes cluster serving `marks.dev` ✅
- ArgoCD installed for GitOps deployments
- No shared storage (planned for future implementation)
- Self-managed deployment
- **Planned Hardware**: Raspberry Pi 5 + NVMe storage (Linux support pending)

**Deployment Strategy:**

#### Static Frontend - Dual Environment

**Preview/Staging Environment (GitHub Pages)**
- Continue using GitHub Pages for preview builds
- Path: `/tomeclicker` (configured in `svelte.config.js`)
- Automatic deployment via GitHub Actions on push to main
- CDN benefits for global distribution
- Zero hosting cost

**Production Environment (tomeclicker.marks.dev)**
- Primary production site at `tomeclicker.marks.dev` subdomain
- Deployed via ArgoCD GitOps pipeline
- Static files served from Kubernetes (Nginx or Caddy)
- Integrated with existing `marks.dev` ingress
- Let's Encrypt SSL/TLS certificates

**Deployment Pipeline:**
```
GitHub Actions (on release/tag)
  ↓
1. Build SvelteKit static site (npm run build)
2. Build Docker image with static files
3. Push to container registry (Docker Hub/GitHub Container Registry)
4. Update image tag in happy-little-cloud repo
  ↓
ArgoCD (auto-sync enabled)
  ↓
5. Detects change in happy-little-cloud manifests
6. Pulls new image and deploys to K8s cluster
7. Updates tomeclicker.marks.dev

#### Backend Services (Raspberry Pi K8s)

**Current Limitations:**
- No shared storage between nodes
- Limited to StatefulSets or single-replica deployments for stateful services
- Database must run on dedicated node or use node affinity

**Phase 1: Without Shared Storage**

1. **API Service**
   - Stateless Node.js/Express API
   - Horizontal scaling with multiple replicas
   - Load balancing via Kubernetes Service
   - No persistent volume requirements

2. **Database**
   - PostgreSQL or MongoDB as StatefulSet
   - Single replica with node affinity (pinned to specific Pi)
   - Local persistent volume on designated node
   - Regular backups to external storage (NAS, cloud backup)

3. **Ingress**
   - Nginx Ingress Controller or Traefik
   - SSL/TLS termination with Let's Encrypt
   - Rate limiting and DDoS protection
   - Domain routing to API endpoints

**Repository Structure (Cross-Repo Coordination):**

This project spans multiple repositories:

1. **tomeclicker** (this repo)
   - Application code (SvelteKit + TypeScript)
   - Dockerfile for static file serving
   - GitHub Actions workflows for building

2. **happy-little-cloud** (K8s GitOps repo)
   - ArgoCD Application manifests
   - Kubernetes resource definitions
   - Kustomize overlays for environments
   ```
   happy-little-cloud/
   ├── argocd/
   │   └── applications/
   │       └── tomeclicker.yaml
   └── manifests/
       └── tomeclicker/
           ├── base/
           │   ├── namespace.yaml
           │   ├── deployment.yaml (frontend)
           │   ├── service.yaml
           │   └── ingress.yaml (tomeclicker.marks.dev)
           ├── api/ (future)
           │   ├── deployment.yaml
           │   ├── service.yaml
           │   └── configmap.yaml
           └── database/ (future)
               ├── statefulset.yaml
               ├── service.yaml
               └── pv.yaml (local storage)
   ```

3. **nix-config** (system configuration)
   - NixOS configurations for Raspberry Pi nodes
   - Hardware configurations for Pi 5 + NVMe
   - System-level dependencies and services

**Phase 2: With Shared Storage (Future)**

Once shared storage is implemented (NFS, Ceph, Longhorn, etc.):

1. **Database High Availability**
   - Multi-replica database clusters
   - Automatic failover
   - Shared persistent volumes
   - Better data redundancy

2. **Session Storage**
   - Redis cluster for session management
   - Shared cache across API replicas
   - Improved performance

3. **File Uploads** (if needed)
   - Shared volume for user-uploaded content
   - Profile pictures, custom themes, etc.

**GitOps Workflow with ArgoCD:**

```
Developer Workflow:
1. Make changes in tomeclicker repo
2. Commit and push to GitHub
3. GitHub Actions triggered:
   a. Run tests (npm run check, npm run lint)
   b. Build static site (npm run build)
   c. Build Docker image (nginx/caddy + static files)
   d. Tag with git commit SHA
   e. Push image to registry

4. Automatically update happy-little-cloud repo:
   a. GitHub Action creates PR or direct commit
   b. Update image tag in manifests/tomeclicker/base/deployment.yaml
   c. Commit: "chore: update tomeclicker to <sha>"

5. ArgoCD watches happy-little-cloud repo:
   a. Detects manifest change
   b. Auto-syncs to K8s cluster (if enabled)
   c. Performs rolling update
   d. Verifies health checks
   e. Updates tomeclicker.marks.dev

6. Rollback if needed:
   a. Revert commit in happy-little-cloud
   b. ArgoCD syncs to previous version
   c. Or use ArgoCD UI/CLI for instant rollback
```

**Benefits of ArgoCD Approach:**
- Declarative GitOps: All infrastructure as code
- Audit trail: Every deployment tracked in Git
- Easy rollbacks: Revert a commit
- Multi-environment: Preview vs production
- Automatic drift detection and correction

**Resource Constraints:**

Given Raspberry Pi limitations:
- API Service: 256MB-512MB RAM per replica, 0.5 CPU
- Database: 512MB-1GB RAM, 1 CPU
- Monitor resource usage and adjust as needed
- Implement horizontal pod autoscaling when cluster grows

**Backup Strategy:**

Without shared storage:
- Daily database dumps via CronJob
- Export to external storage (home NAS, Backblaze B2, etc.)
- Automated backup verification
- Point-in-time recovery capability

**Monitoring & Observability:**

- Basic Kubernetes metrics
- Custom API metrics (save/load times, user counts)
- Error tracking and alerting
- Uptime monitoring (UptimeRobot or similar)

---

## Technical Considerations

### Performance
- Bundle size monitoring (target: < 100KB gzipped)
- Lazy loading for future features
- Optimized reactivity patterns
- Virtual scrolling for long lists (future adventure/equipment pages)

### Testing Strategy
- Unit tests for game systems (Jest/Vitest)
- Integration tests for save/load
- E2E tests for critical user flows (Playwright)
- Visual regression testing for UI changes

### Documentation
- API documentation for game systems
- Contributing guide
- Architecture decision records (ADRs)
- Player-facing guides and tooltips
- Kubernetes deployment documentation
- Runbook for common operational tasks

### Deployment
- **Frontend (Dual Environment)**:
  - **Preview/Staging**: GitHub Pages at `/tomeclicker`
  - **Production**: `tomeclicker.marks.dev` via ArgoCD
- **Backend**: Raspberry Pi Kubernetes cluster
  - Docker containerization
  - ArgoCD GitOps deployments from `happy-little-cloud` repo
  - Kubernetes manifests (Kustomize for environment overlays)
  - CI/CD pipeline via GitHub Actions
  - Staging/production managed via ArgoCD Applications

### Cross-Repository Agent Coordination

Work on this project may require coordinating across multiple repositories:

**Repositories:**
- **tomeclicker**: Application code and Dockerfile
- **happy-little-cloud**: K8s manifests and ArgoCD apps
- **nix-config**: System configs for Raspberry Pi nodes

**Agent Coordination:**
- `staffy-boi` can delegate infrastructure work to agents in other repos
- Infrastructure changes (K8s manifests, ArgoCD apps) go in `happy-little-cloud`
- System-level changes (NixOS configs, hardware setup) go in `nix-config`
- Application changes (game code, frontend) stay in `tomeclicker`
- Agents should be aware of cross-repo dependencies
- Example: Adding a new service requires changes in both `tomeclicker` (Dockerfile) and `happy-little-cloud` (K8s manifests)

---

## Migration Strategy

### For Existing Players

1. **Save Compatibility**
   - All existing saves will continue to work
   - Automatic migration on first load after update
   - Backup saves before migration
   - Rollback option if migration fails

2. **Feature Rollout**
   - Gradual feature introduction
   - Opt-in beta testing for cloud saves
   - Clear communication about changes
   - Deprecation warnings with grace periods

---

## Success Metrics

### Phase 1.x
- Upgrades menu: Improved navigation, mobile-friendly
- Story page: Centered layout, navigation system added
- Settings/Saves: Clean layout, test buttons removed

### Phase 1.5
- ESLint configured and passing
- Vitest test suite with 80%+ coverage on core logic
- Pre-commit hooks prevent bad commits
- GitHub Actions CI pipeline running
- All tests passing on main branch

### Phase 2
- 100% TypeScript coverage
- All Svelte components using Svelte 5 patterns
- Game class reduced to < 200 lines
- All systems properly separated
- Type safety score: 0 `any` types

### Phase 3
- Local save system with 3 slots
- Cloud save backend deployed to K8s cluster
- < 1s save/load time
- < 1% save corruption rate
- Anti-cheat detection with 95% accuracy
- 99% uptime for backend services

---

## Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| 1.x | 1-2 days | Settings, Upgrades, Story page fixes |
| 1.5 | 3-5 days | **NEW**: ESLint, Vitest, CI/CD, pre-commit hooks |
| 2.1 | 3-5 days | Svelte 5 migration complete |
| 2.2 | 3-5 days | Full TypeScript migration |
| 2.3 | 5-7 days | Modular architecture |
| 3.1 | 1 week | Enhanced local saves |
| 3.2.1 | 2 weeks | Backend infrastructure + K8s setup |
| 3.2.2 | 1 week | Client integration |
| 3.2.3 | 1 week | Anti-cheat & leaderboard |

**Total Estimated Time:** 7-9 weeks for complete implementation (updated with Phase 1.5)

---

## Risk Assessment

### High Risk
- **Save migration issues**: Mitigated by thorough testing and backup system
- **Svelte 5 breaking changes**: Mitigated by incremental migration approach
- **Cloud save costs**: Eliminated - using home infrastructure
- **Raspberry Pi cluster reliability**: Mitigated by monitoring, backups, and graceful degradation

### Medium Risk
- **Performance regression**: Mitigated by performance monitoring and profiling
- **TypeScript migration bugs**: Mitigated by comprehensive testing
- **Anti-cheat false positives**: Mitigated by multiple validation metrics
- **K8s cluster resource constraints**: Mitigated by resource limits and monitoring

### Low Risk
- **UI/UX changes**: Easy to iterate and adjust based on feedback
- **Module organization**: Can be refactored incrementally
- **Shared storage migration**: Can be implemented later without breaking changes

---

## Future Considerations

This modernization sets the foundation for implementing the full game design outlined in `ref/OUTLINE.md`:

- Stats system (Strength, Agility, Willpower, etc.)
- Study page (Research, Training)
- Adventure system with zones and equipment
- Retreat/prestige mechanics
- Knowledge tree
- Achievements
- Focus/meditation system
- Quests
- Tomes of Magic (endgame content)

The modular architecture from Phase 2 will make these features significantly easier to implement without creating a monolithic codebase.

### Infrastructure Scaling

As the game grows:
- Implement shared storage for K8s cluster
- Add more Raspberry Pi nodes for horizontal scaling
- Consider migrating database to dedicated server
- Implement CDN for API if traffic grows significantly
- Set up monitoring and alerting infrastructure

---

## Conclusion

This proposal provides a clear roadmap for modernizing TomeClicker while maintaining backward compatibility and setting up for long-term success. The phased approach allows for incremental progress and validation at each stage.

The Raspberry Pi Kubernetes deployment provides a cost-effective, self-hosted solution that can scale as the game grows, while maintaining the static frontend on GitHub Pages for optimal performance and reliability.

**Next Steps:**
1. Review and approve proposal
2. Create detailed task breakdown for Phase 1
3. Set up project board for tracking
4. Prepare Kubernetes cluster and Docker registry
5. Begin implementation starting with Phase 1

**Questions for Discussion:**
- Should we prioritize any phase differently?
- Are there additional immediate fixes needed?
- What's the timeline for implementing shared storage on the K8s cluster?
- Should we set up a beta testing program?
- What domain will be used for the API endpoints?
