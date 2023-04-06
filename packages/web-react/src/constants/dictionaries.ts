/* Alignment */
export const AlignmentX = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const;

/* Colors */
export const ActionColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  INVERTED: 'inverted',
} as const;

export const ActionLinkColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
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
  PRIMARY_INVERTED: 'primary-inverted',
  SECONDARY_INVERTED: 'secondary-inverted',
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
