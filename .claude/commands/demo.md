# /demo - Interactive PR Demonstration

Showcase changes from a Pull Request with live interactive demonstrations. Agents walk through commits one-by-one, explaining changes while running the dev server so you can see and interact with the results.

## Usage

### Demo a PR
```
/demo <PR number or branch name>
```

Demonstrates all commits in the specified PR or branch, one at a time.

**Example:**
```
/demo 42
/demo feature/tome-ui-redesign
```

### Demo Specific Commits
```
/demo <commit1>..<commit2>
```

Demonstrates a range of commits.

**Example:**
```
/demo a451b38..054a4ee
```

### Demo Single Commit
```
/demo <commit-hash>
```

Demonstrates just one commit in detail.

**Example:**
```
/demo a451b38
```

## How It Works

### 1. Setup Phase

**staffy-boi** coordinates the demonstration:

1. **Identify commits** - Fetch the PR/branch and list all commits to demonstrate
2. **Start dev server** - Run `npm run dev` in background
3. **Create baseline** - Checkout the commit before the PR (or main branch)
4. **Present overview** - Show commit list and what will be demonstrated

```markdown
## 🎬 Demo Setup: PR #42 "Tome UI Redesign"

### Branch: feature/tome-ui-redesign
### Base: main (commit 400ecca)
### Commits to demonstrate: 5

1. `a1b2c3d` - Add TomeCard component with animation
2. `d4e5f6g` - Implement tome grid layout
3. `h7i8j9k` - Add tier progression visual indicator
4. `l0m1n2o` - Polish animations and transitions
5. `p3q4r5s` - Add mobile responsive breakpoints

### Dev Server
Starting at http://localhost:5173

**Currently viewing:** main branch (baseline before changes)

Ready to start the demo? I'll walk through each commit, explain the changes, and give you time to interact with the live app.
```

### 2. Commit-by-Commit Walkthrough

For each commit:

**Step 1: Checkout the commit**
```bash
git checkout <commit-hash>
```

**Step 2: Relevant agents provide commentary**

Agents self-select based on the commit content:
- **fronty-boi**: UI/UX changes, component additions, styling updates
- **gamey-boi**: Game mechanics, progression changes, balance adjustments
- **story-boi**: Narrative content, flavor text, lore additions
- **backy-boi**: Backend changes, API updates, data model changes
- **sre-boi**: Infrastructure, deployment config, build changes
- **designy-boi**: Architecture changes, refactoring, design patterns
- **secury-boi**: Security improvements, validation changes
- **testy-boi**: Test additions, quality improvements

**Step 3: Show file changes**
```bash
git show <commit-hash> --stat
```

**Step 4: Highlight key code changes**
Show relevant snippets from the commit with explanation

**Step 5: Interactive testing**
Give user time to interact with the live dev server and see the changes

**Example Commit Demo:**

```markdown
## 📦 Commit 1/5: Add TomeCard component with animation

**Commit:** a1b2c3d
**Author:** Claude <noreply@anthropic.com>
**Message:**
> feat: add TomeCard component with hover animation
>
> Create reusable TomeCard component for displaying individual tomes
> with smooth scale-up animation on hover. Supports tier coloring.

### Files Changed
```
src/lib/components/TomeCard.svelte  | 87 ++++++++++++++++++++
src/lib/styles/tome-colors.css      | 23 ++++++
src/lib/types/tome.ts               | 12 +++
3 files changed, 122 insertions(+)
```

### 💬 Agent Commentary

**fronty-boi:**
This commit introduces the foundational TomeCard component. Key UX decisions:

- **Hover animation**: Scale from 1.0 to 1.05 over 200ms with ease-out curve - feels responsive without being jarring
- **Tier color coding**: Border color indicates tome tier using CSS custom properties, making the system learnable through color association
- **Card sizing**: 200px × 280px base size works well on both mobile (fits 1-2 per row) and desktop (fits 3-4 per row)
- **Accessibility**: Includes proper ARIA labels, keyboard focus states, and sufficient color contrast

**Interaction points to test:**
- Hover over cards to see the scale animation
- Tab through cards to verify keyboard navigation works
- Try on mobile viewport (resize browser to ~375px width)

**designy-boi:**
Good component decomposition. The TomeCard is a pure presentational component:
- Takes props (title, tier, locked status)
- No game logic inside - stays focused on rendering
- Reusable across different contexts (tome library, tier progression view, quest rewards)

The type definition in `tome.ts` establishes a clear interface that gamey-boi can use when defining tome data.

---

**🎮 Interactive Testing**

The dev server has reloaded with the new TomeCard component.

**Try this:**
1. Navigate to http://localhost:5173 (should auto-refresh)
2. Look for tome cards on the page
3. Hover to see the animation
4. Resize browser to test responsive behavior

**When you're ready to see the next commit, say "next" or "continue"**
```

### 3. Navigation Controls

**User commands during demo:**
- `"next"` or `"continue"` - Advance to next commit
- `"previous"` or `"back"` - Go back to previous commit
- `"skip to <number>"` - Jump to specific commit in sequence
- `"pause"` - Stop auto-advancing, stay on current commit for deeper exploration
- `"show code"` - Display full diff of current commit
- `"explain <file>"` - Deep dive on specific file changes
- `"test <scenario>"` - Agent guides testing of specific scenario
- `"finish"` - End demo, return to branch HEAD

### 4. Backend Demonstrations

When commits include backend changes (API, database, infrastructure):

**backy-boi** provides:
- API endpoint demonstrations using `curl` or example requests
- Database migration explanations
- Data model changes and implications

**sre-boi** provides:
- Infrastructure updates (K8s configs, CI/CD changes)
- Deployment impact analysis
- Build/performance improvements

**Example Backend Demo:**

```markdown
## 📦 Commit 3/7: Add cloud save API endpoint

**Commit:** x7y8z9a
**Message:**
> feat: implement POST /api/saves endpoint with validation

### Files Changed
```
src/api/routes/saves.ts        | 45 ++++++++++++++
src/api/middleware/validate.ts | 23 ++++++++
src/db/models/save.ts          | 18 ++++++
tests/api/saves.test.ts        | 67 ++++++++++++++++++++
4 files changed, 153 insertions(+)
```

### 💬 Agent Commentary

**backy-boi:**
This commit implements the cloud save creation endpoint. Key features:

**API Design:**
```typescript
POST /api/saves
Authorization: Bearer <jwt-token>

Body:
{
  "saveName": "My Main Save",
  "gameState": { /* full game state */ },
  "checksum": "sha256-hash"
}

Response: 201 Created
{
  "saveId": "uuid",
  "lastModified": "2025-10-19T12:34:56Z"
}
```

**Validation middleware:**
- Validates JWT token
- Checks game state schema
- Verifies checksum matches
- Rate limits to 10 saves per minute

**secury-boi:**
Security improvements in this commit:
- Checksum validation prevents tampered save states
- Rate limiting prevents save spam attacks
- User can only create saves for their own account (JWT sub claim)
- Game state is validated against expected schema before storage

**testy-boi:**
Great test coverage! The test suite covers:
- ✅ Successful save creation
- ✅ Invalid JWT rejection
- ✅ Checksum mismatch rejection
- ✅ Rate limit enforcement
- ✅ Schema validation failure cases

---

**🧪 Backend Testing**

I can demonstrate the endpoint if you want:

1. **Start backend server** (if not running)
2. **Create test JWT token**
3. **Send example save request**
4. **Show database record created**

Would you like me to run a live API demonstration?
```

### 5. Demo Completion

After all commits demonstrated:

```markdown
## ✅ Demo Complete: PR #42

### Commits Demonstrated: 5/5

You've seen all the changes in this PR:
1. ✅ Add TomeCard component with animation
2. ✅ Implement tome grid layout
3. ✅ Add tier progression visual indicator
4. ✅ Polish animations and transitions
5. ✅ Add mobile responsive breakpoints

### Summary of Changes

**Frontend (fronty-boi):**
- Complete Tome UI redesign with card-based layout
- Smooth animations and hover effects
- Mobile-responsive grid (1-4 columns based on viewport)
- Tier-based color coding for visual hierarchy

**Game Design (gamey-boi):**
- Visual progression indicators help players track tier advancement
- Card layout supports future expansion to 50 tomes
- Locked/unlocked states provide clear goals

**Architecture (designy-boi):**
- Modular component design (TomeCard, TomeGrid, TierIndicator)
- Type-safe tome data structures
- CSS custom properties for themeable colors

### Testing Checklist

Before merging, verify:
- [ ] All animations feel smooth (no jank)
- [ ] Mobile responsive layout works on 375px, 768px, 1024px viewports
- [ ] Tier colors are distinguishable and accessible
- [ ] Keyboard navigation works (tab through cards)
- [ ] Locked tomes display correctly
- [ ] `npm run build` succeeds
- [ ] `npm run check` passes

### Next Steps

**Option 1: Approve and merge**
```bash
# I can merge this PR for you
gh pr merge 42 --squash
```

**Option 2: Request changes**
Tell me what needs adjustment and I'll update the PR.

**Option 3: Continue development**
We can add more commits to this branch.

What would you like to do?
```

## Demo Types

### Visual/Frontend Demos
- UI component additions
- Styling changes
- Animation implementations
- Responsive design updates
- Accessibility improvements

**Primary agents:** fronty-boi, designy-boi

### Game Mechanics Demos
- Progression system changes
- Balance adjustments
- New features/systems
- Game feel improvements

**Primary agents:** gamey-boi, fronty-boi

### Narrative Demos
- Story content additions
- Flavor text updates
- Lore implementations
- Tome chapter writing

**Primary agents:** story-boi, fronty-boi

### Backend Demos
- API endpoint implementations
- Database migrations
- Authentication systems
- Cloud save functionality

**Primary agents:** backy-boi, secury-boi, sre-boi

### Infrastructure Demos
- K8s deployment configs
- CI/CD pipeline updates
- Build optimizations
- Monitoring/observability

**Primary agents:** sre-boi, backy-boi

### Refactoring Demos
- Architecture improvements
- Code organization changes
- TypeScript migrations
- Design pattern implementations

**Primary agents:** designy-boi, testy-boi

## Demo Best Practices

### For Agents

**Do:**
- Explain WHY changes were made, not just WHAT changed
- Highlight user-facing impacts
- Point out interaction opportunities
- Connect commits to larger goals
- Celebrate good practices (tests, accessibility, security)

**Don't:**
- Dump entire file contents (show key snippets only)
- Rush through commits (give time for interaction)
- Ignore test/build failures during demo
- Speak outside your domain (stay in your lane)

### For Users

**Do:**
- Interact with the live app during each commit
- Ask questions about specific changes
- Request deeper explanations when needed
- Test edge cases and responsive behavior
- Give feedback on what works/doesn't

**Don't:**
- Skip commits without reviewing them
- Assume everything works (actively test it)
- Merge without verifying all features work

## Example Usage Scenarios

### Scenario 1: Reviewing Your Own PR

After a /thinky-time session created a PR:

```
User: /demo feature/tome-ui-redesign

staffy-boi: *Sets up demo with 5 commits*

fronty-boi: *Walks through each UI commit with commentary*

User: "The hover animation feels a bit slow on commit 2"

fronty-boi: Let me check that. *analyzes animation timing* You're right, 300ms is too slow. Should be 200ms for snappier feel.

User: "Can you fix it?"

fronty-boi: *Updates the code, commits the fix, adds to PR*

User: "Great! Let's continue the demo"

*Demo continues with updated code*
```

### Scenario 2: Reviewing Someone Else's Contribution

```
User: /demo 156

staffy-boi: Demonstrating PR #156 from contributor @external-dev...

gamey-boi: This PR adds a new prestige system. Let me walk through the balance changes...

User: "How does this affect early game progression?"

gamey-boi: Good question. Let me test that... *loads early game save state, tests progression*

gamey-boi: Actually, this creates a grinding issue for new players. We should adjust the unlock threshold from level 20 to level 30.

User: "Can we request that change?"

staffy-boi: I'll add a review comment to the PR with that suggestion. Want to continue the demo or pause here?
```

### Scenario 3: Showcasing for Documentation

```
User: /demo feature/cloud-saves

backy-boi: *Demonstrates backend commits*
fronty-boi: *Demonstrates frontend integration*
secury-boi: *Explains security measures*

User: "This demo was great, can you write docs based on this?"

docy-boi: Absolutely! I'll create:
- User guide: "How to use cloud saves"
- Developer guide: "Cloud save API documentation"
- Architecture doc: "Cloud save system design"

Based on what we just walked through. Should I start with the user guide?
```

## Technical Implementation

The /demo command requires:

1. **Git operations**: Checkout commits, show diffs, navigate history
2. **Dev server management**: Run `npm run dev` in background, monitor for errors
3. **Backend server** (if needed): Run API server for backend demos
4. **Coordination**: staffy-boi orchestrates, domain agents provide commentary
5. **Interactive pauses**: Wait for user input between commits

## Agent Coordination

**staffy-boi's role:**
- Setup and teardown
- Navigate between commits
- Coordinate agent commentary
- Manage dev server
- Track demo progress

**Domain agents' roles:**
- Analyze commits in their domain
- Provide expert commentary
- Guide interactive testing
- Suggest improvements
- Celebrate good practices

## After the Demo

Common next steps:
- **Merge the PR** (if demo looked good)
- **Request changes** (if issues found)
- **/debrief** to capture learnings
- **Create documentation** based on demo walkthrough
- **Share demo notes** in PR comments

---

The /demo command turns PR review into an interactive, educational experience where you can see, touch, and understand every change before merging!
