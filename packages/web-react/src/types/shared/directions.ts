import { Direction } from '../../constants';

export type DirectionDictionaryKeys = keyof typeof Direction;
export type DirectionDictionaryType = (typeof Direction)[DirectionDictionaryKeys];
