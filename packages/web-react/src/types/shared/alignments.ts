import { Alignment } from '../../constants';

export type AlignmentDictionaryKeys = keyof typeof Alignment;
export type AlignmentDictionaryType = (typeof Alignment)[AlignmentDictionaryKeys];
