export const Sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type SizesKeys = keyof typeof Sizes;
export type Size<E> = typeof Sizes[SizesKeys] | E;

export const SizesExtended = {
  XSMALL: 'xsmall',
  XLARGE: 'xlarge',
} as const;

export type SizesExtendedKeys = keyof typeof SizesExtended;
export type SizeExtended<E> = typeof SizesExtended[SizesExtendedKeys] | E;
