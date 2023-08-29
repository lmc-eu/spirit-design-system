import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, StyleProps, TransferProps } from './shared';

export interface VisuallyHiddenElementTypeProps<T extends ElementType = 'span'> {
  /**
   * The HTML element or React element used to render the VisuallyHidden component, e.g. 'span'.
   *
   * @default 'span'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface VisuallyHiddenProps<T extends ElementType = 'span'>
  extends VisuallyHiddenElementTypeProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}

export interface SpiritVisuallyHiddenProps<T extends ElementType = 'span'> extends VisuallyHiddenProps<T> {}
