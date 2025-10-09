import { type ElementType } from 'react';
import { type LinkTarget } from './link';
import {
  type ChildrenProps,
  type SpiritPolymorphicElementPropsWithRef,
  type StyleProps,
  type TransferProps,
} from './shared';

export interface HeaderLogoBaseProps extends ChildrenProps, StyleProps, TransferProps {
  /** Header's href attribute */
  href?: string;
  /** Header's target attribute */
  target?: LinkTarget;
}

export type HeaderLogoProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'a'
   */
  elementType?: E;
} & HeaderLogoBaseProps;

export interface SpiritHeaderProps extends StyleProps, ChildrenProps {
  hasBottomDivider?: boolean;
}

export type SpiritHeaderLogoProps<E extends ElementType = 'a'> = HeaderLogoProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, HeaderLogoProps<E>>;
