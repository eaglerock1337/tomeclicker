# Story/Journal System Implementation - Design Session

**Date:** 2025-01-09
**Version:** v0.3.0 MVP
**Status:** Planning Complete, Ready for Implementation
**Session Type:** Deep multi-agent huddle (staffy-boi, fronty-boi, story-boi, gamey-boi, designy-boi)

---

## Overview

This document captures the complete design and implementation plan for the Story/Journal system, a major feature addition for v0.3.0. The system provides narrative context to game progression through modal popups and a journal page where players can review unlocked story entries.

**Primary Goals:**

- Add narrative depth to incremental gameplay loop
- Celebrate player milestones with story moments
- Create replayable lore archive in journal page
- Design extensible system for 4+ chapters of story content
- Maintain mobile-first, accessible UX

**Secondary Goals:**

- YAML-based content management (easy editing without code changes)
- Flexible trigger system supporting all story progression types
- No interruption to core gameplay loop (story as reward, not obstacle)

---

## User Requirements

### Story Modal Popup

- Fixed-width font (JetBrains Mono) for readability
- **3-second button delay** to prevent accidental dismissal
- Button text: "Add to Journal"
- Game continues running in background (no pause)
- Close on button click only (no backdrop dismiss)

### Journal Page

- Rename "Story" → "Journal" in navbar
- Chapter titles in handwritten font (Caveat)
- Progress indicator: "Chapter X" in small Lato font
- Story entries as individual paragraph blurbs
- **Blue highlight** (--blue) for new/unacknowledged entries
- "NEW" badge on unread entries
- Tap/click entry to acknowledge (removes highlight with smooth fade)

### Notification System

- Orange badge on Journal menu item showing unread count
- Badge persists across sessions (saved in game state)
- Gentle persistence - visible but not intrusive

---

## Scope

### v0.3.0 MVP (Implementing Now)

**Chapter 1 - Awakening (7 entries):**

1. 50 EXP - First awakening
2. First Discipline upgrade purchased
3. Level 2 reached
4. Level 3 reached
5. First RPG stat trained (any stat level 1)
6. Adventure mode unlocked
7. Player name set

**Chapter 2 - Adventure (1 entry):**

1. Adventure mode unlocked (first blurb)

**Total: 8 story entries**

### Future Scope (Triggers Designed, Not Implemented)

**Chapter 2 (remaining 6 entries):**

- First adventure completed
- First treasure chest opened
- First duplicate item found
- First max level reached
- Retreat available
- First retreat completed
- Previous max level reached again

**Chapter 3 - Questing:**

- Max level unlock preview
- Hit max level (20)
- All stats maxed (100)
- All gear maxed
- Questing unlocked
- First quest completed

**Chapter 4 - The Tomes of Magic:**

- Multi-step 10-blurb sequence
- Tome discovery narrative

**Future: Tome Chapter Notes**

- Handwritten notes for each tome chapter
- Separate from main story, integrated into same system

---

## Technical Architecture

### Story Manager Pattern

Following established codebase patterns (UpgradeManager, StatsManager, IdleActionManager, SaveManager):

```typescript
export class StoryManager {
  private entries: Map<string, StoryEntry>;
  private deps: StoryManagerDependencies;

  constructor(deps, initialEntries?) { }

  checkForNewUnlocks(): StoryCheckResult
  acknowledge(entryId: string): AcknowledgeResult
  getChapterEntries(chapter: number): StoryEntry[]
  getUnlockedChapters(): number[]
  getUnreadCount(): number
  serialize(): { entryStates: [...] }
  loadState(data): void
}
```

**Responsibilities:**

- Track unlocked/acknowledged state for all story entries
- Evaluate trigger conditions against game state
- Provide entries for UI display
- Handle save/load serialization

**Dependencies (Injected):**

- `getCurrentExp()`, `getLifetimeExp()`, `getCurrentLevel()`
- `getStats()`, `getUpgrades()`, `getPlayerName()`
- `areAllStatsUnlocked()`, `isAdventureModeUnlocked()`
- Future: `getAdventureCount()`, `getRetreatCount()`, etc.

### Data Model

```typescript
export interface StoryEntry {
	id: string; // e.g., "ch1-awakening"
	chapter: number; // 1-4 for main story
	title?: string; // Optional entry title
	text: string; // The story blurb content
	trigger: TriggerCondition; // What unlocks this entry
	unlocked: boolean; // Has trigger been met
	acknowledged: boolean; // Has player read the modal
	timestamp?: number; // When unlocked (for versioning)
}

export type TriggerCondition =
	// Thresholds
	| { type: 'exp'; threshold: number }
	| { type: 'lifetimeExp'; threshold: number }
	| { type: 'level'; threshold: number; operator?: 'gte' | 'eq' }

	// Upgrades
	| { type: 'upgradeOwned'; upgradeId: string }
	| { type: 'upgradeLevel'; upgradeId: string; level: number }

	// Stats
	| { type: 'statLevel'; stat: keyof Stats; level: number }
	| { type: 'allStatsLevel'; level: number }
	| { type: 'anyStatLevel'; level: number }
	| { type: 'totalStats'; total: number }

	// Feature unlocks
	| { type: 'adventureUnlocked' }
	| { type: 'questingUnlocked' }
	| { type: 'tomesUnlocked' }
	| { type: 'nameSet' }

	// Adventure system (future)
	| { type: 'adventureCompleted'; count: number }
	| { type: 'chestOpened'; count: number }
	| { type: 'itemDuplicate'; count: number }
	| { type: 'gearMaxed' }

	// Prestige system (future)
	| { type: 'maxLevelReached'; level: number }
	| { type: 'retreatAvailable' }
	| { type: 'retreatCompleted'; count: number }
	| { type: 'previousMaxReached' }

	// Quest system (future)
	| { type: 'questCompleted'; count: number; questLevel?: number }

	// Tome system (future)
	| { type: 'tomeChapter'; tomeId: string; chapter: number }
	| { type: 'tomeCompleted'; tomeId: string }

	// Composite (complex triggers)
	| { type: 'all'; conditions: TriggerCondition[] }
	| { type: 'any'; conditions: TriggerCondition[] }

	// Manual/testing
	| { type: 'manual'; eventId?: string };
```

### YAML Configuration

Story content managed in `design/story-content.yaml` following `tomes.yaml` pattern:

```yaml
chapters:
  - id: 1
    title: 'Awakening'
    description: 'The beginning of your journey'
    entries:
      - id: ch1-awakening
        text: 'You wake up not knowing who you are...'
        trigger:
          type: lifetimeExp
          threshold: 50

      - id: ch1-discipline
        text: 'Your practice seems to be working...'
        trigger:
          type: upgradeOwned
          upgradeId: discipline
      # ... more entries

  - id: 2
    title: 'Adventure'
    description: 'Your first steps into the world'
    entries:
      - id: ch2-adventure-unlock
        text: 'Your practice has paid off...'
        trigger:
          type: adventureUnlocked
```

**Benefits:**

- Non-programmers can edit story content
- Version control friendly (easy diffs)
- Consistent with existing tomes.yaml pattern
- Separates data from code
- Easy to add/edit entries without TypeScript changes

**YAML Loader:**

```typescript
// src/lib/data/story-loader.ts
export function loadStoryEntries(): StoryEntry[] {
	const chapters: YamlStoryChapter[] = storyYaml.chapters;
	// Parse YAML into StoryEntry objects
	// Convert trigger YAML to TypeScript TriggerCondition
}
```

### Trigger System

**Event-Driven Approach** (recommended over polling):

```typescript
// In Game class methods
class Game {
	addExp(amount: number): void {
		this.exp += amount;
		this.lifetimeExp += amount;
		this.checkAndShowNewStories(); // Check triggers
	}

	levelUp(): boolean {
		// ... level up logic
		this.checkAndShowNewStories(); // Check triggers
	}

	purchaseUpgrade(upgradeId: string): boolean {
		// ... purchase logic
		this.checkAndShowNewStories(); // Check triggers
	}

	private pendingStoryModals: StoryEntry[] = [];

	private checkAndShowNewStories(): void {
		const result = this.storyManager.checkForNewUnlocks();
		if (result.newlyUnlocked.length > 0) {
			this.pendingStoryModals.push(...result.newlyUnlocked);
		}
	}

	getPendingStoryModals(): StoryEntry[] {
		const pending = [...this.pendingStoryModals];
		this.pendingStoryModals = [];
		return pending;
	}
}
```

**Why Event-Driven:**

- More efficient than polling every tick
- Explicit about when to check
- Instant story feedback on milestones
- Better performance

**Graceful Degradation:**

Future triggers use optional chaining so they degrade gracefully:

```typescript
case 'adventureCompleted':
  return (this.deps.getAdventureCount?.() ?? 0) >= trigger.count;
```

If `getAdventureCount()` isn't implemented yet, trigger safely returns false.

### Save/Load Integration

**Extend GameState:**

```typescript
export interface GameState {
	// ... existing fields
	story?: {
		entryStates: Array<{
			id: string;
			unlocked: boolean;
			acknowledged: boolean;
			timestamp?: number;
		}>;
	};
}
```

**Serialization in Game class:**

```typescript
private toGameState(): GameState {
  return {
    // ... existing fields
    story: this.storyManager.serialize()
  };
}

private loadFromGameState(state: GameState): void {
  // ... existing code
  if (state.story) {
    this.storyManager.loadState(state.story);
  }
}
```

---

## UI/UX Design

### Story Modal Component

**Design Specifications:**

```svelte
<!-- src/lib/components/StoryModal.svelte -->
```

**Visual Hierarchy:**

- Dark backdrop: 85% opacity with 2px blur effect
- Modal card: var(--alt-bg) with 3px border
- Story text: JetBrains Mono, 1rem, line-height 1.8
- Button: JetBrains Mono, centered, full-width on mobile

**Button Delay Mechanism:**

```typescript
const BUTTON_DELAY_MS = 3000; // 3 seconds

let showStoryModal = $state(false);
let buttonVisible = $state(false);
let buttonTimer: ReturnType<typeof setTimeout> | null = null;

function showStory(storyText: string) {
	currentStoryText = storyText;
	showStoryModal = true;
	buttonVisible = false;

	if (buttonTimer) clearTimeout(buttonTimer);

	buttonTimer = setTimeout(() => {
		buttonVisible = true;
		buttonTimer = null;
	}, BUTTON_DELAY_MS);
}
```

**Why 3 seconds:**

- Fast enough to not frustrate
- Slow enough to prevent accidental skip
- Average reading speed: ~4 words/sec, ensures user starts reading
- User preference confirmed via huddle questions

**Accessibility:**

- Modal has `role="dialog"` and `aria-modal="true"`
- Button focusable after delay with visible focus ring
- Close on Escape key
- Focus management (return to trigger element on close)
- Screen reader announces modal appearance

**Mobile Optimizations:**

- 95% width, max-height 85vh (prevents keyboard overflow)
- Full-width button for easy thumb access
- Touch-friendly tap targets (44px minimum)
- Reduced padding on small screens

### Journal Page Redesign

**Layout Structure:**

```svelte
<ViewLayout title="journal" maxWidth="800px">
  <div class="journal-container">
    {#each visibleChapters as chapter}
      <div class="chapter-section">
        <h2 class="chapter-title">{chapter.title}</h2>
        <div class="chapter-progress">Chapter {chapter.number}</div>

        <div class="story-entries">
          {#each chapter.entries as entry}
            <div class="story-entry" class:new={entry.isNew}>
              <p>{entry.text}</p>
              {#if entry.isNew}
                <div class="new-badge">NEW</div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</ViewLayout>
```

**Typography:**

- Chapter title: Caveat font, 2.5rem, handwritten aesthetic
- Progress: JetBrains Mono, 0.8rem, 60% opacity
- Entry text: Caveat font, 1.5rem, line-height 1.6

**New Entry Highlighting:**

```css
.story-entry.new {
	border-color: var(--blue);
	border-width: 3px;
	background-color: var(--alt-bg);
	cursor: pointer;
	animation: new-entry-glow 2s ease-in-out infinite;
}

@keyframes new-entry-glow {
	0%,
	100% {
		border-color: var(--blue);
		box-shadow: 0 0 0 0 rgba(87, 173, 239, 0.4);
	}
	50% {
		border-color: var(--blue);
		box-shadow: 0 0 0 6px rgba(87, 173, 239, 0);
	}
}
```

**Acknowledge Interaction:**

```typescript
function acknowledgeEntry(entryId: string) {
	if (!newEntries.has(entryId)) return;

	// Add transition class
	const entryElement = document.querySelector(`[data-entry-id="${entryId}"]`);
	entryElement?.classList.add('acknowledged');

	// Remove from set after animation completes
	setTimeout(() => {
		newEntries.delete(entryId);
		newEntries = newEntries; // Trigger Svelte reactivity
		saveReadStories();
	}, 500); // Match animation duration
}
```

**Smooth Fade Animation:**

```css
.story-entry.acknowledged {
	animation: acknowledge-fade 0.5s ease-out forwards;
}

@keyframes acknowledge-fade {
	0% {
		border-color: var(--blue);
		box-shadow: 0 0 0 6px rgba(87, 173, 239, 0.4);
	}
	100% {
		border-color: transparent;
		box-shadow: 0 0 0 0 rgba(87, 173, 239, 0);
	}
}
```

### Navbar Updates

**Changes:**

- Menu item text: "Story" → "Journal"
- Icon: BookOpen (same icon, new label)
- Badge: Orange dot with unread count

**Badge Implementation:**

```svelte
{#if game.getUnreadStoryCount() > 0}
  <span class="notification-badge">{game.getUnreadStoryCount()}</span>
{/if}
```

```css
.notification-badge {
	position: absolute;
	top: -4px;
	right: -4px;
	background-color: var(--orange);
	color: var(--bg);
	font-family: 'JetBrains Mono', monospace;
	font-size: 0.7rem;
	font-weight: 700;
	padding: 2px 6px;
	border-radius: 10px;
	min-width: 18px;
	text-align: center;
}
```

---

## Game Design Considerations

### Player Psychology & Pacing

**Journal Unlock Timing:**

- Unlocks at **50 EXP** (same time as first story blurb)
- Rationale: Natural discovery, no empty UI, immediate value

**Modal Interruption Flow:**

- **Game does NOT pause** - ticks continue in background
- Story modal appears as overlay (attention-grabbing but not blocking)
- Player can dismiss modal (X button) to read later
- Dismissing adds notification badge to Journal menu
- Psychology: Story becomes **reward**, not **interruption**

**Button Delay Calibration:**

- **3 seconds** (user preference)
- Fast enough to not frustrate
- Slow enough to prevent accidental skip
- Future: "Speed Reader" mode after 3rd blurb (reduces to 1s)

**Highlight Urgency:**

- **Gentle persistence** - orange badge, visible but not intrusive
- Badge persists across sessions (saved state)
- No flashing, no sounds, no forced engagement
- Respects player's time and attention

**Progression Motivation:**

Story enhances core loop through:

1. **Context** - Answers "why am I clicking?"
2. **Identity** - Player becomes adventurer, not just number-incrementer
3. **Celebration** - Story blurb = fanfare for hitting milestone
4. **Guidance** - Hints at next steps without hand-holding
5. **Stakes** - Same mechanics, different emotional investment

---

## Implementation Plan

### Phase 1: Foundation (6-8 hours)

**1.1 YAML Configuration**

- [ ] Create `design/story-content.yaml`
- [ ] Add Chapter 1 entries (7 total)
- [ ] Add Chapter 2 first entry
- [ ] Include all trigger definitions

**1.2 YAML Loader**

- [ ] Create `src/lib/data/story-loader.ts`
- [ ] Parse YAML into StoryEntry objects
- [ ] Convert trigger YAML to TypeScript TriggerCondition
- [ ] Unit test loader

**1.3 StoryManager Class**

- [ ] Create `src/lib/managers/story-manager.ts`
- [ ] Implement StoryEntry interface
- [ ] Implement TriggerCondition type union
- [ ] Implement StoryManager class
- [ ] Add trigger evaluation logic for all types
- [ ] Add serialize/deserialize methods
- [ ] Unit tests (80%+ coverage)

**1.4 Game Integration**

- [ ] Extend GameState interface in save-manager.ts
- [ ] Add StoryManager to Game class constructor
- [ ] Wire dependencies (getCurrentExp, getStats, etc.)
- [ ] Add pending modal queue
- [ ] Update save/load methods
- [ ] Add trigger checks in addExp(), levelUp(), purchaseUpgrade()

### Phase 2: UI Components (6-8 hours)

**2.1 Story Modal**

- [ ] Create `src/lib/components/StoryModal.svelte`
- [ ] Implement dark backdrop with blur
- [ ] JetBrains Mono font for story text
- [ ] 3-second button delay with fade-in
- [ ] "Add to Journal" button
- [ ] Close on button click only
- [ ] Accessibility (ARIA, focus management, keyboard nav)

**2.2 Modal Queue**

- [ ] Update `src/routes/+page.svelte`
- [ ] Add `$effect` to check pending modals
- [ ] Show one modal at a time
- [ ] Queue subsequent modals with 300ms delay between
- [ ] Handle acknowledge flow

**2.3 Journal Page**

- [ ] Rename `src/lib/views/story.svelte` → `journal.svelte`
- [ ] Update all imports across codebase
- [ ] Implement chapter-based entry display
- [ ] Chapter title in Caveat font
- [ ] Progress indicator "Chapter X"
- [ ] Blue pulsing border for new entries
- [ ] "NEW" badge implementation
- [ ] Tap/click acknowledge with smooth fade
- [ ] Text interpolation (`<adventurer-name>`)

**2.4 Navbar Update**

- [ ] Update navbar.svelte: "Story" → "Journal"
- [ ] Add notification badge with unread count
- [ ] Update view routing in view.svelte

**2.5 Component Testing**

- [ ] Modal component tests
- [ ] Journal page component tests
- [ ] Test button delay enforcement
- [ ] Test highlight/acknowledge flow

### Phase 3: Integration & Polish (4-6 hours)

**3.1 Trigger Wiring**

- [ ] Verify all Chapter 1 triggers fire correctly
- [ ] Test Chapter 2 first entry trigger
- [ ] Validate timing and accuracy

**3.2 Polish**

- [ ] Modal fade-in animation (300ms)
- [ ] Slide-up entrance animation
- [ ] Highlight pulse animation (2s loop)
- [ ] Acknowledge fade-out (500ms)
- [ ] Keyboard navigation
- [ ] Focus ring styling

**3.3 Testing**

- [ ] E2E test: 0 → 50 EXP → modal → journal
- [ ] Test all 8 story triggers
- [ ] Mobile testing (iOS/Android)
- [ ] Save/load persistence validation
- [ ] Accessibility validation (keyboard, screen reader)

### Phase 4: Documentation (2-3 hours)

**4.1 Session Documentation**

- [x] Create `design/sessions/story-journal-system.md` (this file)
- [ ] Document all design decisions
- [ ] Include architecture diagrams
- [ ] Add trigger system reference
- [ ] Add future extensibility notes

**4.2 Code Documentation**

- [ ] JSDoc comments for StoryManager
- [ ] Component prop documentation
- [ ] Inline code comments for complex logic

---

## Testing Strategy

### Unit Tests

**StoryManager:**

- Trigger evaluation for all trigger types
- Edge cases (missing dependencies, future triggers)
- Composite triggers (all/any)
- Serialize/deserialize round-trip
- **Target: 90%+ coverage**

**YAML Loader:**

- Valid YAML parsing
- Invalid YAML handling
- Trigger conversion accuracy
- **Target: 100% coverage**

### Component Tests

**StoryModal:**

- Modal appearance/dismissal
- Button delay enforcement (mock setTimeout)
- Accessibility attributes
- Keyboard navigation

**Journal Page:**

- Entry display by chapter
- Highlight appearance
- Acknowledge interaction
- Badge count accuracy

### Integration Tests

**Trigger Scenarios:**

1. 50 EXP → modal appears with correct text
2. Purchase Discipline → modal appears
3. Level up to 2 → modal appears
4. Train any stat to level 1 → modal appears
5. Multiple triggers at once → queue modals

**Save/Load:**

1. Unlock story → save → load → verify state
2. Acknowledge entry → save → load → verify acknowledged
3. Migration from no story data → graceful initialization

### E2E Test Flow

```
1. Start new game
2. Click to 50 EXP
3. Verify modal appears with "You wake up..." text
4. Wait 3 seconds
5. Verify button becomes enabled
6. Click "Add to Journal"
7. Navigate to Journal page
8. Verify entry present with blue highlight
9. Click entry
10. Verify highlight fades away
11. Refresh page
12. Verify highlight still gone (acknowledged state persisted)
13. Continue to Level 2
14. Verify new modal appears
15. Verify Journal shows both entries, only new one highlighted
```

### Mobile Validation Checklist

- [ ] Modal readable on iPhone SE (320px width)
- [ ] Modal readable on Android phone
- [ ] Touch events work for entry acknowledge
- [ ] Button tap area adequate (44px minimum)
- [ ] Font sizes legible on mobile
- [ ] No horizontal scrolling in modal
- [ ] Journal page scrolls smoothly
- [ ] 3-second delay works with touch

---

## Future Extensibility

### Multi-Blurb Sequences (Chapter 4)

**Challenge:** Chapter 4 has 10 consecutive blurbs

**Solution:** Queue-based modal navigation

```typescript
interface SequenceEntry {
	id: string;
	text: string;
	order: number;
	total: number;
}

// Modal shows "Part X/10" indicator
// "Next" button (enabled immediately, no delay)
// "Add to Journal" on final blurb
// All 10 added to journal as linked entries
```

**Implementation:** Extend StoryEntry with optional `sequence` field

### Tome Chapter Notes

**Integration:** Same StoryManager system

```typescript
{
  id: 'tome-fire-ch1',
  chapter: 10, // Tome chapters start at 10+
  text: 'The essence of fire magic...',
  trigger: { type: 'tomeChapter', tomeId: 'tome-fire', chapter: 1 }
}
```

**UI:** Journal page shows "Tome Notes" section separate from main chapters

### Story Replay

**Future Feature:** "Read Again" button on journal entries

```typescript
function replayStory(entryId: string) {
	const entry = game.getStoryEntry(entryId);
	showStoryModal(entry.text);
	// No delay on replay (already read once)
}
```

### Achievement Integration

**Future Feature:** Story unlocks trigger achievements

```
"Awakening" - Read first story entry
"Chapter Complete" - Read all entries in a chapter
"Loremaster" - Read all 50 Tomes worth of story
```

**Bonus:** Loremaster achievement grants +5% all EXP

### Content Expansion

**Adding New Entries:**

1. Edit `design/story-content.yaml`
2. Add new entry with trigger
3. No code changes needed
4. System automatically loads and evaluates

**Example:**

```yaml
- id: ch2-epic-moment
  text: 'You discover something amazing...'
  trigger:
    type: all
    conditions:
      - type: level
        threshold: 10
      - type: allStatsLevel
        level: 50
```

---

## Design Decisions Rationale

### Why YAML Configuration?

**Decision:** Store story content in design/story-content.yaml

**Rationale:**

- Non-programmers can edit story (game designers, writers)
- Version control friendly (easy to see diffs, review changes)
- Consistent with existing tomes.yaml pattern
- Separates data from code (clean architecture)
- Easy to add/edit without TypeScript knowledge
- Can validate YAML schema separately

**Trade-offs:**

- Slight overhead parsing YAML at runtime
- Need to maintain TypeScript interfaces in sync with YAML schema
- Accepted: Benefits far outweigh small performance cost

### Why 3-Second Button Delay?

**Decision:** Button delay of 3 seconds

**Rationale:**

- User preference confirmed via huddle questions
- Fast enough to not frustrate (not too long)
- Slow enough to prevent accidental skip
- Average reading speed: ~4 words/sec
- 50-word paragraph = 12-15 seconds to read fully
- 3 seconds ensures user at least _starts_ reading

**Considered Alternatives:**

- 5 seconds: Too slow, feels patronizing
- 1 second: Too fast, easy to accidentally skip
- Dynamic (word count): Complexity not worth it for MVP

### Why No Game Pause?

**Decision:** Game continues running while modal is shown

**Rationale:**

- Incremental game psychology: "numbers go up" is core loop
- Pausing feels like **punishment for progress**
- Players conditioned to expect continuous growth
- Story becomes **reward**, not **interruption**
- Modal is overlay (attention-grabbing) not blocker
- Can dismiss and read later (player agency)

**Alternative Considered:**

- Pause game during modal: Creates pressure, players rush through story

### Why Blue Highlighting?

**Decision:** Blue pulsing border (--blue color) for new entries

**Rationale:**

- User preference confirmed via huddle questions
- Matches existing theme accent color
- Calm, professional, non-intrusive
- Proven pattern from training.svelte (blocked-active)
- High contrast without being aggressive

**Alternatives Considered:**

- Green: Suggests "go" or "success", less appropriate for "new"
- Yellow: Too aggressive, feels like warning
- Golden: Custom color, adds CSS complexity

### Why Event-Driven Triggers?

**Decision:** Check triggers after state changes, not on every tick

**Rationale:**

- More efficient than polling (fewer checks)
- Explicit about when to check (better control)
- Instant story feedback on milestones
- Easier to debug (know exactly where triggers fire)
- Better performance (no wasted tick cycles)

**Alternative Considered:**

- Polling in game.tick(): Simple but wasteful, 100ms delay feels laggy

### Why Flexible Trigger System?

**Decision:** Support all trigger types now, even if not implementing all

**Rationale:**

- Design once, implement incrementally
- No refactoring needed when adding Chapter 2-4
- Optional dependencies gracefully degrade
- Composite triggers (all/any) support complex conditions
- Future-proof for tomes, quests, retreats

**Trade-off:**

- More code upfront
- Accepted: Architecture pays off long-term

---

## Lessons Learned

### What Went Well

1. **Multi-agent huddle** - Comprehensive perspectives from all domains
2. **User questions** - Clarified ambiguities before implementation
3. **YAML decision** - Aligns with existing patterns (tomes.yaml)
4. **Flexible triggers** - Designed for extensibility from the start
5. **Modal UX research** - Button delay, no pause, blue highlight all validated

### Challenges Anticipated

1. **YAML parsing** - Need robust error handling for malformed YAML
2. **Text interpolation** - Need to handle missing variables gracefully
3. **Modal queue timing** - 300ms delay between modals might feel too fast/slow
4. **Mobile testing** - Need real devices for touch event validation
5. **Save migration** - Old saves won't have story data, need graceful defaults

### What to Do Differently

1. **Session docs first** - Create design docs BEFORE starting implementation (doing this now!)
2. **Huddle earlier** - Could have saved time with multi-agent collaboration upfront
3. **Test on mobile sooner** - Don't wait until end to validate touch UX

---

## Success Metrics

**Feature is successful if:**

1. **Players engage with story** - Analytics show modal views, journal visits
2. **No confusion reports** - Clear UX, obvious how to use
3. **Mobile experience smooth** - No UI bugs on iOS/Android
4. **Story enhances immersion** - Positive feedback, not seen as interruption
5. **Extensible for future** - Adding Chapter 2-4 content is trivial
6. **Test coverage high** - 80%+ coverage for story system
7. **Performance impact minimal** - No noticeable lag or jank

---

## Appendices

### Appendix A: Full Story Content (Chapter 1 & 2)

**Chapter 1 - Awakening:**

1. **50 EXP** - "You wake up not knowing who you are or what happened to you, but you're compelled to start practicing, as if you were destined for something greater."

2. **First Discipline Upgrade** - "Your practice seems to be working. Your self-discipline is strengthening, focusing your efforts even harder. You feel more productive."

3. **Level 2** - "Your experience is starting to pay off. Your thoughts start ruminating in the back of your mind, giving you even more insights as you progress."

4. **Level 3** - "You're starting to get the hang of this. Your practice is making you realize what you need to focus on if you're ever going to venture away from home."

5. **First RPG Stat** - "You're starting to see your path forwards. Focusing on different aspects of your fitness and your attack and defense skills are key to protecting yourself."

6. **Adventure Unlocked** - "You're now starting to realize how far you have to go before you're ready, but know you're progressing. It's time to define your identity as an adventurer."

7. **Name Set** - "As you keep preparing for adventure, you redefine yourself. You are now <adventurer-name>, destined for greatness. You tirelessly keep at it."

**Chapter 2 - Adventure (First Entry Only):**

1. **Adventure Unlocked** - "Your practice has paid off and you finally feel ready for adventure. You head out, ready to fight with nothing but your bare hands. Your destiny awaits."

### Appendix B: Trigger Type Reference

| Trigger Type         | Parameters               | Example                                                       | When Implemented |
| -------------------- | ------------------------ | ------------------------------------------------------------- | ---------------- |
| `exp`                | `threshold`              | `{ type: 'exp', threshold: 100 }`                             | v0.3.0           |
| `lifetimeExp`        | `threshold`              | `{ type: 'lifetimeExp', threshold: 50 }`                      | v0.3.0           |
| `level`              | `threshold`, `operator?` | `{ type: 'level', threshold: 2 }`                             | v0.3.0           |
| `upgradeOwned`       | `upgradeId`              | `{ type: 'upgradeOwned', upgradeId: 'discipline' }`           | v0.3.0           |
| `upgradeLevel`       | `upgradeId`, `level`     | `{ type: 'upgradeLevel', upgradeId: 'discipline', level: 3 }` | v0.3.0           |
| `statLevel`          | `stat`, `level`          | `{ type: 'statLevel', stat: 'strength', level: 5 }`           | v0.3.0           |
| `anyStatLevel`       | `level`                  | `{ type: 'anyStatLevel', level: 1 }`                          | v0.3.0           |
| `allStatsLevel`      | `level`                  | `{ type: 'allStatsLevel', level: 100 }`                       | Future           |
| `totalStats`         | `total`                  | `{ type: 'totalStats', total: 50 }`                           | Future           |
| `adventureUnlocked`  | (none)                   | `{ type: 'adventureUnlocked' }`                               | v0.3.0           |
| `nameSet`            | (none)                   | `{ type: 'nameSet' }`                                         | v0.3.0           |
| `adventureCompleted` | `count`                  | `{ type: 'adventureCompleted', count: 1 }`                    | Future           |
| `chestOpened`        | `count`                  | `{ type: 'chestOpened', count: 1 }`                           | Future           |
| `itemDuplicate`      | `count`                  | `{ type: 'itemDuplicate', count: 1 }`                         | Future           |
| `gearMaxed`          | (none)                   | `{ type: 'gearMaxed' }`                                       | Future           |
| `maxLevelReached`    | `level`                  | `{ type: 'maxLevelReached', level: 4 }`                       | Future           |
| `retreatAvailable`   | (none)                   | `{ type: 'retreatAvailable' }`                                | Future           |
| `retreatCompleted`   | `count`                  | `{ type: 'retreatCompleted', count: 1 }`                      | Future           |
| `previousMaxReached` | (none)                   | `{ type: 'previousMaxReached' }`                              | Future           |
| `questCompleted`     | `count`, `questLevel?`   | `{ type: 'questCompleted', count: 1 }`                        | Future           |
| `questingUnlocked`   | (none)                   | `{ type: 'questingUnlocked' }`                                | Future           |
| `tomeChapter`        | `tomeId`, `chapter`      | `{ type: 'tomeChapter', tomeId: 'fire', chapter: 1 }`         | Future           |
| `tomeCompleted`      | `tomeId`                 | `{ type: 'tomeCompleted', tomeId: 'fire' }`                   | Future           |
| `tomesUnlocked`      | (none)                   | `{ type: 'tomesUnlocked' }`                                   | Future           |
| `all`                | `conditions[]`           | `{ type: 'all', conditions: [...] }`                          | v0.3.0           |
| `any`                | `conditions[]`           | `{ type: 'any', conditions: [...] }`                          | v0.3.0           |
| `manual`             | `eventId?`               | `{ type: 'manual', eventId: 'test' }`                         | v0.3.0           |

### Appendix C: Component Hierarchy

```
+page.svelte (root)
├── Header.svelte
├── Navbar.svelte (updated with Journal + badge)
├── View.svelte
│   ├── Practice.svelte
│   ├── Upgrades.svelte
│   ├── Study.svelte (renamed from Training)
│   ├── Stats.svelte
│   ├── Journal.svelte (NEW - renamed from Story)
│   └── Settings.svelte
└── StoryModal.svelte (NEW - modal queue)
```

---

**Document Status:** ✅ Complete
**Next Steps:** Begin implementation Phase 1 (Foundation)
**Estimated Completion:** 3-4 focused work days
