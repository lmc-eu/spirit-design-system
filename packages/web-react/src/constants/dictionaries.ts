/* Colors */
export const ActionColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  INVERTED: 'inverted',
} as const;

export const EmotionColors = {
  SUCCESS: 'success',
  INFORMATIVE: 'informative',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;

export const TextColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INVERTED: 'inverted',
} as const;

/* Size */
export const Sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const SizesExtended = {
  ...Sizes,
  XSMALL: 'xsmall',
  XLARGE: 'xlarge',
} as const;

/* Validation */
export const ValidationStates = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;
