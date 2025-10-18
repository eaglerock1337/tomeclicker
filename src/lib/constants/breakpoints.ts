/**
 * Responsive design breakpoints
 * Based on common device sizes and fronty-boi guidelines
 */

export const BREAKPOINTS = {
	MOBILE_S: 320,
	MOBILE_M: 375,
	MOBILE_L: 425,
	TABLET: 768,
	DESKTOP: 1024,
	DESKTOP_L: 1440,
	DESKTOP_XL: 1920
} as const;

export type BreakpointName = keyof typeof BREAKPOINTS;

/**
 * Media query strings for use in JavaScript
 */
export const MEDIA_QUERIES = {
	MOBILE_S: `(min-width: ${BREAKPOINTS.MOBILE_S}px)`,
	MOBILE_M: `(min-width: ${BREAKPOINTS.MOBILE_M}px)`,
	MOBILE_L: `(min-width: ${BREAKPOINTS.MOBILE_L}px)`,
	TABLET: `(min-width: ${BREAKPOINTS.TABLET}px)`,
	DESKTOP: `(min-width: ${BREAKPOINTS.DESKTOP}px)`,
	DESKTOP_L: `(min-width: ${BREAKPOINTS.DESKTOP_L}px)`,
	DESKTOP_XL: `(min-width: ${BREAKPOINTS.DESKTOP_XL}px)`
} as const;

/**
 * Checks if current viewport matches a breakpoint
 * @param breakpoint - The breakpoint to check
 */
export function matchesBreakpoint(breakpoint: BreakpointName): boolean {
	if (typeof window === 'undefined') return false;
	return window.matchMedia(MEDIA_QUERIES[breakpoint]).matches;
}

/**
 * Gets current breakpoint category
 */
export function getCurrentBreakpoint(): BreakpointName {
	if (typeof window === 'undefined') return 'MOBILE_M';

	const width = window.innerWidth;

	if (width >= BREAKPOINTS.DESKTOP_XL) return 'DESKTOP_XL';
	if (width >= BREAKPOINTS.DESKTOP_L) return 'DESKTOP_L';
	if (width >= BREAKPOINTS.DESKTOP) return 'DESKTOP';
	if (width >= BREAKPOINTS.TABLET) return 'TABLET';
	if (width >= BREAKPOINTS.MOBILE_L) return 'MOBILE_L';
	if (width >= BREAKPOINTS.MOBILE_M) return 'MOBILE_M';
	return 'MOBILE_S';
}
