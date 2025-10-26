import { Game, type Upgrade, type Stats } from '$lib/game';

/**
 * Test helper factory for creating Game instances with specific states
 */

/**
 * Creates a fresh Game instance for testing
 */
export function createTestGame(name = 'TestPlayer'): Game {
	return new Game(name);
}

/**
 * Builder pattern for creating Game instances with custom state
 */
export class GameBuilder {
	private game: Game;

	constructor(name = 'TestPlayer') {
		this.game = new Game(name);
	}

	/**
	 * Set the game to a specific level
	 */
	withLevel(level: number): this {
		// Manually set level
		this.game.level = level;
		// Recalculate multipliers for this level
		this.game.recalculateClickMultiplier();
		return this;
	}

	/**
	 * Set specific EXP amount
	 */
	withExp(exp: number): this {
		this.game.exp = exp;
		this.game.lifetimeExp = Math.max(this.game.lifetimeExp, exp);
		return this;
	}

	/**
	 * Set lifetime EXP
	 */
	withLifetimeExp(lifetimeExp: number): this {
		this.game.lifetimeExp = lifetimeExp;
		return this;
	}

	/**
	 * Purchase specific upgrades to specific levels
	 */
	withUpgrade(upgradeId: string, level: number): this {
		const upgrade = this.game.upgrades[upgradeId];
		if (!upgrade) {
			throw new Error(`Unknown upgrade: ${upgradeId}`);
		}
		upgrade.currentLevel = level;
		this.game.recalculateClickMultiplier();
		return this;
	}

	/**
	 * Set specific stat values
	 */
	withStats(stats: Partial<Stats>): this {
		this.game.setStats({ ...this.game.stats, ...stats });
		return this;
	}

	/**
	 * Give the game a lot of EXP for testing purchases
	 */
	withRichState(): this {
		this.game.exp = 1000000;
		this.game.lifetimeExp = 1000000;
		return this;
	}

	/**
	 * Build and return the configured Game instance
	 */
	build(): Game {
		return this.game;
	}
}

/**
 * Creates a game at a specific level with appropriate EXP
 */
export function createGameAtLevel(level: number): Game {
	return new GameBuilder().withLevel(level).build();
}

/**
 * Creates a game with lots of resources for testing purchases
 */
export function createRichGame(): Game {
	return new GameBuilder().withRichState().build();
}

/**
 * Helper to get expected upgrade cost for testing
 */
export function getExpectedUpgradeCost(
	baseCost: number,
	costMultiplier: number,
	currentLevel: number
): number {
	return Math.floor(baseCost * Math.pow(costMultiplier, currentLevel));
}

/**
 * Helper to get expected level up cost
 */
export function getExpectedLevelUpCost(level: number): number {
	return 10000 * Math.pow(100, level - 1);
}
