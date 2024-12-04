import {
  ActionColors,
  ActionButtonColors,
  ActionLinkColors,
  AlignmentX,
  AlignmentXExtended,
  AlignmentY,
  AlignmentYExtended,
  EmotionColors,
  Emphasis,
  Placements,
  Sizes,
  SizesExtended,
  TextColors,
  ValidationStates,
  BackgroundColors,
} from '../../constants';

/* Alignment */
export type AlignmentXDictionaryKeys = keyof typeof AlignmentX;
export type AlignmentXDictionaryType<T = undefined> = (typeof AlignmentX)[AlignmentXDictionaryKeys] | T;

export type AlignmentXExtendedDictionaryKeys = keyof typeof AlignmentXExtended;
export type AlignmentXExtendedDictionaryType<T = undefined> =
  | (typeof AlignmentXExtended)[AlignmentXExtendedDictionaryKeys]
  | T;

export type AlignmentYDictionaryKeys = keyof typeof AlignmentY;
export type AlignmentYDictionaryType<T = undefined> = (typeof AlignmentY)[AlignmentYDictionaryKeys] | T;

export type AlignmentYExtendedDictionaryKeys = keyof typeof AlignmentYExtended;
export type AlignmentYExtendedDictionaryType<T = undefined> =
  | (typeof AlignmentYExtended)[AlignmentYExtendedDictionaryKeys]
  | T;

/* Color */
export type ActionColorsDictionaryKeys = keyof typeof ActionColors;
export type ActionColorsDictionaryType<C = undefined> = (typeof ActionColors)[ActionColorsDictionaryKeys] | C;

export type ActionButtonColorsDictionaryKeys = keyof typeof ActionButtonColors;
export type ActionButtonColorsDictionaryType<C = undefined> =
  | (typeof ActionButtonColors)[ActionButtonColorsDictionaryKeys]
  | C;

export type ActionLinkColorsDictionaryKeys = keyof typeof ActionLinkColors;
export type ActionLinkColorsDictionaryType<C = undefined> =
  | (typeof ActionLinkColors)[ActionLinkColorsDictionaryKeys]
  | C;

export type BackgroundColorsDictionaryKeys = keyof typeof BackgroundColors;
export type BackgroundColorsDictionaryType<C = undefined> =
  | (typeof BackgroundColors)[BackgroundColorsDictionaryKeys]
  | C;

export type EmotionColorsDictionaryKeys = keyof typeof EmotionColors;
export type EmotionColorsDictionaryType<C = undefined> = (typeof EmotionColors)[EmotionColorsDictionaryKeys] | C;

export type EmphasisDictionaryKeys = keyof typeof Emphasis;
export type EmphasisDictionaryType<C = undefined> = (typeof Emphasis)[EmphasisDictionaryKeys] | C;

export interface EmphasisProps<E> {
  emphasis?: E;
}

export type TextColorsDictionaryKeys = keyof typeof TextColors;
export type TextColorsDictionaryType<C = undefined> = (typeof TextColors)[TextColorsDictionaryKeys] | C;

/* Placement */
export type PlacementDictionaryKeys = keyof typeof Placements;
export type PlacementDictionaryType<T = undefined> = (typeof Placements)[PlacementDictionaryKeys] | T;

/* Size */
export type SizesDictionaryKeys = keyof typeof Sizes;
export type SizesDictionaryType<T = undefined> = (typeof Sizes)[SizesDictionaryKeys] | T;

export type SizesExtendedDictionaryKeys = keyof typeof SizesExtended;
export type SizeExtendedDictionaryType<T = undefined> = (typeof SizesExtended)[SizesExtendedDictionaryKeys] | T;

export interface SizeProps<P> {
  size?: P;
}

/* Validation */
export type ValidationStatesDictionaryKeys = keyof typeof ValidationStates;
export type ValidationStatesDictionaryType<T = undefined> =
  | (typeof ValidationStates)[ValidationStatesDictionaryKeys]
  | T;
