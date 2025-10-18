/**
 * Formatting utilities for displaying game values
 */

/**
 * Formats a number with thousand separators
 * @param value - Number to format
 * @returns Formatted string (e.g., "1,234,567")
 */
export function formatNumber(value: number): string {
	return Math.floor(value).toLocaleString();
}

/**
 * Formats large numbers with suffixes (K, M, B, T)
 * @param value - Number to format
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted string (e.g., "1.2K", "3.4M")
 */
export function formatCompact(value: number, decimals: number = 1): string {
	if (value < 1000) return Math.floor(value).toString();

	const suffixes = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
	const tier = Math.floor(Math.log10(Math.abs(value)) / 3);

	if (tier === 0) return Math.floor(value).toString();

	const suffix = suffixes[tier] || 'e' + (tier * 3);
	const scale = Math.pow(10, tier * 3);
	const scaled = value / scale;

	return scaled.toFixed(decimals) + suffix;
}

/**
 * Formats a percentage value
 * @param value - Decimal value (e.g., 0.5 for 50%)
 * @param decimals - Number of decimal places (default: 0)
 * @returns Formatted string (e.g., "50%")
 */
export function formatPercent(value: number, decimals: number = 0): string {
	return (value * 100).toFixed(decimals) + '%';
}

/**
 * Formats a time duration in seconds to human-readable format
 * @param seconds - Duration in seconds
 * @returns Formatted string (e.g., "1h 23m 45s")
 */
export function formatDuration(seconds: number): string {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secs = Math.floor(seconds % 60);

	const parts: string[] = [];
	if (hours > 0) parts.push(`${hours}h`);
	if (minutes > 0) parts.push(`${minutes}m`);
	if (secs > 0 || parts.length === 0) parts.push(`${secs}s`);

	return parts.join(' ');
}

/**
 * Formats a multiplier value (e.g., 2.5x)
 * @param value - Multiplier value
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted string (e.g., "2.5x")
 */
export function formatMultiplier(value: number, decimals: number = 1): string {
	return value.toFixed(decimals) + 'x';
}

/**
 * Formats an upgrade effect for display
 * @param effectValue - The effect value
 * @param effectType - Type of effect
 * @returns Formatted effect string
 */
export function formatUpgradeEffect(
	effectValue: number,
	effectType: 'clickMultiplier' | 'levelUp'
): string {
	if (effectType === 'clickMultiplier') {
		return `+${formatPercent(effectValue)} EXP per click`;
	}
	return `Effect: ${effectValue}`;
}
