# Answers to Your Testing Questions

---

## Q1: Test Philosophy - Numbers vs. Behaviors?

### Your Question

> Should we test exact numbers (10 stat EXP per training) or behaviors (training gives stat EXP, which accumulates toward levels)?

### Answer: Test Behaviors, Parametrize Numbers

**The rule:** Test behaviors that won't change. Parametrize numbers that will.

```typescript
// ❌ TEST NUMBERS (BRITTLE)
expect(statExpReward).toBe(10);
// If user changes 10 → 15, test fails

// ✓ TEST BEHAVIORS (FLEXIBLE)
expect(statExpReward).toBeGreaterThan(0);
expect(multipleTrainings.statExp).toBeGreaterThan(singleTraining.statExp);
expect(levelUpOccurs).toBe(true); // When accumulated enough
```

**Why this works for v0.1.5:**

The **behavior** is stable:

- Training awards stat EXP ✓ (won't change)
- Multiple trainings accumulate toward level-ups ✓ (won't change)
- Crits give more than normal ✓ (won't change)

The **numbers** are tunable:

- 10 stat EXP per training → could become 15, 8, 20
- 100 EXP to level → could become 80, 120, 150
- 2x crit multiplier → could become 1.5x, 2.5x

**Test the stable part, parametrize the tunable part.**

---

## Q2: Builder Flexibility - How to Structure?

### Your Question

> How should we structure test builders to handle variable stat EXP requirements, training rewards, costs, and stat level-up detection?

### Answer: Use Constructor Injection Pattern

The `ParametricIdleActionBuilder` I provided implements this pattern:

```typescript
class ParametricIdleActionBuilder {
  // Store configuration values
  private trainingReward: number = 10;
  private critMultiplier: number = 2;
  private statLevelCosts: { [level: number]: number } = { 1: 100, 2: 150, ... };

  // Fluent API to configure
  withTrainingRewardOf(amount: number): this {
    this.trainingReward = amount;
    return this;
  }

  withStatLevelCostOf(level: number, cost: number): this {
    this.statLevelCosts[level] = cost;
    return this;
  }

  // Build the manager with these values
  build(): IdleActionManager {
    this.deps.addStatExp = this.createAddStatExpFunction();
    return new IdleActionManager(this.deps);
  }

  // Key: Simulate real behavior based on configured values
  private createAddStatExpFunction(): IdleActionDependencies['addStatExp'] {
    return (stat: string, amount: number) => {
      const newExp = currentExp + amount;
      const threshold = this.statLevelCosts[currentLevel];

      if (newExp >= threshold) {
        // Actually simulate level-up
        return { success: true, leveledUp: true, newLevel: currentLevel + 1 };
      }
      // Or just accumulate
      return { success: true, leveledUp: false, newLevel: currentLevel };
    };
  }
}
```

**Usage:**

```typescript
// Test 1: Normal case
const manager1 = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(10)
	.withStatLevelCostOf(1, 100)
	.build();

// Test 2: Low cost (quick level-up)
const manager2 = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(10)
	.withStatLevelCostOf(1, 50) // Half the cost
	.build();

// Test 3: High cost (slow progression)
const manager3 = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(10)
	.withStatLevelCostOf(1, 200) // Double the cost
	.build();
```

**Why this works:**

- Tests control the numbers, not the code
- When user tunes the game, update builder config, not test logic
- Builder simulates realistic behavior (actual level-up detection)
- Tests validate outcomes, not implementation

---

## Q3: Test Coverage Strategy - Unit vs. Integration?

### Your Question

> For the new stat EXP system, should we test individual components separately, test end-to-end flows, or mock the stat EXP system?

### Answer: Do All Three (Layered Approach)

```
┌─────────────────────────────────────────────────────┐
│         E2E Integration Tests (Slowest)             │
│    "User completes 10 trainings → reaches level 5"  │
│    Uses real Game class, IdleActionManager, etc.    │
└─────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────┐
│         Manager Integration Tests (Medium)          │
│    "Train 5 times → stat EXP accumulates → level"   │
│    Combines IdleActionManager + realistic mock      │
└─────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────┐
│           Unit Tests (Fastest)                      │
│    "Training completes" "Action lifecycle" etc.     │
│    Tests individual methods in isolation            │
└─────────────────────────────────────────────────────┘
```

**Which tests to write for v0.1.5:**

### Unit Tests (Keep these)

```typescript
describe('IdleActionManager - Unit', () => {
	// These are fast and focused
	it('should start an action and set it as active');
	it('should stop other actions when starting a new one');
	it('should update progress based on elapsed time');
	it('should complete action when progress >= 1.0');
	it('should return false when starting non-existent action');
});
```

**What to test:** Structure, state transitions, guard conditions

### Integration Tests (Add these)

```typescript
describe('IdleActionManager - Integration', () => {
	// These validate realistic flows

	it('should award stat EXP on training completion', () => {
		// Uses ParametricIdleActionBuilder
		// Validates: Train → EXP awarded → can use later
	});

	it('should accumulate stat EXP and detect level-up', () => {
		// Multiple trainings → accumulate → level-up happens
		// This is the key test for v0.1.5
	});

	it('should continue training indefinitely (Progress Knight style)', () => {
		// Train → complete → restart → train again
		// Validates the core game loop
	});

	it('should handle crit chance affecting progression speed', () => {
		// Crit → faster level-up
		// Validates crit multiplier works
	});
});
```

**What to test:** User-visible behaviors, progression flows, state accumulation

### E2E Tests (Write later, for Phase 3)

```typescript
describe('Game - End-to-End', () => {
	it('should progress from level 1 to level 5 through training', () => {
		// Real Game instance
		// Real UI interactions
		// Real time passing
		// This is slow but most valuable for launch
	});
});
```

**Why this layering works:**

| Layer       | Speed  | Coverage | Value               |
| ----------- | ------ | -------- | ------------------- |
| Unit        | Fast   | Narrow   | Catches regressions |
| Integration | Medium | Medium   | Validates flows     |
| E2E         | Slow   | Broad    | Catches UI bugs     |

For v0.1.5, focus on **Integration tests** because:

1. They validate the new stat EXP system works end-to-end
2. They're fast enough for pre-commit hooks
3. They survive number tuning (using parametric builders)
4. They catch real user-visible bugs

---

## Q4: Resilient Assertions - Surviving Number Tuning

### Your Question

> How do we write tests that survive number tuning? If training reward changes from 10→15 stat EXP, tests shouldn't break.

### Answer: Three Assertion Patterns

### Pattern 1: Parametric Builders

```typescript
// User changes training reward in constants
// CONSTANT.ts: TRAINING_REWARD = 10 → 15

// Test doesn't care:
const manager = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(15) // ← Update here when tuning
	.withStatLevelCostOf(1, 75) // Adjust level cost too
	.build();

// Rest of test is unchanged
```

### Pattern 2: Relationship Assertions

```typescript
// Single training test (doesn't care about exact EXP)
it('should complete training', () => {
	const results = manager.updateIdleActions();
	expect(results[0].shouldContinue).toBe(true);
	// Doesn't test: results[0].statExpGained
	// Why? Because stat EXP is tracked internally, not exposed in results
});

// Accumulation test (validates relationship)
it('should accumulate EXP toward level-up', () => {
	// Complete several trainings
	for (let i = 0; i < trainings; i++) {
		// ... train ...
	}

	// Check: Did we level up?
	// The exact number of trainings depends on:
	// - trainingRewardOf(?)
	// - statLevelCostOf(1, ?)
	// We parametrize both, so test is flexible
	expect(finalResult.statGained?.stat).toBe('strength');
});
```

### Pattern 3: Proportional Assertions

```typescript
// Test cost increases proportionally (not absolute value)
it('should scale training cost with stat level', () => {
	const level1Manager = new ParametricIdleActionBuilder()
		.withInitialStats({ strength: 1 })
		.withTrainingCostOf(10)
		.withCurrentExp(1000)
		.build();

	const level10Manager = new ParametricIdleActionBuilder()
		.withInitialStats({ strength: 10 })
		.withTrainingCostOf(10) // Same base
		.withCurrentExp(1000)
		.build();

	// Both can train? Depends on formula.
	// But we KNOW level 10 costs MORE than level 1.
	const canTrain1 = level1Manager.canStartTraining('train-strength');
	const costRatio = level10Cost / level1Cost;

	// This test survives cost formula changes
	// Because it tests the RELATIONSHIP not the VALUE
	expect(costRatio).toBeGreaterThan(1); // Always true, formula-agnostic
});
```

**Summary:**

- Use builders to **parametrize** all numbers
- Write assertions that test **relationships** not **values**
- Focus on outcomes that are **formula-independent**

---

## Q5: Test Failures - How to Fix Them?

### Your Question

> Looking at idle-action-manager tests, what's the best way to fix them while keeping flexibility?

### Answer: Fix in Three Steps

### Step 1: Identify the Root Cause

```typescript
// Current failing test:
it('should award EXP and level up stat when affordable', () => {
	const manager = new IdleActionManagerBuilder().withStatCost(50).withCurrentExp(100).build();

	// ... complete training ...

	expect(results[0].statGained).toEqual({ stat: 'strength', amount: 1 });
	// ❌ FAILS: undefined
});

// Root cause: The builder's addStatExp is hardcoded
//   addStatExp: () => ({ success: true, leveledUp: false, newLevel: 1 })
//                                              ↑ ALWAYS FALSE
// It never returns leveledUp: true, so statGained is never set
```

### Step 2: Rewrite to Use ParametricIdleActionBuilder

```typescript
import { ParametricIdleActionBuilder } from '../../helpers/parametric-idle-action-builder';

it('should level up stat through accumulated training EXP', () => {
	vi.useFakeTimers();

	// Use the new builder that actually simulates stat EXP
	const manager = new ParametricIdleActionBuilder()
		.withTrainingRewardOf(10)
		.withStatLevelCostOf(1, 50) // Need 50 EXP to level
		.withCurrentExp(500) // Plenty for 5 trainings
		.build();

	// Complete 5 trainings = 50 stat EXP = level up
	const results: any[] = [];
	for (let i = 0; i < 5; i++) {
		manager.startIdleAction('training', 'train-strength');
		const action = manager.getTrainingAction('train-strength');

		vi.advanceTimersByTime(action!.duration + 100);
		const completionResults = manager.updateIdleActions();
		results.push(completionResults[0]);
	}

	// On final training, expect level-up
	const finalResult = results[results.length - 1];
	expect(finalResult.statGained).toBeDefined();
	expect(finalResult.statGained.stat).toBe('strength');
	expect(finalResult.statGained.amount).toBe(1);

	vi.useRealTimers();
});
```

### Step 3: Split Into Multiple Tests

Don't try to test too much in one test. Break it down:

```typescript
describe('Training Completion (v0.1.5)', () => {
	// Test 1: Single training completes
	it('should complete training and mark action as active', () => {
		// Single training, no level-up expected
		// Just validate: training works
	});

	// Test 2: Accumulation over time
	it('should accumulate stat EXP toward level-up', () => {
		// Multiple trainings, level-up should happen
		// Validate: accumulation works
	});

	// Test 3: Crit affects speed
	it('should level up faster with crit training', () => {
		// Same setup, but with 100% crit chance
		// Validate: crit multiplier works
	});

	// Test 4: Different stats independent
	it('should track each stat independently', () => {
		// Train strength and dexterity separately
		// Validate: no cross-contamination
	});
});
```

---

## Q6: Which Tests to Keep/Modify/Remove?

### Your Question

> Which tests should we keep, which should we modify, and which should we remove for the new training system?

### Answer: Classification Guide

### KEEP (Structure doesn't change with v0.1.5)

```typescript
✓ "should initialize training actions with correct defaults"
✓ "should initialize meditation actions with correct defaults"
✓ "should start an action and set it as active"
✓ "should stop other actions when starting a new one"
✓ "should allow stopping an active action"
✓ "should return false when starting non-existent action"
✓ "should update progress based on elapsed time"
✓ "should complete action when progress >= 1.0"
✓ "should handle multiple completions in one update"
✓ "should automatically restart osmosis after completion"
✓ "should continue training even when stat level up occurs"
✓ "should migrate training actions and preserve progress"
✓ "should add new actions during migration"
✓ "should handle edge cases (zero duration, very high multipliers)"

Why: These test ACTION LIFECYCLE not the reward system
```

### MODIFY (Rewrite with parametric builders)

```typescript
~ "should award EXP and level up stat when affordable"
  BEFORE:
  - Assumes single training causes level-up (wrong)
  - Uses IdleActionManagerBuilder (hardcoded mock)

  AFTER:
  - Split into "single training completes" + "accumulation → level-up"
  - Use ParametricIdleActionBuilder
  - Test realistic flow over multiple trainings

~ "should apply crit chance to training reward"
  BEFORE:
  - Tests exact EXP values

  AFTER:
  - Test that crits cause FASTER level-up
  - Use relationship assertion (fewer trainings needed)
  - Use ParametricIdleActionBuilder

~ "should train different stats correctly"
  BEFORE:
  - Tests exact EXP values per stat

  AFTER:
  - Test that each stat level-ups independently
  - Use ParametricIdleActionBuilder configured for quick level-ups
  - Check that training one stat doesn't affect others
```

### REMOVE (Obsolete in v0.1.5)

```typescript
❌ Any test that expects "training gives character EXP"
   Reason: v0.1.5 removed character EXP from training rewards

   Example tests to remove:
   - "should award base EXP on training completion"
   - "should award EXP increasing with stat level"
   - "should add character EXP bonus based on crit"

   Why: v0.1.5 changed the design:
   - Training gives STAT EXP, not character EXP
   - Character EXP comes from clicking and osmosis only
```

---

## Q7: New Tests to Add

### Your Question

> Any new tests we should add to cover v0.1.5 mechanics properly?

### Answer: New Test Suite for Stat EXP System

```typescript
describe('Stat EXP System (v0.1.5 New)', () => {
	// NEW: EXP accumulation and level-up detection
	it('should accumulate stat EXP from multiple trainings', () => {
		// Validate the core new mechanic
	});

	it('should detect level-up when EXP threshold is reached', () => {
		// Validate level-up detection works
	});

	it('should reset stat EXP on level-up (carry-over)', () => {
		// If you earn 125 EXP and need 100 to level, you should have 25 EXP on next level
		// This is important for game feel
	});

	// NEW: Training cost scaling with stat level
	it('should prevent starting training when stat level costs too much', () => {
		// Train strength to level 10 (very expensive)
		// Then can't afford next training with limited EXP
	});

	// NEW: Stat level caps
	it('should cap stat levels at character level / 5', () => {
		// Character level 1-4: max stat level 0 (can't train)
		// Character level 5-9: max stat level 1
		// Character level 10+: max stat level 2
		// This prevents snowballing
	});

	// NEW: Indefinite training
	it('should allow training to continue indefinitely', () => {
		// OLD: Training stopped after reaching a level cap
		// NEW: Can keep training strength to level 100+ (Progress Knight style)
		// Validate: No arbitrary cap
	});

	// NEW: Crit multiplier on training
	it('should multiply stat EXP reward by crit multiplier', () => {
		// 10 base × 2.0 crit multiplier = 20 on crit
		// Validate: Crit mechanic works
	});

	// NEW: Training continues after completion
	it('should automatically restart training after completion', () => {
		// Osmosis and training both auto-restart (not meditation)
		// Validate: shouldContinue = true for training
	});
});
```

**Priority order:**

1. Accumulation + level-up detection (core mechanic)
2. Training continues (new feature)
3. Crit multiplier (balance mechanic)
4. Training cost scaling (progression gating)
5. Stat level caps (progression balance)

---

## Summary: Quick Reference

| Question                     | Answer                                                               |
| ---------------------------- | -------------------------------------------------------------------- |
| **Numbers vs behaviors?**    | Test behaviors, parametrize numbers                                  |
| **Builder structure?**       | Use `ParametricIdleActionBuilder` with fluent API                    |
| **Unit vs integration?**     | Do both - focus on integration for v0.1.5                            |
| **Surviving number tuning?** | Parametric builders + relationship assertions                        |
| **Fix failing tests?**       | Use ParametricIdleActionBuilder, split into multiple tests           |
| **Keep/modify/remove?**      | Keep structure tests, modify reward tests, remove old features       |
| **New tests?**               | Add stat EXP accumulation, level-up detection, crit multiplier tests |

---

## Implementation Checklist

- [ ] Copy `ParametricIdleActionBuilder` from `/tests/helpers/parametric-idle-action-builder.ts`
- [ ] Replace `IdleActionManagerBuilder` with `ParametricIdleActionBuilder` in failing tests
- [ ] Split "should award EXP and level up stat" into multiple tests
- [ ] Rewrite crit test using relationship assertion
- [ ] Run tests: `npm run test:run`
- [ ] Verify tests pass with current numbers
- [ ] Test that changing numbers doesn't break tests
- [ ] Document findings for user

---

**Next:** See `TESTING_QUICK_START.md` for immediate implementation examples
