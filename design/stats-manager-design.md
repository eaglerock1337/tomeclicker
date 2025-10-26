# StatsManager Design Document

## Overview

Extract stat-related logic from the Game class into a dedicated StatsManager class. This prepares the codebase for the complex stat system described in `design/OUTLINE.md`.

## Current State

Stats are currently managed directly in the Game class:

- `stats: Stats` - Current stat levels
- `getStatLevelCost(stat)` - Calculates EXP cost to level up a stat
- Stats are trained through IdleActionManager completion handlers

## Proposed Architecture

### Interface Design

```typescript
export interface Stats {
	strength: number;
	dexterity: number;
	intelligence: number;
	wisdom: number;
}

export interface StatsManagerDependencies {
	// No dependencies initially - stats logic is self-contained
}

export interface StatIncreaseResult {
	success: boolean;
	newLevel: number;
	expCost: number;
	error?: string;
}
```

### StatsManager Class

```typescript
export class StatsManager {
	private stats: Stats;

	constructor(initialStats?: Stats) {
		this.stats = initialStats || { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };
	}

	// Getters
	getStats(): Stats {
		return this.stats;
	}
	getStatLevel(stat: keyof Stats): number {
		return this.stats[stat];
	}

	// Cost calculation
	getStatLevelCost(stat: keyof Stats): number {
		return calculateStatLevelCost(this.stats[stat]);
	}

	// Mutation
	increaseStat(stat: keyof Stats, amount: number): StatIncreaseResult {
		const newLevel = this.stats[stat] + amount;
		this.stats[stat] = newLevel;

		return {
			success: true,
			newLevel,
			expCost: this.getStatLevelCost(stat)
		};
	}

	// Stat caps (future)
	getStatCap(stat: keyof Stats, characterLevel: number): number {
		// From OUTLINE.md: Stat level cap = Character level * 10
		return characterLevel * 10;
	}

	// Equipment bonuses (future)
	getEffectiveStatValue(stat: keyof Stats, equipment?: Equipment): number {
		let value = this.stats[stat];
		// Add equipment bonuses when implemented
		return value;
	}
}
```

## Integration with Game Class

### Before

```typescript
export class Game {
	public stats: Stats;

	getStatLevelCost(stat: keyof Stats): number {
		return calculateStatLevelCost(this.stats[stat]);
	}
}
```

### After

```typescript
export class Game {
	private statsManager: StatsManager;

	constructor() {
		this.statsManager = new StatsManager();
	}

	// Public API remains unchanged for backward compatibility
	get stats(): Stats {
		return this.statsManager.getStats();
	}

	getStatLevelCost(stat: keyof Stats): number {
		return this.statsManager.getStatLevelCost(stat);
	}
}
```

## Testing Strategy

### Test Coverage Goals

- **Unit Tests**: 95%+ coverage on StatsManager
- **Integration Tests**: Verify Game class delegation works correctly
- **Regression Tests**: Ensure existing stat training flows still work

### Test Cases

1. **Initialization**: Create StatsManager with default and custom stats
2. **Getters**: Retrieve individual stat levels and full stats object
3. **Cost Calculation**: Verify getStatLevelCost matches existing calculation
4. **Stat Increases**: Increase stats and verify levels change correctly
5. **Round-trip**: Save/load stats through GameState
6. **Edge Cases**: Zero stats, max stats, negative values

### SaveManagerBuilder Pattern

```typescript
class StatsManagerBuilder {
	private stats: Stats = { strength: 1, dexterity: 1, intelligence: 1, wisdom: 1 };

	withStat(stat: keyof Stats, level: number): this {
		this.stats[stat] = level;
		return this;
	}

	withAllStats(level: number): this {
		this.stats = { strength: level, dexterity: level, intelligence: level, wisdom: level };
		return this;
	}

	build(): StatsManager {
		return new StatsManager(this.stats);
	}
}
```

## Future Enhancements (from OUTLINE.md)

### Stat Level Caps

- Base cap = Character level × 10
- Example: Level 5 character → max 50 in any stat
- Forces balanced progression

### Stat Effects

- **Strength**: Increases physical damage in combat
- **Dexterity**: Increases dodge chance and critical hit rate
- **Intelligence**: Increases spell power and mana
- **Wisdom**: Increases mana regeneration and resistance

### Stat Training

- Training actions increase stats when completed
- Cost scales with stat level (already implemented in calculations.ts)
- Future: Diminishing returns, specialized training

### Equipment Bonuses

- Items can provide stat bonuses (+5 Strength, +10 Intelligence)
- getEffectiveStatValue() will combine base + equipment

## Benefits of Extraction

1. **Separation of Concerns**: Stats logic isolated from game loop
2. **Easier Testing**: Stats can be tested independently
3. **Future-Proof**: Ready for complex stat systems (caps, equipment, effects)
4. **Maintainability**: Stat-related changes happen in one place
5. **Backend-Ready**: StatsManager can validate stat levels on server

## Migration Path

1. Create StatsManager class and test suite
2. Add StatsManager to Game class alongside existing stats
3. Update Game methods to delegate to StatsManager
4. Update IdleActionManager to use StatsManager for stat gains
5. Update save/load to serialize Stats through StatsManager
6. Remove direct stat access from Game class
7. Verify all tests pass

## Timeline Estimate

- Design & Interfaces: 30 minutes ✅ (this document)
- Implementation: 2 hours
- Testing: 1 hour
- Integration: 1 hour
- **Total**: ~4 hours

## Dependencies

- None - StatsManager is self-contained
- Future: May depend on EquipmentManager when implemented

## Notes

- Keep the Stats interface unchanged for backward compatibility
- Maintain existing cost calculation logic (don't change balance)
- Prepare for future features but don't implement them yet
- Follow same patterns as UpgradeManager and IdleActionManager
