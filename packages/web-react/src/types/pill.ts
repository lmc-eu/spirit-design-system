import { ComponentPropsWithRef, ElementType } from 'react';
import { BasicPillColors } from '../constants';
import { ChildrenProps, EmotionColorNamesType, StyleProps, TransferProps } from './shared';

export type BasicPillColorsNamesType = (typeof BasicPillColors)[keyof typeof BasicPillColors];

export type PillColor<C> = EmotionColorNamesType<C> | BasicPillColorsNamesType | C;

export interface AriaPillElementTypeProps<T extends ElementType = 'span'> {
  /**
   * The HTML element or React element used to render the pill, e.g. 'div', 'span'.
   *
   * @default 'span'
   */
  elementType?: T;
}

export interface PillProps extends ChildrenProps, StyleProps, TransferProps {}

export type SpiritPillProps<
  T extends ElementType = 'span',
  C = void,
  E extends ElementType = T,
> = AriaPillElementTypeProps<T> &
  ComponentPropsWithRef<E> &
  PillProps & {
    /** The color of the pill. */
    color?: PillColor<C>;
  };
