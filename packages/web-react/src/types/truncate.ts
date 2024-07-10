import { ElementType } from 'react';
import { ChildrenProps, StyleProps } from './shared';

export type SpiritTruncateProps<E extends ElementType> = {
  elementType?: E;
  lines?: number;
} & StyleProps &
  ChildrenProps;
