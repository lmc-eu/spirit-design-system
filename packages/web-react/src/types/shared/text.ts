import { type TextHyphens, type TextWordBreaks } from '../../constants';
import { type TextAccentColorsType, type TextColorNamesType, type TextEmotionColorsType } from './colors';
import { type TextAlignmentType, type TextHyphensType, type TextWordBreakType } from './style';

export type TextHyphensDictionaryKeys = keyof typeof TextHyphens;
export type TextHyphensDictionaryType = (typeof TextHyphens)[TextHyphensDictionaryKeys];

export type TextWordBreakDictionaryKeys = keyof typeof TextWordBreaks;
export type TextWordBreakDictionaryType = (typeof TextWordBreaks)[TextWordBreakDictionaryKeys];

export type TextColorsType<C = undefined> = TextColorNamesType<C> | TextAccentColorsType<C> | TextEmotionColorsType<C>;

export interface TypographyBaseProps {
  isTextBalanced?: boolean;
  textAlignment?: TextAlignmentType;
  textHyphens?: TextHyphensType;
  textWordBreak?: TextWordBreakType;
}
