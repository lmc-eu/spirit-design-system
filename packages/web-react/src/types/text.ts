import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, SizeExtendedDictionaryType, SizeProps, StyleProps, TransferProps } from './shared';

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

export interface SpiritTextProps<T extends ElementType = 'p', S = void>
  extends TextProps<T>,
    SizeProps<SizeExtendedDictionaryType<S>> {
  /** Emphasis of the text */
  emphasis?: TextEmphasis | undefined | null;
}
