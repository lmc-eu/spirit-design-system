import { type ElementType } from 'react';
import {
  type ChildrenProps,
  type SizeExtendedDictionaryType,
  type SpiritPolymorphicComponentPropWithRef,
  type StyleProps,
} from './shared';

export type AvatarSize<S> = SizeExtendedDictionaryType<S> | S;

export interface AvatarBaseProps extends ChildrenProps, StyleProps {}

export interface AvatarStyleProps<S = void> extends AvatarBaseProps {
  /**
   * Whether the Avatar should be square.
   *
   * @default false
   */
  isSquare?: boolean;
  /**
   * Size of the Avatar
   *
   * @default SizesExtended.MEDIUM
   */
  size?: AvatarSize<S>;
}

export type AvatarProps<S = void> = AvatarStyleProps<S>;

export type SpiritAvatarProps<E extends ElementType = 'div', S = void> = SpiritPolymorphicComponentPropWithRef<
  E,
  AvatarProps<S>
>;
