import { ElementType, ReactElement, ReactNode } from 'react';
import { NavigationItem } from '../components';
import { NavigationActionVariants } from '../components/Navigation/constants';
import { LinkTarget } from './link';
import {
  AlignmentYExtendedDictionaryType,
  AriaLabelingProps,
  ChildrenProps,
  DirectionDictionaryType,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
  TransferProps,
} from './shared';

export type NavigationActionVariantsKeys = keyof typeof NavigationActionVariants;
export type NavigationActionVariantsType<T = undefined> =
  | (typeof NavigationActionVariants)[NavigationActionVariantsKeys]
  | T;

export interface NavigationActionBaseProps extends ChildrenProps, StyleProps, AriaLabelingProps, TransferProps {
  /** NavigationAction's href attribute */
  href?: string;
  /** Whether is the NavigationAction disabled */
  isDisabled?: boolean;
  /** Whether is the NavigationAction selected */
  isSelected?: boolean;
  /** NavigationAction's target attribute */
  target?: LinkTarget;
  /** NavigationAction's variant */
  variant?: NavigationActionVariantsType;
}

export interface NavigationAvatarBaseProps extends ChildrenProps, StyleProps, AriaLabelingProps, TransferProps {
  /** Content of the avatar, such as an image, icon, or text. */
  avatarContent: ReactElement | ReactNode;
  /** NavigationAvatar's href attribute */
  href?: string;
  /** Whether is the NavigationAvatar square */
  isSquare?: boolean;
  /** NavigationAvatar's target attribute */
  target?: LinkTarget;
}

export type NavigationActionProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the NavigationAction, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'a'
   */
  elementType?: E;
} & NavigationActionBaseProps;

export type NavigationAvatarProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the NavigationAvatar, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'a'
   */
  elementType?: E;
} & NavigationAvatarBaseProps;

export type SpiritNavigationItemAlignmentYType = Omit<AlignmentYExtendedDictionaryType, 'top' | 'bottom' | 'baseline'>;

export interface SpiritNavigationItemProps extends ChildrenProps, StyleProps {
  alignmentY?: SpiritNavigationItemAlignmentYType;
}

export type SpiritNavigationActionProps<E extends ElementType = 'a'> = NavigationActionProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, NavigationActionProps<E>>;

export type SpiritNavigationAvatarProps<E extends ElementType = 'a'> = NavigationAvatarProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, NavigationAvatarProps<E>>;

export interface SpiritNavigationProps extends StyleProps, AriaLabelingProps {
  children:
    | ReactElement<HTMLLIElement>
    | ReactElement<typeof NavigationItem>
    | Array<ReactElement<HTMLLIElement> | ReactElement<typeof NavigationItem>>;
  direction?: DirectionDictionaryType;
}
