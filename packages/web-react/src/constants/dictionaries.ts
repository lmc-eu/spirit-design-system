/* Alignment */
export const AlignmentX = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
} as const;

export const AlignmentXExtended = {
  SPACE_BETWEEN: 'space-between',
  STRETCH: 'stretch',
  ...AlignmentX,
} as const;

export const AlignmentY = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
} as const;

export const AlignmentYExtended = {
  BASELINE: 'baseline',
  STRETCH: 'stretch',
  ...AlignmentY,
} as const;

/* Color */
export const ActionColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  INVERTED: 'inverted',
} as const;

export const ActionButtonColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  PLAIN: 'plain',
} as const;

export const ActionLinkColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

export const BackgroundColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

export const BorderColors = {
  BASIC: 'basic',
  FOCUS: 'focus',
} as const;

export const BorderRadii = {
  0: '0',
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
  FULL: 'full',
} as const;

export const BorderStyles = {
  SOLID: 'solid',
  DOTTED: 'dotted',
  DASHED: 'dashed',
} as const;

export const BorderWidths = {
  0: '0',
  100: '100',
  200: '200',
} as const;

export const EmotionColors = {
  SUCCESS: 'success',
  INFORMATIVE: 'informative',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;

export const Emphasis = {
  REGULAR: 'regular',
  SEMIBOLD: 'semibold',
  BOLD: 'bold',
  ITALIC: 'italic',
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
  XSMALL: 'xsmall',
  ...Sizes,
  XLARGE: 'xlarge',
} as const;

/* Placement */
export const Placements = {
  TOP: 'top',
  TOP_START: 'top-start',
  TOP_END: 'top-end',
  BOTTOM: 'bottom',
  BOTTOM_START: 'bottom-start',
  BOTTOM_END: 'bottom-end',
  LEFT: 'left',
  LEFT_START: 'left-start',
  LEFT_END: 'left-end',
  RIGHT: 'right',
  RIGHT_START: 'right-start',
  RIGHT_END: 'right-end',
} as const;

/* Validation */
export const ValidationStates = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;
