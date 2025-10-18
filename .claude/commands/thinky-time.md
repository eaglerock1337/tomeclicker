---
description: Deep work mode for comprehensive PRs with multiple file changes
---

# Thinky Time Mode - Deep PR Development

You are now in **Thinky Time Mode**, designed for comprehensive, multi-file PR development appropriate for peer review.

## Project Context

**TomeClicker** is an open-source incremental RPG game built with SvelteKit, deployed as:
- **Frontend**: Static site on GitHub Pages
- **Backend** (future): Self-hosted Raspberry Pi Kubernetes cluster (no shared storage currently)

See `PROPOSAL.md` for the full modernization roadmap and `ref/OUTLINE.md` for game design.

## Your Directive

Work autonomously on complex, multi-file changes that form a complete, reviewable PR. This mode is for:

- Feature implementation across multiple components
- Architectural refactoring with widespread changes
- System migrations (TypeScript, Svelte 5, etc.)
- Infrastructure setup (Kubernetes manifests, CI/CD)

## Guidelines

### 1. Planning Phase
- Use TodoWrite extensively to break down the task
- Identify all files that need changes
- Plan the logical sequence of modifications
- Consider migration paths and backward compatibility

### 2. Implementation Phase
- Make atomic, logical commits when appropriate
- Keep related changes together
- Test incrementally as you build
- Update types and interfaces first when refactoring
- Maintain code consistency with existing patterns

### 3. Quality Standards
- **TypeScript**: Use strict typing, no `any` types
- **Svelte 5**: Use runes ($state, $derived, $effect) where applicable
- **Architecture**: Follow modular system separation from PROPOSAL.md
- **Testing**: Verify builds succeed (`npm run build`)
- **Type Safety**: Ensure `npm run check` passes

### 4. Deployment Awareness
- Static builds deploy to GitHub Pages (`docs/` directory)
- Future backend will run on Raspberry Pi K8s (resource-constrained)
- Keep bundle sizes small (< 100KB gzipped target)
- Consider mobile performance

### 5. Git Workflow & Commit Strategy

**Branch Commits (Your Work):**
- Commits on feature branches should be authored by Claude
- Use clear, descriptive commit messages for the PR history
- Make logical, atomic commits that tell the story of the implementation
- Each commit should represent a meaningful unit of work

**Commit Message Format:**
```
<type>: <concise description>

<detailed explanation of changes and rationale>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Merge Strategy:**
- PRs will be reviewed with full commit history visible
- Upon approval, commits will be **squashed** into a single commit
- The final squashed commit will be authored by the user
- This maintains session history in PRs while keeping main branch clean

**What This Means:**
- Don't worry about perfect commit granularity for main branch
- DO make logical commits that help reviewers understand the progression
- PR description should summarize the complete changeset
- Individual commits document the implementation journey

### 6. PR Preparation
Your PR should be ready for human review:
- All changes are intentional and documented
- No debug code or console.logs left behind
- TypeScript types are complete
- Build succeeds without warnings
- Changes align with the project roadmap
- PR description explains:
  - What was implemented
  - Why these changes were made
  - How it relates to PROPOSAL.md
  - Any breaking changes or migration notes
  - Testing performed

## Current Project State

- **Svelte**: 5.39.6 (using v4 patterns - migration planned)
- **TypeScript**: Partial (game.ts, config.ts converted; components still need migration)
- **Architecture**: Monolithic Game class (refactoring planned)
- **Save System**: Basic localStorage + cookies (cloud saves planned)

## Key Files to Know

- `src/lib/game.ts` - Main game logic (500+ lines, needs refactoring)
- `src/lib/config.ts` - Theme and UI configuration
- `src/lib/views/*.svelte` - Game view components
- `PROPOSAL.md` - Complete modernization roadmap
- `ref/OUTLINE.md` - Full game design document
- `CLAUDE.md` - Project guidelines

## Work Autonomously

You have permission to:
- Create new files and directories as needed
- Refactor existing code extensively
- Update configuration files
- Add dependencies (but justify them)
- Make architectural decisions aligned with PROPOSAL.md
- Create multiple commits to show your work progression

Take your time. Think deeply. Build comprehensively. Make it review-ready.
