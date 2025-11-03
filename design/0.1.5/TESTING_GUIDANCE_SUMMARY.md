# Testing Guidance Summary for v0.1.5

## What I've Provided

I've created a comprehensive testing strategy for making your tests resilient to v0.1.5's game rebalancing. Here are the documents:

### 1. **TESTING_STRATEGY_V0.1.5.md** (Full Strategy)

- Complete philosophy on behavior-driven testing
- Classification of tests (keep/modify/remove)
- Parametric builder pattern implementation
- Detailed examples for stat EXP, training costs, upgrades
- Resilience patterns and best practices

### 2. **TESTING_QUICK_START.md** (Get Started Fast)

- TL;DR summary
- Quick fixes for failing tests
- Three assertion patterns (numbers → relationships)
- Builder API cheat sheet
- Template tests you can copy
- Common mistakes to avoid

### 3. **ANSWERS_TO_YOUR_QUESTIONS.md** (Direct Answers)

- Answers all 7 questions you asked
- Philosophy: behaviors vs. numbers
- Builder structure explained
- Unit vs. integration testing
- Fixing the failing test step-by-step
- Which tests to keep/modify/remove

### 4. **REWRITTEN_TEST_EXAMPLES.md** (Code Examples)

- Before/after examples showing the transformation
- Complete rewritten tests you can copy
- Stat EXP accumulation test
- Training cost tests
- Multi-level upgrade tests
- Patterns for each scenario

### 5. **parametric-idle-action-builder.ts** (Implementation)

- Ready-to-use ParametricIdleActionBuilder
- Simulates realistic stat progression
- Parametric configuration for all game constants
- Methods to inspect game state for assertions

---

## Core Concept: The Resilience Framework

### The Problem

```
User changes: trainingReward from 10 → 15
Your test expects: results[0].expGained === 10
Result: TEST FAILS ❌
```

### The Solution

```
Test uses: new ParametricIdleActionBuilder()
              .withTrainingRewardOf(15)  // ← Updated here
              .build()

Test expects: results[0].expGained > 0   // ← Still passes
Result: TEST PASSES ✓
```

### Three Key Changes

1. **Parametric Builders** - Abstract constants into builder methods
2. **Behavior Assertions** - Test relationships, not values
3. **Integration Tests** - Test full flows, not isolated pieces

---

## Implementation Roadmap

### Phase 1: Immediate (Today)

- [ ] Copy `parametric-idle-action-builder.ts` to your tests/helpers/
- [ ] Update the one failing idle-action test using the new builder
- [ ] Run tests to verify it passes

### Phase 2: Complete Refactoring (This Week)

- [ ] Rewrite all idle-action-manager tests using ParametricIdleActionBuilder
- [ ] Create similar ParametricUpgradeBuilder for upgrade tests
- [ ] Create ParametricStatsBuilder for stats tests
- [ ] Split brittle tests into multiple focused tests

### Phase 3: Ongoing (As Numbers Change)

- [ ] When user tunes game balance, update builder configs in tests
- [ ] Tests validate behavior still works with new numbers
- [ ] Document which constants were changed in each test

---

## Quick Reference: Test Assessment

| Test                                                 | Status    | Action                                             |
| ---------------------------------------------------- | --------- | -------------------------------------------------- |
| `should initialize actions with correct defaults`    | ✓ KEEP    | No changes needed                                  |
| `should start an action and set it as active`        | ✓ KEEP    | No changes needed                                  |
| `should award EXP and level up stat when affordable` | 🔴 FAIL   | REWRITE with ParametricBuilder, split into 2 tests |
| `should apply crit chance to training reward`        | ✓ PASS    | MODIFY to use relationship assertions              |
| `should train different stats correctly`             | ✓ PASS    | MODIFY to use ParametricBuilder                    |
| `should migrate training actions`                    | ✓ KEEP    | No changes needed                                  |
| Any test about character EXP from training           | ❌ REMOVE | Feature removed in v0.1.5                          |

---

## Key Principles

### 1. Stable Things to Test

```
✓ Training completes successfully
✓ Multiple trainings accumulate
✓ Level-ups are detected
✓ Crits give more than normal
✓ Each stat is independent
✓ Training continues indefinitely
✓ Actions migrate on load
```

### 2. Tunable Things to Parametrize

```
- Training reward (currently 10 stat EXP)
- Stat EXP cost (currently 100 for level 1→2)
- Crit multiplier (currently 2x)
- Training cost (currently 10 character EXP)
- Training duration (currently 15s)
```

### 3. Brittle Things to Avoid

```
❌ expect(results[0].expGained).toBe(10)
❌ expect(cost).toBe(100)
❌ expect(action.duration).toBe(15000)
❌ expect(statGained).toEqual({ amount: 1 })
```

### 4. Flexible Things to Do Instead

```
✓ expect(results[0].expGained).toBeGreaterThan(0)
✓ expect(newCost).toBeGreaterThan(oldCost)
✓ expect(fastAction.duration).toBeLessThan(slowAction.duration)
✓ expect(statGained?.stat).toBe('strength')
```

---

## The Failing Test: Root Cause & Fix

### Root Cause

```typescript
// Current builder's addStatExp is hardcoded:
addStatExp: () => ({ success: true, leveledUp: false, newLevel: 1 });
//                                          ↑ ALWAYS FALSE
// So test fails when expecting statGained to be defined
```

### The Fix

```typescript
// Use ParametricIdleActionBuilder which simulates real progression
const manager = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(10) // 10 stat EXP per training
	.withStatLevelCostOf(1, 50) // Need 50 total EXP to level
	.build();

// Complete 5 trainings = 50 stat EXP = level up occurs
// Now addStatExp returns leveledUp: true ✓
```

---

## Testing Stat EXP System Properly

### What Each Test Should Validate

```typescript
describe('Training System (v0.1.5)', () => {
	// Test 1: Single training works
	it('should complete training without immediate level-up', () => {
		// Validates: Training completes, returns valid results
		// Doesn't test: statGained (not guaranteed on single completion)
	});

	// Test 2: Accumulation works
	it('should accumulate stat EXP toward level-up', () => {
		// Validates: Multiple trainings accumulate, level-up eventually occurs
		// This is the KEY test for v0.1.5
	});

	// Test 3: Crits work
	it('should level up faster with crit training', () => {
		// Validates: Crit multiplier actually affects progression speed
	});

	// Test 4: Independence works
	it('should track each stat independently', () => {
		// Validates: Training strength doesn't affect dexterity
	});
});
```

---

## How This Survives Game Tuning

### Scenario 1: User changes training reward (10 → 15)

```typescript
// OLD TEST (FAILS)
expect(results[0].expGained).toBe(10);
// User changes constant, test breaks ❌

// NEW TEST (SURVIVES)
const manager = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(15) // ← Change here, not in test logic
	.withStatLevelCostOf(1, 75) // ← Adjust cost proportionally
	.build();

// Loop completes 5 trainings, expects stat level-up
// Loop count adjusts to new reward automatically ✓
```

### Scenario 2: User changes stat EXP cost (100 → 150)

```typescript
// NEW TEST (STILL WORKS)
const manager = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(10)
	.withStatLevelCostOf(1, 150) // ← Change here
	.build();

// Test loop automatically adjusts: 150 EXP / 10 per training = 15 trainings
// Test logic unchanged ✓
```

### Scenario 3: User changes crit multiplier (2x → 3x)

```typescript
// NEW TEST (STILL WORKS)
const manager = new ParametricIdleActionBuilder()
	.withCritMultiplierOf(3) // ← Change here
	.build();

// Test validates: "crit manager levels up in fewer trainings than normal manager"
// Relationship still holds true ✓
```

---

## Files You Need

### From this response:

1. `/tests/helpers/parametric-idle-action-builder.ts` - Copy this to your project
2. `/TESTING_STRATEGY_V0.1.5.md` - Full reference
3. `/TESTING_QUICK_START.md` - Day-to-day guide
4. `/ANSWERS_TO_YOUR_QUESTIONS.md` - Your Q&A

### To create yourself:

1. `/tests/helpers/parametric-upgrade-builder.ts` - Similar pattern for upgrades
2. `/tests/helpers/parametric-stats-builder.ts` - Similar pattern for stats

---

## Success Criteria

After implementing this strategy, you should be able to:

- [ ] Change `TRAINING_REWARD` from 10 to 15 without breaking any tests
- [ ] Change `STAT_COST_MULTIPLIER` from 1.5 to 1.7 without breaking any tests
- [ ] Change crit multiplier from 2x to 2.5x without breaking any tests
- [ ] Pass all 334+ tests consistently
- [ ] Add new balance mechanics without needing test rewrites
- [ ] Onboard the user to game tuning without test anxiety

---

## What Not to Do

### ❌ Don't rely on exact numbers

```typescript
expect(trainingCost).toBe(100); // ← Will break on tuning
```

### ❌ Don't over-mock

```typescript
addStatExp: () => ({ leveledUp: false }); // ← Never level-ups, unrealistic
```

### ❌ Don't test one piece in isolation

```typescript
it('should award 10 stat EXP', () => {
	// ← Doesn't validate full flow
	// Single piece doesn't reveal bugs in accumulation
});
```

### ❌ Don't hardcode game constants in tests

```typescript
const EXPECTED_LEVEL_UP_AT = 100; // ← Duplicates constant
expect(statExp).toBe(EXPECTED_LEVEL_UP_AT);
```

### ✓ DO use builders to parametrize

```typescript
.withStatLevelCostOf(1, 100)  // ← Builder handles it
```

### ✓ DO test relationships

```typescript
expect(critManager.turnsToLevelUp).toBeLessThan(normalManager.turnsToLevelUp);
```

### ✓ DO test full flows

```typescript
// Train 5 times → accumulate 50 EXP → level up
for (let i = 0; i < 5; i++) {
	/* train */
}
expect(levelUpOccurred).toBe(true);
```

### ✓ DO use builders in tests

```typescript
.withTrainingRewardOf(10)
.withStatLevelCostOf(1, 100)
.build()
```

---

## Next Steps

1. **Read:** Start with `TESTING_QUICK_START.md` (5 min)
2. **Copy:** Get `parametric-idle-action-builder.ts` (1 min)
3. **Fix:** Update one failing test (10 min)
4. **Test:** Run `npm run test:run` (1 min)
5. **Verify:** Change a constant, re-run tests (2 min)
6. **Document:** Record what you changed (2 min)

**Total time:** ~20 minutes to fully understand and implement

---

## Questions?

All 7 of your questions are answered in detail in:

- `ANSWERS_TO_YOUR_QUESTIONS.md` - Direct Q&A format
- `TESTING_QUICK_START.md` - Practical how-tos
- `TESTING_STRATEGY_V0.1.5.md` - Comprehensive reference
- `REWRITTEN_TEST_EXAMPLES.md` - Before/after code examples

---

## Summary

The v0.1.5 testing strategy gives you:

✓ **Flexibility** - Tests survive game balance changes
✓ **Clarity** - Obvious what's being tested
✓ **Maintainability** - Easy to add new tests
✓ **Confidence** - Catch real bugs, not false positives
✓ **Speed** - Pre-commit hooks stay fast with integration tests
✓ **Resilience** - No more "test broke because user changed a number"

**Key insight:** Tests that test behavior (not numbers) are resilient to tuning. Use parametric builders to give tests control over game constants.

---

**You're ready to implement!** 🚀
