import { breakpoints, spaces } from '@lmc-eu/spirit-design-tokens';

export const BREAKPOINT_MOBILE = 'mobile';

export type BreakpointToken = keyof typeof breakpoints;
export type SpaceToken = `space-${keyof typeof spaces}` | `space-${number}`;
