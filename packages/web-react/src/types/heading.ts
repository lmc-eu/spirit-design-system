import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, TextSize } from './shared';

export type HeadingSize = TextSize | 'xlarge';

export interface HeadingElementTypeProps<T extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the Heading, e.g. 'div'.
   *
   * @default 'div'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface HeadingProps<T extends ElementType = 'div'> extends HeadingElementTypeProps<T>, ChildrenProps {}

export interface SpiritHeadingProps<T extends ElementType = 'div'> extends HeadingProps<T> {
  /** Size of the text */
  size: HeadingSize;
}
