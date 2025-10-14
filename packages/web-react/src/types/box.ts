import { type ElementType, type JSXElementConstructor } from 'react';
import {
  type BackgroundAccentColorsType,
  type BackgroundColorsDictionaryType,
  type BackgroundEmotionColorsType,
  type BackgroundGradientsDictionaryType,
  type BorderAccentColorsType,
  type BorderColorsDictionaryType,
  type BorderEmotionColorsType,
  type BorderRadiiTokenType,
  type BorderStylesDictionaryType,
  type BorderWidthsDictionaryType,
  type ChildrenProps,
  type SingleOrResponsive,
  type SpaceToken,
  type SpiritPolymorphicElementPropsWithRef,
  type StyleProps,
  type TextColorProps,
} from './shared';

export type BoxBackgroundColorsType =
  | BackgroundColorsDictionaryType
  | BackgroundAccentColorsType
  | BackgroundEmotionColorsType;

export interface BoxBaseProps extends ChildrenProps, TextColorProps, StyleProps {
  /** The background color of the box. */
  backgroundColor?: BoxBackgroundColorsType;
  /** The background gradient of the box. */
  backgroundGradient?: SingleOrResponsive<BackgroundGradientsDictionaryType>;
  /** The border color of the box. */
  borderColor?: BorderAccentColorsType | BorderEmotionColorsType | BorderColorsDictionaryType;
  /** The border radius of the box. */
  borderRadius?: SingleOrResponsive<BorderRadiiTokenType>;
  /** The border style of the box. */
  borderStyle?: BorderStylesDictionaryType;
  /** The border width of the box. */
  borderWidth?: BorderWidthsDictionaryType;
  /** Padding of the box. */
  padding?: SingleOrResponsive<SpaceToken>;
  /** Horizontal padding of the box. */
  paddingX?: SingleOrResponsive<SpaceToken>;
  /** Vertical padding of the box. */
  paddingY?: SingleOrResponsive<SpaceToken>;
  /** Padding top of the box. */
  paddingTop?: SingleOrResponsive<SpaceToken>;
  /** Padding bottom of the box. */
  paddingBottom?: SingleOrResponsive<SpaceToken>;
  /** Padding left of the box. */
  paddingLeft?: SingleOrResponsive<SpaceToken>;
  /** Padding right of the box. */
  paddingRight?: SingleOrResponsive<SpaceToken>;
}

export type BoxProps<E extends ElementType> = {
  /**
   * The HTML element or React element used to render the box, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'div'
   */
  elementType?: E | JSXElementConstructor<unknown>;
} & BoxBaseProps;

export type SpiritBoxProps<E extends ElementType = 'div'> = BoxProps<E> &
  SpiritPolymorphicElementPropsWithRef<E, BoxProps<E>>;
