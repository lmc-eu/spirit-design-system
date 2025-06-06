import { ElementType, JSXElementConstructor } from 'react';
import {
  ChildrenProps,
  EmphasisDictionaryType,
  EmphasisProps,
  SizeExtendedDictionaryType,
  SizeProps,
  StyleProps,
  TextAccentColorsType,
  TextAlignmentType,
  TextColorProps,
  TextColorsDictionaryType,
  TextEmotionColorsType,
  TransferProps,
} from './shared';

export type HeadingColorsType<C = undefined> =
  | TextColorsDictionaryType<C>
  | TextAccentColorsType<C>
  | TextEmotionColorsType<C>;

export interface HeadingElementTypeProps<T extends ElementType> {
  /**
   * The HTML element or React element used to render the Heading, e.g. 'h2'.
   */
  elementType: T | JSXElementConstructor<unknown>;
}

export interface HeadingProps<T extends ElementType>
  extends HeadingElementTypeProps<T>,
    ChildrenProps,
    StyleProps,
    HeadingStyleProps,
    TransferProps {}

export interface HeadingStyleProps {
  textAlignment?: TextAlignmentType;
}

export interface SpiritHeadingProps<T extends ElementType, S = void, E = void, C = void>
  extends HeadingProps<T>,
    SizeProps<SizeExtendedDictionaryType<S>>,
    EmphasisProps<EmphasisDictionaryType<E>>,
    TextColorProps<HeadingColorsType<C>> {}
