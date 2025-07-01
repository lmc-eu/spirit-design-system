import { BorderRadii, SizesExtended } from '../../constants';

export const IconBoxShapes = {
  ROUNDED: 'rounded',
  SQUARE: 'square',
  CIRCLE: 'circle',
} as const;

export const IconBoxSizes = {
  [SizesExtended.XSMALL]: { padding: 'space-500', iconSize: 16 },
  [SizesExtended.SMALL]: { padding: 'space-500', iconSize: 20 },
  [SizesExtended.MEDIUM]: { padding: 'space-600', iconSize: 24 },
  [SizesExtended.LARGE]: { padding: 'space-600', iconSize: 28 },
  [SizesExtended.XLARGE]: { padding: 'space-700', iconSize: 28 },
} as const;

export const IconBoxShapesRadii = {
  [IconBoxShapes.CIRCLE]: BorderRadii.FULL,
  [IconBoxShapes.ROUNDED]: BorderRadii['300'],
  [IconBoxShapes.SQUARE]: BorderRadii['0'],
} as const;
