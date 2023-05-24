import {
  AlignmentX,
  ActionColors,
  EmotionColors,
  ActionLinkColors,
  TextColors,
  Sizes,
  SizesExtended,
  ValidationStates,
} from '../../constants';

export type AlignmentXDictionaryKeys = keyof typeof AlignmentX;
export type AlignmentXDictionaryType<T = undefined> = (typeof AlignmentX)[AlignmentXDictionaryKeys] | T;

/* Colors */
export type ActionColorsDictionaryKeys = keyof typeof ActionColors;
export type ActionColorsDictionaryType<C = undefined> = (typeof ActionColors)[ActionColorsDictionaryKeys] | C;

export type ActionLinkColorsDictionaryKeys = keyof typeof ActionLinkColors;
export type ActionLinkColorsDictionaryType<C = undefined> =
  | (typeof ActionLinkColors)[ActionLinkColorsDictionaryKeys]
  | C;

export type EmotionColorsDictionaryKeys = keyof typeof EmotionColors;
export type EmotionColorsDictionaryType<C = undefined> = (typeof EmotionColors)[EmotionColorsDictionaryKeys] | C;

export type TextColorsDictionaryKeys = keyof typeof TextColors;
export type TextColorsDictionaryType<C = undefined> = (typeof TextColors)[TextColorsDictionaryKeys] | C;

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
