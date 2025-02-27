import { ElementType } from 'react';
import {
  ChildrenProps,
  EmotionColorsDictionaryType,
  SizeExtendedDictionaryType,
  StyleProps,
  TransferProps,
} from './shared';

export type TagColor<C> = EmotionColorsDictionaryType | 'neutral' | C;

export type TagSize<S> = SizeExtendedDictionaryType | S;

export interface AriaTagElementTypeProps<T extends ElementType = 'span'> {
  /**
   * The HTML element or React element used to render the tag, e.g. 'div', 'span'.
   *
   * @default 'span'
   */
  elementType?: T;
}

export interface TagProps<E extends ElementType = 'span', C = void, S = void>
  extends ChildrenProps,
    StyleProps,
    TransferProps,
    AriaTagElementTypeProps<E> {
  color?: TagColor<C>;
  isSubtle?: boolean;
  size?: TagSize<S>;
}

export type SpiritTagProps<T extends ElementType = 'span', C = void, S = void> = TagProps<T, C, S>;
