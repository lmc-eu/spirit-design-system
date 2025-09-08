import { TextHyphens, TextWordBreaks } from '../../constants';

export type TextHyphensDictionaryKeys = keyof typeof TextHyphens;
export type TextHyphensDictionaryType = (typeof TextHyphens)[TextHyphensDictionaryKeys];

export type TextWordBreakDictionaryKeys = keyof typeof TextWordBreaks;
export type TextWordBreakDictionaryType = (typeof TextWordBreaks)[TextWordBreakDictionaryKeys];
