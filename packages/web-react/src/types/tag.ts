import { ElementType } from 'react';
import {
  ChildrenProps,
  EmotionColorsDictionaryType,
  SizesDictionaryType,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
  TransferProps,
} from './shared';

export type TagColor<C> = EmotionColorsDictionaryType | 'neutral' | C;

export type TagSize<S> = SizesDictionaryType | S;

export interface TagProps<E extends ElementType = 'span', C = void, S = void>
  extends ChildrenProps,
    StyleProps,
    TransferProps {
  color?: TagColor<C>;
  elementType?: E;
  isSubtle?: boolean;
  size?: TagSize<S>;
}

export type SpiritTagProps<T extends ElementType = 'span', C = void, S = void> = TagProps<T, C, S> &
  SpiritPolymorphicElementPropsWithRef<T, TagProps<T, C, S>>;
