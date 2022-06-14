import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, StyleProps } from './shared';

export type LinkColor = 'primary' | 'secondary' | 'inverted';

export interface LinkElementTypeProps<T extends ElementType = 'a'> {
  /**
   * The HTML element or React element used to render the Link, e.g. 'a'.
   *
   * @default 'a'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface LinkProps<T extends ElementType = 'a'> extends LinkElementTypeProps<T>, ChildrenProps, StyleProps {
  /** Link's href attribute */
  href: string;
}

export interface SpiritLinkProps<T extends ElementType = 'a'> extends LinkProps<T> {
  /** Color of the Link */
  color: LinkColor;
  /** Whether is the Link underlined */
  isUnderlined?: boolean;
  /** Whether is the Link disabled */
  isDisabled?: boolean;
}
