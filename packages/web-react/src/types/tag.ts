import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, EmotionColorsDictionaryType, SizesDictionaryType, StyleProps, TransferProps } from './shared';

/* @deprecated: 'default' value will be removed in the next major version. */
export type TagColor<C> = EmotionColorsDictionaryType | 'default' | 'neutral' | C;

export type TagSize<S> = SizesDictionaryType | S;

/** @deprecated Will be removed in next major version */
export type TagTheme = 'light' | 'dark';

export interface SpiritTagProps<T extends ElementType = 'span', C = void, S = void>
  extends ChildrenProps,
    StyleProps,
    TransferProps {
  color?: TagColor<C>;
  elementType?: T | JSXElementConstructor<unknown>;
  isSubtle?: boolean;
  size?: TagSize<S>;
  /** @deprecated Will be removed in next major version */
  tag?: T | JSXElementConstructor<unknown>;
  /** @deprecated Will be removed in next major version */
  theme?: TagTheme;
}
