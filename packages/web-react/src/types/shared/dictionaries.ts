import {
  AlignmentX,
  ActionColors,
  EmotionColors,
  TextColors,
  Sizes,
  SizesExtended,
  ValidationStates,
} from '../../constants';

/* Alignment */
export type AlignmentXDictionaryKeys = keyof typeof AlignmentX;
export type AlignmentXDictionaryType<T = undefined> = (typeof AlignmentX)[AlignmentXDictionaryKeys] | T;

/* Colors */
export type ActionColorsDictionaryKeys = keyof typeof ActionColors;
export type ActionColorsDictionaryType<T = undefined> = (typeof ActionColors)[ActionColorsDictionaryKeys] | T;

export type EmotionColorsDictionaryKeys = keyof typeof EmotionColors;
export type EmotionColorsDictionaryType<T = undefined> = (typeof EmotionColors)[EmotionColorsDictionaryKeys] | T;

export type TextColorsDictionaryKeys = keyof typeof TextColors;
export type TextColorsDictionaryType<T = undefined> = (typeof TextColors)[TextColorsDictionaryKeys] | T;

/* Size */
export type SizesDictionaryKeys = keyof typeof Sizes;
export type SizesDictionaryType<T = undefined> = (typeof Sizes)[SizesDictionaryKeys] | T;

export type SizesExtendedDictionaryKeys = keyof typeof SizesExtended;
export type SizeExtendedDictionaryType<T = undefined> = (typeof SizesExtended)[SizesExtendedDictionaryKeys] | T;

export interface SizeProps<P> {
  /** Size of the text */
  size?: P;
}

/* Validation */
export type ValidationStatesDictionaryKeys = keyof typeof ValidationStates;
export type ValidationStatesDictionaryType<T = undefined> =
  | (typeof ValidationStates)[ValidationStatesDictionaryKeys]
  | T;
