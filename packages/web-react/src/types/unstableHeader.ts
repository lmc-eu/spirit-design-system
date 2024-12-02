import { ChildrenProps, SpiritPolymorphicElementPropsWithRef, StyleProps, TransferProps } from './shared';
import { LinkTarget } from './link';
import { ElementType } from 'react';

export type SpiritHeaderProps = {
  isFluid?: boolean;
  isSimple?: boolean;
} & StyleProps &
  ChildrenProps;

export interface HeaderLogoBaseProps extends ChildrenProps, StyleProps, TransferProps {
  /** NavigationLink's href attribute */
  href?: string;
  /** NavigationLink's target attribute */
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

export type SpiritHeaderLogoProps<E extends ElementType = 'a'> = HeaderLogoProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, HeaderLogoProps<E>>;
