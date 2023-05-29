import { ElementType } from 'react';
import {
  ChildrenProps,
  EmotionColorsDictionaryType,
  SizesDictionaryType,
  SpiritPolymorphicElementPropsWithRef,
  StyleProps,
  TransferProps,
} from './shared';

/* @deprecated: 'default' value will be removed in the next major version. */
export type TagColor<C> = EmotionColorsDictionaryType | 'default' | 'neutral' | C;

export type TagSize<S> = SizesDictionaryType | S;

/** @deprecated Will be removed in the next major version. */
export type TagTheme = 'light' | 'dark';

export interface TagProps<E extends ElementType = 'span', C = void, S = void>
  extends ChildrenProps,
    StyleProps,
    TransferProps {
  color?: TagColor<C>;
  elementType?: E;
  isSubtle?: boolean;
  size?: TagSize<S>;
  /** @deprecated Will be removed in the next major version. */
  tag?: E;
  /** @deprecated Will be removed in the next major version. */
  theme?: TagTheme;
}

export type SpiritTagProps<T extends ElementType = 'span', C = void, S = void> = TagProps<T, C, S> &
  SpiritPolymorphicElementPropsWithRef<T, TagProps<T, C, S>>;
