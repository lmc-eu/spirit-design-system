import { accentColors, emotionColors } from '@lmc-eu/spirit-design-tokens';

type ContentKeys<T> = keyof {
  [K in Extract<keyof T, string> as K extends `content${string}` ? K : never]: string;
};

type GenerateColorsType<T, Prefix extends string, C> = keyof {
  [K in Extract<keyof T, string> as ContentKeys<T[K]> extends `content${infer Rest}`
    ? `${Prefix}-${K}-${Lowercase<Rest>}`
    : never]: never | C;
};

export type AccentColorsType<C = undefined> = GenerateColorsType<typeof accentColors, 'accent', C>;
export type EmotionColorsType<C = undefined> = GenerateColorsType<typeof emotionColors, 'emotion', C>;
