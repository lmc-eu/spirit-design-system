import { ElementType } from 'react';
import {
  ChildrenProps,
  StyleProps,
  ActionLinkColorsDictionaryType,
  TransferProps,
  SpiritPolymorphicElementPropsWithRef,
} from './shared';

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export interface LinkElementTypeProps<E extends ElementType = 'a'> {
  /**
   * The HTML element or React element used to render the Link, e.g. 'a'.
   *
   * @default 'a'
   */
  elementType?: E;
}

export interface LinkBaseProps<T extends ElementType = 'a'>
  extends Omit<LinkElementTypeProps<T>, 'href'>,
    ChildrenProps,
    StyleProps,
    TransferProps {
  /** Link's href attribute */
  href?: string;
  /** Link's target attribute */
  target?: LinkTarget;
}

export interface LinkProps<E extends ElementType = 'a', C = void> extends LinkBaseProps<E> {
  /** Color of the Link */
  color?: ActionLinkColorsDictionaryType<C>;
  /** Whether is the Link underlined */
  isUnderlined?: boolean;
  /** Whether is the Link disabled */
  isDisabled?: boolean;
}

export type SpiritLinkProps<E extends ElementType = 'a', C = void> = LinkProps<E, C> &
  SpiritPolymorphicElementPropsWithRef<E, LinkProps<E, C>>;
