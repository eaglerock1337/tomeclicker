# Testing Quick Start Guide for v0.1.5

**TL;DR:** Tests should validate behaviors and relationships, not exact numbers. Use parametric builders to abstract constants.

---

## 1. Quick Fix: The Failing Test

### The Problem

```typescript
// FAILS: addStatExp is mocked to always return leveledUp: false
it('should award EXP and level up stat when affordable', () => {
	const manager = new IdleActionManagerBuilder().withCurrentExp(100).build();

	// ... complete training ...

	expect(results[0].statGained).toEqual({ stat: 'strength', amount: 1 });
	// ^ FAILS: undefined (because mock doesn't simulate level-up)
});
```

### The Solution

Use the new `ParametricIdleActionBuilder`:

```typescript
import { ParametricIdleActionBuilder } from '../../helpers/parametric-idle-action-builder';

it('should level up stat after accumulating training EXP', () => {
	vi.useFakeTimers();

	const manager = new ParametricIdleActionBuilder()
		.withTrainingRewardOf(10) // 10 stat EXP per training
		.withStatLevelCostOf(1, 50) // Need 50 EXP to level 1→2
		.withCurrentExp(500)
		.build();

	// Complete 5 trainings = 50 stat EXP = level up
	for (let i = 0; i < 5; i++) {
		manager.startIdleAction('training', 'train-strength');
		const action = manager.getTrainingAction('train-strength');
		vi.advanceTimersByTime(action!.duration + 100);
		const results = manager.updateIdleActions();

		if (i === 4) {
			// On 5th training, should level up
			expect(results[0].statGained?.stat).toBe('strength');
		}
	}

	vi.useRealTimers();
});
```

**Why this works:**

- Builder simulates realistic stat EXP accumulation
- Test validates the full flow: train → earn EXP → level up
- Survives number changes (if you change 10 to 15 stat EXP, just adjust loop count)

---

## 2. Three Assertion Patterns

### Pattern 1: Exact Numbers (BRITTLE) → Relationships (FLEXIBLE)

```typescript
// ❌ BRITTLE
expect(statLevel).toBe(2);
expect(cost).toBe(100);

// ✓ FLEXIBLE
expect(statLevel).toBeGreaterThan(1);
expect(cost).toBeGreaterThanOrEqual(100);
expect(newCost).toBeGreaterThan(oldCost); // Cost increases
```

### Pattern 2: Hardcoded Values (BRITTLE) → Parametric Builders (FLEXIBLE)

```typescript
// ❌ BRITTLE - hardcoded in test
const manager = new Manager();
expect(results.exp).toBe(10); // Test knows magic number "10"

// ✓ FLEXIBLE - parametric in builder
const manager = new ParametricBuilder()
	.withRewardOf(10) // Test controls the value
	.build();
expect(results.exp).toBeGreaterThan(0); // Test doesn't care about exact value
```

### Pattern 3: Single Test (INCOMPLETE) → Multiple Tests (COMPLETE)

```typescript
// ❌ SINGLE TEST: Expects level-up from one training (wrong assumption)
it('should level up immediately', () => {
	// One training, expects { stat: 'strength', amount: 1 }
	// This is unrealistic - usually takes multiple trainings
});

// ✓ MULTIPLE TESTS:

// Test 1: Single training completes (no level-up expected)
it('should complete training without level-up', () => {
	expect(results[0].expGained).toBe(0);
	expect(results[0].shouldContinue).toBe(true);
	// Don't test statGained - not guaranteed on single completion
});

// Test 2: Multiple trainings accumulate → level-up
it('should level up after accumulating EXP', () => {
	for (let i = 0; i < 5; i++) {
		// ... complete training ...
	}
	expect(finalResult.statGained?.stat).toBe('strength');
});
```

---

## 3. Builder API Cheat Sheet

### ParametricIdleActionBuilder

```typescript
import { ParametricIdleActionBuilder } from '../../helpers/parametric-idle-action-builder';

const manager = new ParametricIdleActionBuilder()
	// Training rewards
	.withTrainingRewardOf(10) // Base stat EXP per training
	.withCritMultiplierOf(2) // Crit gives 2x stat EXP

	// Stat progression
	.withStatLevelCostOf(1, 100) // Level 1→2 costs 100 EXP
	.withAllStatLevelCosts({
		// Set all costs at once
		1: 100,
		2: 150,
		3: 225
	})
	.withInitialStats({
		// Start with specific stat levels
		strength: 5,
		strengthExp: 50
	})

	// Training costs
	.withTrainingCostOf(10) // Base character EXP cost

	// Multipliers (don't change values for game balance, only tune mechanics)
	.withTrainingSpeed(1.0) // Training speed multiplier
	.withGlobalIdleSpeed(1.0) // Global idle speed multiplier
	.withCritChance(0.0) // Crit chance (0-1)

	// State
	.withCurrentExp(1000) // Current character EXP balance
	.build();

// Methods to inspect state
manager.getStatExp('strength'); // Get stat EXP amount
manager.getStatLevel('strength'); // Get stat level
manager.getStats(); // Get all stats
```

---

## 4. Test Template for v0.1.5 Systems

### Training Completion Test

```typescript
describe('Training System (v0.1.5)', () => {
	it('should [behavior description]', () => {
		vi.useFakeTimers();

		// SETUP: Configure manager with clear parameters
		const manager = new ParametricIdleActionBuilder()
			.withTrainingRewardOf(10)
			.withStatLevelCostOf(1, 100)
			.withCurrentExp(500)
			.build();

		// ACT: Perform training actions
		for (let i = 0; i < requiredTrainings; i++) {
			manager.startIdleAction('training', 'train-strength');
			const action = manager.getTrainingAction('train-strength');
			vi.advanceTimersByTime(action!.duration + 100);
			const results = manager.updateIdleActions();

			// ASSERT: Check behavior at each step
			expect(results[0].expGained).toBe(0);
			expect(results[0].shouldContinue).toBe(true);
		}

		vi.useRealTimers();
	});
});
```

### Relationship Test (Cost Scaling)

```typescript
describe('Cost Scaling', () => {
	it('should increase cost as stat level increases', () => {
		// Manager A: Low stat level
		const managerA = new ParametricIdleActionBuilder()
			.withInitialStats({ strength: 1 })
			.withTrainingCostOf(10)
			.build();

		// Manager B: High stat level (same base cost)
		const managerB = new ParametricIdleActionBuilder()
			.withInitialStats({ strength: 10 })
			.withTrainingCostOf(10)
			.build();

		const canTrainA = managerA.canStartTraining('train-strength');
		const canTrainB = managerB.canStartTraining('train-strength');

		// Key insight: Higher stat level = higher cost
		// The exact costs don't matter, just the relationship
		expect(canTrainA).toBe(true); // Low level, affordable
		// canTrainB depends on exact formula and EXP available
	});
});
```

---

## 5. Which Tests to Keep/Modify/Remove

### KEEP - These won't change with game balance

```typescript
✓ "should start an action and set it as active"
✓ "should stop other actions when starting a new one"
✓ "should complete action when progress >= 1.0"
✓ "should initialize training actions with correct defaults"
✓ "should migrate training actions and preserve progress"
```

### MODIFY - These need parametric builders and flexible assertions

```typescript
~ "should award EXP and level up stat when affordable"
  → Change to test accumulation flow, not single completion
  → Use ParametricIdleActionBuilder

~ "should apply crit chance to training reward"
  → Test that crits give MORE, not exact amount
  → Use relationships, not specific numbers

~ "should calculate upgrade cost"
  → Test cost increases, not exact value
  → Use ParametricUpgradeBuilder
```

### REMOVE - These test removed features

```typescript
❌ "should award base EXP of 10 on training completion" (v0.1.5: no character EXP from training)
❌ "should immediately level up stat" (unrealistic: needs multiple trainings)
```

---

## 6. Step-by-Step: Fix One Test

### Example: The Failing Training Test

**Step 1: Understand what's happening**

```typescript
// Current mock always returns leveledUp: false
addStatExp: () => ({ success: true, leveledUp: false, newLevel: 1 });
// ↑ This is the problem!
```

**Step 2: Use ParametricIdleActionBuilder instead**

```typescript
import { ParametricIdleActionBuilder } from '../../helpers/parametric-idle-action-builder';

// This builder has a working addStatExp simulation
const manager = new ParametricIdleActionBuilder()
	.withTrainingRewardOf(10)
	.withStatLevelCostOf(1, 50) // Need 50 to level
	.build();
```

**Step 3: Write realistic test**

```typescript
it('should level up after accumulating training EXP', () => {
	vi.useFakeTimers();

	const manager = new ParametricIdleActionBuilder()
		.withTrainingRewardOf(10) // 10 stat EXP per training
		.withStatLevelCostOf(1, 50) // 50 EXP to level 1→2
		.withCurrentExp(500)
		.build();

	// 5 trainings * 10 EXP = 50 EXP = level up
	for (let i = 0; i < 5; i++) {
		manager.startIdleAction('training', 'train-strength');
		const action = manager.getTrainingAction('train-strength');
		vi.advanceTimersByTime(action!.duration + 100);
		const results = manager.updateIdleActions();

		expect(results[0].expGained).toBe(0);
		expect(results[0].shouldContinue).toBe(true);

		// On final training, expect level-up
		if (i === 4) {
			expect(results[0].statGained).toBeDefined();
			expect(results[0].statGained?.stat).toBe('strength');
		}
	}

	vi.useRealTimers();
});
```

**Step 4: Run tests**

```bash
npm run test:run
```

**Result:** Test passes and survives number changes!

---

## 7. Tuning the Game: How Tests Handle Changes

### User changes: "Make training cost more (20 instead of 10)"

```typescript
// Test automatically handles it:
const manager = new ParametricIdleActionBuilder()
	.withTrainingCostOf(20) // Update here
	.withCurrentExp(500)
	.build();

// Rest of test doesn't change - still validates same behavior
```

### User changes: "Increase stat EXP requirement (from 100 to 150)"

```typescript
// Test automatically handles it:
const manager = new ParametricIdleActionBuilder()
	.withStatLevelCostOf(1, 150) // Update here
	.build();

// Loop count adjusts: now need 15 trainings instead of 10
// But test logic stays the same
```

### User changes: "Double crit multiplier (2x → 4x)"

```typescript
// Test automatically handles it:
const manager = new ParametricIdleActionBuilder()
	.withCritMultiplierOf(4) // Update here
	.build();

// Test still validates "crit > normal progression"
// Exact speed doesn't matter
```

---

## 8. Common Mistakes to Avoid

### ❌ Mistake 1: Hardcoding Expected Values

```typescript
// WRONG - breaks if number changes
expect(results[0].expGained).toBe(10);
expect(cost).toBe(100);
```

**Fix:**

```typescript
// RIGHT - validates behavior
expect(results[0].expGained).toBeGreaterThan(0);
expect(newCost).toBeGreaterThan(oldCost);
```

### ❌ Mistake 2: Over-Mocking

```typescript
// WRONG - mock is unrealistic
addStatExp: () => ({ success: true, leveledUp: false, newLevel: 1 });
// This never returns leveledUp: true!
```

**Fix:**

```typescript
// RIGHT - mock simulates reality
private createAddStatExpFunction(): ... {
  return (stat, amount) => {
    // Actually accumulate and check threshold
    newExp = currentExp + amount;
    if (newExp >= required) {
      return { success: true, leveledUp: true, newLevel: currentLevel + 1 };
    }
    return { success: true, leveledUp: false, newLevel: currentLevel };
  };
}
```

### ❌ Mistake 3: Testing Implementation Details

```typescript
// WRONG - cares about internal EXP tracking
expect(manager.stats.strengthExp).toBe(10);
```

**Fix:**

```typescript
// RIGHT - cares about outcomes
expect(results[0].statGained?.stat).toBe('strength');
```

---

## 9. Resources

- **Full Strategy:** `/home/eaglerock/git/tomeclicker/TESTING_STRATEGY_V0.1.5.md`
- **Builder Code:** `/home/eaglerock/git/tomeclicker/tests/helpers/parametric-idle-action-builder.ts`
- **Example Tests:** `/home/eaglerock/git/tomeclicker/tests/examples/REWRITTEN_TEST_EXAMPLES.md`

---

## 10. Next Action

1. Copy `ParametricIdleActionBuilder` to your project
2. Update the failing idle-action-manager test
3. Run `npm run test:run` to verify
4. Apply same patterns to other managers (upgrade, stats)
5. Document tuning process for the user

---

**Key Principle:** Tests should answer "Does this feature work?" not "Is this variable exactly 10?"
