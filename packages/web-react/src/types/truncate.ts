import { type ElementType } from 'react';
import { type ChildrenProps, type StyleProps } from './shared';

export type SpiritTruncateProps<E extends ElementType> = {
  elementType?: E;
  lines?: number;
} & StyleProps &
  ChildrenProps;
