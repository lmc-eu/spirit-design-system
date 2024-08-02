import { ElementType } from 'react';
import { ChildrenProps, SpacingProp, SpiritPolymorphicElementPropsWithoutRef, StyleProps } from './shared';

export interface StackBaseProps extends ChildrenProps, SpacingProp, StyleProps {
  /** Whether the Stack has divider on the end */
  hasEndDivider?: boolean;
  /** Whether the Stack has divider between items */
  hasIntermediateDividers?: boolean;
  /** Whether the Stack has spacing */
  hasSpacing?: boolean;
  /** Whether the Stack has divider on the start */
  hasStartDivider?: boolean;
}

export type StackProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the stack, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: E;
} & StackBaseProps;

export type SpiritStackProps<E extends ElementType = 'div'> = StackProps<E> &
  SpiritPolymorphicElementPropsWithoutRef<E, StackProps<E>>;
