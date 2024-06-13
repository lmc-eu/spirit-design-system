import { ElementType, JSXElementConstructor } from 'react';
import { ChildrenProps, SizeExtendedDictionaryType, StyleProps, TransferProps } from './shared';

export type AvatarSize<S> = SizeExtendedDictionaryType<S> | S;

export interface AriaAvatarElementTypeProps<E extends ElementType = 'div'> {
  /**
   * The HTML element or React element used to render the Avatar, e.g. 'div', 'span'.
   *
   * @default 'div'
   */
  elementType?: E | JSXElementConstructor<unknown>;
}

export interface AvatarProps extends ChildrenProps, StyleProps, TransferProps {}

export interface SpiritAvatarProps<E extends ElementType = 'div', S = void>
  extends AriaAvatarElementTypeProps<E>,
    AvatarProps {
  /** Whether the Avatar should be square. */
  isSquare?: boolean;
  /** Size of the Avatar */
  size?: AvatarSize<S>;
}
