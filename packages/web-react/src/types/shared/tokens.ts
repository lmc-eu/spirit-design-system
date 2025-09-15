import { spaces } from '@lmc-eu/spirit-design-tokens';

export const BREAKPOINT_MOBILE = 'mobile';

export type SpaceToken = `space-${keyof typeof spaces}` | `space-${number}`;
