import { ActionColors, EmotionColors, TextColors, Sizes, SizesExtended, ValidationStates } from '../../constants';

/* Colors */
export type ActionColorsKeys = keyof typeof ActionColors;
export type ActionColor<T = undefined> = (typeof ActionColors)[ActionColorsKeys] | T;

export type EmotionColorsKeys = keyof typeof EmotionColors;
export type EmotionColor<T = undefined> = (typeof EmotionColors)[EmotionColorsKeys] | T;

export type TextColorsKeys = keyof typeof TextColors;
export type TextColor<T = undefined> = (typeof TextColors)[TextColorsKeys] | T;

/* Size */
export type SizesKeys = keyof typeof Sizes;
export type Size<T = undefined> = (typeof Sizes)[SizesKeys] | T;

export type SizesExtendedKeys = keyof typeof SizesExtended;
export type SizeExtended<T = undefined> = (typeof SizesExtended)[SizesExtendedKeys] | T;

export interface SizeProps<P> {
  /** Size of the text */
  size?: P;
}

/* Validation */
export type ValidationStatesKeys = keyof typeof ValidationStates;
export type ValidationStatesTypes<T = undefined> = (typeof ValidationStates)[ValidationStatesKeys] | T;
