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
  type BreakpointToken,
  type ChildrenProps,
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
  backgroundGradient?:
    | BackgroundGradientsDictionaryType
    | Partial<Record<BreakpointToken, BackgroundGradientsDictionaryType>>;
  /** The border color of the box. */
  borderColor?: BorderAccentColorsType | BorderEmotionColorsType | BorderColorsDictionaryType;
  /** The border radius of the box. */
  borderRadius?: BorderRadiiTokenType | Partial<Record<BreakpointToken, BorderRadiiTokenType>>;
  /** The border style of the box. */
  borderStyle?: BorderStylesDictionaryType;
  /** The border width of the box. */
  borderWidth?: BorderWidthsDictionaryType;
  /** Padding of the box. */
  padding?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Horizontal padding of the box. */
  paddingX?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Vertical padding of the box. */
  paddingY?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Padding top of the box. */
  paddingTop?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Padding bottom of the box. */
  paddingBottom?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Padding left of the box. */
  paddingLeft?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
  /** Padding right of the box. */
  paddingRight?: SpaceToken | Partial<Record<BreakpointToken, SpaceToken>>;
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
