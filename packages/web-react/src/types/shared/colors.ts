import { accentColors, emotionColors } from '@lmc-eu/spirit-design-tokens';

type ContentKeys<T> = keyof {
  [K in Extract<keyof T, string> as K extends `content${string}` ? K : never]: string;
};

type GenerateTextColorsType<T, Prefix extends string, C> = keyof {
  [K in Extract<keyof T, string> as ContentKeys<T[K]> extends `content${infer Rest}`
    ? `${Prefix}-${K}-${Lowercase<Rest>}`
    : never]: never | C;
};

export type TextAccentColorsType<C = undefined> = GenerateTextColorsType<typeof accentColors, 'accent', C>;
export type TextEmotionColorsType<C = undefined> = GenerateTextColorsType<typeof emotionColors, 'emotion', C>;
