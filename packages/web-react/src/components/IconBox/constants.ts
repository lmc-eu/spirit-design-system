import { BorderRadii } from '../../constants';

export const IconBoxShapes = {
  ROUNDED: 'rounded',
  SQUARE: 'square',
  CIRCLE: 'circle',
} as const;

export const IconBoxSizeMap = {
  xsmall: { padding: 'space-500', iconSize: 16 },
  small: { padding: 'space-500', iconSize: 20 },
  medium: { padding: 'space-600', iconSize: 24 },
  large: { padding: 'space-600', iconSize: 28 },
  xlarge: { padding: 'space-700', iconSize: 28 },
} as const;

export const IconBoxShapesMap = {
  circle: BorderRadii.FULL,
  rounded: BorderRadii['300'],
  square: BorderRadii['0'],
} as const;
