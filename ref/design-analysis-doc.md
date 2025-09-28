# DESIGN_ANALYSIS.md

## Overview

This document contains design analysis and architectural notes for TomeClicker, an incremental RPG that evolves from simple clicking mechanics to deep magical systems. The game follows a philosophy of "mechanical obsolescence" where each system teaches players before being transcended by more sophisticated mechanics.

## Core Design Philosophy

TomeClicker employs a unique progression philosophy where what initially appears as a simple clicker gradually reveals itself as a deep RPG with complex magical systems. Each mechanic serves as both a stepping stone and eventually becomes obsolete, creating a natural flow of discovery and advancement.

## Game Structure: Three-Act Progression

### Act I: The Mundane Beginning (Character Levels 1-4)
- **Primary Loop**: Click for EXP → Unlock pages → Train stats → Begin adventures
- **Key Unlocks**:
  - 10 EXP: Header visibility
  - 50 EXP: Navigation menu
  - 100 EXP: Upgrades page
  - 1000 EXP: Level 2 and stats system
- **Core Mechanics**:
  - Active clicking transitioning to idle gameplay
  - Stats training as first major progression gate
  - Adventure zones introducing risk/reward decisions
  - Equipment system providing multiplicative scaling

### Act II: The Prestige Loop (Retreats & Knowledge)
- **Primary Loop**: Retreat → Gain KP → Unlock improvements → Progress faster
- **Key Systems**:
  - Retreat mechanics (reset progress, increase level cap)
  - Knowledge Points for meta-progression
  - Achievement system for QoL improvements
  - Focus/meditation bridging physical and magical gameplay
- **Unlock Gates**:
  - Retreat 1: Knowledge system, achievements
  - Retreat 2: Focus/meditation page
  - Retreat 3+: Quest system
  - Later retreats: Tome discoveries

### Act III: The Magical Revelation (Tomes System)
- **Primary Loop**: Discover tomes → Learn spells → Transcend physical limits
- **Scope**: 50 Tomes across 15 tiers
- **Progression**:
  - Tiers 1-3: Conceptual understanding
  - Tiers 4-6: Basic spellcasting (requires alignment choice)
  - Tiers 7-9: Expert techniques
  - Tiers 10-12: Master abilities
  - Tiers 13-15: Reality manipulation
- **Endgame**: Player potentially creates own magic

## Key Design Patterns

### Mechanical Obsolescence
Each system intentionally becomes less relevant as new ones emerge:
- Practice Page → Replaced by idle mechanics
- Basic Upgrades → Diminishing returns force progression
- Training → Superseded by adventure AP spending
- Early Adventures → Replaced by quests and magic
- Physical Combat → Transcended by magical abilities

### Exponential Scaling Framework
Multiple overlapping exponential systems create satisfying progression:
- **EXP Requirements**: ~10x per character level
- **Stat Scaling**: Equipment multiplies base stats exponentially
- **Retreat Benefits**: Linear cap increases compound with other systems
- **Tome Progression**: 15 tiers with exponentially increasing power

### Idle vs Active Tension
Creates meaningful player decisions through competing priorities:
- **Resource Competition**: Can't train while practicing
- **Synergies**: Adventure + practice simultaneously
- **Risk Management**: Safe training vs dangerous adventures
- **Opportunity Cost**: EXP spent vs accumulated

## Game Systems Breakdown

### Experience & Leveling
- **EXP Sources**: Clicking, research (idle), adventures, quests
- **Level Formula**: `Math.floor(Math.log10(exp) / 3) + 1`
- **Level Caps**: Start at 4, increase by 1 per retreat, max 20
- **Scaling**: Exponential requirements maintain long-term goals

### Stats System
Six core stats with different scaling behaviors:
- **Strength**: +attack (1:1 ratio)
- **Agility**: +attack speed (1:1 ratio)
- **Willpower**: +defense (1:1 ratio)
- **Endurance**: +HP (1:5 ratio, max 500 HP)
- **Intelligence**: +mana (1:5 ratio, max 500 mana)
- **Wisdom**: +mana regen (level/4 per second)

### Adventure & Combat
- **Zone Progression**: Minimum stat requirements gate content
- **Combat Loop**: Success chains vs HP loss on failure
- **Rewards**: Equipment unlocks, AP for stat training, EXP
- **Equipment Tiers**: Matching sets provide bonuses
- **Scaling**: Enemy difficulty and rewards scale with zone

### Prestige Systems
- **Retreats**: Hard reset with permanent benefits
  - Increase level cap by 1
  - Increase stat caps by 5
  - Earn Knowledge Points (KP)
  - Unlock new game systems
- **Knowledge Tree**: Spend KP for permanent upgrades
- **Achievements**: Provide multipliers and QoL improvements

### Magic & Tomes
- **Discovery**: Pages → Chapters → Complete tomes
- **Elements**: Fire, Frost, Shock
- **Alignments**: Holy, Black (mutually exclusive choices)
- **Spell Types**: Attack, Defense, Aura, Enchantment
- **Progression Gates**: Tier prerequisites, alignment restrictions

## Implementation Priorities

### Phase 1: Core Loop (MVP)
1. Perfect EXP gain/spend balance
2. Implement basic upgrade system with diminishing returns
3. Create satisfying progression feedback
4. Establish save/load functionality

### Phase 2: RPG Systems
1. Implement stats and training mechanics
2. Design adventure zones with proper scaling
3. Create equipment system with tier progression
4. Balance risk/reward for different activities

### Phase 3: Meta-Progression
1. Implement retreat mechanics
2. Design knowledge tree with meaningful choices
3. Create achievement system with tangible benefits
4. Add automation unlocks for QoL

### Phase 4: Magical Systems
1. Implement tome discovery mechanics
2. Create spell system that obsoletes physical combat
3. Design alignment choices with meaningful consequences
4. Integrate story revealing world's magical history

## Technical Architecture Notes

### TypeScript Migration Benefits
- **Type Safety**: Prevent state inconsistencies
- **Enums**: Game states, elements, alignments, spell types
- **Interfaces**: Equipment, tomes, achievements structures
- **Generics**: Reusable progression calculators
- **Union Types**: Different action types with specific parameters

### State Management Structure
```typescript
interface GameState {
  player: {
    exp: number;
    level: number;
    stats: StatBlock;
    equipment: EquipmentSet;
  };
  progression: {
    unlockedPages: Set<PageId>;
    currentActivity: ActivityType;
    retreatCount: number;
  };
  combat: {
    currentZone: ZoneId;
    enemiesDefeated: number;
    hp: number;
  };
  tomes: {
    discovered: Map<TomeId, DiscoveryState>;
    spellsKnown: Set<SpellId>;
    alignment: Alignment | null;
  };
  meta: {
    knowledgePoints: number;
    achievements: Set<AchievementId>;
    totalAPEarned: number;
  };
}
```

### Save System Considerations
- **Local Storage**: Browser-based saves with compression
- **Cloud Saves**: Minimal data structure for scalability
- **Anti-Cheat**: Statistical validation for leaderboards
- **Versioning**: Migration system for save compatibility

## Design Challenges & Solutions

### The Grind Valley
**Problem**: Period between unlocking stats and achieving level 1 in all stats feels too slow.
**Solution**: Provide intermediate rewards, visual progress indicators, and story elements to maintain engagement.

### The Retreat Decision
**Problem**: Players hesitant to give up progress.
**Solution**: Clear preview of benefits, optimal retreat indicators, and make first retreat feel necessary for progression.

### Pacing Tome Discovery
**Problem**: Revealing magic too early reduces mystery, too late causes frustration.
**Solution**: Gradual hints through story, partial page discoveries, and preview system showing what's possible.

### Endgame Content
**Problem**: What happens after all 50 tomes are discovered?
**Solution**: Player transcende