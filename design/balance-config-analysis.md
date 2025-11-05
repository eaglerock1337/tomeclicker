# Game Balance Configuration Analysis

**Date:** 2025-11-05
**Author:** gamey-boi (Game Design & Balance Specialist)
**Purpose:** Analysis and recommendations for externalizing game balance to YAML configs

---

## Executive Summary

TomeClicker currently has **~150+ hardcoded balance values** across 4 major systems: Upgrades, Progression Constants, Idle Actions, and Core Formulas. Externalizing these to YAML configs will:

1. **Enable rapid iteration** - Balance changes without code recompilation
2. **Reduce merge conflicts** - Game designers work in YAML, devs work in TypeScript
3. **Improve testability** - Swap config files for A/B testing different balance curves
4. **Support modding** - Community can create balance mods (future)
5. **Document intent** - YAML comments explain _why_ a value is what it is

**Recommended Approach:** Phased migration starting with upgrades (highest impact, easiest to test).

---

## Current State: Hardcoded Balance Values

### 1. Upgrade System (13 Upgrades)

**Location:** `src/lib/managers/upgrade-manager.ts` → `initializeUpgrades()`

**Current Structure:**

```typescript
'click-power': {
  id: 'click-power',
  name: 'Click Power',
  description: 'Baseline clicking strength increases with practice',
  effect: '+1 EXP per click per level',
  baseCost: 50,
  costMultiplier: 1.4,
  maxLevel: 50,
  currentLevel: 0,
  category: 'click',
  effectType: 'clickMultiplier',
  effectValue: 1,
  minLevel: 1
}
```

**What This Controls:**

- All upgrade names, descriptions, effect text (player-facing copy)
- Upgrade costs and scaling curves (baseCost × multiplier^level)
- Max levels (progression ceiling)
- Effect values (how much each level improves the player)
- Unlock requirements (minLevel)
- UI organization (category)

**Balance Impact:** **CRITICAL**
Upgrades are tuned most frequently in incremental games. Every playtest reveals costs that are too cheap/expensive, effects that are too weak/strong.

**Iteration Friction:** **HIGH**
Changing a single upgrade cost requires:

1. Edit TypeScript file
2. Rebuild project
3. Reload game in browser
4. Test change
5. Repeat 10-20 times per tuning session

**Migration Complexity:** **LOW**
Upgrade structure is already well-defined. Direct 1:1 mapping to YAML.

---

### 2. Progression Constants (20+ Values)

**Location:** `src/lib/constants/game.ts`

**Categories:**

#### 2a. Progression Unlocks

```typescript
HEADER_UNLOCK_THRESHOLD = 10; // When header appears
MENU_UNLOCK_THRESHOLD = 50; // When menu/upgrades unlock
UPGRADES_UNLOCK_THRESHOLD = 50; // When upgrades page appears
```

#### 2b. Level System

```typescript
BASE_LEVEL_COST = 1000; // Level 1→2 cost
LEVEL_COST_MULTIPLIER = 1000; // Exponential scaling (1k → 1M → 1B)
```

#### 2c. Stat Training System

```typescript
STAT_BASE_COST = 100; // Stat EXP required for level 1→2
STAT_COST_MULTIPLIER = 1.5; // Stat EXP scaling
TRAINING_BASE_COST = 10; // Character EXP to start training
TRAINING_REWARD = 10; // Stat EXP per training completion
RUMINATE_BASE_REWARD = 10; // Character EXP per ruminate tick
```

#### 2d. Combat & Crits

```typescript
BASE_CRIT_DAMAGE = 0.5; // Base +50% damage on crit (1.5x)
TRAINING_CRIT_MULTIPLIER = 1.5; // Training crit damage
```

#### 2e. Game Timing

```typescript
GAME_TICK_RATE = 1000; // Game loop (1 second)
TRAINING_BASE_DURATION = 15000; // 15 seconds per training
RUMINATE_BASE_DURATION = 15000; // 15 seconds per ruminate tick
MEDITATION_FUTURE_DURATION = 60000; // 60 seconds meditation
```

#### 2f. Upgrade Economics (Deprecated Tier System)

```typescript
UPGRADE_COST_TIER_1 = 50; // Early upgrades
UPGRADE_COST_TIER_2 = 100;
UPGRADE_COST_TIER_3 = 250;
UPGRADE_COST_TIER_4 = 300;
UPGRADE_COST_TIER_5 = 500;
UPGRADE_DISCIPLINE_BASE_COST = 10000;
```

**Note:** These tier constants are **no longer used** in v0.1.5+. All upgrades now define their own baseCost in the upgrade definition. These can be removed or repurposed.

**Balance Impact:** **HIGH**
These constants control the entire progression curve. Changing BASE_LEVEL_COST from 1000 → 10000 makes the game 10x harder.

**Iteration Friction:** **MEDIUM**
Constants file is centralized, but still requires rebuild/reload cycle.

**Migration Complexity:** **LOW**
Simple key-value pairs, easy to map to YAML.

---

### 3. Idle Actions (7 Actions)

**Location:** `src/lib/managers/idle-action-manager.ts`

**Current Structure:**

```typescript
'train-strength': {
  id: 'train-strength',
  name: 'Lift Heavy Objects',
  description: 'Build raw physical power',
  progress: 0,
  baseDuration: TRAINING_BASE_DURATION,
  duration: TRAINING_BASE_DURATION,
  expCost: TRAINING_BASE_COST,
  isActive: false,
  lastUpdate: Date.now(),
  trainsStat: 'strength'
}
```

**What This Controls:**

- Action names and descriptions (player-facing copy)
- Base durations (modified by upgrades)
- Training costs
- Which stat each action trains

**Balance Impact:** **MEDIUM**
Action names/descriptions change rarely. Durations and costs are more frequently tuned, but already reference constants.

**Iteration Friction:** **MEDIUM**
Changing action text requires rebuild. Changing durations/costs can be done via constants.

**Migration Complexity:** **LOW**
Well-defined structure, direct mapping to YAML.

---

### 4. Core Formulas (Embedded in Code)

**Location:** `src/lib/utils/calculations.ts` + `src/lib/game.ts`

#### 4a. Pure Formula Functions (calculations.ts)

These are **already well-abstracted**. They take parameters and return calculated values:

```typescript
// ✅ Good: Formula logic separated, constants as inputs
calculateLevelUpCost(level) = BASE_LEVEL_COST × LEVEL_COST_MULTIPLIER^(level-1)
calculateStatExpRequired(level) = 100 × 1.5^(level-1)
calculateStatTrainingCost(level) = 100 × level^1.3
```

**Migration Strategy:** Extract the formula **parameters**, keep the logic in code.

Example YAML config:

```yaml
formulas:
  levelUpCost:
    baseCost: 1000
    multiplier: 1000
    formula: 'base × multiplier^(level-1)' # Documentation only

  statExpRequired:
    baseCost: 100
    multiplier: 1.5
    roundTo: 5 # Round to nearest 5

  statTrainingCost:
    baseCost: 100
    exponent: 1.3
```

#### 4b. Embedded Multipliers (game.ts)

Some critical balance values are **embedded in game logic**:

```typescript
// 🚩 Line 246: Hardcoded 8x level multiplier
if (this.level > 1) {
	this.clickMultiplier *= Math.pow(8, this.level - 1);
}

// 🚩 Line 250: Hardcoded 2x discipline multiplier
if (discipline && discipline.currentLevel > 0) {
	this.clickMultiplier *= Math.pow(2, discipline.currentLevel);
}

// 🚩 Line 272-274: Hardcoded 8x level scaling for ruminate
if (this.level > 1) {
	this.idleExpRate *= Math.pow(8, this.level - 1);
}
```

**Balance Impact:** **CRITICAL**
These multipliers define the game's core scaling curve. Changing from 8x → 10x per level would drastically alter progression pace.

**Problem:** These are currently **magic numbers** buried in methods. If you need to change the level multiplier, you must find and update it in multiple places.

**Migration Strategy:** Extract to constants, then to config:

```typescript
// constants/game.ts
export const CHARACTER_LEVEL_MULTIPLIER = 8; // 8x per level
export const DISCIPLINE_MULTIPLIER = 2; // 2x per level

// game.ts
this.clickMultiplier *= Math.pow(CHARACTER_LEVEL_MULTIPLIER, this.level - 1);
this.clickMultiplier *= Math.pow(DISCIPLINE_MULTIPLIER, discipline.currentLevel);
```

Then YAML:

```yaml
progressionMultipliers:
  characterLevel: 8 # EXP gains scale by 8x per character level
  discipline: 2 # EXP gains scale by 2x per discipline level
```

---

## Recommended YAML Structure

### Design Principles

1. **Hierarchical Organization** - Group related values (all click upgrades together)
2. **Self-Documenting** - Include comments explaining intent
3. **Type Safety** - Structure should be TypeScript-friendly
4. **Validation-Ready** - Easy to add schema validation (e.g., Zod)
5. **Modular Files** - Separate concerns (upgrades.yaml, progression.yaml, actions.yaml)

### Proposed File Structure

```
src/lib/config/
├── balance/
│   ├── upgrades.yaml        # All 13 upgrades
│   ├── progression.yaml     # Level costs, multipliers, unlocks
│   ├── actions.yaml         # Training and meditation actions
│   ├── formulas.yaml        # Formula parameters
│   └── index.ts             # TypeScript loader + validation
└── schema/
    └── balance.schema.ts    # Zod schemas for type safety
```

---

### Example: upgrades.yaml

```yaml
# =============================================================================
# UPGRADES: All purchaseable permanent improvements
# =============================================================================
# Structure:
#   - id: unique identifier (used in code)
#   - name: display name
#   - description: tooltip text
#   - effect: concise effect summary
#   - baseCost: first level cost (in character EXP)
#   - costMultiplier: exponential scaling (cost = base × mult^level)
#   - maxLevel: progression ceiling
#   - category: UI grouping (click | ruminate | training | special)
#   - effectType: what this upgrade modifies (see UpgradeManager for types)
#   - effectValue: numerical effect per level
#   - minLevel: character level requirement (optional)
# =============================================================================

# -----------------------------------------------------------------------------
# CLICK CATEGORY - Active clicking bonuses
# -----------------------------------------------------------------------------

click-power:
  name: Click Power
  description: Baseline clicking strength increases with practice
  effect: +1 EXP per click per level
  baseCost: 50
  costMultiplier: 1.4
  maxLevel: 50
  category: click
  effectType: clickMultiplier
  effectValue: 1
  minLevel: 1

  # Design Notes:
  # - Linear scaling (+1 per level) feels more tangible than percentage
  # - Max level 50 provides long-term progression
  # - 1.4x cost scaling keeps affordable early, expensive late

critical-clicks:
  name: Critical Clicks
  description: Increases chance for clicks to critically strike for bonus EXP
  effect: +0.5% crit chance per level
  baseCost: 200
  costMultiplier: 1.4
  maxLevel: 50
  category: click
  effectType: clickCrit
  effectValue: 0.005 # 0.5% = 0.005
  minLevel: 1

  # Design Notes:
  # - Capped at 25% crit chance (50 levels × 0.5% = 25%)
  # - Provides multiplicative benefit when combined with crit damage
  # - Higher base cost than click-power (200 vs 50) for balance

devastating-click:
  name: Devastating Click
  description: Increases the bonus EXP multiplier when clicks critically strike
  effect: +2% crit damage per level
  baseCost: 500
  costMultiplier: 1.4
  maxLevel: 50
  category: click
  effectType: clickCritDamage
  effectValue: 0.02
  minLevel: 2 # Unlocks at character level 2

  # Design Notes:
  # - Base crit damage is +50% (1.5x). Max +100% (2.5x total)
  # - Delayed unlock (level 2) creates anticipation
  # - Most expensive click upgrade (500) - multiplicative power

click-mastery:
  name: Click Mastery
  description: Multiplicative bonus to all click EXP gains
  effect: +5% EXP per click per level
  baseCost: 1200
  costMultiplier: 2.0 # More aggressive scaling (2x vs 1.4x)
  maxLevel: 20 # Lower max level balances high multiplier
  category: click
  effectType: clickMultiplierPercent
  effectValue: 0.05
  minLevel: 3

  # Design Notes:
  # - Pure multiplier = stacks with everything
  # - 2x cost scaling + lower max level = expensive but powerful
  # - +100% at max (20 × 5%) doubles click power

# -----------------------------------------------------------------------------
# RUMINATE CATEGORY - Idle EXP generation
# -----------------------------------------------------------------------------

ruminate-power:
  name: Ruminate Power
  description: Increases EXP gained from each rumination thought
  effect: +10 EXP per thought per level
  baseCost: 500
  costMultiplier: 1.4
  maxLevel: 50
  category: ruminate
  effectType: ruminatePower
  effectValue: 10
  minLevel: 2

  # Design Notes:
  # - Unlocks same level as ruminate action (level 2)
  # - Linear scaling matches click-power design
  # - Base 10 EXP/tick → +500 EXP at max level

ruminate-speed:
  name: Ruminate Speed
  description: Reduces time between rumination thoughts
  effect: -0.1s per thought per level
  baseCost: 800
  costMultiplier: 1.4
  maxLevel: 50
  category: ruminate
  effectType: ruminateSpeed
  effectValue: 0.1 # Seconds reduced per level
  minLevel: 2

  # Design Notes:
  # - Base 10s/tick → 5s/tick at level 50 (50% reduction)
  # - Diminishing returns as duration approaches 0
  # - Higher base cost (800 vs 500) since speed = multiplicative

focus-flow:
  name: Focus Flow
  description: Increases chance for rumination to critically strike for bonus EXP
  effect: +0.5% ruminate crit chance per level
  baseCost: 1200
  costMultiplier: 1.4
  maxLevel: 50
  category: ruminate
  effectType: ruminateCrit
  effectValue: 0.005
  minLevel: 3

  # Design Notes:
  # - Same crit chance progression as critical-clicks
  # - Delayed unlock (level 3) paces complexity introduction
  # - Idle crits feel rewarding ("I came back to a huge number!")

intense-thoughts:
  name: Intense Thoughts
  description: Increases the bonus EXP multiplier when rumination critically strikes
  effect: +2% ruminate crit damage per level
  baseCost: 2000
  costMultiplier: 1.4
  maxLevel: 50
  category: ruminate
  effectType: ruminateCritDamage
  effectValue: 0.02
  minLevel: 4

  # Design Notes:
  # - Matches devastating-click crit damage progression
  # - Higher base cost (2000) reflects idle power
  # - Level 4 unlock creates progression milestone

ruminate-mastery:
  name: Ruminate Mastery
  description: Multiplicative bonus to all rumination EXP gains
  effect: +10% ruminate EXP per level
  baseCost: 2500
  costMultiplier: 2.0
  maxLevel: 20
  category: ruminate
  effectType: ruminateMultiplierPercent
  effectValue: 0.1 # 10% per level
  minLevel: 4

  # Design Notes:
  # - Bigger % bonus (10% vs click's 5%) since idle is weaker baseline
  # - Same 2x cost scaling + low max level pattern as click-mastery
  # - +200% at max (20 × 10%) triples idle income

# -----------------------------------------------------------------------------
# TRAINING CATEGORY - Stat development bonuses
# -----------------------------------------------------------------------------

training-power:
  name: Training Power
  description: Increases stat EXP gained from each training completion
  effect: +1% stat EXP per training per level
  baseCost: 2000
  costMultiplier: 1.4
  maxLevel: 50
  category: training
  effectType: statGainPercent
  effectValue: 0.01
  minLevel: 3 # Unlocks when stat training becomes available

  # Design Notes:
  # - Percentage scaling (vs flat) since stat EXP varies by stat level
  # - +50% stat EXP at max level (50 × 1%)
  # - Level 3 unlock = available immediately when training unlocks

training-speed:
  name: Training Speed
  description: Reduces time required to complete stat training exercises
  effect: -0.1s per training per level
  baseCost: 2500
  costMultiplier: 1.4
  maxLevel: 50
  category: training
  effectType: trainingSpeed
  effectValue: 0.1
  minLevel: 3

  # Design Notes:
  # - Base 30s/training → 25s at level 50 (16.7% reduction)
  # - Less dramatic reduction than ruminate (30s → 25s vs 10s → 5s)
  # - Training is active loop, less sensitive to speed than idle

training-efficiency:
  name: Training Efficiency
  description: Reduces character EXP cost to start training
  effect: -1% training cost per level
  baseCost: 3000
  costMultiplier: 1.4
  maxLevel: 50
  category: training
  effectType: trainingEfficiency
  effectValue: 0.01
  minLevel: 3

  # Design Notes:
  # - Cost reduction = multiplicative value (spend less, get more)
  # - -50% cost at max level (50 × 1%)
  # - Higher base cost (3000) reflects power of cost reduction

perfect-form:
  name: Perfect Form
  description: Increases chance for training to critically strike for bonus stat EXP
  effect: +0.5% training crit chance per level
  baseCost: 4000
  costMultiplier: 1.4
  maxLevel: 50
  category: training
  effectType: trainingCrit
  effectValue: 0.005
  minLevel: 4

  # Design Notes:
  # - Same crit chance progression as other crit upgrades
  # - Level 4 unlock = earned through gameplay before available
  # - Training crits speed up stat progression significantly

devastating-training:
  name: Devastating Training
  description: Increases the bonus stat EXP multiplier when training critically strikes
  effect: +2% training crit damage per level
  baseCost: 5000
  costMultiplier: 1.4
  maxLevel: 50
  category: training
  effectType: trainingCritDamage
  effectValue: 0.02
  minLevel: 4

  # Design Notes:
  # - Matches other crit damage upgrades
  # - Highest base cost in training category (5000)
  # - Crit chance + crit damage combo creates multiplicative power

training-mastery:
  name: Training Mastery
  description: Multiplicative bonus to all stat EXP gains from training
  effect: +5% stat EXP per training per level
  baseCost: 7500
  costMultiplier: 2.0
  maxLevel: 20
  category: training
  effectType: statGainPercent
  effectValue: 0.05
  minLevel: 4

  # Design Notes:
  # - Same pattern as other mastery upgrades
  # - +100% stat EXP at max (20 × 5%)
  # - Most expensive training upgrade, most powerful

# -----------------------------------------------------------------------------
# SPECIAL CATEGORY - Unique game-changing upgrades
# -----------------------------------------------------------------------------

discipline:
  name: Discipline
  description: Unified focus accelerates ALL forms of progress
  effect: 2x all EXP gain per level
  baseCost: 10000
  costMultiplier: 10.0 # MUCH more aggressive: 10k → 100k → 1M → 10M
  maxLevel: 100
  category: special
  effectType: discipline
  effectValue: 2.0
  minLevel: 1

  # Design Notes:
  # - MOST POWERFUL UPGRADE in the game
  # - 2x multiplicative stacking = exponential growth (2^level)
  # - Level 1 = 2x, Level 2 = 4x, Level 3 = 8x, Level 10 = 1024x
  # - 10x cost multiplier balances insane power
  # - Creates "checkpoints" between 1000x character level gaps
  # - Available level 1 for early power spike
  # - Max level 100 = endgame progression (2^100 = incomprehensible power)
```

---

### Example: progression.yaml

```yaml
# =============================================================================
# PROGRESSION CONSTANTS: Core balance knobs for game progression
# =============================================================================

# -----------------------------------------------------------------------------
# UI UNLOCK THRESHOLDS
# -----------------------------------------------------------------------------
# Lifetime EXP required to unlock game features
unlocks:
  header: 10 # EXP display and level indicator
  menu: 50 # Navigation menu
  upgrades: 50 # Upgrades page access

  # Design Notes:
  # - Header at 10 EXP = appears after 5-10 clicks (early feedback)
  # - Menu/Upgrades at 50 = ~30 seconds of clicking (hook moment)

# -----------------------------------------------------------------------------
# CHARACTER LEVEL SYSTEM
# -----------------------------------------------------------------------------
# Character levels unlock new game systems
characterLevel:
  baseCost: 1000 # Level 1 → 2 cost
  costMultiplier: 1000 # Exponential scaling
  progressionMultiplier: 8 # EXP gains scale 8x per level

  # Example costs:
  # Level 1 → 2:   1,000 EXP      (10^3)
  # Level 2 → 3:   1,000,000 EXP  (10^6)
  # Level 3 → 4:   1,000,000,000 EXP  (10^9)

  # Design Notes:
  # - 1000x multiplier creates MASSIVE gaps (hours → days → weeks)
  # - 8x EXP gain per level makes gaps achievable
  # - Discipline upgrade bridges gaps (provides 2^level multiplier)
  # - Level 4 = first retreat available (major milestone)

# -----------------------------------------------------------------------------
# STAT TRAINING SYSTEM
# -----------------------------------------------------------------------------
# RPG stats with EXP-based leveling
statTraining:
  # Stat EXP required to level up a stat
  statExpCurve:
    baseCost: 100 # Level 1 → 2 requires 100 stat EXP
    multiplier: 1.5 # Each level requires 1.5x more EXP
    roundTo: 5 # Round to nearest 5 for clean numbers

    # Example stat EXP requirements:
    # Level 1 → 2:    100 stat EXP
    # Level 2 → 3:    150 stat EXP
    # Level 5 → 6:    510 stat EXP
    # Level 10 → 11:  3,885 stat EXP
    # Level 20 → 21:  ~75,000 stat EXP

  # Character EXP cost to START a training session
  trainingCostCurve:
    baseCost: 100 # Training stat at level 1 costs 100 character EXP
    exponent: 1.3 # Cost scales by level^1.3

    # Example training costs:
    # Train level 1 stat:  100 character EXP
    # Train level 5 stat:  900 character EXP
    # Train level 10 stat: 2,800 character EXP
    # Train level 20 stat: 13,000 character EXP

  # Character level → stat level cap (5:1 ratio)
  statCapRatio: 5
  # Character Level 3 → 15 stat levels max (3 × 5)
  # Character Level 4 → 20 stat levels max (4 × 5)
  # Character Level 20 → 100 stat levels max (20 × 5)

  # Stat EXP gained per training completion
  baseStatExpReward: 10

  # Design Notes:
  # - 1.5x stat EXP curve is gentler than 1000x character level curve
  # - Training cost creates trade-off: spend EXP on upgrades OR training
  # - 5:1 cap prevents infinite stat grinding at low character levels
  # - Forces retreat to continue stat progression

# -----------------------------------------------------------------------------
# IDLE SYSTEM (RUMINATE)
# -----------------------------------------------------------------------------
ruminate:
  baseReward: 10 # Character EXP per ruminate completion
  baseDuration: 15000 # 15 seconds per tick (in milliseconds)

  # Design Notes:
  # - Starts weak (10 EXP per 15s = 0.67 EXP/s)
  # - Discipline makes it viable (×2 per level)
  # - Speed upgrades reduce duration → higher EXP/s
  # - Power upgrades increase reward → higher EXP/s

# -----------------------------------------------------------------------------
# CRITICAL HIT SYSTEM
# -----------------------------------------------------------------------------
criticals:
  baseDamage: 0.5 # +50% bonus damage (1.5x total on crit)
  maxCritChance: 0.25 # 25% crit chance cap
  maxCritDamage: 1.5 # +150% bonus damage cap (2.5x total)

  # Design Notes:
  # - Crit chance cap prevents 100% crit builds
  # - Crit damage cap prevents exponential scaling
  # - Base crit damage (1.5x) feels impactful but not broken

# -----------------------------------------------------------------------------
# GAME TIMING
# -----------------------------------------------------------------------------
timing:
  gameTickRate: 1000 # Game loop: 1 second
  trainingBaseDuration: 15000 # Stat training: 15 seconds
  meditationBaseDuration: 60000 # One-time meditations: 60 seconds

  # Design Notes:
  # - 1s tick rate balances responsiveness vs performance
  # - 15s training = short enough to feel active, long enough to idle
  # - Meditation is slower (60s) since it's one-time unlock

# -----------------------------------------------------------------------------
# SPECIAL MULTIPLIERS
# -----------------------------------------------------------------------------
multipliers:
  discipline: 2 # Discipline upgrade: 2x all EXP per level (2^level total)


  # Design Notes:
  # - Discipline is THE power upgrade
  # - At level 5 Discipline: 32x all EXP (2^5)
  # - Makes 1000x character level gaps achievable
  # - Available from level 1 (early power spike)
```

---

### Example: actions.yaml

```yaml
# =============================================================================
# IDLE ACTIONS: Training and Meditation activities
# =============================================================================

# -----------------------------------------------------------------------------
# TRAINING ACTIONS (Progress Knight style - runs continuously)
# -----------------------------------------------------------------------------
training:
  practice-ruminate:
    name: Ruminate
    description: Learn through observation and reflection
    baseDuration: 15000 # 15 seconds (references RUMINATE_BASE_DURATION)
    expCost: 0 # Free to use!
    trainsStat: null # Doesn't train a stat, generates character EXP
    unlockLevel: 2 # Available at character level 2

    # Design Notes:
    # - Only free training action
    # - Always available once unlocked
    # - Primary idle income source

  train-strength:
    name: Lift Heavy Objects
    description: Build raw physical power
    baseDuration: 15000 # 15 seconds
    expCost: 10 # Character EXP cost (base, scales with stat level)
    trainsStat: strength
    unlockLevel: 3 # Available when stat training unlocks

  train-agility:
    name: Practice Quick Movements
    description: Improve speed and reflexes
    baseDuration: 15000
    expCost: 10
    trainsStat: agility
    unlockLevel: 3

  train-willpower:
    name: Mental Conditioning
    description: Strengthen resolve and focus
    baseDuration: 15000
    expCost: 10
    trainsStat: willpower
    unlockLevel: 3

  train-endurance:
    name: Physical Conditioning
    description: Build stamina and resilience
    baseDuration: 15000
    expCost: 10
    trainsStat: endurance
    unlockLevel: 3

# -----------------------------------------------------------------------------
# MEDITATION ACTIONS (One-time or limited use)
# -----------------------------------------------------------------------------
meditation:
  meditate-future:
    name: Meditate on Your Future
    description: Unlock the path to adventure
    baseDuration: 60000 # 60 seconds
    expCost: 50
    oneTime: true # Can only complete once
    unlocks: adventureMode # Special unlock
    unlockLevel: 3 # Available when meditation unlocks

    # Design Notes:
    # - Longer duration (60s) creates anticipation
    # - EXP cost (50) requires early investment
    # - One-time gate to adventure system

  disassociate:
    name: Disassociate
    description: Take a mental health day. Increases offline progress time.
    baseDuration: 30000 # 30 seconds
    expCost: 100
    oneTime: false # Repeatable
    unlockLevel: 3

    # Design Notes:
    # - Future: increases offline timer (not implemented yet)
    # - Higher EXP cost than meditate-future
    # - Repeatable for stacking effect
```

---

## Migration Strategy

### Phase 1: Upgrades (Highest Impact, Lowest Risk)

**Why First:**

- Most frequently tuned values in incremental games
- Highest iteration friction currently (rebuild/reload cycle)
- Self-contained system (doesn't affect calculations.ts formulas)
- Easy to test (buy upgrade, verify effect)

**Implementation:**

1. Create `src/lib/config/balance/upgrades.yaml`
2. Create TypeScript loader with Zod validation
3. Update `UpgradeManager.initializeUpgrades()` to load from config
4. Add hot-reload support in dev mode (optional but HUGE QoL)
5. Write migration tests (verify old hardcoded upgrades = new YAML upgrades)

**Testing:**

- Unit tests: Load YAML, verify structure
- Integration tests: Purchase upgrades, verify effects match
- Balance tests: Playtest 1 hour, verify progression feel unchanged

**Rollback Plan:**
If config loading breaks, keep hardcoded fallback in code.

---

### Phase 2: Progression Constants (Medium Impact, Medium Risk)

**Why Second:**

- Lower iteration frequency than upgrades
- Some values affect formulas (requires coordination with calculations.ts)
- Still high value (enables A/B testing different curves)

**Implementation:**

1. Create `src/lib/config/balance/progression.yaml`
2. Update `constants/game.ts` to load from config
3. Update calculation functions to use config parameters
4. Extract embedded multipliers (8x, 2x) from game.ts

**Testing:**

- Formula tests: Verify calculations unchanged
- Progression tests: Verify level-up costs, stat caps, unlock thresholds

---

### Phase 3: Actions (Low Impact, Low Risk)

**Why Third:**

- Lowest iteration frequency (action text/costs change rarely)
- Some values already reference constants (durations, costs)
- Easy to test (start action, verify duration/cost)

**Implementation:**

1. Create `src/lib/config/balance/actions.yaml`
2. Update `IdleActionManager.initializeActions()` to load from config
3. Support dynamic action addition (future: add new training actions via YAML)

---

### Phase 4: Formulas (Optional - Advanced)

**Why Last:**

- Formulas change VERY rarely once designed
- High risk (breaking a formula breaks the game)
- Low iteration value (you don't tweak exponent values daily)

**Implementation:**
Only if you want to support "balance mods" that fundamentally change game math:

```yaml
formulas:
  levelUpCost:
    type: exponential
    base: 1000
    multiplier: 1000

  statExpRequired:
    type: exponential
    base: 100
    multiplier: 1.5
    roundTo: 5

  statTrainingCost:
    type: power
    base: 100
    exponent: 1.3
```

**Alternative:** Keep formulas in code, only expose parameters to config.

---

## Tooling & Workflow Improvements

### 1. YAML Hot-Reload (Dev Mode)

```typescript
// src/lib/config/balance/index.ts
if (import.meta.hot) {
	import.meta.hot.accept('./upgrades.yaml', (newModule) => {
		upgradeConfig = newModule;
		game.reloadUpgrades(); // Trigger re-initialization
		console.log('🔥 Upgrades hot-reloaded');
	});
}
```

**Impact:** Change upgrade cost in YAML → Save → Game updates in 100ms (no rebuild!)

### 2. Schema Validation (Zod)

```typescript
import { z } from 'zod';

const UpgradeSchema = z.object({
  name: z.string(),
  description: z.string(),
  effect: z.string(),
  baseCost: z.number().positive(),
  costMultiplier: z.number().min(1),
  maxLevel: z.number().positive(),
  category: z.enum(['click', 'ruminate', 'training', 'special']),
  effectType: z.enum([...]),
  effectValue: z.number(),
  minLevel: z.number().positive().optional()
});

const UpgradesConfigSchema = z.record(UpgradeSchema);
```

**Impact:** Catch typos/errors before they break the game.

### 3. Balance Testing Scripts

```bash
# scripts/balance-test.sh
# Load config A, run 10 simulated hours, measure progression
# Load config B, run 10 simulated hours, measure progression
# Compare: Which gets to level 4 faster?
```

**Impact:** A/B test balance changes without manual playtesting.

### 4. Config Diff Tool

```bash
npm run balance:diff config/v0.2.0.yaml config/v0.3.0.yaml
```

```diff
upgrades:
  click-power:
-   baseCost: 50
+   baseCost: 75    # Made 50% more expensive
    maxLevel: 50
```

**Impact:** Document balance changes in changelogs, understand power creep over time.

---

## Impact Analysis

### Development Velocity

**Before:**

1. Tweak upgrade cost in TypeScript
2. Rebuild project (5-10s)
3. Reload browser
4. Test change
5. Repeat 10-20 times per tuning session
6. **Total:** ~30-60 minutes per balance pass

**After:**

1. Tweak upgrade cost in YAML
2. Save file (hot-reload)
3. Test change (already in browser)
4. **Total:** ~5-10 minutes per balance pass

**Speedup:** 3-6x faster iteration

### Team Collaboration

**Before:**

- Game designer: "I want click-power to cost 75 instead of 50"
- Developer: "OK, let me change that in the code and rebuild"
- **Bottleneck:** Dev time required for every tweak

**After:**

- Game designer: Edits `upgrades.yaml`, commits change
- Developer: Reviews YAML diff, merges PR
- **Benefit:** Designer works independently, dev reviews balance changes

### Testing & QoL

**Before:**

- Manual playtesting only
- Hard to compare balance changes (requires separate builds)

**After:**

- Swap config files to A/B test
- Automated balance testing (simulate progression with different configs)
- "Easy mode" config for QA/reviewers

### Future: Modding Support

Once configs are external, community can create:

- "Hardcore Mode" balance (10x costs)
- "Casual Mode" balance (faster progression)
- "Custom Challenges" (max 25 levels, no discipline upgrade, etc.)

---

## Risks & Mitigation

### Risk 1: Breaking Changes During Migration

**Problem:** Loading configs wrong could break the game.

**Mitigation:**

- Dual mode: Load from config, fall back to hardcoded if config fails
- Comprehensive test suite comparing config output to hardcoded output
- Gradual rollout (upgrades first, then constants, then actions)

### Risk 2: YAML Typos

**Problem:** Typo in YAML (e.g., `baseCost: "50"` instead of `baseCost: 50`) breaks game.

**Mitigation:**

- Zod schema validation (catches type errors before runtime)
- CI tests that validate all config files
- VSCode YAML extension with JSON Schema support (autocomplete + validation)

### Risk 3: Performance Overhead

**Problem:** Loading YAML on every game start might be slow.

**Mitigation:**

- Configs only loaded once at startup (not per-frame)
- For production builds, bundle YAML into JavaScript (no runtime parsing)
- Benchmark: YAML parsing is <10ms for these small files

### Risk 4: Config Drift

**Problem:** Code expects config structure, but config file changes.

**Mitigation:**

- Version config files (`version: "1.0.0"` in YAML header)
- Schema validation ensures required fields exist
- Migration scripts for config format changes

---

## Recommendations Summary

### Immediate Action (Before 0.3.0 MVP)

✅ **Phase 1: Externalize Upgrades**

- Highest impact on iteration speed
- Self-contained, low risk
- Sets pattern for future config work
- Enables designer autonomy

### Post-MVP (0.4.0+)

✅ **Phase 2: Externalize Progression Constants**

- Enables A/B testing different curves
- Unlocks balance testing automation
- Still relatively low risk

✅ **Phase 3: Externalize Actions**

- Lowest priority (actions change rarely)
- Nice-to-have for consistency

❌ **Phase 4: Externalize Formulas**

- Skip unless planning "total conversion" mod support
- Formulas are stable, low iteration value
- High risk, low reward

### Tooling Priorities

1. **Zod schema validation** (must-have for safety)
2. **Hot-reload in dev mode** (huge QoL for iteration)
3. **Config diff tool** (nice-to-have for changelogs)
4. **Automated balance testing** (future, enables data-driven tuning)

---

## Next Steps

1. **Review this analysis** with stakeholders (User, fronty-boi, testy-boi)
2. **Decide on scope** for pre-MVP work (just upgrades? Or upgrades + progression?)
3. **Create implementation PR** following `/thinky-time` workflow
4. **Write migration tests** to verify config = hardcoded behavior
5. **Document config format** in `design/CONFIG.md` for future reference

---

## Appendix: Full Config File Estimates

| Config File                | Lines of YAML  | Entries         | Complexity                    |
| -------------------------- | -------------- | --------------- | ----------------------------- |
| `upgrades.yaml`            | ~400           | 13 upgrades     | Medium (comments included)    |
| `progression.yaml`         | ~150           | ~25 constants   | Low (flat key-values)         |
| `actions.yaml`             | ~100           | 7 actions       | Low (simple structure)        |
| `formulas.yaml` (optional) | ~50            | ~8 formulas     | Medium (needs careful design) |
| **TOTAL**                  | **~700 lines** | **~50 entries** | **Medium**                    |

**Comparison:** Current hardcoded TypeScript = ~500 lines across 3 files.
YAML will be slightly more verbose due to comments, but FAR more readable and maintainable.

---

**End of Analysis**
