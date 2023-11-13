import { ElementType } from 'react';
import {
  ActionLinkColorsDictionaryType,
  ChildrenProps,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
  TransferProps,
} from './shared';

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export interface LinkBaseProps<C = void> extends ChildrenProps, StyleProps, TransferProps {
  /** Link's href attribute */
  href?: string;
  /** Link's target attribute */
  target?: LinkTarget;
  /** Color of the Link */
  color?: ActionLinkColorsDictionaryType<C>;
  /** Whether is the Link underlined */
  isUnderlined?: boolean;
  /** Whether is the Link disabled */
  isDisabled?: boolean;
}

export type LinkProps<E extends ElementType = 'a', C = void> = {
  /**
   * The HTML element or React element used to render the Link, e.g. 'a'.
   *
   * @default 'a'
   */
  elementType?: E;
} & LinkBaseProps<C>;

export type SpiritLinkProps<E extends ElementType = 'a', C = void> = LinkProps<E, C> &
  SpiritPolymorphicElementPropsWithRef<E, LinkProps<E, C>>;
