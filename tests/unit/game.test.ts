import { describe, it, expect, beforeEach } from 'vitest';
import { Game } from '$lib/game';
import {
	createTestGame,
	GameBuilder,
	createGameAtLevel,
	createRichGame,
	getExpectedUpgradeCost,
	getExpectedLevelUpCost
} from '../helpers/gameFactory';

describe('Game', () => {
	describe('Constructor', () => {
		it('should initialize with default values', () => {
			const game = createTestGame();

			expect(game.name).toBe('TestPlayer');
			expect(game.exp).toBe(0);
			expect(game.lifetimeExp).toBe(0);
			expect(game.level).toBe(1);
			expect(game.clickMultiplier).toBe(1);
			expect(game.critChance).toBe(0.0); // 0% base crit
			expect(game.critDamage).toBe(0.5); // +50% base crit damage
		});

		it('should accept custom player name', () => {
			const game = new Game('CustomName');
			expect(game.name).toBe('CustomName');
		});

		it('should default to "A Stranger" if no name provided', () => {
			const game = new Game();
			expect(game.name).toBe('A Stranger');
		});

		it('should initialize all upgrades at level 0', () => {
			const game = createTestGame();

			for (const upgrade of Object.values(game.upgrades)) {
				expect(upgrade.currentLevel).toBe(0);
			}
		});

		it('should initialize stats at level 1', () => {
			const game = createTestGame();

			expect(game.stats.strength).toBe(1);
			expect(game.stats.dexterity).toBe(1);
			expect(game.stats.intelligence).toBe(1);
			expect(game.stats.wisdom).toBe(1);
		});

		it('should initialize training actions', () => {
			const game = createTestGame();

			expect(game.trainingActions['practice-osmosis']).toBeDefined();
			expect(game.trainingActions['train-strength']).toBeDefined();
			expect(game.trainingActions['train-dexterity']).toBeDefined();
			expect(game.trainingActions['train-intelligence']).toBeDefined();
			expect(game.trainingActions['train-wisdom']).toBeDefined();
		});
	});

	describe('addExp', () => {
		it('should increase current exp by amount', () => {
			const game = createTestGame();
			game.addExp(100);

			expect(game.exp).toBe(100);
		});

		it('should increase lifetime exp by amount', () => {
			const game = createTestGame();
			game.addExp(100);

			expect(game.lifetimeExp).toBe(100);
		});

		it('should accumulate exp over multiple additions', () => {
			const game = createTestGame();
			game.addExp(50);
			game.addExp(75);
			game.addExp(25);

			expect(game.exp).toBe(150);
			expect(game.lifetimeExp).toBe(150);
		});

		it('should handle decimal exp values', () => {
			const game = createTestGame();
			game.addExp(10.5);
			game.addExp(5.3);

			expect(game.exp).toBeCloseTo(15.8, 1);
		});
	});

	describe('Level System', () => {
		describe('getLevelUpCost', () => {
			it('should return correct cost for level 1 -> 2', () => {
				const game = createTestGame();
				const cost = game.getLevelUpCost();

				expect(cost).toBe(10000); // 10000 * 100^(1-1) = 10000
			});

			it('should return correct cost for level 2 -> 3', () => {
				const game = createGameAtLevel(2);
				const cost = game.getLevelUpCost();

				expect(cost).toBe(1000000); // 10000 * 100^(2-1) = 1000000
			});

			it('should increase exponentially', () => {
				const game = createTestGame();

				const cost1 = game.getLevelUpCost(); // Level 1 -> 2
				game.level = 2;
				const cost2 = game.getLevelUpCost(); // Level 2 -> 3
				game.level = 3;
				const cost3 = game.getLevelUpCost(); // Level 3 -> 4

				expect(cost2).toBe(cost1 * 100);
				expect(cost3).toBe(cost2 * 100);
			});
		});

		describe('canLevelUp', () => {
			it('should return true when exp >= cost', () => {
				const game = new GameBuilder().withExp(10000).build();

				expect(game.canLevelUp()).toBe(true);
			});

			it('should return false when exp < cost', () => {
				const game = new GameBuilder().withExp(9999).build();

				expect(game.canLevelUp()).toBe(false);
			});
		});

		describe('levelUp', () => {
			it('should increase level by 1', () => {
				const game = new GameBuilder().withExp(10000).build();

				game.levelUp();
				expect(game.level).toBe(2);
			});

			it('should deduct level up cost from exp', () => {
				const game = new GameBuilder().withExp(15000).build();

				game.levelUp();
				expect(game.exp).toBe(5000); // 15000 - 10000
			});

			it('should not deduct from lifetime exp', () => {
				const game = new GameBuilder().withExp(15000).build();

				game.levelUp();
				expect(game.lifetimeExp).toBe(15000);
			});

			it('should update level which affects future multiplier calculations', () => {
				const game = new GameBuilder().withExp(10000).build();

				expect(game.level).toBe(1);
				game.levelUp();
				expect(game.level).toBe(2);

				// Note: levelUp doesn't auto-recalculate multipliers
				// Multipliers are recalculated on next upgrade purchase or manual call
				game.recalculateClickMultiplier();
				expect(game.clickMultiplier).toBe(2.0); // Level 2 = 2x
			});

			it('should fail if insufficient exp', () => {
				const game = new GameBuilder().withExp(5000).build();

				const result = game.levelUp();

				expect(result).toBe(false);
				expect(game.level).toBe(1);
				expect(game.exp).toBe(5000); // Unchanged
			});

			it('should return true on success', () => {
				const game = new GameBuilder().withExp(10000).build();

				const result = game.levelUp();
				expect(result).toBe(true);
			});
		});
	});

	describe('Upgrade System', () => {
		describe('getUpgradeCost', () => {
			it('should return base cost for level 0 upgrade', () => {
				const game = createTestGame();
				const upgrade = game.upgrades['focused-practice'];
				const cost = game.getUpgradeCost('focused-practice');

				expect(cost).toBe(upgrade.baseCost);
			});

			it('should scale cost for purchased upgrades', () => {
				const game = new GameBuilder().withUpgrade('focused-practice', 1).build();

				const upgrade = game.upgrades['focused-practice'];
				const expectedCost = getExpectedUpgradeCost(upgrade.baseCost, upgrade.costMultiplier, 1);

				expect(game.getUpgradeCost('focused-practice')).toBe(expectedCost);
			});

			it('should use exponential scaling for Discipline', () => {
				const game = new GameBuilder().withUpgrade('discipline', 0).build();

				const baseCost = game.upgrades['discipline'].baseCost;
				expect(game.getUpgradeCost('discipline')).toBe(baseCost);

				game.upgrades['discipline'].currentLevel = 1;
				// Discipline uses 100x multiplier
				expect(game.getUpgradeCost('discipline')).toBe(baseCost * 100);
			});
		});

		describe('canAffordUpgrade', () => {
			it('should return true when exp >= cost', () => {
				const game = new GameBuilder().withExp(100).build();

				expect(game.canAffordUpgrade('focused-practice')).toBe(true);
			});

			it('should return false when exp < cost', () => {
				const game = new GameBuilder().withExp(49).build();

				expect(game.canAffordUpgrade('focused-practice')).toBe(false);
			});
		});

		describe('canPurchaseUpgrade', () => {
			it('should return true when affordable and not maxed', () => {
				const game = new GameBuilder().withExp(100).build();

				expect(game.canPurchaseUpgrade('focused-practice')).toBe(true);
			});

			it('should return false when maxed', () => {
				const game = new GameBuilder()
					.withRichState()
					.withUpgrade('focused-practice', 100) // Max level
					.build();

				expect(game.canPurchaseUpgrade('focused-practice')).toBe(false);
			});

			it('should return false when not affordable', () => {
				const game = new GameBuilder().withExp(10).build();

				expect(game.canPurchaseUpgrade('focused-practice')).toBe(false);
			});
		});

		describe('purchaseUpgrade', () => {
			it('should increase upgrade level', () => {
				const game = createRichGame();

				game.purchaseUpgrade('focused-practice');
				expect(game.upgrades['focused-practice'].currentLevel).toBe(1);
			});

			it('should deduct cost from exp', () => {
				const game = new GameBuilder().withExp(100).build();

				const cost = game.getUpgradeCost('focused-practice');
				game.purchaseUpgrade('focused-practice');

				expect(game.exp).toBe(100 - cost);
			});

			it('should not deduct from lifetime exp', () => {
				const game = new GameBuilder().withExp(100).build();

				game.purchaseUpgrade('focused-practice');
				expect(game.lifetimeExp).toBe(100);
			});

			it('should recalculate multipliers', () => {
				const game = createRichGame();
				const oldMultiplier = game.clickMultiplier;

				game.purchaseUpgrade('focused-practice');

				// Focused practice adds +1.0 to multiplier
				expect(game.clickMultiplier).toBe(oldMultiplier + 1.0);
			});

			it('should fail if insufficient exp', () => {
				const game = new GameBuilder().withExp(10).build();

				const result = game.purchaseUpgrade('focused-practice');

				expect(result).toBe(false);
				expect(game.upgrades['focused-practice'].currentLevel).toBe(0);
			});

			it('should fail if upgrade is maxed', () => {
				const game = new GameBuilder().withRichState().withUpgrade('focused-practice', 100).build();

				const result = game.purchaseUpgrade('focused-practice');

				expect(result).toBe(false);
			});

			it('should return true on success', () => {
				const game = createRichGame();

				const result = game.purchaseUpgrade('focused-practice');
				expect(result).toBe(true);
			});
		});
	});

	describe('Click Multiplier Calculation', () => {
		it('should start at 1.0', () => {
			const game = createTestGame();
			expect(game.clickMultiplier).toBe(1.0);
		});

		it('should add additive upgrades', () => {
			const game = new GameBuilder().withUpgrade('focused-practice', 3).build();

			// Focused Practice: +1.0 per level, additive
			expect(game.clickMultiplier).toBe(1.0 + 3.0);
		});

		it('should apply level multiplier (2x per level after 1)', () => {
			const game = createGameAtLevel(3);

			// Level 3: 1.0 * 2^(3-1) = 1.0 * 4 = 4.0
			expect(game.clickMultiplier).toBe(4.0);
		});

		it('should apply Discipline multiplier (5x per level)', () => {
			const game = new GameBuilder().withUpgrade('discipline', 1).build();

			// 1.0 * 5^1 = 5.0
			expect(game.clickMultiplier).toBe(5.0);
		});

		it('should combine all multipliers correctly', () => {
			const game = new GameBuilder()
				.withLevel(2) // 2x from level
				.withUpgrade('focused-practice', 2) // +2.0 additive
				.withUpgrade('discipline', 1) // 5x multiplicative
				.build();

			// (1.0 + 2.0) * 2 * 5 = 3.0 * 2 * 5 = 30.0
			expect(game.clickMultiplier).toBe(30.0);
		});
	});

	describe('Crit System', () => {
		it('should have 0% base crit chance', () => {
			const game = createTestGame();
			expect(game.critChance).toBe(0.0);
		});

		it('should have 50% base crit damage', () => {
			const game = createTestGame();
			expect(game.critDamage).toBe(0.5);
		});

		it('should increase crit chance with upgrade', () => {
			const game = new GameBuilder().withUpgrade('critical-insight', 10).build();

			// Base 0% + (10 * 0.5%) = 5%
			expect(game.critChance).toBeCloseTo(0.05, 2);
		});

		it('should increase crit damage with upgrade', () => {
			const game = new GameBuilder().withUpgrade('devastating-critique', 10).build();

			// Base 50% + (10 * 5.0%) = 100%
			expect(game.critDamage).toBeCloseTo(1.0, 2);
		});

		describe('getClickValue', () => {
			it('should return base click multiplier', () => {
				const game = createTestGame();
				const value = game.getClickValue();

				expect(value).toBe(game.clickMultiplier);
			});

			it('should scale with upgrades', () => {
				const game = new GameBuilder().withUpgrade('focused-practice', 5).build();

				const value = game.getClickValue();
				expect(value).toBe(game.clickMultiplier);
			});
		});
	});

	describe('Save/Load System', () => {
		describe('exportSave', () => {
			it('should export game state as JSON string', () => {
				const game = new GameBuilder()
					.withExp(500)
					.withLevel(2)
					.withUpgrade('focused-practice', 3)
					.build();

				const saveData = game.exportSave();
				expect(typeof saveData).toBe('string');

				const parsed = JSON.parse(saveData);
				expect(parsed.gameState.exp).toBe(500);
				expect(parsed.gameState.level).toBe(2);
			});

			it('should include all critical game state', () => {
				const game = new GameBuilder().withExp(1000).withLifetimeExp(5000).withLevel(3).build();

				const saveData = game.exportSave();
				const parsed = JSON.parse(saveData);

				expect(parsed.gameState.name).toBe('TestPlayer');
				expect(parsed.gameState.exp).toBe(1000);
				expect(parsed.gameState.lifetimeExp).toBe(5000);
				expect(parsed.gameState.level).toBe(3);
				expect(parsed.gameState.upgrades).toBeDefined();
				expect(parsed.gameState.stats).toBeDefined();
			});
		});

		describe('importSave', () => {
			it('should restore game state from save data', () => {
				const originalGame = new GameBuilder()
					.withExp(1000)
					.withLevel(2)
					.withUpgrade('focused-practice', 5)
					.build();

				const saveData = originalGame.exportSave();

				const newGame = createTestGame();
				newGame.importSave(saveData);

				expect(newGame.exp).toBe(1000);
				expect(newGame.level).toBe(2);
				expect(newGame.upgrades['focused-practice'].currentLevel).toBe(5);
			});

			it('should recalculate multipliers after load', () => {
				const originalGame = new GameBuilder()
					.withLevel(3)
					.withUpgrade('focused-practice', 2)
					.build();

				const saveData = originalGame.exportSave();

				const newGame = createTestGame();
				newGame.importSave(saveData);

				// Click multiplier should be recalculated
				expect(newGame.clickMultiplier).toBe(originalGame.clickMultiplier);
			});

			it('should migrate old saves with new upgrades', () => {
				const game = createTestGame();

				// Simulate old save without new upgrades
				const oldSave = {
					name: 'OldSave',
					exp: 500,
					lifetimeExp: 500,
					level: 1,
					clickMultiplier: 1,
					upgrades: {
						'focused-practice': {
							id: 'focused-practice',
							currentLevel: 2
						}
					}
				};

				game.importSave(JSON.stringify(oldSave));

				// Should have all current upgrades
				expect(game.upgrades['focused-practice']).toBeDefined();
				expect(game.upgrades['discipline']).toBeDefined();
				expect(game.upgrades['critical-insight']).toBeDefined();
			});

			it('should return success on valid save', () => {
				const game = createTestGame();
				const saveData = game.exportSave();

				const result = game.importSave(saveData);

				expect(result.success).toBe(true);
			});

			it('should return error on invalid JSON', () => {
				const game = createTestGame();

				const result = game.importSave('invalid json');

				expect(result.success).toBe(false);
				expect(result.error).toBeDefined();
			});
		});

		describe('Save Integrity', () => {
			it('should roundtrip save/load without data loss', () => {
				const original = new GameBuilder()
					.withExp(12345)
					.withLifetimeExp(50000)
					.withLevel(5)
					.withUpgrade('focused-practice', 10)
					.withUpgrade('discipline', 2)
					.withStats({ strength: 5, dexterity: 3 })
					.build();

				const saveData = original.exportSave();
				const loaded = createTestGame();
				loaded.importSave(saveData);

				expect(loaded.exp).toBe(original.exp);
				expect(loaded.lifetimeExp).toBe(original.lifetimeExp);
				expect(loaded.level).toBe(original.level);
				expect(loaded.upgrades['focused-practice'].currentLevel).toBe(
					original.upgrades['focused-practice'].currentLevel
				);
				expect(loaded.stats.strength).toBe(original.stats.strength);
				expect(loaded.stats.dexterity).toBe(original.stats.dexterity);
			});
		});
	});

	describe('Training System', () => {
		it('should initialize Ruminate action', () => {
			const game = createTestGame();
			const ruminate = game.trainingActions['practice-osmosis'];

			expect(ruminate).toBeDefined();
			expect(ruminate.name).toBe('Ruminate');
			expect(ruminate.expCost).toBe(0); // Free to use
		});

		it('should initialize stat training actions', () => {
			const game = createTestGame();

			expect(game.trainingActions['train-strength'].trainsStat).toBe('strength');
			expect(game.trainingActions['train-dexterity'].trainsStat).toBe('dexterity');
			expect(game.trainingActions['train-intelligence'].trainsStat).toBe('intelligence');
			expect(game.trainingActions['train-wisdom'].trainsStat).toBe('wisdom');
		});

		describe('getStatLevelCost', () => {
			it('should return base cost for level 1 stat', () => {
				const game = createTestGame();
				const cost = game.getStatLevelCost('strength');

				// Base: 100 * 1.5^(1-1) = 100
				expect(cost).toBe(100);
			});

			it('should scale with stat level', () => {
				const game = new GameBuilder().withStats({ strength: 5 }).build();

				const cost = game.getStatLevelCost('strength');

				// 100 * 1.5^(5-1) = 100 * 1.5^4 = 506.25 -> 506
				expect(cost).toBe(506);
			});
		});
	});

	describe('Helper Methods', () => {
		describe('updateClickText', () => {
			it('should return "level up available" when can level up', () => {
				const game = new GameBuilder()
					.withLevel(1)
					.withExp(10000) // Cost for level 2
					.build();

				expect(game.updateClickText()).toBe('level up available');
			});

			it('should return "upgrade available" when upgrade can be purchased', () => {
				const game = new GameBuilder()
					.withExp(500) // Enough for an upgrade, upgrades shown at 100+
					.build();

				expect(game.updateClickText()).toBe('upgrade available');
			});

			it('should return "click me" when lifetimeExp is 0', () => {
				const game = createTestGame();
				game.lifetimeExp = 0;

				expect(game.updateClickText()).toBe('click me');
			});

			it('should return empty string when no special conditions met', () => {
				const game = new GameBuilder()
					.withExp(10) // Not enough for upgrades (need 100)
					.withLifetimeExp(10) // Not first click
					.build();

				expect(game.updateClickText()).toBe('');
			});

			it('should prioritize level up over upgrades', () => {
				const game = new GameBuilder()
					.withLevel(1)
					.withExp(20000) // Enough for both level up and upgrades
					.build();

				expect(game.updateClickText()).toBe('level up available');
			});
		});

		describe('canLevelUp', () => {
			it('should return true when exp >= level up cost', () => {
				const game = new GameBuilder()
					.withLevel(1)
					.withExp(10000) // Exactly level 2 cost
					.build();

				expect(game.canLevelUp()).toBe(true);
			});

			it('should return true when exp > level up cost', () => {
				const game = new GameBuilder()
					.withLevel(1)
					.withExp(20000) // More than enough
					.build();

				expect(game.canLevelUp()).toBe(true);
			});

			it('should return false when exp < level up cost', () => {
				const game = new GameBuilder()
					.withLevel(1)
					.withExp(5000) // Not enough
					.build();

				expect(game.canLevelUp()).toBe(false);
			});

			it('should work for higher levels', () => {
				const game = new GameBuilder()
					.withLevel(3)
					.withExp(100000000) // Cost for level 4
					.build();

				expect(game.canLevelUp()).toBe(true);
			});
		});

		describe('getClickValue', () => {
			it('should return base click multiplier', () => {
				const game = createTestGame();

				const value = game.getClickValue();
				expect(value).toBe(1.0); // Default multiplier
			});

			it('should return upgraded click multiplier', () => {
				const game = new GameBuilder()
					.withUpgrade('discipline', 1) // 5x multiplier
					.build();

				const value = game.getClickValue();
				expect(value).toBe(5.0);
			});

			it('should return click multiplier with level bonuses', () => {
				const game = new GameBuilder()
					.withLevel(2) // 2x multiplier for level 2
					.build();

				const value = game.getClickValue();
				expect(value).toBe(2.0); // Base 1.0 * 2 (level)
			});

			it('should combine upgrade and level multipliers', () => {
				const game = new GameBuilder()
					.withLevel(2) // 2x
					.withUpgrade('discipline', 1) // *5
					.build();

				const value = game.getClickValue();
				// Base 1.0 * 2 (level) * 5 (discipline) = 10.0
				expect(value).toBe(10.0);
			});
		});
	});

	describe('UI State Methods', () => {
		describe('showHeader', () => {
			it('should return false when lifetimeExp < 10', () => {
				const game = new GameBuilder().withLifetimeExp(5).build();
				expect(game.showHeader()).toBe(false);
			});

			it('should return true when lifetimeExp >= 10', () => {
				const game = new GameBuilder().withLifetimeExp(10).build();
				expect(game.showHeader()).toBe(true);
			});

			it('should return true when lifetimeExp > 10', () => {
				const game = new GameBuilder().withLifetimeExp(100).build();
				expect(game.showHeader()).toBe(true);
			});
		});

		describe('showMenu', () => {
			it('should return false when lifetimeExp < 50', () => {
				const game = new GameBuilder().withLifetimeExp(25).build();
				expect(game.showMenu()).toBe(false);
			});

			it('should return true when lifetimeExp >= 50', () => {
				const game = new GameBuilder().withLifetimeExp(50).build();
				expect(game.showMenu()).toBe(true);
			});
		});

		describe('showUpgrades', () => {
			it('should return false when lifetimeExp < 50', () => {
				const game = new GameBuilder().withLifetimeExp(25).build();
				expect(game.showUpgrades()).toBe(false);
			});

			it('should return true when lifetimeExp >= 50', () => {
				const game = new GameBuilder().withLifetimeExp(50).build();
				expect(game.showUpgrades()).toBe(true);
			});
		});

		describe('showTraining', () => {
			it('should return false for level 1', () => {
				const game = new GameBuilder().withLevel(1).build();
				expect(game.showTraining()).toBe(false);
			});

			it('should return true for level 2', () => {
				const game = new GameBuilder().withLevel(2).build();
				expect(game.showTraining()).toBe(true);
			});

			it('should return true for higher levels', () => {
				const game = new GameBuilder().withLevel(5).build();
				expect(game.showTraining()).toBe(true);
			});
		});

		describe('showStats', () => {
			it('should return false for level 1', () => {
				const game = new GameBuilder().withLevel(1).build();
				expect(game.showStats()).toBe(false);
			});

			it('should return false for level 2', () => {
				const game = new GameBuilder().withLevel(2).build();
				expect(game.showStats()).toBe(false);
			});

			it('should return true for level 3', () => {
				const game = new GameBuilder().withLevel(3).build();
				expect(game.showStats()).toBe(true);
			});

			it('should return true for higher levels', () => {
				const game = new GameBuilder().withLevel(5).build();
				expect(game.showStats()).toBe(true);
			});
		});

		describe('showMeditation', () => {
			it('should return false when stats < 5', () => {
				const game = new GameBuilder()
					.withStats({ strength: 4, dexterity: 4, intelligence: 4, wisdom: 4 })
					.build();
				expect(game.showMeditation()).toBe(false);
			});

			it('should return false when only some stats >= 5', () => {
				const game = new GameBuilder()
					.withStats({ strength: 5, dexterity: 5, intelligence: 4, wisdom: 3 })
					.build();
				expect(game.showMeditation()).toBe(false);
			});

			it('should return true when all stats >= 5', () => {
				const game = new GameBuilder()
					.withStats({ strength: 5, dexterity: 5, intelligence: 5, wisdom: 5 })
					.build();
				expect(game.showMeditation()).toBe(true);
			});

			it('should return true when all stats > 5', () => {
				const game = new GameBuilder()
					.withStats({ strength: 10, dexterity: 8, intelligence: 6, wisdom: 5 })
					.build();
				expect(game.showMeditation()).toBe(true);
			});
		});

		describe('showAdventure', () => {
			it('should return false when adventure mode not unlocked', () => {
				const game = createTestGame();
				expect(game.showAdventure()).toBe(false);
			});

			it('should return true when adventure mode unlocked', () => {
				const game = createTestGame();
				game.adventureModeUnlocked = true;
				expect(game.showAdventure()).toBe(true);
			});
		});
	});

	describe('Idle Action System', () => {
		describe('startIdleAction', () => {
			it('should not crash when starting training action', () => {
				const game = new GameBuilder().withExp(1000).build();

				// Should not throw
				expect(() => game.startIdleAction('training', 'ruminate')).not.toThrow();
			});

			it('should return boolean result', () => {
				const game = new GameBuilder().withExp(100000).withLevel(10).build();

				const result = game.startIdleAction('training', 'ruminate');

				// Should return boolean (either true or false)
				expect(typeof result).toBe('boolean');
			});

			it('should return false when insufficient exp', () => {
				const game = new GameBuilder().withExp(0).build();

				const result = game.startIdleAction('training', 'ruminate');

				expect(result).toBe(false);
			});
		});

		describe('stopIdleAction', () => {
			it('should not crash when stopping an action', () => {
				const game = new GameBuilder().withExp(1000).build();
				game.startIdleAction('training', 'ruminate');

				// Should not throw
				expect(() => game.stopIdleAction('training', 'ruminate')).not.toThrow();
			});

			it('should not crash when stopping non-existent action', () => {
				const game = new GameBuilder().withExp(1000).build();

				// Should not throw
				expect(() => game.stopIdleAction('training', 'ruminate')).not.toThrow();
			});
		});

		describe('updateIdleActions', () => {
			it('should not crash when called', () => {
				const game = new GameBuilder().withExp(1000).build();
				game.startIdleAction('training', 'ruminate');

				// Should not throw
				expect(() => game.updateIdleActions()).not.toThrow();
			});

			it('should not crash when no actions active', () => {
				const game = new GameBuilder().withExp(1000).build();

				// Should not throw
				expect(() => game.updateIdleActions()).not.toThrow();
			});
		});
	});

	describe('Save/Load Delegation Methods', () => {
		describe('saveToCookies', () => {
			it('should delegate to SaveManager', () => {
				const game = new GameBuilder().withExp(100).build();

				// Should not throw
				expect(() => game.saveToCookies()).not.toThrow();
			});
		});

		describe('loadFromCookies', () => {
			it('should delegate to SaveManager', () => {
				const game = new GameBuilder().build();

				// Returns boolean
				const result = game.loadFromCookies();
				expect(typeof result).toBe('boolean');
			});
		});

		describe('saveToLocalStorage', () => {
			it('should delegate to SaveManager', () => {
				const game = new GameBuilder().withExp(100).build();

				// Should not throw
				expect(() => game.saveToLocalStorage()).not.toThrow();
			});
		});

		describe('loadFromLocalStorage', () => {
			it('should delegate to SaveManager', () => {
				const game = new GameBuilder().build();

				// Returns boolean
				const result = game.loadFromLocalStorage();
				expect(typeof result).toBe('boolean');
			});
		});

		describe('autoSave', () => {
			it('should delegate to SaveManager', () => {
				const game = new GameBuilder().withExp(100).build();

				// Should not throw
				expect(() => game.autoSave()).not.toThrow();
			});
		});
	});

	describe('Hard Reset', () => {
		it('should reset all game state to defaults', () => {
			const game = new GameBuilder()
				.withLevel(5)
				.withExp(1000000)
				.withLifetimeExp(1000000)
				.withUpgrade('discipline', 3)
				.withStats({ strength: 10, dexterity: 8, intelligence: 6, wisdom: 4 })
				.build();

			game.adventureModeUnlocked = true;
			game.meditationUnlocked = true;

			game.hardReset(false);

			expect(game.name).toBe('A Stranger');
			expect(game.exp).toBe(0);
			expect(game.lifetimeExp).toBe(0);
			expect(game.level).toBe(1);
			expect(game.clickMultiplier).toBe(1.0);
			expect(game.stats.strength).toBe(1);
			expect(game.stats.dexterity).toBe(1);
			expect(game.stats.intelligence).toBe(1);
			expect(game.stats.wisdom).toBe(1);
			expect(game.adventureModeUnlocked).toBe(false);
			expect(game.meditationUnlocked).toBe(false);
			expect(game.upgrades['discipline'].currentLevel).toBe(0);
		});

		it('should preserve name when preserveName=true', () => {
			const game = new GameBuilder().withLevel(5).withExp(1000000).build();
			game.name = 'TestPlayer';

			game.hardReset(true);

			expect(game.name).toBe('TestPlayer');
			expect(game.exp).toBe(0); // Everything else reset
		});

		it('should reset name to "A Stranger" when preserveName=false', () => {
			const game = createTestGame();
			game.name = 'OldPlayer';

			game.hardReset(false);

			expect(game.name).toBe('A Stranger');
		});

		it('should reinitialize all managers', () => {
			const game = new GameBuilder().withUpgrade('discipline', 5).build();

			game.hardReset(false);

			// Upgrades should be reset
			expect(game.upgrades['discipline'].currentLevel).toBe(0);

			// Should be able to purchase upgrades (managers working)
			game.exp = 1000;
			const result = game.purchaseUpgrade('discipline');
			expect(result).toBe(true);
			expect(game.upgrades['discipline'].currentLevel).toBe(1);
		});
	});
});
