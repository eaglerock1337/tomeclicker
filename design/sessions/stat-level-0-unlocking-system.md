# Stat Level 0 Unlocking System Design

**Date:** 2025-11-07
**Session Type:** Game Design Analysis
**Status:** Design Complete, Ready for Implementation
**Commit Type:** `improvement:` (patch-level change)

---

## Overview

Redesign the RPG stats system to start at **level 0** (hidden/locked state) and require discovery through training. This returns to the **original design intent** from OUTLINE.md where "All stats start at level 0" and "Getting Level 1 in every stat is required to unlock adventuring."

**Core Mechanic:** Stats begin mysterious and unnamed. Players must train them to 100 stat EXP to "unlock" them to level 1, revealing their name and purpose.

---

## Current System Analysis

### Current Implementation (v0.1.5)

**Stats Initialization:**

- Stats start at level 1 (StatsManager default)
- Training unlocks at character level 3
- Stat-specific names shown immediately
- Formula: `calculateStatExpRequired(level)` uses `100 × 1.5^(level-1)`
- Formula: `calculateStatTrainingCost(level)` uses `100 × level^1.3`

**Unlock Flow:**

```
Level 1 → Practice (clicking)
Level 2 → Training page + Ruminate
Level 3 → Stats visible (all start at level 1)
Level 4 → Adventure page (level requirement only)
```

**Issues with Current System:**

1. Stats revealed immediately (no mystery)
2. No discovery phase
3. Adventure unlocks at level 4 without stat requirements
4. Contradicts original design intent (OUTLINE.md line 53: "All stats start at level 0")

---

## New Requirements

### 1. Stats Start at Level 0 (Locked State)

**Initialization:**

- All 4 physical stats (STR, AGI, WILL, END) start at level 0
- Level 0 = "Hidden" or "Locked" state
- Stat name is not revealed until unlocked

**Level 0 → 1 Requirements:**

- 100 stat EXP required (10 trainings at base 10 exp/training)
- 100 character EXP per training attempt (same formula as level 1)
- After 100 stat EXP: stat "unlocks" to level 1 and reveals name

### 2. Training Display Changes

**Level 0 Training UI:**

- Show generic name: "??? Training" or "Hidden Potential"
- Description: "Discover your hidden abilities through practice"
- Progress bar: 0/100 stat EXP
- No indication which stat is being trained

**Post-Unlock (Level 1+):**

- Show proper stat name ("Lift Heavy Objects" for Strength)
- Description matches stat type
- Progress bar shows stat EXP to next level

### 3. Training Validation Rules

**Cannot Train If:**

1. ❌ Lacking character EXP (already implemented)
2. ❌ Stat is at maximum level (NEW - needs implementation)
3. ❌ Action already in progress (already implemented)

**Error Messages:**

- "Insufficient EXP (need X)" → Already working
- "Stat maxed out for current level" → NEW
- "Already training" → Already working

### 4. Unlock Condition Changes

**Stat Upgrades Page:**

- **Old:** Shows when Training page unlocks (level 2)
- **NEW:** Only shows when ALL 4 stats are level 1+
- **Rationale:** Stat-related upgrades (Training Speed, Stat Gain, etc.) meaningless before stats unlocked

**Adventure Page:**

- **Old:** Shows at character level 4
- **NEW:** Shows at character level 4 AND all 4 stats at level 1+
- **Rationale:** Matches OUTLINE.md intent ("Getting Level 1 in every stat is required to unlock adventuring")

**Stats Page (Training Page):**

- **Unchanged:** Still unlocks at character level 2
- Shows Ruminate (always available) + 4 locked stat trainings

### 5. Story Integration

**Story Blurb (Level 3):**

```
"You sense hidden potential within yourself, but it remains obscured.
Perhaps training in different ways will reveal your true abilities..."
```

**Story Update (First Stat Unlock):**

```
"Through dedicated practice, you've awakened your [STAT NAME]!
Your path becomes clearer. What other abilities lie dormant within you?"
```

**Story Update (All Stats Unlocked):**

```
"With all four core abilities awakened, you feel ready to venture beyond practice.
The path to adventure awaits..."
```

---

## Implementation Plan

### Phase 1: Core Stat Level 0 System

#### File: `src/lib/utils/calculations.ts`

**Changes Needed:**

```typescript
/**
 * Calculates stat EXP required for next level (v0.1.5+ with level 0 support)
 * Special case: Level 0 → 1 requires 100 stat EXP (same as level 1 → 2)
 */
export function calculateStatExpRequired(currentStatLevel: number): number {
	// Special case for level 0 → 1 unlock
	if (currentStatLevel === 0) {
		return 100;
	}

	const rawCost = 100 * Math.pow(1.5, currentStatLevel - 1);
	return Math.round(rawCost / 5) * 5;
}

/**
 * Calculates character EXP cost to start training (v0.1.5+ with level 0 support)
 * Special case: Level 0 costs 100 character EXP (same as level 1)
 */
export function calculateStatTrainingCost(currentStatLevel: number): number {
	// Special case for level 0 unlock training
	if (currentStatLevel === 0) {
		return 100;
	}

	return Math.floor(100 * Math.pow(currentStatLevel, 1.3));
}

/**
 * Checks if a stat is "unlocked" (level 1 or higher)
 */
export function isStatUnlocked(statLevel: number): boolean {
	return statLevel >= 1;
}
```

**Rationale:**

- Level 0 → 1 should feel similar to level 1 → 2 (same cost: 100 exp)
- Without special case, level 0 would be cheaper (67 stat exp) or free (0 character exp)
- This creates consistent progression feel

---

#### File: `src/lib/managers/stats-manager.ts`

**Changes Needed:**

```typescript
// Constructor initialization (line ~53)
constructor(initialStats?: Stats, deps?: StatsManagerDependencies) {
  this.stats = initialStats || {
    // Physical stat levels (START AT 0 - locked)
    strength: 0,        // Changed from 1 → 0
    agility: 0,         // Changed from 1 → 0
    willpower: 0,       // Changed from 1 → 0
    endurance: 0,       // Changed from 1 → 0
    // Magic stat levels (locked, start at 1 for future use)
    intelligence: 1,    // Unchanged (not trainable yet)
    wisdom: 1,          // Unchanged (not trainable yet)
    // Physical stat EXP (start at 0)
    strengthExp: 0,
    agilityExp: 0,
    willpowerExp: 0,
    enduranceExp: 0,
    // Magic stat EXP (locked, start at 0)
    intelligenceExp: 0,
    wisdomExp: 0
  };
  this.deps = deps;
}

// Add helper method
/**
 * Checks if a stat is unlocked (level 1+)
 */
isStatUnlocked(stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>): boolean {
  return this.getStatLevel(stat) >= 1;
}

/**
 * Checks if all 4 physical stats are unlocked
 */
areAllPhysicalStatsUnlocked(): boolean {
  return (
    this.isStatUnlocked('strength') &&
    this.isStatUnlocked('agility') &&
    this.isStatUnlocked('willpower') &&
    this.isStatUnlocked('endurance')
  );
}
```

**Migration Consideration:**

- Existing saves have stats at level 1+
- No migration needed (stats already unlocked)
- New games start with level 0

---

#### File: `src/lib/managers/idle-action-manager.ts`

**Changes Needed:**

```typescript
// Add import
import { isStatUnlocked } from '../utils/calculations';

// Update training action initialization to support dynamic names
private getTrainingActionName(actionId: string, statLevel: number): string {
  if (statLevel === 0) {
    return '??? Training';
  }

  // Original names for unlocked stats
  const names = {
    'train-strength': 'Lift Heavy Objects',
    'train-agility': 'Practice Quick Movements',
    'train-willpower': 'Mental Conditioning',
    'train-endurance': 'Physical Conditioning'
  };

  return names[actionId] || 'Training';
}

private getTrainingActionDescription(actionId: string, statLevel: number): string {
  if (statLevel === 0) {
    return 'Discover your hidden abilities through practice';
  }

  // Original descriptions for unlocked stats
  const descriptions = {
    'train-strength': 'Build raw physical power',
    'train-agility': 'Improve speed and reflexes',
    'train-willpower': 'Strengthen resolve and focus',
    'train-endurance': 'Build stamina and resilience'
  };

  return descriptions[actionId] || 'Train your abilities';
}

// Note: Names/descriptions update dynamically based on stat level
// UI components will need to read these values reactively
```

**Validation Enhancement:**

```typescript
/**
 * Check if a training action can be started (expanded validation)
 */
canStartTraining(actionId: string): boolean {
  const action = this.trainingActions[actionId];
  if (!action) return false;

  // Ruminate always available
  if (actionId === 'practice-ruminate') return true;

  // For stat training, check multiple conditions
  if (action.trainsStat) {
    const stat = action.trainsStat;
    const statLevel = this.deps.getStatLevel(stat);
    const maxLevel = this.deps.getMaxStatLevel(stat);

    // Check if stat is at maximum level
    if (statLevel >= maxLevel) {
      return false; // Stat maxed out
    }

    // Check if player can afford the training
    const cost = this.getTrainingCost(actionId);
    if (this.deps.getCurrentExp() < cost) {
      return false; // Insufficient character EXP
    }

    return true;
  }

  return true;
}

/**
 * Get reason why training cannot be started (for UI feedback)
 */
getTrainingBlockedReason(actionId: string): string | null {
  const action = this.trainingActions[actionId];
  if (!action || !action.trainsStat) return null;

  const stat = action.trainsStat;
  const statLevel = this.deps.getStatLevel(stat);
  const maxLevel = this.deps.getMaxStatLevel(stat);
  const cost = this.getTrainingCost(actionId);
  const currentExp = this.deps.getCurrentExp();

  if (statLevel >= maxLevel) {
    return `Stat maxed out for character level (${maxLevel})`;
  }

  if (currentExp < cost) {
    return `Insufficient EXP (need ${cost}, have ${currentExp})`;
  }

  return null;
}
```

**Dependencies Update:**

```typescript
export interface IdleActionDependencies {
	// ... existing deps ...

	// NEW: Get stat level for validation
	getStatLevel: (stat: keyof Stats) => number;

	// NEW: Get max stat level for validation
	getMaxStatLevel: (
		stat: keyof Pick<Stats, 'strength' | 'agility' | 'willpower' | 'endurance'>
	) => number;
}
```

---

#### File: `src/lib/game.ts`

**Changes Needed:**

```typescript
// Update IdleActionManager dependencies (line ~124)
this.idleActionManager = new IdleActionManager({
  // ... existing deps ...
  getStatLevel: (stat) => this.statsManager.getStatLevel(stat),
  getMaxStatLevel: (stat) => this.statsManager.getMaxStatLevel(stat)
});

// Add helper methods
/**
 * Checks if all 4 physical stats are unlocked (level 1+)
 */
areAllStatsUnlocked(): boolean {
  return this.statsManager.areAllPhysicalStatsUnlocked();
}

/**
 * Gets the count of unlocked stats
 */
getUnlockedStatsCount(): number {
  let count = 0;
  if (this.stats.strength >= 1) count++;
  if (this.stats.agility >= 1) count++;
  if (this.stats.willpower >= 1) count++;
  if (this.stats.endurance >= 1) count++;
  return count;
}

// Update unlock conditions
/**
 * Determines if Stat Upgrades section should be visible
 * @returns True if all 4 stats are unlocked (level 1+)
 */
showStatUpgrades(): boolean {
  return this.areAllStatsUnlocked();
}

/**
 * Determines if Adventure page should be accessible
 * @returns True if player is level 4+ AND all stats are level 1+
 */
showAdventure(): boolean {
  return this.level >= 4 && this.areAllStatsUnlocked();
}

/**
 * Gets training validation feedback
 * @param actionId - Training action ID
 * @returns Error message if training is blocked, null otherwise
 */
getTrainingBlockedReason(actionId: string): string | null {
  return this.idleActionManager.getTrainingBlockedReason(actionId);
}
```

**Save Migration:**

```typescript
// In loadFromGameState() (line ~850)
private loadFromGameState(state: GameState): void {
  // ... existing load logic ...

  // Migrate old saves: stats that were level 1 stay level 1
  // New saves: stats start at level 0
  const migratedStats: Stats = {
    // Physical stats (preserve existing values, default to 0 for new)
    strength: loadedStats.strength || 0,
    agility: (loadedStats as any).agility || (loadedStats as any).dexterity || 0,
    willpower: (loadedStats as any).willpower || (loadedStats as any).intelligence || 0,
    endurance: (loadedStats as any).endurance || (loadedStats as any).wisdom || 0,
    // ... rest of migration ...
  };

  // ... rest of load logic ...
}
```

**Note:** Migration will naturally preserve existing stats at level 1+, so old saves remain valid.

---

### Phase 2: UI Integration (fronty-boi collaboration)

#### Training Page Changes

**Level 0 Display:**

```
[ ??? Training ]
"Discover your hidden abilities through practice"
Progress: ███░░░░░░░ 34/100 EXP
Cost: 100 EXP | Duration: 30s
[Start Training]
```

**Level 1+ Display:**

```
[ Lift Heavy Objects ]
"Build raw physical power"
Level 2 | Progress: ███░░ 45/150 EXP
Cost: 130 EXP | Duration: 25s
[Start Training]
```

**Blocked Display:**

```
[ Physical Conditioning ]
"Build stamina and resilience"
Level 20 | ⚠️ Stat maxed out for character level
[Disabled Button]
```

#### Stats Page Changes

**Show Locked Stats:**

- Icon: 🔒 or ??? symbol
- Name: "??? (Locked)"
- Level: "Level 0"
- Progress: "0/100 EXP to unlock"

**Show Unlocked Stats:**

- Icon: Stat-specific icon
- Name: "Strength", "Agility", etc.
- Level: "Level 5"
- Progress: "340/506 EXP"

#### Upgrades Page Changes

**Before All Stats Unlocked:**

- Hide stat upgrade categories entirely, OR
- Show grayed out with tooltip: "Unlock all stats to train them more effectively"

**After All Stats Unlocked:**

- Show Training category with all upgrades
- Training Speed, Training Efficiency, Stat Gain, Perfect Form

#### Navbar Changes

**Adventure Link:**

- Only show when `game.showAdventure()` returns true
- Requires: Character level 4 + all 4 stats unlocked
- Tooltip when hidden: "Reach level 4 and unlock all stats"

---

### Phase 3: Story Integration (story-boi collaboration)

#### Story Blurbs

**At Character Level 3 (Stats Page Unlocked):**

```
Title: "Hidden Potential"
Body: "You sense untapped power within yourself, but it remains formless
and undefined. Through dedicated training, perhaps you can awaken these
dormant abilities. Try different training methods to discover your true nature."
```

**First Stat Unlocked (Any Stat Reaches Level 1):**

```
Title: "Awakening: [STAT NAME]"
Body: "Through focused practice, you've awakened your [STAT NAME]! This is just
the beginning. Three more abilities await discovery within you."
```

**All Stats Unlocked (All 4 Stats Reach Level 1):**

```
Title: "Complete Awakening"
Body: "With all four core abilities now awakened—Strength, Agility, Willpower,
and Endurance—you feel a profound shift within yourself. The world beyond
beckons. When you reach sufficient mastery (Level 4), the path to adventure
will reveal itself."
```

**First Attempt to Train at Max Level:**

```
Title: "Limit Reached"
Body: "You've pushed this ability as far as your current understanding allows.
To progress further, you must first deepen your overall mastery and reach the
next character level. Alternatively, focus on broadening your skills in other
areas."
```

---

## Game Balance Analysis

### Pre-Unlock Grind (New Discovery Phase)

**Character EXP Cost:**

- 100 character EXP per training (level 0)
- 40 trainings total (10 per stat × 4 stats)
- **Total: 4,000 character EXP** to unlock all stats

**Time Investment (Base Speed):**

- 30s per training (base)
- 40 trainings = 1,200 seconds = **20 minutes**
- With Training Speed upgrades: Can be reduced to ~10-15 minutes

**Stat EXP Progress:**

- 10 stat EXP per training (base)
- 100 stat EXP required per stat
- 400 stat EXP total across all 4 stats

### Progression Curve Comparison

**Old System (Stats Start at Level 1):**

```
Level 2: Training unlocks → Stat upgrades visible immediately
Level 3: Stats visible at level 1 → Start training
Level 4: Adventure unlocks immediately
```

**New System (Stats Start at Level 0):**

```
Level 2: Training unlocks → Only Ruminate available initially
Level 3: Stat training unlocks → Discovery phase begins (20 min)
All stats unlocked → Stat upgrades visible → Continue training
Level 4 + all stats level 1: Adventure unlocks
```

**Added Time Investment:**

- ~20 minutes of discovery gameplay
- Creates meaningful "unlock moment" when stats reveal
- Provides tutorial phase for training mechanics
- Teaches resource management (spend exp on upgrades vs training)

### Character EXP Economy Impact

**Current Level 2→3 Cost:** 10,000 character EXP

**Typical Level 2 Income:**

- Ruminate: 50 exp/tick (with Discipline)
- Clicking: ~20-50 exp/click
- Level-up journey: 2-3 hours

**4,000 EXP Stat Unlock Cost:**

- Represents ~40% of level-up cost
- Meaningful but not overwhelming
- Creates choice: "Unlock stats now or save for level 3?"

### Balance Recommendations

**Option A: Current Design (Recommended)**

- 100 EXP per training at level 0
- 4,000 total EXP investment
- ~20 minute discovery phase
- **Feels meaningful without being grindy**

**Option B: Reduced Cost**

- 50 EXP per training at level 0
- 2,000 total EXP investment
- ~10 minute discovery phase
- **Faster but less impactful unlock moment**

**Option C: Increased Reward**

- 100 EXP per training at level 0
- 20 stat EXP per training (instead of 10)
- Only 5 trainings needed per stat = 20 total
- 2,000 total EXP, 10 minute phase
- **Faster discovery, same EXP investment**

**Recommendation:** Proceed with **Option A** for MVP. Adjust after playtesting if discovery phase feels too long.

---

## Unlock Progression Timeline

### New Player Journey (With Level 0 Stats)

**Session 1 (0-30 minutes):**

```
0 min:   New game → Start clicking
5 min:   Level 1 → 2 (100 exp) → Header appears
10 min:  Menu unlocks → Upgrades page visible
15 min:  Buy Click Power, Ruminate unlocks
20 min:  Grinding toward Level 3...
```

**Session 2 (30-90 minutes):**

```
30 min:  Level 2 → 3 (10,000 exp) → Training page unlocks
31 min:  See 4 ??? Training options + Ruminate
32 min:  Try "??? Training" → Costs 100 exp, lasts 30s
33 min:  First training completes → +10 stat exp shown
35 min:  Complete 10 trainings → STRENGTH UNLOCKED! 🎉
40 min:  Try different training → Agility unlocked 🎉
45 min:  Willpower unlocked 🎉
50 min:  Endurance unlocked 🎉
51 min:  ALL STATS UNLOCKED → Stat Upgrades appear!
52 min:  Buy Training Speed, Stat Gain upgrades
60 min:  Continue training stats to level 2-3...
```

**Session 3 (90-180 minutes):**

```
90 min:  Stats around level 5-8 each
120 min: Level 3 → 4 (1,000,000 exp achieved)
121 min: ADVENTURE PAGE UNLOCKS! 🎉
125 min: First adventure attempt...
```

**Key Moments:**

1. **30 min:** "Oh, there are mystery trainings!"
2. **35 min:** "I unlocked Strength! What are the others?"
3. **50 min:** "All abilities revealed! I feel powerful!"
4. **51 min:** "New upgrades appeared! I can train faster!"
5. **121 min:** "Finally ready for adventure!"

---

## Testing Checklist

### Unit Tests

- [ ] `calculateStatExpRequired(0)` returns 100
- [ ] `calculateStatExpRequired(1)` returns 100
- [ ] `calculateStatTrainingCost(0)` returns 100
- [ ] `calculateStatTrainingCost(1)` returns 100
- [ ] `isStatUnlocked(0)` returns false
- [ ] `isStatUnlocked(1)` returns true
- [ ] `StatsManager` initializes stats at level 0
- [ ] `areAllPhysicalStatsUnlocked()` returns false with any stat at 0
- [ ] `areAllPhysicalStatsUnlocked()` returns true with all stats at 1+
- [ ] Training blocked when stat at max level
- [ ] Training allowed when stat below max level
- [ ] `getTrainingBlockedReason()` returns correct messages

### Integration Tests

- [ ] New game starts with all stats at level 0
- [ ] Training level 0 stat costs 100 character EXP
- [ ] Training level 0 stat gives 10 stat EXP
- [ ] Stat unlocks to level 1 at 100 stat EXP
- [ ] Stat name reveals after unlocking
- [ ] Stat upgrades page hidden until all stats unlocked
- [ ] Stat upgrades page shows after all stats unlocked
- [ ] Adventure page hidden until level 4 + all stats unlocked
- [ ] Adventure page shows at level 4 with all stats unlocked
- [ ] Save/load preserves stat levels correctly
- [ ] Old saves migrate without issues (stats stay at level 1+)

### Manual Playtesting

- [ ] Play from level 1 → level 3 (discovery phase)
- [ ] Unlock all 4 stats sequentially
- [ ] Verify "unlock moment" feels satisfying
- [ ] Verify 20-minute discovery phase feels appropriate
- [ ] Verify stat names/descriptions update correctly
- [ ] Verify blocked training shows clear feedback
- [ ] Verify adventure unlocks at correct time
- [ ] Test with different upgrade purchase orders

---

## Edge Cases & Error Handling

### Stat at Maximum Level

**Scenario:** Player at character level 3, strength at level 15 (max)

**Expected Behavior:**

- Training button disabled
- Message: "Stat maxed out for character level (15)"
- Player must level up to 4 to train further

**Implementation:**

- `canStartTraining()` checks `statLevel >= maxLevel`
- `getTrainingBlockedReason()` returns clear message
- UI shows disabled state with tooltip

### Insufficient Character EXP

**Scenario:** Player has 80 EXP, training costs 100 EXP

**Expected Behavior:**

- Training button disabled
- Message: "Insufficient EXP (need 100, have 80)"
- Player must gain more EXP first

**Implementation:**

- Already working in current system
- `canStartTraining()` checks `currentExp >= cost`

### Training Already Active

**Scenario:** Player tries to start new training while one is active

**Expected Behavior:**

- Stop current training (Progress Knight style)
- Start new training immediately
- Progress on old training is lost

**Implementation:**

- Already working in current system
- `startIdleAction()` stops all other actions first

### Save Migration Edge Cases

**Old Save (v0.1.4):**

- Stats at level 1+
- Load into v0.1.5 with level 0 system
- **Expected:** Stats stay at their current level (migration successful)

**New Save (v0.1.5):**

- Stats at level 0
- Train to level 1
- Save and reload
- **Expected:** Stats stay at level 1 (locked→unlocked persists)

---

## Implementation Priority

### Critical Path (MVP)

1. ✅ **calculations.ts** - Update formulas for level 0
2. ✅ **stats-manager.ts** - Initialize at level 0, add unlock checks
3. ✅ **idle-action-manager.ts** - Dynamic names, validation
4. ✅ **game.ts** - Unlock conditions, helper methods
5. ⏳ **Training View** - Show locked/unlocked states
6. ⏳ **Stats View** - Show locked/unlocked stats
7. ⏳ **Navbar** - Update Adventure visibility
8. ⏳ **Upgrades View** - Hide stat upgrades until unlocked

### Post-MVP Enhancements

- Story blurbs for unlock moments
- Animation for stat unlock reveal
- Sound effects for unlocks
- Achievement for unlocking all stats
- Tutorial tooltips for discovery phase

---

## Rollout Strategy

### Phase 1: Backend Implementation

**PR 1: Core stat level 0 system**

- Update calculations.ts
- Update stats-manager.ts
- Update idle-action-manager.ts
- Update game.ts unlock conditions
- Add unit tests
- Commit type: `improvement: add stat level 0 unlocking system`

### Phase 2: UI Integration

**PR 2: Training and stats page updates**

- Update training view for locked states
- Update stats view for locked stats
- Add validation feedback UI
- Commit type: `improvement: update training UI for locked stats`

**PR 3: Navbar and upgrades updates**

- Update navbar adventure visibility
- Update upgrades page stat section visibility
- Add tooltips for locked features
- Commit type: `improvement: update navigation for stat unlocking`

### Phase 3: Polish

**PR 4: Story and feedback**

- Add story blurbs for unlock moments
- Add unlock animations (optional)
- Add achievement (optional)
- Commit type: `improvement: add story integration for stat unlocking`

---

## Success Metrics

**Player Engagement:**

- Discovery phase completion rate (target: 90%+)
- Time to unlock all stats (target: 15-25 minutes)
- Drop-off rate during discovery phase (target: <10%)

**Gameplay Feel:**

- "Unlock moment" satisfaction (qualitative feedback)
- Clarity of locked vs unlocked states (usability testing)
- Confusion rate with ??? Training (target: <20%)

**Technical Quality:**

- No regressions in existing training system
- Save migration success rate (target: 100%)
- Test coverage for new code (target: 80%+)

---

## Conclusion

The stat level 0 unlocking system:

✅ **Returns to original design intent** (OUTLINE.md)
✅ **Adds meaningful discovery phase** (~20 minutes)
✅ **Creates satisfying unlock moments** (4 reveals + final adventure unlock)
✅ **Maintains game balance** (4,000 EXP investment is reasonable)
✅ **Backwards compatible** (old saves naturally migrate)
✅ **Patch-level change** (improvement: commit type)

This system transforms stat training from "immediately visible" to "gradually discovered," adding mystery and achievement moments to the early game without disrupting the overall progression curve.

**Next Steps:**

1. Review design with team (`/scrum` or `/huddle`)
2. Implement backend (calculations + managers)
3. Implement UI (training + stats views)
4. Playtest discovery phase (15-25 minute session)
5. Adjust costs/rewards based on feedback

---

**Session Status:** ✅ Design Complete, Ready for Implementation
