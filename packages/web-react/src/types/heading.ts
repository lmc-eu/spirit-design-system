import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, SizeExtended, StyleProps, TransferProps } from './shared';

export interface HeadingElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the Heading, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface HeadingProps<T extends ElementType = 'div'>
  extends HeadingElementTypeProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}

export interface SpiritHeadingProps<T extends ElementType = 'div', S = void> extends HeadingProps<T> {
  /** Size of the text */
  size?: SizeExtended<S>;
}
