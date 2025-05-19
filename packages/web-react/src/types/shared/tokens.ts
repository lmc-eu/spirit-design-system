import { accentColors, breakpoints, emotionColors, spaces } from '@lmc-eu/spirit-design-tokens';

export const BREAKPOINT_MOBILE = 'mobile';

export type BreakpointToken = keyof typeof breakpoints;
export type SpaceToken = `space-${keyof typeof spaces}` | `space-${number}`;

export type EmotionColorToken = keyof typeof emotionColors;
export type AccentColorToken = keyof typeof accentColors;
