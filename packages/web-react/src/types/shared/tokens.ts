import { breakpoints, space } from '@lmc-eu/spirit-design-tokens';

export const BREAKPOINT_MOBILE = 'mobile';

export type BreakpointToken = keyof typeof breakpoints | string;
export type SpaceToken = `${'space-'}${Extract<keyof typeof space, string>}` | `${'space-'}${number}`;
