import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, StyleProps, TextSize, RestProps } from './shared';

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
    RestProps {}

export interface SpiritTextProps<T extends ElementType = 'p'> extends TextProps<T> {
  /** Size of the text */
  size?: TextSize;
  /** Emphasis of the text */
  emphasis?: TextEmphasis | undefined | null;
}
