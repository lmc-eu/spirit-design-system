import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, TransferProps } from './shared';

export type PillColor = 'secondary' | 'selected';

export interface AriaPillElementTypeProps<T extends ElementType = 'span'> {
  /**
   * The HTML element or React element used to render the pill, e.g. 'div', 'span'.
   *
   * @default 'span'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface SpiritPillProps<T extends ElementType = 'span'>
  extends AriaPillElementTypeProps<T>,
    ChildrenProps,
    TransferProps {
  /** The color of the pill. */
  color?: PillColor;
}
