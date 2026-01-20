import { type ElementType, type JSXElementConstructor } from 'react';
import {
  type BreakpointToken,
  type ChildrenProps,
  type SpiritPolymorphicElementPropsWithRef,
  type StyleProps,
} from './shared';

export interface HiddenBaseProps extends ChildrenProps, StyleProps {
  /** Hide from breakpoint onwards */
  from?: BreakpointToken;
  /** Hide on specific breakpoints */
  on?: BreakpointToken | BreakpointToken[];
}

export type HiddenProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the hidden wrapper, e.g. 'span', 'div', 'section'.
   *
   * @default 'span'
   */
  elementType?: E | JSXElementConstructor<unknown>;
} & HiddenBaseProps;

export type SpiritHiddenProps<E extends ElementType = 'span'> = HiddenProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, HiddenProps<E>>;
