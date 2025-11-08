import { describe, it, expect } from 'vitest';
import {
	formatNumber,
	formatCompact,
	formatPercent,
	formatDuration,
	formatMultiplier,
	formatUpgradeEffect
} from '$lib/utils/format';

describe('Number Formatting', () => {
	describe('formatNumber', () => {
		it('should format single digit numbers', () => {
			expect(formatNumber(5)).toBe('5');
		});

		it('should format numbers under 1000 without separators', () => {
			expect(formatNumber(999)).toBe('999');
		});

		it('should format thousands with comma separator', () => {
			expect(formatNumber(1000)).toBe('1,000');
		});

		it('should format millions with comma separators', () => {
			expect(formatNumber(1234567)).toBe('1,234,567');
		});

		it('should format billions', () => {
			expect(formatNumber(1000000000)).toBe('1,000,000,000');
		});

		it('should floor decimal values', () => {
			expect(formatNumber(1234.99)).toBe('1,234');
		});

		it('should floor decimal values for large numbers', () => {
			expect(formatNumber(1234567.89)).toBe('1,234,567');
		});

		it('should handle zero', () => {
			expect(formatNumber(0)).toBe('0');
		});

		it('should handle very small decimals', () => {
			expect(formatNumber(0.1)).toBe('0');
		});

		it('should handle negative numbers', () => {
			expect(formatNumber(-1234)).toBe('-1,234');
		});

		it('should handle negative decimals', () => {
			// Math.floor(-1234.99) = -1235 (floors toward negative infinity)
			expect(formatNumber(-1234.99)).toBe('-1,235');
		});

		it('should handle very large numbers', () => {
			expect(formatNumber(999999999999)).toBe('999,999,999,999');
		});
	});

	describe('formatCompact', () => {
		it('should return plain number for values under 1000', () => {
			expect(formatCompact(0)).toBe('0');
		});

		it('should return plain number for 999', () => {
			expect(formatCompact(999)).toBe('999');
		});

		it('should format thousands with K suffix', () => {
			expect(formatCompact(1000)).toBe('1.0K');
		});

		it('should format 1500 as 1.5K', () => {
			expect(formatCompact(1500)).toBe('1.5K');
		});

		it('should format millions with M suffix', () => {
			expect(formatCompact(1000000)).toBe('1.0M');
		});

		it('should format billions with B suffix', () => {
			expect(formatCompact(1000000000)).toBe('1.0B');
		});

		it('should format trillions with T suffix', () => {
			expect(formatCompact(1000000000000)).toBe('1.0T');
		});

		it('should format quadrillions with Qa suffix', () => {
			expect(formatCompact(1000000000000000)).toBe('1.0Qa');
		});

		it('should format quintillions with Qi suffix', () => {
			expect(formatCompact(1000000000000000000)).toBe('1.0Qi');
		});

		it('should format sextillions with Sx suffix', () => {
			expect(formatCompact(1000000000000000000000)).toBe('1.0Sx');
		});

		it('should format septillions with Sp suffix', () => {
			expect(formatCompact(1000000000000000000000000)).toBe('1.0Sp');
		});

		it('should format octillions with Oc suffix', () => {
			expect(formatCompact(1000000000000000000000000000)).toBe('1.0Oc');
		});

		it('should format nonillions with No suffix', () => {
			expect(formatCompact(1000000000000000000000000000000)).toBe('1.0No');
		});

		it('should format decillions with Dc suffix', () => {
			expect(formatCompact(1000000000000000000000000000000000)).toBe('1.0Dc');
		});

		it('should format values beyond defined suffixes with e notation', () => {
			expect(formatCompact(1e39)).toBe('1.0e39');
		});

		it('should handle edge case around 999.9', () => {
			// Edge case: just below 1000
			expect(formatCompact(999.9)).toBe('999');
		});

		it('should handle custom decimal places', () => {
			expect(formatCompact(1234, 0)).toBe('1K');
		});

		it('should handle custom decimal places for larger numbers', () => {
			expect(formatCompact(1234567, 2)).toBe('1.23M');
		});

		it('should handle custom decimal places for 3 decimals', () => {
			expect(formatCompact(1234567, 3)).toBe('1.235M');
		});

		it('should format 5550 with default 1 decimal', () => {
			expect(formatCompact(5550)).toBe('5.5K');
		});

		it('should format 999500 with default decimal', () => {
			expect(formatCompact(999500)).toBe('999.5K');
		});

		it('should handle negative numbers', () => {
			// formatCompact uses Math.abs() for tier calculation, doesn't format negatives with suffixes
			expect(formatCompact(-1000)).toBe('-1000');
		});

		it('should handle negative millions', () => {
			// formatCompact uses Math.abs() for tier calculation, doesn't format negatives with suffixes
			expect(formatCompact(-1000000)).toBe('-1000000');
		});

		it('should handle negative with custom decimals', () => {
			// formatCompact uses Math.abs() for tier calculation, doesn't format negatives with suffixes
			expect(formatCompact(-1234567, 2)).toBe('-1234567');
		});

		it('should handle zero', () => {
			expect(formatCompact(0)).toBe('0');
		});

		it('should handle very small positive values below 1000', () => {
			expect(formatCompact(0.5)).toBe('0');
		});

		it('should handle exactly 1000', () => {
			expect(formatCompact(1000)).toBe('1.0K');
		});

		it('should handle 9999 correctly', () => {
			expect(formatCompact(9999)).toBe('10.0K');
		});

		it('should handle tier 0 edge case (values 0-999)', () => {
			expect(formatCompact(500)).toBe('500');
		});
	});
});

describe('Percent Formatting', () => {
	describe('formatPercent', () => {
		it('should format 0 as 0%', () => {
			expect(formatPercent(0)).toBe('0%');
		});

		it('should format 0.5 as 50%', () => {
			expect(formatPercent(0.5)).toBe('50%');
		});

		it('should format 1 as 100%', () => {
			expect(formatPercent(1)).toBe('100%');
		});

		it('should format 0.1 as 10%', () => {
			expect(formatPercent(0.1)).toBe('10%');
		});

		it('should format 0.01 as 1%', () => {
			expect(formatPercent(0.01)).toBe('1%');
		});

		it('should format very small decimals', () => {
			expect(formatPercent(0.001)).toBe('0%');
		});

		it('should default to 0 decimal places', () => {
			expect(formatPercent(0.123)).toBe('12%');
		});

		it('should handle custom decimal places', () => {
			expect(formatPercent(0.123, 1)).toBe('12.3%');
		});

		it('should handle custom decimal places with 2 decimals', () => {
			expect(formatPercent(0.123, 2)).toBe('12.30%');
		});

		it('should handle custom decimal places with 3 decimals', () => {
			expect(formatPercent(0.12345, 3)).toBe('12.345%');
		});

		it('should format precise decimals with high precision', () => {
			expect(formatPercent(0.5555, 3)).toBe('55.550%');
		});

		it('should handle negative values', () => {
			expect(formatPercent(-0.5)).toBe('-50%');
		});

		it('should handle negative with custom decimals', () => {
			expect(formatPercent(-0.123, 2)).toBe('-12.30%');
		});

		it('should handle values greater than 1', () => {
			expect(formatPercent(1.5)).toBe('150%');
		});

		it('should handle values greater than 1 with decimals', () => {
			expect(formatPercent(2.345, 2)).toBe('234.50%');
		});

		it('should handle very large values', () => {
			expect(formatPercent(100)).toBe('10000%');
		});
	});
});

describe('Duration Formatting', () => {
	describe('formatDuration', () => {
		it('should format 0 seconds as 0.0s', () => {
			expect(formatDuration(0)).toBe('0.0s');
		});

		it('should format seconds only', () => {
			expect(formatDuration(45)).toBe('45s');
		});

		it('should format exactly 60 seconds as 1m', () => {
			expect(formatDuration(60)).toBe('1m');
		});

		it('should format minutes and seconds', () => {
			expect(formatDuration(90)).toBe('1m 30s');
		});

		it('should format 1 hour', () => {
			expect(formatDuration(3600)).toBe('1h');
		});

		it('should format hours and minutes', () => {
			expect(formatDuration(3900)).toBe('1h 5m');
		});

		it('should format hours, minutes, and seconds', () => {
			expect(formatDuration(3665)).toBe('1h 1m 5s');
		});

		it('should format complex time 1h 23m 45s', () => {
			expect(formatDuration(5025)).toBe('1h 23m 45s');
		});

		it('should floor decimal seconds', () => {
			expect(formatDuration(45.9)).toBe('45s');
		});

		it('should floor decimal minutes', () => {
			expect(formatDuration(90.9)).toBe('1m 30s');
		});

		it('should format large durations', () => {
			expect(formatDuration(86400)).toBe('24h');
		});

		it('should format very large durations', () => {
			expect(formatDuration(360000)).toBe('100h');
		});

		it('should handle 59 seconds', () => {
			expect(formatDuration(59)).toBe('59s');
		});

		it('should handle 119 seconds (1m 59s)', () => {
			expect(formatDuration(119)).toBe('1m 59s');
		});

		it('should handle 3599 seconds (59m 59s)', () => {
			expect(formatDuration(3599)).toBe('59m 59s');
		});

		it('should include seconds when no hours but has minutes and seconds', () => {
			expect(formatDuration(125)).toBe('2m 5s');
		});

		it('should omit minutes when zero', () => {
			expect(formatDuration(65)).toBe('1m 5s');
		});

		it('should omit minutes when zero but show hours', () => {
			expect(formatDuration(3605)).toBe('1h 5s');
		});

		it('should handle 1 second', () => {
			expect(formatDuration(1)).toBe('1.0s');
		});

		it('should handle 1 minute exactly', () => {
			expect(formatDuration(60)).toBe('1m');
		});

		it('should include seconds even when 0 if no minutes or hours', () => {
			expect(formatDuration(0)).toBe('0.0s');
		});

		it('should correctly handle 2 hours 30 minutes', () => {
			expect(formatDuration(9000)).toBe('2h 30m');
		});

		it('should correctly handle 2 hours 30 minutes 15 seconds', () => {
			expect(formatDuration(9015)).toBe('2h 30m 15s');
		});
	});
});

describe('Multiplier Formatting', () => {
	describe('formatMultiplier', () => {
		it('should format 1 as 1.0x', () => {
			expect(formatMultiplier(1)).toBe('1.0x');
		});

		it('should format 2.5 as 2.5x', () => {
			expect(formatMultiplier(2.5)).toBe('2.5x');
		});

		it('should format 10 as 10.0x', () => {
			expect(formatMultiplier(10)).toBe('10.0x');
		});

		it('should default to 1 decimal place', () => {
			expect(formatMultiplier(2.55)).toBe('2.5x');
		});

		it('should handle custom decimal places with 0 decimals', () => {
			// toFixed(0) rounds 2.5 to 3 (banker's rounding)
			expect(formatMultiplier(2.5, 0)).toBe('3x');
		});

		it('should handle custom decimal places with 2 decimals', () => {
			// toFixed(2) rounds 2.555 to 2.56
			expect(formatMultiplier(2.555, 2)).toBe('2.56x');
		});

		it('should handle custom decimal places with 3 decimals', () => {
			expect(formatMultiplier(2.5555, 3)).toBe('2.555x');
		});

		it('should format 0 as 0.0x', () => {
			expect(formatMultiplier(0)).toBe('0.0x');
		});

		it('should format 0.5 as 0.5x', () => {
			expect(formatMultiplier(0.5)).toBe('0.5x');
		});

		it('should format very large multipliers', () => {
			expect(formatMultiplier(1000)).toBe('1000.0x');
		});

		it('should format very small multipliers', () => {
			expect(formatMultiplier(0.1)).toBe('0.1x');
		});

		it('should handle negative multipliers', () => {
			expect(formatMultiplier(-2.5)).toBe('-2.5x');
		});

		it('should handle negative with custom decimals', () => {
			// toFixed(2) rounds -2.555 to -2.56
			expect(formatMultiplier(-2.555, 2)).toBe('-2.56x');
		});

		it('should handle precise rounding', () => {
			expect(formatMultiplier(1.99, 1)).toBe('2.0x');
		});

		it('should handle 1.05 multiplier', () => {
			// toFixed(1) rounds 1.05 to 1.1
			expect(formatMultiplier(1.05)).toBe('1.1x');
		});

		it('should handle 1.05 with 2 decimals', () => {
			expect(formatMultiplier(1.05, 2)).toBe('1.05x');
		});

		it('should handle 1.005 with 2 decimals', () => {
			expect(formatMultiplier(1.005, 2)).toBe('1.00x');
		});
	});
});

describe('Upgrade Effect Formatting', () => {
	describe('formatUpgradeEffect', () => {
		describe('clickMultiplier effect type', () => {
			it('should format 0.1 as +10% EXP per click', () => {
				expect(formatUpgradeEffect(0.1, 'clickMultiplier')).toBe('+10% EXP per click');
			});

			it('should format 0.5 as +50% EXP per click', () => {
				expect(formatUpgradeEffect(0.5, 'clickMultiplier')).toBe('+50% EXP per click');
			});

			it('should format 1 as +100% EXP per click', () => {
				expect(formatUpgradeEffect(1, 'clickMultiplier')).toBe('+100% EXP per click');
			});

			it('should format 0 as +0% EXP per click', () => {
				expect(formatUpgradeEffect(0, 'clickMultiplier')).toBe('+0% EXP per click');
			});

			it('should handle decimal effect values', () => {
				expect(formatUpgradeEffect(0.123, 'clickMultiplier')).toBe('+12% EXP per click');
			});

			it('should handle large effect values', () => {
				expect(formatUpgradeEffect(10, 'clickMultiplier')).toBe('+1000% EXP per click');
			});

			it('should handle small decimal effect values', () => {
				expect(formatUpgradeEffect(0.001, 'clickMultiplier')).toBe('+0% EXP per click');
			});

			it('should handle precise decimal effect values', () => {
				expect(formatUpgradeEffect(0.2, 'clickMultiplier')).toBe('+20% EXP per click');
			});

			it('should handle negative effect values', () => {
				expect(formatUpgradeEffect(-0.1, 'clickMultiplier')).toBe('+-10% EXP per click');
			});
		});

		describe('levelUp effect type', () => {
			it('should format levelUp with numeric effect', () => {
				expect(formatUpgradeEffect(5, 'levelUp')).toBe('Effect: 5');
			});

			it('should format levelUp with 0 effect', () => {
				expect(formatUpgradeEffect(0, 'levelUp')).toBe('Effect: 0');
			});

			it('should format levelUp with decimal effect', () => {
				expect(formatUpgradeEffect(1.5, 'levelUp')).toBe('Effect: 1.5');
			});

			it('should format levelUp with large effect', () => {
				expect(formatUpgradeEffect(1000, 'levelUp')).toBe('Effect: 1000');
			});

			it('should format levelUp with negative effect', () => {
				expect(formatUpgradeEffect(-5, 'levelUp')).toBe('Effect: -5');
			});

			it('should format levelUp with very small effect', () => {
				expect(formatUpgradeEffect(0.001, 'levelUp')).toBe('Effect: 0.001');
			});
		});

		describe('both effect types comparison', () => {
			it('should use different formatting for different effect types', () => {
				const clickEffect = formatUpgradeEffect(0.1, 'clickMultiplier');
				const levelEffect = formatUpgradeEffect(0.1, 'levelUp');
				expect(clickEffect).not.toBe(levelEffect);
				expect(clickEffect).toContain('EXP per click');
				expect(levelEffect).toContain('Effect:');
			});

			it('should handle 1.0 effect value for both types', () => {
				const clickEffect = formatUpgradeEffect(1.0, 'clickMultiplier');
				const levelEffect = formatUpgradeEffect(1.0, 'levelUp');
				expect(clickEffect).toBe('+100% EXP per click');
				expect(levelEffect).toBe('Effect: 1');
			});
		});
	});
});
