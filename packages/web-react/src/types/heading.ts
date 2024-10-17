import { ElementType, JSXElementConstructor } from 'react';
import {
  ChildrenProps,
  EmphasisDictionaryType,
  EmphasisProps,
  SizeExtendedDictionaryType,
  SizeProps,
  StyleProps,
  TransferProps,
} from './shared';

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
    TransferProps {}

export interface SpiritHeadingProps<T extends ElementType, S = void, E = void>
  extends HeadingProps<T>,
    SizeProps<SizeExtendedDictionaryType<S>>,
    EmphasisProps<EmphasisDictionaryType<E>> {}
