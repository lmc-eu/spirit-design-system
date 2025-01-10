import { Direction, DirectionExtended } from '../../constants';

export type DirectionDictionaryKeys = keyof typeof Direction;
export type DirectionDictionaryType = (typeof Direction)[DirectionDictionaryKeys];

export type DirectionExtendedDictionaryKeys = keyof typeof DirectionExtended;
export type DirectionExtendedDictionaryType = (typeof DirectionExtended)[DirectionExtendedDictionaryKeys];
