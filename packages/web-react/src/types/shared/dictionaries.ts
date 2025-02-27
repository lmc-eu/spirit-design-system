import {
  AlignmentX,
  AlignmentXExtended,
  AlignmentY,
  AlignmentYExtended,
  BorderColors,
  ComponentButtonColors,
  EmotionColors,
  Emphasis,
  LinkColors,
  Placements,
  Sizes,
  SizesExtended,
  TextColors,
  ValidationStates,
  BackgroundColors,
  BorderStyles,
  BorderRadii,
  BorderWidths,
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

/* Border Properties */
export type BorderColorsDictionaryKeys = keyof typeof BorderColors;
export type BorderColorsDictionaryType<C = undefined> = (typeof BorderColors)[BorderColorsDictionaryKeys] | C;

export type BorderRadiiDictionaryKeys = keyof typeof BorderRadii;
export type BorderRadiiDictionaryType<C = undefined> = (typeof BorderRadii)[BorderRadiiDictionaryKeys] | C;

export type BorderStylesDictionaryKeys = keyof typeof BorderStyles;
export type BorderStylesDictionaryType<C = undefined> = (typeof BorderStyles)[BorderStylesDictionaryKeys] | C;

export type BorderWidthsDictionaryKeys = keyof typeof BorderWidths;
export type BorderWidthsDictionaryType<C = undefined> = (typeof BorderWidths)[BorderWidthsDictionaryKeys] | C;

/* Color */
export type BackgroundColorsDictionaryKeys = keyof typeof BackgroundColors;
export type BackgroundColorsDictionaryType<C = undefined> =
  | (typeof BackgroundColors)[BackgroundColorsDictionaryKeys]
  | C;

export type ComponentButtonColorsDictionaryKeys = keyof typeof ComponentButtonColors;
export type ComponentButtonColorsDictionaryType<C = undefined> =
  | (typeof ComponentButtonColors)[ComponentButtonColorsDictionaryKeys]
  | C;

export type EmotionColorsDictionaryKeys = keyof typeof EmotionColors;
export type EmotionColorsDictionaryType<C = undefined> = (typeof EmotionColors)[EmotionColorsDictionaryKeys] | C;

export type LinkColorsDictionaryKeys = keyof typeof LinkColors;
export type LinkColorsDictionaryType<C = undefined> = (typeof LinkColors)[LinkColorsDictionaryKeys] | C;

export type TextColorsDictionaryKeys = keyof typeof TextColors;
export type TextColorsDictionaryType<C = undefined> = (typeof TextColors)[TextColorsDictionaryKeys] | C;

export interface TextColorProps<C> {
  textColor?: C;
}

/* Emphasis */
export type EmphasisDictionaryKeys = keyof typeof Emphasis;
export type EmphasisDictionaryType<C = undefined> = (typeof Emphasis)[EmphasisDictionaryKeys] | C;

export interface EmphasisProps<E> {
  emphasis?: E;
}

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
