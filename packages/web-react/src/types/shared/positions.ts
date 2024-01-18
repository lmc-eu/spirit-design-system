import { Position } from '../../constants';

export type PositionKeys = keyof typeof Position;
export type PositionType = (typeof Position)[PositionKeys];
