import { ElementType } from 'react';
import { LinkTarget } from './link';
import { ChildrenProps, SpiritPolymorphicElementPropsWithRef, StyleProps, TransferProps } from './shared';

export interface SpiritNavigationProps extends ChildrenProps, StyleProps {}

export interface SpiritNavigationItemProps extends ChildrenProps, StyleProps {}

export interface NavigationLinkBaseProps extends ChildrenProps, StyleProps, TransferProps {
  /** NavigationLink's href attribute */
  href?: string;
  /** NavigationLink's target attribute */
  target?: LinkTarget;
  /** Whether is the NavigationLink selected */
  isSelected?: boolean;
  /** Whether is the NavigationLink disabled */
  isDisabled?: boolean;
}

export type NavigationLinkProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'a'
   */
  elementType?: E;
} & NavigationLinkBaseProps;

export type SpiritNavigationLinkProps<E extends ElementType = 'a'> = NavigationLinkProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, NavigationLinkProps<E>>;
