import { type ElementType } from 'react';
import type {
  ChildrenProps,
  EmphasisDictionaryType,
  EmphasisProps,
  SizeExtendedDictionaryType,
  SizeProps,
  StyleProps,
  TextAccentColorsType,
  TextAlignmentType,
  TextColorNamesType,
  TextColorProps,
  TextEmotionColorsType,
  TextHyphensType,
  TextWordBreakType,
  TransferProps,
} from './shared';

export type TextColorsType<C = undefined> = TextColorNamesType<C> | TextAccentColorsType<C> | TextEmotionColorsType<C>;

export interface TextElementTypeProps<T extends ElementType = 'p'> {
  /**
   * The HTML element or React element used to render the Text, e.g. 'p'.
   *
   * @default 'p'
   */
  elementType?: T;
}

export interface TextProps<T extends ElementType = 'p'>
  extends TextElementTypeProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {
  isTextBalanced?: boolean;
  textAlignment?: TextAlignmentType;
  textHyphens?: TextHyphensType;
  textWordBreak?: TextWordBreakType;
}

export interface SpiritTextProps<T extends ElementType = 'p', S = void, E = void, C = void>
  extends TextProps<T>,
    SizeProps<SizeExtendedDictionaryType<S>>,
    EmphasisProps<EmphasisDictionaryType<E>>,
    TextColorProps<TextColorsType<C>> {}
