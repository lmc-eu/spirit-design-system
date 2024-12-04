import { breakpoints, spaces } from '@lmc-eu/spirit-design-tokens';

export const BREAKPOINT_MOBILE = 'mobile';

export type BreakpointToken = keyof typeof breakpoints | string;
export type SpaceToken = `${'space-'}${Extract<keyof typeof spaces, string>}`;

// Extendable token types
declare global {
  interface ExpandableTokens {
    spaces?: Record<string, string | number>;
    breakpoints?: Record<string, string>;
  }
}

export type ExpandableSpaceToken = SpaceToken | `${'space-'}${Extract<keyof ExpandableTokens['spaces'], string>}`;
export type ExpandableBreakpointToken = BreakpointToken | keyof ExpandableTokens['breakpoints'] | string;
