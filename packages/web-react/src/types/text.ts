import { ElementType, JSXElementConstructor } from 'react';
import { DictionarySizeExtendedType, DictionarySizeType } from './dictionaries';
import { ChildrenProps, StyleProps, TransferProps } from './shared';

export type TextEmphasis = 'bold' | 'italic';

export interface TextElementTypeProps<T extends ElementType = 'p'> {
  /**
   * The HTML element or React element used to render the Text, e.g. 'p'.
   *
   * @default 'p'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface TextProps<T extends ElementType = 'p'>
  extends TextElementTypeProps<T>,
    ChildrenProps,
    StyleProps,
    TransferProps {}

export interface SpiritTextProps<T extends ElementType = 'p'> extends TextProps<T> {
  /** Size of the text */
  size?: DictionarySizeType | DictionarySizeExtendedType;
  /** Emphasis of the text */
  emphasis?: TextEmphasis | undefined | null;
}
