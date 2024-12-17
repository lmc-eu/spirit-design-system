import { ElementType, ReactElement } from 'react';
import { NavigationItem } from '../components';
import { LinkTarget } from './link';
import {
  AriaLabelingProps,
  ChildrenProps,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
  TransferProps,
} from './shared';

export interface NavigationLinkBaseProps extends ChildrenProps, StyleProps, AriaLabelingProps, TransferProps {
  /** NavigationLink's href attribute */
  href?: string;
  /** Whether is the NavigationLink disabled */
  isDisabled?: boolean;
  /** Whether is the NavigationLink selected */
  isSelected?: boolean;
  /** NavigationLink's target attribute */
  target?: LinkTarget;
}

export type NavigationLinkProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'a'
   */
  elementType?: E;
} & NavigationLinkBaseProps;

export interface SpiritNavigationItemProps extends ChildrenProps, StyleProps {}

export type SpiritNavigationLinkProps<E extends ElementType = 'a'> = NavigationLinkProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, NavigationLinkProps<E>>;

export interface SpiritNavigationProps extends StyleProps, AriaLabelingProps {
  children:
    | ReactElement<HTMLLIElement>
    | ReactElement<typeof NavigationItem>
    | Array<ReactElement<HTMLLIElement> | ReactElement<typeof NavigationItem>>;
}
