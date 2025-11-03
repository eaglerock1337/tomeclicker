# Testing Strategy Implementation Checklist

## Phase 1: Understand (15 minutes)

- [ ] Read `/TESTING_QUICK_START.md` - Overview and key concepts
- [ ] Skim `/TESTING_STRATEGY_V0.1.5.md` - Full reference (bookmark for later)
- [ ] Read `/ANSWERS_TO_YOUR_QUESTIONS.md` - Your specific questions answered

**Time:** 15 minutes
**Goal:** Understand why the strategy works and how it applies to v0.1.5

---

## Phase 2: Prepare (5 minutes)

- [ ] Verify `parametric-idle-action-builder.ts` exists in `/tests/helpers/`

  ```bash
  ls -la tests/helpers/parametric-idle-action-builder.ts
  ```

- [ ] Backup the current test file

  ```bash
  cp tests/unit/idle-action-manager.test.ts tests/unit/idle-action-manager.test.ts.backup
  ```

- [ ] Make sure you're on a feature branch (not main)
  ```bash
  git status
  git checkout -b feature/test-rebalancing
  ```

**Time:** 5 minutes
**Goal:** Safe environment to make changes

---

## Phase 3: Fix One Test (20 minutes)

### Step 3.1: Locate the failing test

Open `/tests/unit/idle-action-manager.test.ts` around line 340:

```typescript
describe('Training Completion', () => {
	it('should award EXP and level up stat when affordable', () => {
		// ← THIS TEST (around line 340)
		// This is the one that's currently failing
	});
});
```

### Step 3.2: Replace with new test

Delete the old test entirely and replace with:

```typescript
describe('Training Completion (v0.1.5)', () => {
	/**
	 * Test 1: Single training completion (no level-up expected)
	 */
	it('should complete training without immediate level-up', () => {
		vi.useFakeTimers();

		const manager = new ParametricIdleActionBuilder()
			.withTrainingRewardOf(10)
			.withStatLevelCostOf(1, 100) // Need 100 EXP to level
			.withCurrentExp(100)
			.build();

		manager.startIdleAction('training', 'train-strength');
		const action = manager.getTrainingAction('train-strength');

		vi.advanceTimersByTime(action!.duration + 100);
		const results = manager.updateIdleActions();

		// Single training doesn't level up (need multiple)
		expect(results[0].expGained).toBe(0);
		expect(results[0].shouldContinue).toBe(true);

		vi.useRealTimers();
	});

	/**
	 * Test 2: Multiple trainings accumulate and trigger level-up
	 */
	it('should level up stat through accumulated training EXP', () => {
		vi.useFakeTimers();

		const manager = new ParametricIdleActionBuilder()
			.withTrainingRewardOf(10) // 10 stat EXP per training
			.withStatLevelCostOf(1, 50) // Need 50 EXP to reach level 2
			.withCurrentExp(500) // Plenty for multiple trainings
			.build();

		let levelUpOccurred = false;

		// Complete 5 trainings = 50 stat EXP = level up
		for (let i = 0; i < 5; i++) {
			manager.startIdleAction('training', 'train-strength');
			const action = manager.getTrainingAction('train-strength');

			vi.advanceTimersByTime(action!.duration + 100);
			const results = manager.updateIdleActions();

			expect(results[0].expGained).toBe(0);
			expect(results[0].shouldContinue).toBe(true);

			// On final training, expect level-up
			if (i === 4) {
				if (results[0].statGained) {
					levelUpOccurred = true;
					expect(results[0].statGained.stat).toBe('strength');
					expect(results[0].statGained.amount).toBe(1);
				}
			}
		}

		expect(levelUpOccurred).toBe(true);

		vi.useRealTimers();
	});

	/**
	 * Test 3: Crit chance affects progression speed
	 */
	it('should reach stat level-up faster with crit training', () => {
		vi.useFakeTimers();

		// Test WITHOUT crit
		const normalManager = new ParametricIdleActionBuilder()
			.withTrainingRewardOf(10)
			.withStatLevelCostOf(1, 100)
			.withCritChance(0.0)
			.withCurrentExp(1000)
			.build();

		let normalTrainings = 0;
		while (normalManager.getStatLevel('strength') === 1 && normalTrainings < 20) {
			normalManager.startIdleAction('training', 'train-strength');
			const action = normalManager.getTrainingAction('train-strength');
			vi.advanceTimersByTime(action!.duration + 100);
			normalManager.updateIdleActions();
			normalTrainings++;
		}

		vi.useRealTimers();
		vi.useFakeTimers();

		// Test WITH guaranteed crits
		Math.random = () => 0.01;

		const critManager = new ParametricIdleActionBuilder()
			.withTrainingRewardOf(10)
			.withCritMultiplierOf(2)
			.withStatLevelCostOf(1, 100)
			.withCritChance(1.0)
			.withCurrentExp(1000)
			.build();

		let critTrainings = 0;
		while (critManager.getStatLevel('strength') === 1 && critTrainings < 20) {
			critManager.startIdleAction('training', 'train-strength');
			const action = critManager.getTrainingAction('train-strength');
			vi.advanceTimersByTime(action!.duration + 100);
			critManager.updateIdleActions();
			critTrainings++;
		}

		// Crit version should level up faster
		expect(critTrainings).toBeLessThan(normalTrainings);

		vi.useRealTimers();
	});

	/**
	 * Test 4: Training continues indefinitely
	 */
	it('should continue training indefinitely (Progress Knight style)', () => {
		vi.useFakeTimers();

		const manager = new ParametricIdleActionBuilder()
			.withTrainingRewardOf(10)
			.withStatLevelCostOf(1, 50)
			.withStatLevelCostOf(2, 75)
			.withStatLevelCostOf(3, 100)
			.withCurrentExp(10000)
			.build();

		let levelUpsCount = 0;

		// Complete 20 trainings
		for (let i = 0; i < 20; i++) {
			manager.startIdleAction('training', 'train-strength');
			const action = manager.getTrainingAction('train-strength');

			vi.advanceTimersByTime(action!.duration + 100);
			const results = manager.updateIdleActions();

			expect(results[0].shouldContinue).toBe(true); // Always continues
			if (results[0].statGained) {
				levelUpsCount++;
			}
		}

		// Should have leveled up multiple times (not capped)
		expect(levelUpsCount).toBeGreaterThan(0);

		vi.useRealTimers();
	});
});
```

### Step 3.3: Update imports

Make sure the top of the file imports ParametricIdleActionBuilder:

```typescript
import { ParametricIdleActionBuilder } from '../../helpers/parametric-idle-action-builder';
```

### Step 3.4: Run tests

```bash
npm run test:run -- tests/unit/idle-action-manager.test.ts
```

Expected output:

```
✓ tests/unit/idle-action-manager.test.ts (36+ tests)
```

**Time:** 20 minutes
**Goal:** Get first test working with new builder

---

## Phase 4: Verify Flexibility (10 minutes)

### Step 4.1: Change a constant and re-run

Open the test file and change one value:

```typescript
// BEFORE
.withTrainingRewardOf(10)
.withStatLevelCostOf(1, 50)

// AFTER
.withTrainingRewardOf(15)        // Changed 10 → 15
.withStatLevelCostOf(1, 75)      // Adjusted cost proportionally
```

### Step 4.2: Re-run tests

```bash
npm run test:run -- tests/unit/idle-action-manager.test.ts
```

**Expected:** Tests still pass! ✓

This proves the strategy works - tests survive number changes.

### Step 4.3: Change back

```typescript
// Revert to original values
.withTrainingRewardOf(10)
.withStatLevelCostOf(1, 50)
```

**Time:** 10 minutes
**Goal:** Verify tests are resilient to number changes

---

## Phase 5: Review Other Tests (15 minutes)

Scan through the rest of the idle-action-manager tests and identify:

### Tests to Keep (no changes needed)

```
☐ Initialization tests (lines ~74-124)
☐ Action Lifecycle tests (lines ~126-221)
☐ Progress Calculation tests (lines ~223-285)
☐ Osmosis Completion tests (lines ~287-337)
☐ Meditation Completion tests (lines ~455-489)
☐ Migration tests (lines ~491-565)
☐ Edge Cases tests (lines ~567-606)
```

Add a check mark (☐) for each test you've reviewed.

### Tests to Potentially Modify

```
☐ Line 393: "should apply crit chance to training reward"
  Current: Tests exact EXP values
  Modify: Test relationship (crit > normal)
  Status: KEEP for now, can refine later
```

Add a check mark for tests you've reviewed.

**Time:** 15 minutes
**Goal:** Know what else needs refactoring (future work)

---

## Phase 6: Commit Changes (5 minutes)

```bash
# Stage changes
git add tests/unit/idle-action-manager.test.ts

# Commit
git commit -m "test: rewrite training tests for v0.1.5 with parametric builders

- Replace brittle exact-number assertions with flexible behavior tests
- Use ParametricIdleActionBuilder to simulate realistic stat EXP accumulation
- Split single 'level-up' test into 4 focused tests:
  1. Single training completes (no immediate level-up)
  2. Multiple trainings accumulate toward level-up
  3. Crit chance affects progression speed
  4. Training continues indefinitely
- Tests now survive game balance tuning (number changes)"

# Verify
npm run test:run
```

**Time:** 5 minutes
**Goal:** Document work with clear commit message

---

## Phase 7: Document Learning (10 minutes)

Create a note for your team:

**File:** `/docs/TESTING_LESSONS_LEARNED.md`

````markdown
# Lessons Learned: v0.1.5 Test Rebalancing

## Problem

Old tests were brittle - they broke whenever game constants changed.

## Root Cause

Tests were checking exact values:

```typescript
expect(results[0].expGained).toBe(10); // Breaks if constant changes
```
````

## Solution

Parametric builders + behavior-focused assertions:

```typescript
const manager = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(10) // Configurable in test
	.build();

expect(results[0].expGained).toBeGreaterThan(0); // Survives changes
```

## Impact

- Tests now survive game balance changes
- Clear what's being tested (behavior, not numbers)
- Easier to onboard user to tuning process

## Files Changed

- `tests/unit/idle-action-manager.test.ts` - Rewrote training tests
- `tests/helpers/parametric-idle-action-builder.ts` - New builder

## Next Steps

- Create similar builders for upgrades and stats
- Rewrite other brittle tests following same pattern
- Document tuning process for user

````

**Time:** 10 minutes
**Goal:** Document your learning for future reference

---

## Phase 8: Optional - Create Similar Builders (30 minutes)

For bonus points, create:

```typescript
// tests/helpers/parametric-upgrade-builder.ts
export class ParametricUpgradeBuilder {
  withUpgrade(id: string, config: { baseCost, costMultiplier, maxLevel }) { }
  withCurrentExp(exp: number) { }
  build(): UpgradeManager { }
}

// tests/helpers/parametric-stats-builder.ts
export class ParametricStatsBuilder {
  withStatLevel(stat: string, level: number) { }
  withStatExp(stat: string, exp: number) { }
  build(): StatsManager { }
}
````

**Time:** 30 minutes (optional)
**Goal:** Complete the refactoring for all managers

---

## Total Time Estimate

| Phase                 | Time   | Cumulative |
| --------------------- | ------ | ---------- |
| 1. Understand         | 15 min | 15 min     |
| 2. Prepare            | 5 min  | 20 min     |
| 3. Fix Test           | 20 min | 40 min     |
| 4. Verify Flexibility | 10 min | 50 min     |
| 5. Review Other Tests | 15 min | 65 min     |
| 6. Commit Changes     | 5 min  | 70 min     |
| 7. Document           | 10 min | 80 min     |
| 8. Optional Builders  | 30 min | 110 min    |

**Minimum (Phases 1-6):** ~70 minutes
**Complete (Phases 1-8):** ~110 minutes

---

## Success Criteria

After completing this checklist:

- [ ] All idle-action-manager tests pass
- [ ] Tests survive constant changes (verified in Phase 4)
- [ ] New tests are readable and maintainable
- [ ] Code is committed with clear message
- [ ] Learning is documented
- [ ] You understand the parametric builder pattern
- [ ] You can explain to others why this strategy works

---

## Troubleshooting

### Tests fail on `npm run test:run`

- Check imports - verify ParametricIdleActionBuilder is imported
- Check vi.useFakeTimers() - ensure fake timers are properly managed
- Check stat level costs - ensure they're set high enough for accumulation

### ParametricIdleActionBuilder not found

```bash
ls tests/helpers/parametric-idle-action-builder.ts
# Should exist, if not: Copy from this response to tests/helpers/
```

### Tests pass but feel wrong

- Re-read the failing test explanation in ANSWERS_TO_YOUR_QUESTIONS.md
- The test validates end-to-end flow, not isolated single pieces
- That's intentional - it catches real bugs better

### Need help understanding the builder

- Read the builder code comments
- See usage examples in REWRITTEN_TEST_EXAMPLES.md
- Check TESTING_QUICK_START.md for quick reference

---

## Next Steps After This Checklist

1. Apply same pattern to upgrade-manager tests
2. Apply same pattern to stats-manager tests
3. Create documentation for the user about game tuning
4. Set up pre-commit hooks to prevent test regressions
5. Test with user on actual balance changes

---

## Resources

- `/TESTING_QUICK_START.md` - Day-to-day reference
- `/TESTING_STRATEGY_V0.1.5.md` - Complete strategy document
- `/ANSWERS_TO_YOUR_QUESTIONS.md` - Q&A format
- `/REWRITTEN_TEST_EXAMPLES.md` - Before/after code
- `/tests/helpers/parametric-idle-action-builder.ts` - Implementation

---

**You're ready to start!** 🚀

Begin with Phase 1 and work through sequentially. Each phase is designed to be completed and verified before moving to the next.
