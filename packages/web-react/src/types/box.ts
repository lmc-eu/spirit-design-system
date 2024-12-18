import { ElementType } from 'react';
import {
  BackgroundColorsDictionaryType,
  ChildrenProps,
  SpaceToken,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
} from './shared';

export interface BoxBaseProps extends ChildrenProps, StyleProps {
  /** The background color of the box. */
  backgroundColor?: BackgroundColorsDictionaryType;
  /** The border color of the box. */
  borderColor?: string;
  /** The border radius of the box. */
  borderRadius?: string;
  /** The border width of the box. */
  borderWidth?: string;
  /** Padding of the box. */
  paddingTop?: SpaceToken;
  paddingBottom?: SpaceToken;
  paddingLeft?: SpaceToken;
  paddingRight?: SpaceToken;
}

export type BoxProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'button'
   */
  elementType?: E;
} & BoxBaseProps;

export type SpiritBoxProps<E extends ElementType = 'div'> = BoxProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, BoxProps<E>>;
