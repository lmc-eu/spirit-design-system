import { ComponentPropsWithRef, ElementType } from 'react';
import { PillColorsExtended } from '../components/Pill';
import type { ChildrenProps, EmotionColorNamesType, StyleProps, TransferProps } from './shared';

export type PillColorsExtendedNamesType = (typeof PillColorsExtended)[keyof typeof PillColorsExtended];

export type PillColor<C> = EmotionColorNamesType<C> | PillColorsExtendedNamesType | C;

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
