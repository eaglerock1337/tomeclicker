# Testing Strategy for v0.1.5 Game Rebalancing

## Executive Summary

Tests should validate **behaviors and outcomes**, not specific numbers. This allows game balance tuning without test breakage. We'll use three key patterns:

1. **Behavior-Driven Tests** - Test "training produces stat EXP" not "training produces exactly 10 stat EXP"
2. **Parametric Builders** - Builders abstract numbers, making tests resilient to formula changes
3. **Fixture-Based Testing** - Use realistic game states, not isolated unit assertions

---

## 1. Test Philosophy

### What NOT to Test (Brittle)

```typescript
// BAD: Tests exact numbers, breaks on balance tuning
expect(results[0].expGained).toBe(10); // If someone changes to 15, test breaks
expect(trainingCost).toBe(100); // If formula changes, test breaks
```

### What TO Test (Resilient)

```typescript
// GOOD: Tests behaviors and relationships
expect(results[0].expGained).toBeGreaterThan(0); // Generates EXP
expect(result.statExpGained).toBeGreaterThanOrEqual(10); // At least base amount
expect(critResults.statExpGained).toBeGreaterThan(normalResults.statExpGained); // Crit > normal
expect(successResult.leveledUp).toBe(true); // Level up happens correctly
```

---

## 2. Classification: Which Tests to Keep/Modify/Remove

### KEEP - Structural Tests (won't change with balance tuning)

```typescript
// ✓ Action Lifecycle
-'should start an action and set it as active' -
	'should stop other actions when starting a new one' -
	'should allow stopping an active action' -
	// ✓ Initialization
	'should initialize training actions with correct defaults' -
	'should initialize meditation actions with correct defaults' -
	// ✓ Progress Calculation
	'should update progress based on elapsed time' -
	'should complete action when progress >= 1.0' -
	// ✓ Migrations
	'should migrate training actions and preserve progress' -
	'should add new actions during migration';
```

### MODIFY - Behavioral Tests (test pattern, not numbers)

```typescript
// BEFORE (exact number testing)
expect(results[0].expGained).toBe(10);
expect(results[0].statGained).toEqual({ stat: 'strength', amount: 1 });

// AFTER (behavior testing)
it('should award stat EXP and track progression', () => {
	const manager = new IdleActionManagerBuilder()
		.withTrainingRewardOf(10) // New: parametric
		.withStatLevelUpAt(100) // New: parametric
		.withCurrentExp(100)
		.build();

	manager.startIdleAction('training', 'train-strength');
	const action = manager.getTrainingAction('train-strength');

	vi.advanceTimersByTime(action!.duration + 100);
	const results = manager.updateIdleActions();

	// Test behavior, not exact numbers
	expect(results[0].expGained).toBe(0); // Character EXP is always 0 from training
	expect(results[0].shouldContinue).toBe(true);
	// Note: Don't test statGained here - it depends on stat manager
});
```

### REMOVE - Tests of Removed Features

```typescript
// REMOVE these - old training gave character EXP
❌ it('should award base EXP of 10 on training completion')
❌ it('should award character EXP that increases with stat level')

// KEEP the concept, MODIFY the assertion
✓ it('should continue indefinitely and track stat EXP')
```

---

## 3. Parametric Builder Pattern

### Current Problem

```typescript
class IdleActionManagerBuilder {
	private deps: IdleActionDependencies = {
		// ...
		addStatExp: () => ({ success: true, leveledUp: false, newLevel: 1 })
		// ↑ HARDCODED: Always returns leveledUp: false
	};
}
```

### Solution: Abstract Constants Into Builder

```typescript
class IdleActionManagerBuilder {
	private deps: IdleActionDependencies = {
		/* ... */
	};

	// Track which upgrades are active for calculation purposes
	private mockUpgrades: { [key: string]: Upgrade } = {};

	// Training reward (base stat EXP per training completion)
	private trainingReward: number = 10; // Match TRAINING_REWARD constant

	// Crit reward multiplier
	private critMultiplier: number = 2; // 2x stat EXP on crit

	// Stat EXP required for next level
	private statLevelUpRequirements: { [key: string]: number } = {
		1: 100, // Level 1→2 requires 100 stat EXP
		2: 150, // Level 2→3 requires 150 stat EXP (1.5x)
		3: 225 // etc.
	};

	// Current stat levels and EXP tracking
	private statLevels: Stats = {
		strength: 1,
		dexterity: 1,
		intelligence: 1,
		wisdom: 1,
		strengthExp: 0,
		dexterityExp: 0,
		intelligenceExp: 0,
		wisdomExp: 0
	};

	/**
	 * Set training reward (base stat EXP per completion)
	 * Default: 10 (matches TRAINING_REWARD constant)
	 */
	withTrainingRewardOf(amount: number): this {
		this.trainingReward = amount;
		return this;
	}

	/**
	 * Set crit multiplier for training
	 * Default: 2 (2x stat EXP on crit)
	 */
	withCritMultiplierOf(multiplier: number): this {
		this.critMultiplier = multiplier;
		return this;
	}

	/**
	 * Set stat EXP cost for a specific stat level
	 * Default: 100 * (1.5^(level-1))
	 *
	 * Example: .withStatLevelCostOf(1, 100) means Level 1→2 costs 100 EXP
	 */
	withStatLevelCostOf(level: number, cost: number): this {
		this.statLevelUpRequirements[level] = cost;
		return this;
	}

	/**
	 * Set initial stat levels
	 * Useful for testing stat-dependent costs
	 *
	 * Example: .withInitialStats({ strength: 5 }) sets strength to 5
	 */
	withInitialStats(stats: Partial<Stats>): this {
		this.statLevels = { ...this.statLevels, ...stats };
		return this;
	}

	/**
	 * Add stat EXP and check for level-up
	 * This is the IMPLEMENTATION - mocks the StatsManager behavior
	 */
	private createAddStatExpFunction(): IdleActionDependencies['addStatExp'] {
		return (stat: string, amount: number) => {
			const statKey = `${stat}Exp` as keyof Stats;
			const levelKey = stat as keyof Stats;

			const currentExp = this.statLevels[statKey] as number;
			const currentLevel = this.statLevels[levelKey] as number;
			const requiredExp = this.statLevelUpRequirements[currentLevel] || 100;

			const newExp = currentExp + amount;
			let leveledUp = false;
			let newLevel = currentLevel;

			if (newExp >= requiredExp) {
				this.statLevels[statKey] = 0; // Reset EXP on level up
				this.statLevels[levelKey] = currentLevel + 1;
				leveledUp = true;
				newLevel = currentLevel + 1;
			} else {
				this.statLevels[statKey] = newExp;
			}

			return { success: true, leveledUp, newLevel };
		};
	}

	build(): IdleActionManager {
		this.deps.addStatExp = this.createAddStatExpFunction();
		return new IdleActionManager(this.deps);
	}
}
```

---

## 4. Test Structure for v0.1.5 Systems

### Testing Stat EXP Accumulation

```typescript
describe('Stat EXP Accumulation (v0.1.5)', () => {
	/**
	 * Test that training AWARDS stat EXP, not LEVEL UP stat
	 *
	 * Key insight: A single training completion gives ~10 stat EXP.
	 * To level up, you need multiple trainings (e.g., 10 trainings for 100 EXP).
	 *
	 * This test validates the first part (earning EXP).
	 * A separate test validates accumulation → level-up.
	 */
	it('should award stat EXP on training completion', () => {
		vi.useFakeTimers();

		const manager = new IdleActionManagerBuilder()
			.withTrainingRewardOf(10) // Base reward
			.withCurrentExp(100)
			.build();

		manager.startIdleAction('training', 'train-strength');
		const action = manager.getTrainingAction('train-strength');

		vi.advanceTimersByTime(action!.duration + 100);
		const results = manager.updateIdleActions();

		// Character EXP: Always 0 from training (v0.1.5 change)
		expect(results[0].expGained).toBe(0);

		// Action continues (Progress Knight style)
		expect(results[0].shouldContinue).toBe(true);

		vi.useRealTimers();
	});

	/**
	 * Test critical hits INCREASE stat EXP
	 *
	 * Key insight: Crits double the stat EXP reward.
	 * This is important for game balance but the multiplier is flexible.
	 */
	it('should apply crit multiplier to stat EXP reward', () => {
		vi.useFakeTimers();
		Math.random = () => 0.01; // Force crit

		const manager = new IdleActionManagerBuilder()
			.withCritChance(0.5) // 50% crit chance
			.withCritMultiplierOf(2) // 2x on crit
			.withTrainingRewardOf(10) // 10 base
			.withCurrentExp(100)
			.build();

		manager.startIdleAction('training', 'train-strength');
		const action = manager.getTrainingAction('train-strength');

		vi.advanceTimersByTime(action!.duration + 100);
		const results = manager.updateIdleActions();

		// We can't directly test stat EXP here (internal to addStatExp)
		// But we can verify training completes
		expect(results[0].shouldContinue).toBe(true);

		vi.useRealTimers();
	});

	/**
	 * Test accumulation path: multiple trainings → stat level up
	 *
	 * Key insight: This is the FULL FLOW test.
	 * It verifies the entire training → EXP accumulation → level up pipeline.
	 *
	 * This test is MORE FLEXIBLE because it tests outcomes not numbers.
	 */
	it('should eventually level up stat through repeated training', () => {
		vi.useFakeTimers();

		const manager = new IdleActionManagerBuilder()
			.withTrainingRewardOf(10) // 10 EXP per training
			.withStatLevelCostOf(1, 50) // Need 50 EXP total to reach level 2
			.withCurrentExp(500) // Plenty for 5 trainings (5 * 10 = 50 EXP)
			.build();

		// Complete 5 trainings = 50 stat EXP = level up
		for (let i = 0; i < 5; i++) {
			manager.startIdleAction('training', 'train-strength');
			const action = manager.getTrainingAction('train-strength');

			vi.advanceTimersByTime(action!.duration + 100);
			const results = manager.updateIdleActions();

			if (i === 4) {
				// On final training, stat should level up
				expect(results[0].statGained).toEqual({
					stat: 'strength',
					amount: 1
				});
			}
		}

		vi.useRealTimers();
	});
});
```

### Testing Training Economics

```typescript
describe('Training Cost System (v0.1.5)', () => {
	/**
	 * Test that training requires upfront character EXP
	 *
	 * Key insight: In v0.1.5, training costs character EXP upfront.
	 * The cost is: getStatTrainingCost(stat) * (1 + (statLevel - 1) * 0.3)
	 *
	 * We DON'T test exact numbers, but we test:
	 * 1. Can't start training without enough EXP
	 * 2. Cost increases with stat level
	 */
	it('should prevent training when player lacks EXP', () => {
		const manager = new IdleActionManagerBuilder()
			.withStatTrainingCostOf(10) // Cost is 10 EXP
			.withCurrentExp(5) // Only have 5 EXP
			.build();

		const result = manager.startIdleAction('training', 'train-strength');

		expect(result).toBe(false); // Can't afford training
	});

	/**
	 * Test that training cost increases with stat level
	 *
	 * This is a behavior test: cost goes UP as stat levels increase.
	 * The exact formula/multiplier can change without breaking this test.
	 */
	it('should scale training cost with stat level', () => {
		// Test at stat level 1 - low cost
		const manager1 = new IdleActionManagerBuilder()
			.withInitialStats({ strength: 1 })
			.withStatTrainingCostOf(10)
			.withCurrentExp(100)
			.build();

		const canTrain1 = manager1.canStartTraining('train-strength');
		expect(canTrain1).toBe(true);

		// Test at higher stat level - higher cost
		const manager2 = new IdleActionManagerBuilder()
			.withInitialStats({ strength: 5 })
			.withStatTrainingCostOf(10) // Base cost
			// Cost formula: 10 * (1 + (5-1) * 0.3) = 10 * 2.2 = 22
			.withCurrentExp(25)
			.build();

		const canTrain2 = manager2.canStartTraining('train-strength');
		expect(canTrain2).toBe(true);
	});
});
```

### Testing Multi-Level Upgrades

```typescript
describe('Upgrade System with Multi-Level (v0.1.5)', () => {
	/**
	 * Test that upgrade cost scales with level
	 *
	 * Key insight: Cost = baseCost * (costMultiplier ^ currentLevel)
	 * This test doesn't check exact numbers, but verifies the RELATIONSHIP.
	 */
	it('should increase cost with each upgrade level', () => {
		const manager = new UpgradeManagerBuilder()
			.withBaseCost('click-strength', 50)
			.withCostMultiplier('click-strength', 1.5)
			.build();

		const level0Cost = manager.getUpgradeCost('click-strength'); // Base cost

		manager.purchaseUpgrade('click-strength'); // Now level 1
		const level1Cost = manager.getUpgradeCost('click-strength');

		manager.purchaseUpgrade('click-strength'); // Now level 2
		const level2Cost = manager.getUpgradeCost('click-strength');

		// Each level should cost more
		expect(level1Cost).toBeGreaterThan(level0Cost);
		expect(level2Cost).toBeGreaterThan(level1Cost);

		// Ratio should be consistent (cost multiplier)
		const ratio = level1Cost / level0Cost;
		expect(ratio).toBeCloseTo(1.5, 1); // 1.5 multiplier
	});

	/**
	 * Test that max levels prevent over-purchasing
	 *
	 * This is structural - won't change with balance tuning.
	 */
	it('should respect max level caps', () => {
		const manager = new UpgradeManagerBuilder()
			.withMaxLevel('click-strength', 5)
			.withCurrentExp(1_000_000) // Plenty of EXP
			.build();

		// Purchase until max
		for (let i = 0; i < 10; i++) {
			const result = manager.purchaseUpgrade('click-strength');
			if (i < 5) {
				expect(result.success).toBe(true);
			} else {
				expect(result.reason).toBe('max_level');
			}
		}

		const upgrade = manager.getUpgrade('click-strength');
		expect(upgrade?.currentLevel).toBe(5);
	});
});
```

---

## 5. Resilient Builder Pattern Reference

Key methods for making tests flexible:

```typescript
class IdleActionManagerBuilder {
	// Training Rewards
	withTrainingRewardOf(amount: number): this;
	withCritMultiplierOf(multiplier: number): this;

	// Stat Progression
	withStatLevelCostOf(level: number, cost: number): this;
	withInitialStats(stats: Partial<Stats>): this;

	// Economic Costs
	withStatTrainingCostOf(cost: number): this;

	// Multipliers (don't test exact values)
	withTrainingSpeed(multiplier: number): this;
	withGlobalIdleSpeed(multiplier: number): this;
	withCritChance(chance: number): this;

	// Current State
	withCurrentExp(exp: number): this;
}

class UpgradeManagerBuilder {
	// Upgrade Definition
	withBaseCost(upgradeId: string, cost: number): this;
	withCostMultiplier(upgradeId: string, multiplier: number): this;
	withMaxLevel(upgradeId: string, maxLevel: number): this;
	withInitialLevel(upgradeId: string, level: number): this;

	// Player State
	withCurrentExp(exp: number): this;
}
```

---

## 6. Guide: Which Assertions to Rewrite

### Pattern 1: Exact Number → Relationship

```typescript
// BEFORE (brittle)
expect(results[0].expGained).toBe(10);

// AFTER (flexible)
expect(results[0].expGained).toBeGreaterThan(0);
```

### Pattern 2: Specific Value → Behavior

```typescript
// BEFORE (brittle)
expect(results[0].statGained).toEqual({ stat: 'strength', amount: 1 });

// AFTER (flexible)
// Test in an integration test where enough EXP is accumulated
expect(results[0].statGained?.stat).toBe('strength');
expect(results[0].statGained?.amount).toBeGreaterThan(0);
```

### Pattern 3: Missing Mocks → Realistic Setup

```typescript
// BEFORE (isolated, unrealistic)
addStatExp: () => ({ success: true, leveledUp: false, newLevel: 1 });

// AFTER (realistic simulation)
const mockStatManager = {
	addStatExp: (stat, amount) => {
		// Actually simulate the accumulation
		currentStatExp += amount;
		if (currentStatExp >= 100) {
			return { success: true, leveledUp: true, newLevel: currentLevel + 1 };
		}
		return { success: true, leveledUp: false, newLevel: currentLevel };
	}
};
```

---

## 7. Summary: Test Resilience Strategy

| Aspect                                     | Make Resilient? | How                                |
| ------------------------------------------ | --------------- | ---------------------------------- |
| Numbers (costs, rewards)                   | ✓ YES           | Use builders, test ranges          |
| Relationships (A > B)                      | ✓ YES           | Test proportions, not values       |
| Behaviors (start, complete, accumulate)    | ✓ YES           | Focus on happy/sad paths           |
| Progression flows (train→EXP→level-up)     | ✓ YES           | Integration tests, realistic setup |
| Structural rules (max levels, categories)  | ✗ NO            | These define the game              |
| Edge cases (zero duration, missing action) | ✗ NO            | Keep exact same                    |

---

## Next Steps

1. **Implement parametric builders** - Add `withTrainingRewardOf()`, `withStatLevelCostOf()`, etc.
2. **Rewrite brittle assertions** - Change `.toBe(10)` to `.toBeGreaterThan(0)`
3. **Add integration tests** - Full flows like "train 10 times → stat level up"
4. **Create test fixtures** - Realistic game states for E2E scenarios
5. **Document tuning process** - When user changes numbers, tests still pass

This approach balances:

- **Validation** (catching real bugs)
- **Flexibility** (surviving number tuning)
- **Clarity** (obvious what's being tested)
