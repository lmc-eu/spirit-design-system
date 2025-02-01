import { ElementType } from 'react';
import {
  ChildrenProps,
  EmphasisDictionaryType,
  EmphasisProps,
  SizeExtendedDictionaryType,
  SizeProps,
  StyleProps,
  TextColorProps,
  TextColorsDictionaryType,
  TransferProps,
} from './shared';

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
    TransferProps {}

export interface SpiritTextProps<T extends ElementType = 'p', S = void, E = void, C = void>
  extends TextProps<T>,
    SizeProps<SizeExtendedDictionaryType<S>>,
    EmphasisProps<EmphasisDictionaryType<E>>,
    TextColorProps<TextColorsDictionaryType<C>> {}
