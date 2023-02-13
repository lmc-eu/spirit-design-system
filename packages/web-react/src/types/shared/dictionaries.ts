export const Sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type SizesKeys = keyof typeof Sizes;
export type Size<S> = (typeof Sizes)[SizesKeys] | S;

export const SizesExtended = {
  ...Sizes,
  XSMALL: 'xsmall',
  XLARGE: 'xlarge',
} as const;

export type SizesExtendedKeys = keyof typeof SizesExtended;
export type SizeExtended<S> = (typeof SizesExtended)[SizesExtendedKeys] | S;

export const EmotionColors = {
  SUCCESS: 'success',
  INFORMATIVE: 'informative',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;

export type EmotionColorsKeys = keyof typeof EmotionColors;
export type EmotionColor<E> = (typeof EmotionColors)[EmotionColorsKeys] | E;

export const TextColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INVERTED: 'inverted',
} as const;

export type TextColorsKeys = keyof typeof TextColors;
export type TextColor<T> = (typeof TextColors)[TextColorsKeys] | T;
