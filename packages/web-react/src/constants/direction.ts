export const Direction = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export const DirectionExtended = {
  ...Direction,
  HORIZONTAL_REVERSE: 'horizontal-reverse',
} as const;

export enum DirectionAxis {
  X = 'x',
  Y = 'y',
}
