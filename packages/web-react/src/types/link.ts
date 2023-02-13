import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, StyleProps, TextColor, TransferProps } from './shared';

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export interface LinkElementTypeProps<T extends ElementType = 'a'> {
  /**
   * The HTML element or React element used to render the Link, e.g. 'a'.
   *
   * @default 'a'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface LinkProps<T extends ElementType = 'a'>
  extends LinkElementTypeProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {
  /** Link's href attribute */
  href: string;
  /** Link's target attribute */
  target?: LinkTarget;
}

export interface SpiritLinkProps<E extends ElementType = 'a', T = void> extends LinkProps<E> {
  /** Color of the Link */
  color?: TextColor<T>;
  /** Whether is the Link underlined */
  isUnderlined?: boolean;
  /** Whether is the Link disabled */
  isDisabled?: boolean;
}
