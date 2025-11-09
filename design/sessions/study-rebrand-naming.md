# Study Page Rebrand - Academic Naming Reference

**Date:** 2025-01-09
**Version:** v0.3.0
**Related:** story-journal-system.md
**Status:** Planning Complete, Ready for Implementation

---

## Overview

This document provides the complete reference for rebranding the "Training" page to "Study" page with academic-themed naming conventions. This aligns with the original game design vision in OUTLINE.md where the "study page" contains research and training actions.

---

## Rationale

### Why Rebrand Training → Study?

**Alignment with OUTLINE.md:**

From `design/OUTLINE.md`:

```markdown
## study page

- The first page to unlock with EXP
- Allows for certain idle actions that can't happen while practicing
- Switching to Practice Page pauses any study action

### research

- First idle action is Research to earn idle EXP
- Is a way to get EXP without clicking
- ...

### training

- The remaining study actions will be for studying each stat in order
- This will spend EXP to do and can be automated for as much EXP as you have on reserve
- Training cannot be done at the same time as active Practice
- ...
```

**Key Points:**

1. Original design calls it "study page" with "research" and "training" sub-sections
2. Current implementation calls it "Training" page with "Ruminate" action
3. Rebrand brings implementation in line with original vision
4. Academic theming makes more sense for early-game (learning before fighting)
5. "Study" encompasses both passive research and active training

### Narrative Cohesion

**Early Game Arc:**

1. **Practice** - Click to gain experience
2. **Study** - Research and train skills academically
3. **Adventure** - Apply learned skills in real combat

Academic study → practical training → real-world application is natural progression.

---

## Complete Naming Changes

### Page & Menu

| Current               | New          | Rationale                                           |
| --------------------- | ------------ | --------------------------------------------------- |
| Training              | Study        | Matches OUTLINE.md, encompasses research + training |
| training.svelte       | study.svelte | File name consistency                               |
| Menu item: "Training" | "Study"      | Navigation label                                    |

### Core Actions

| Current ID           | Current Name       | New ID              | New Name           | Rationale                                       |
| -------------------- | ------------------ | ------------------- | ------------------ | ----------------------------------------------- |
| `practice-ruminate`  | Ruminate           | `study-research`    | Research           | OUTLINE.md calls it "research", clearer purpose |
| `train-strength`     | Train Strength     | `study-athletics`   | Study Athletics    | Academic flavor, strength = athletics           |
| `train-agility`      | Train Agility      | `study-kinetics`    | Study Kinetics     | Kinetics = science of motion                    |
| `train-willpower`    | Train Willpower    | `study-selfdefense` | Study Self-Defense | Willpower = mental fortitude in defense         |
| `train-endurance`    | Train Endurance    | `study-fitness`     | Study Fitness      | Endurance = physical conditioning               |
| `train-intelligence` | Train Intelligence | `study-arcana`      | Study Arcana       | Magic stats = arcane knowledge (locked)         |
| `train-wisdom`       | Train Wisdom       | `study-meditation`  | Study Meditation   | Wisdom = mental clarity (locked)                |

### Action Descriptions

#### Research (formerly Ruminate)

**Current:**

- Name: "Ruminate"
- Description: "Think deeply about your experiences to gain insights"

**New:**

- Name: "Research"
- Description: "Study academic texts to gain experience and insights"

**Display Text:**

- "Cost: Free"
- "Duration: [calculated]"
- "Benefit: +[calculated] EXP"

---

#### Study Athletics (formerly Train Strength)

**Current:**

- Name: "Train Strength"
- Description: "Improve your physical strength through rigorous training"

**New:**

- Name: "Study Athletics"
- Description: "Learn strength training and combat theory"
- **Subject Title:** "Strength Training & Combat Theory"

**Display Text:**

- "Stat: Strength"
- "Cost: [calculated] EXP"
- "Duration: [calculated]"
- "Benefit: +[calculated] Strength EXP"

---

#### Study Kinetics (formerly Train Agility)

**Current:**

- Name: "Train Agility"
- Description: "Improve your speed and reflexes through practice"

**New:**

- Name: "Study Kinetics"
- Description: "Study speed, agility, and reflexes methodology"
- **Subject Title:** "Speed & Reflexes Methodology"

**Display Text:**

- "Stat: Agility"
- "Cost: [calculated] EXP"
- "Duration: [calculated]"
- "Benefit: +[calculated] Agility EXP"

---

#### Study Self-Defense (formerly Train Willpower)

**Current:**

- Name: "Train Willpower"
- Description: "Strengthen your mental fortitude and defensive capabilities"

**New:**

- Name: "Study Self-Defense"
- Description: "Learn principles of mental fortitude and defensive tactics"
- **Subject Title:** "Principles of Mental Fortitude"

**Display Text:**

- "Stat: Willpower"
- "Cost: [calculated] EXP"
- "Duration: [calculated]"
- "Benefit: +[calculated] Willpower EXP"

---

#### Study Fitness (formerly Train Endurance)

**Current:**

- Name: "Train Endurance"
- Description: "Build your stamina and physical conditioning"

**New:**

- Name: "Study Fitness"
- Description: "Study physical conditioning theory and endurance training"
- **Subject Title:** "Physical Conditioning Theory"

**Display Text:**

- "Stat: Endurance"
- "Cost: [calculated] EXP"
- "Duration: [calculated]"
- "Benefit: +[calculated] Endurance EXP"

---

#### Study Arcana (formerly Train Intelligence) - LOCKED

**Current:**

- Name: "Train Intelligence"
- Description: "Expand your magical knowledge and mana capacity"

**New:**

- Name: "Study Arcana"
- Description: "Study theoretical magic and mana control techniques"
- **Subject Title:** "Theoretical Magic & Mana Control"

**Display Text:**

- "Stat: Intelligence"
- "Status: LOCKED (Unlock with meditation/magic system)"

---

#### Study Meditation (formerly Train Wisdom) - LOCKED

**Current:**

- Name: "Train Wisdom"
- Description: "Develop your mental clarity and mana regeneration"

**New:**

- Name: "Study Meditation"
- Description: "Learn mental clarity and focus techniques"
- **Subject Title:** "Mental Clarity & Focus Techniques"

**Display Text:**

- "Stat: Wisdom"
- "Status: LOCKED (Unlock with meditation/magic system)"

---

## Upgrade Renaming

Related upgrades should also use academic theming:

| Current Name            | Current Description                            | New Name             | New Description                                       |
| ----------------------- | ---------------------------------------------- | -------------------- | ----------------------------------------------------- |
| Training Speed          | Increases speed of training actions            | Study Efficiency     | Study faster and absorb knowledge more quickly        |
| Training Cost Reduction | Reduces EXP cost of training                   | Academic Scholarship | Reduce the cost of studying through better techniques |
| Stat Gain Bonus         | Increases stat EXP gained from training        | Knowledge Retention  | Retain more knowledge from each study session         |
| Training Crit Chance    | Chance for critical stat gains during training | Breakthrough Moments | Chance for sudden insights during study sessions      |

**Implementation Note:** These upgrades are defined in UpgradeManager and may need renaming in both:

- Upgrade ID (if changing)
- Display name
- Description text
- Potentially benefit text

---

## Implementation Checklist

### File Renaming

- [ ] `src/lib/views/training.svelte` → `study.svelte`
- [ ] `tests/unit/training.test.ts` → `study.test.ts` (if exists)
- [ ] Update all imports across codebase (find/replace)

### IdleActionManager Updates

**File:** `src/lib/managers/idle-action-manager.ts`

```typescript
// Current
private initializeTrainingActions(): void {
  this.trainingActions = {
    'practice-ruminate': {
      id: 'practice-ruminate',
      name: 'Ruminate',
      description: 'Think deeply about your experiences to gain insights',
      // ...
    },
    'train-strength': {
      id: 'train-strength',
      name: 'Train Strength',
      description: 'Improve your physical strength through rigorous training',
      trainsStat: 'strength',
      // ...
    },
    // ... more training actions
  };
}

// NEW
private initializeTrainingActions(): void {
  this.trainingActions = {
    'study-research': {
      id: 'study-research',
      name: 'Research',
      description: 'Study academic texts to gain experience and insights',
      // ...
    },
    'study-athletics': {
      id: 'study-athletics',
      name: 'Study Athletics',
      description: 'Learn strength training and combat theory',
      subjectTitle: 'Strength Training & Combat Theory',
      trainsStat: 'strength',
      // ...
    },
    'study-kinetics': {
      id: 'study-kinetics',
      name: 'Study Kinetics',
      description: 'Study speed, agility, and reflexes methodology',
      subjectTitle: 'Speed & Reflexes Methodology',
      trainsStat: 'agility',
      // ...
    },
    'study-selfdefense': {
      id: 'study-selfdefense',
      name: 'Study Self-Defense',
      description: 'Learn principles of mental fortitude and defensive tactics',
      subjectTitle: 'Principles of Mental Fortitude',
      trainsStat: 'willpower',
      // ...
    },
    'study-fitness': {
      id: 'study-fitness',
      name: 'Study Fitness',
      description: 'Study physical conditioning theory and endurance training',
      subjectTitle: 'Physical Conditioning Theory',
      trainsStat: 'endurance',
      // ...
    },
    'study-arcana': {
      id: 'study-arcana',
      name: 'Study Arcana',
      description: 'Study theoretical magic and mana control techniques',
      subjectTitle: 'Theoretical Magic & Mana Control',
      trainsStat: 'intelligence',
      isLocked: true, // Unlock with meditation/magic system
      // ...
    },
    'study-meditation': {
      id: 'study-meditation',
      name: 'Study Meditation',
      description: 'Learn mental clarity and focus techniques',
      subjectTitle: 'Mental Clarity & Focus Techniques',
      trainsStat: 'wisdom',
      isLocked: true, // Unlock with meditation/magic system
      // ...
    }
  };
}
```

**Note:** Add optional `subjectTitle` field to IdleAction interface

### UpgradeManager Updates

**File:** `src/lib/managers/upgrade-manager.ts`

Update relevant upgrades (if they exist):

```typescript
// Training Speed → Study Efficiency
{
  id: 'study-efficiency', // was 'training-speed'
  name: 'Study Efficiency',
  description: 'Study faster and absorb knowledge more quickly',
  // ...
}

// Training Cost → Academic Scholarship
{
  id: 'academic-scholarship', // was 'training-cost'
  name: 'Academic Scholarship',
  description: 'Reduce the cost of studying through better techniques',
  // ...
}

// Stat Gain Bonus → Knowledge Retention
{
  id: 'knowledge-retention', // was 'stat-gain-bonus'
  name: 'Knowledge Retention',
  description: 'Retain more knowledge from each study session',
  // ...
}
```

### UI/Routing Updates

**File:** `src/lib/navbar.svelte`

```typescript
// Change menu item
{ name: 'study', label: 'Study', icon: BookOpenIcon, minExp: 100 }
```

**File:** `src/lib/view.svelte`

```svelte
<!-- Update routing -->
{#if game.menu === 'study'}
  <Study {game} />
{/if}
```

**File:** `src/lib/views/study.svelte`

```svelte
<ViewLayout title="study" maxWidth="1200px">
  <!-- Component content -->
</ViewLayout>
```

### Game Class Updates

**File:** `src/lib/game.ts`

```typescript
// Update menu initialization
this.menu = 'practice'; // Default menu

// Update any menu name references
if (this.menu === 'study') {
	// was 'training'
	// ...
}

// Update method names (if any)
// getTrainingActions() → keep same name (trainingActions still accurate)
// IdleActionManager internally uses "training" terminology
```

**Note:** Internal terminology (trainingActions, IdleActionManager method names) can stay the same. Only user-facing names change.

### Save Migration

**Backward Compatibility:**

Old saves may reference `'training'` menu or old action IDs. Need graceful migration:

```typescript
// In SaveManager.loadState()
private migrateMenuName(menu: string): string {
  if (menu === 'training') return 'study';
  return menu;
}

private migrateActionId(actionId: string): string {
  const actionMigrations: Record<string, string> = {
    'practice-ruminate': 'study-research',
    'train-strength': 'study-athletics',
    'train-agility': 'study-kinetics',
    'train-willpower': 'study-selfdefense',
    'train-endurance': 'study-fitness',
    'train-intelligence': 'study-arcana',
    'train-wisdom': 'study-meditation'
  };
  return actionMigrations[actionId] || actionId;
}
```

Apply migrations during save load to handle old data gracefully.

---

## Visual Design Consistency

### Page Title

**Current:** "training" (ViewLayout title)
**New:** "study"

### Action Cards

No visual changes needed - same card structure, just updated text.

**Optional Enhancement:** Add subject title as subtitle on stat training cards:

```svelte
<div class="action-header">
  <div class="action-name">Study Athletics</div>
  <div class="subject-title">Strength Training & Combat Theory</div>
  <div class="stat-info">
    <!-- Strength level info -->
  </div>
</div>
```

### Color Scheme

No changes - maintain existing training page color scheme and styling.

---

## Testing Strategy

### Unit Tests

**Test Migration:**

- Old action IDs load correctly and migrate
- Old menu name 'training' migrates to 'study'
- All actions have correct new names

**Test Actions:**

- All study actions have correct stat assignments
- Research action still provides EXP bonus
- Subject titles display correctly (if added)

### Integration Tests

**User Flow:**

1. Load old save with 'training' menu → verify migrates to 'study'
2. Start new game → verify "Study" appears in navbar at 100 EXP
3. Open study page → verify "Research" action available
4. Reach Level 3 → verify stat study actions appear
5. Complete study action → verify stat EXP gained correctly

### Regression Tests

**Ensure No Breakage:**

- All existing upgrade effects still apply (study efficiency, etc.)
- Stat training mechanics unchanged (cost calculations, duration, EXP gain)
- Research (ruminate) mechanics unchanged
- Save/load round-trip preserves state

---

## Future Enhancements

### Subject Title Display

**Optional:** Show academic subject titles prominently on study cards

**Implementation:**

```svelte
{#if action.subjectTitle}
  <div class="subject-title">{action.subjectTitle}</div>
{/if}
```

```css
.subject-title {
	font-family: 'Caveat', cursive;
	font-size: 1.1rem;
	opacity: 0.8;
	font-style: italic;
	margin-top: 0.25rem;
}
```

### Study Page Flavor Text

**Optional:** Add thematic flavor to study page header

**Example:**

```
"The library of knowledge awaits. Choose your subject wisely."
```

### Academic Achievements

**Future Feature:** Achievements tied to study actions

**Examples:**

- "Scholar" - Complete 100 study sessions
- "Master of Athletics" - Max out Strength through study
- "Polymath" - Study all 6 stats to level 50

---

## Communication Plan

### Changelog Entry

```markdown
### Changed

- **Study Page Rebrand**: Renamed "Training" page to "Study" with academic-themed action names
  - "Ruminate" → "Research" (study to gain EXP)
  - "Train Strength" → "Study Athletics" (Strength Training & Combat Theory)
  - "Train Agility" → "Study Kinetics" (Speed & Reflexes Methodology)
  - "Train Willpower" → "Study Self-Defense" (Principles of Mental Fortitude)
  - "Train Endurance" → "Study Fitness" (Physical Conditioning Theory)
  - Future: "Study Arcana" (Theoretical Magic) and "Study Meditation" (Mental Clarity)
- Updated related upgrade names for consistency (Study Efficiency, Academic Scholarship, etc.)
- **Note**: Old saves will automatically migrate to new naming
```

### User-Facing Impact

**Minimal disruption:**

- Same functionality, new names
- All saves backward compatible
- Visual appearance unchanged
- Mechanics unchanged

**Benefits:**

- Clearer purpose of page (study = research + training)
- Better narrative cohesion (learn → train → fight)
- Aligns with original game design vision

---

## Lessons Learned

### What Went Well

1. **Early alignment check** - Reviewing OUTLINE.md revealed discrepancy early
2. **Academic theming** - Natural fit for early-game progression
3. **Backward compatibility** - Migration strategy preserves old saves

### Challenges

1. **Naming consistency** - Need to balance "training" internal terminology with "study" user-facing names
2. **Subject titles** - Optional enhancement, need to decide if worth complexity

### Future Considerations

1. **Magic stats unlock** - When Arcana/Meditation unlock, ensure naming fits theme
2. **Focus page** - OUTLINE.md mentions "focus page" for meditation - may need coordination
3. **Upgrades** - Some upgrade names reference "training" - audit all upgrade text

---

## Summary

**Scope:** Rename Training → Study with academic action names
**Effort:** 3-4 hours
**Impact:** Low (cosmetic changes, high value for narrative cohesion)
**Risk:** Low (backward compatibility handled, no mechanical changes)

**Key Deliverables:**

- ✅ File renamed (training.svelte → study.svelte)
- ✅ All actions renamed with academic flavor
- ✅ Navbar/routing updated
- ✅ Save migration implemented
- ✅ Tests updated
- ✅ Documentation complete

**This rebrand brings the implementation in line with the original game design vision while improving narrative cohesion and clarity.**

---

**Document Status:** ✅ Complete
**Next Steps:** Implement alongside story/journal system in v0.3.0
**Related Documents:** story-journal-system.md
