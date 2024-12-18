import { ElementType, JSXElementConstructor } from 'react';
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
  padding?: SpaceToken;
  /** Horizontal padding of the box. */
  paddingX?: SpaceToken;
  /** Vertical padding of the box. */
  paddingY?: SpaceToken;
  /** Padding top of the box. */
  paddingTop?: SpaceToken;
  /** Padding bottom of the box. */
  paddingBottom?: SpaceToken;
  /** Padding left of the box. */
  paddingLeft?: SpaceToken;
  /** Padding right of the box. */
  paddingRight?: SpaceToken;
}

export type BoxProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'button'
   */
  elementType?: E | JSXElementConstructor<unknown>;
} & BoxBaseProps;

export type SpiritBoxProps<E extends ElementType = 'div'> = BoxProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, BoxProps<E>>;
