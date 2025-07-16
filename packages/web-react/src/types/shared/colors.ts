import { accentColors, emotionColors } from '@lmc-eu/spirit-design-tokens';

type MatchingKeys<T, Prefix extends string> = keyof {
  [K in Extract<keyof T, string> as K extends `${Prefix}${string}` ? K : never]: string;
};

type GenerateColorsType<T, Prefix extends string, TokenPrefix extends string, C> = keyof {
  [K in Extract<keyof T, string> as MatchingKeys<T[K], Prefix> extends `${Prefix}${infer Rest}`
    ? `${TokenPrefix}-${K}-${Lowercase<Rest>}`
    : never]: C;
};

export type TextAccentColorsType<C = undefined> = GenerateColorsType<typeof accentColors, 'content', 'accent', C>;
export type BorderAccentColorsType<C = undefined> = GenerateColorsType<typeof accentColors, 'border', 'accent', C>;
export type BackgroundAccentColorsType<C = undefined> = GenerateColorsType<
  typeof accentColors,
  'background',
  'accent',
  C
>;

export type TextEmotionColorsType<C = undefined> = GenerateColorsType<typeof emotionColors, 'content', 'emotion', C>;
export type BorderEmotionColorsType<C = undefined> = GenerateColorsType<typeof emotionColors, 'border', 'emotion', C>;
export type BackgroundEmotionColorsType<C = undefined> = GenerateColorsType<
  typeof emotionColors,
  'background',
  'emotion',
  C
>;

export type AccentColorNamesType = keyof typeof accentColors;
