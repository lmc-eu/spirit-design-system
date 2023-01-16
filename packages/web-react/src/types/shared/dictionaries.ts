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
