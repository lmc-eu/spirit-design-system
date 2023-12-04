import { ElementType } from 'react';
import {
  BreakpointToken,
  ChildrenProps,
  SpaceToken,
  SpiritPolymorphicElementPropsWithoutRef,
  StyleProps,
} from './shared';

export interface StackBaseProps extends ChildrenProps, StyleProps {
  /** Whether the Stack has divider on the end */
  hasEndDivider?: boolean;
  /** Whether the Stack has divider between items */
  hasIntermediateDividers?: boolean;
  /** Whether the Stack has spacing */
  hasSpacing?: boolean;
  /** Whether the Stack has divider on the start */
  hasStartDivider?: boolean;
  /** Custom spacing between items */
  spacing?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
}

export type StackProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the stack, e.g. 'div'.
   * @default 'div'
   */
  elementType?: E;
} & StackBaseProps;

export type SpiritStackProps<E extends ElementType = 'div'> = StackProps<E> &
  SpiritPolymorphicElementPropsWithoutRef<E, StackProps<E>>;
