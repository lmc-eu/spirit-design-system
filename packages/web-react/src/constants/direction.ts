export const Direction = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export const DirectionExtended = {
  ...Direction,
  HORIZONTAL_REVERSED: 'horizontal-reversed',
} as const;

export enum DirectionAxis {
  X = 'x',
  Y = 'y',
}
