import { type breakpoints } from '@alma-oss/spirit-design-tokens';

export type BreakpointToken = keyof typeof breakpoints;

/**
 * Represents a value that can be set for specific breakpoints.
 * For example, `{ mobile: 'small', desktop: 'large' }` sets the value to `'small'` on mobile and tablet devices and `'large'` on desktop devices.
 *
 * @template T - The type of the responsive value.
 */
export type Responsive<T> = Partial<Record<BreakpointToken, T>>;

/**
 * Represents a value that can be either a single value or a responsive object.
 *
 * @template T - The type of the value.
 */
export type SingleOrResponsive<T> = T | Responsive<T>;
