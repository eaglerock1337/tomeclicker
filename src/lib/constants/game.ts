/**
 * Game balance and progression constants
 *
 * These constants define the core mechanics, timing, and balance of TomeClicker.
 * Centralizing these values makes game balance tuning easier and documents intent.
 */

// ============================================================================
// PROGRESSION UNLOCKS
// ============================================================================

/**
 * Lifetime EXP required to unlock the game header (level/exp display)
 * First UI element to appear after the player makes initial clicks
 */
export const HEADER_UNLOCK_THRESHOLD = 10;

/**
 * Lifetime EXP required to unlock the navigation menu and upgrades page
 * Major progression gate that opens up the game's meta-progression
 */
export const MENU_UNLOCK_THRESHOLD = 50;

/**
 * Lifetime EXP required to access the upgrades page
 * Currently same as menu unlock (they appear together)
 */
export const UPGRADES_UNLOCK_THRESHOLD = 50;

// ============================================================================
// LEVEL SYSTEM
// ============================================================================

/**
 * Base EXP cost for the first level up (Level 1 → Level 2)
 * Scaling formula: BASE_LEVEL_COST * LEVEL_COST_MULTIPLIER^(currentLevel-1)
 */
export const BASE_LEVEL_COST = 10000;

/**
 * Exponential multiplier for level up costs
 * Results in: 10k, 10M, 10B, 10T... (1000x per level)
 */
export const LEVEL_COST_MULTIPLIER = 1000;

// ============================================================================
// STAT TRAINING SYSTEM
// ============================================================================

/**
 * Base EXP cost for the first stat level (Strength/Dex/Int/Wis 1 → 2)
 * Scaling formula: STAT_BASE_COST * STAT_COST_MULTIPLIER^(currentLevel-1)
 */
export const STAT_BASE_COST = 100;

/**
 * Exponential multiplier for stat training costs
 * Results in: 100, 150, 225, 337... (1.5x per level)
 */
export const STAT_COST_MULTIPLIER = 1.5;

/**
 * Base EXP cost to start a stat training session
 * Paid upfront before training begins
 */
export const TRAINING_BASE_COST = 10;

/**
 * EXP reward for completing a stat training session
 * Modified by crit chance for +50% bonus
 */
export const TRAINING_REWARD = 10;

/**
 * Base EXP gained per ruminate cycle completion
 * Modified by ruminate upgrade bonuses
 */
export const OSMOSIS_BASE_REWARD = 10;

// ============================================================================
// COMBAT & CRITICAL HITS
// ============================================================================

/**
 * Base critical hit damage bonus as a decimal multiplier
 * 0.5 = +50% damage (1.5x total when crit lands)
 * Modified by critical damage upgrades
 */
export const BASE_CRIT_DAMAGE = 0.5;

/**
 * Critical hit damage multiplier for training rewards
 * Used when determining EXP bonus from crit hits during training
 */
export const TRAINING_CRIT_MULTIPLIER = 1.5;

// ============================================================================
// GAME TIMING
// ============================================================================

/**
 * Game loop tick rate in milliseconds
 * Controls how frequently the game updates (1000ms = 1 second)
 */
export const GAME_TICK_RATE = 1000;

/**
 * Base duration for stat training actions in milliseconds
 * Training actions include: Strength, Dex, Int, Wis training
 * Modified by training speed upgrades and global idle speed
 */
export const TRAINING_BASE_DURATION = 15000;

/**
 * Base duration for ruminate action in milliseconds
 * Ruminate is the free idle action available early game
 * Modified by ruminate speed and global idle speed upgrades
 */
export const OSMOSIS_BASE_DURATION = 15000;

/**
 * Base duration for "Meditate on Your Future" action in milliseconds
 * One-time meditation that unlocks adventure mode
 */
export const MEDITATION_FUTURE_DURATION = 60000;

/**
 * Base duration for "Disassociate" meditation in milliseconds
 * Increases offline progress time per level
 */
export const MEDITATION_DISASSOCIATE_DURATION = 30000;

/**
 * EXP cost to start "Meditate on Your Future" meditation
 */
export const MEDITATION_FUTURE_COST = 50;

/**
 * EXP cost to start "Disassociate" meditation
 */
export const MEDITATION_DISASSOCIATE_COST = 100;

// ============================================================================
// UPGRADE ECONOMICS
// ============================================================================

/**
 * Base cost for early-game click upgrades (Focused Practice)
 * Scales with 1.15x multiplier
 */
export const UPGRADE_COST_TIER_1 = 50;

/**
 * Base cost for mid-tier upgrades (osmosis, training related)
 * Scales with 1.18-1.2x multipliers
 */
export const UPGRADE_COST_TIER_2 = 100;

/**
 * Base cost for advanced upgrades (crit chance, speed boosts)
 * Scales with 1.75-2.0x multipliers
 */
export const UPGRADE_COST_TIER_3 = 250;

/**
 * Base cost for high-tier upgrades (flow state, temporal mastery)
 * Scales with 1.2-1.25x multipliers
 */
export const UPGRADE_COST_TIER_4 = 300;

/**
 * Base cost for premium upgrades (devastating critique, cost reduction)
 */
export const UPGRADE_COST_TIER_5 = 500;

/**
 * Base cost for Discipline upgrade (special multiplicative upgrade)
 * Starts at 100k (10x from level 2), then scales with 10x multiplier per level
 * Creates "checkpoint" moments between the massive 1000x level gaps
 */
export const UPGRADE_DISCIPLINE_BASE_COST = 100000;

/**
 * Base cost for training speed upgrades (Efficient Training)
 */
export const UPGRADE_TRAINING_SPEED_COST = 10000;

/**
 * Base cost for training cost reduction upgrades
 */
export const UPGRADE_TRAINING_COST_REDUCTION = 15000;

// ============================================================================
// UPGRADE LEVEL CAPS
// ============================================================================

/**
 * Maximum level for training-related upgrades (speed, cost)
 * Limited to prevent trivializing progression
 */
export const UPGRADE_MAX_TRAINING = 10;

/**
 * Maximum level for training cost reduction
 * Very powerful, so more limited
 */
export const UPGRADE_MAX_COST_REDUCTION = 5;

/**
 * Maximum level for critical hit upgrades (chance and damage)
 */
export const UPGRADE_MAX_CRIT = 50;

/**
 * Maximum level for standard click and idle upgrades
 */
export const UPGRADE_MAX_STANDARD = 100;

/**
 * Maximum level for Discipline upgrade
 * Endgame progression - 100 levels available
 */
export const UPGRADE_MAX_DISCIPLINE = 100;
