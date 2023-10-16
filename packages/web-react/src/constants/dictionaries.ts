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
  XSMALL: 'xsmall',
  ...Sizes,
  XLARGE: 'xlarge',
} as const;

/* Placement */
export const Placements = {
  TOP: 'top',
  TOP_RIGHT: 'top-right',
  TOP_LEFT: 'top-left',
  BOTTOM: 'bottom',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_LEFT: 'bottom-left',
  LEFT: 'left',
  LEFT_TOP: 'left-top',
  LEFT_BOTTOM: 'left-bottom',
  RIGHT: 'right',
  RIGHT_TOP: 'right-top',
  RIGHT_BOTTOM: 'right-bottom',
} as const;

/* Validation */
export const ValidationStates = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
} as const;

/* FileUploader CSS crop */
export const FileUploaderCropCSS = {
  TOP: '--file-uploader-attachment-image-top',
  LEFT: '--file-uploader-attachment-image-left',
  WIDTH: '--file-uploader-attachment-image-width',
  HEIGHT: '--file-uploader-attachment-image-height',
} as const;
