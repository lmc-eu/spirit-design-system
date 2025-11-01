import { type ComponentPropsWithRef, type ElementType } from 'react';
import type { ChildrenProps, ClickEvents, SizesDictionaryType, StyleProps } from './shared';

/** @deprecated "SizesDictionaryType" fallback will be removed in the next major version. */
export type ControlButtonSize<S> = keyof S extends never ? SizesDictionaryType : 'small' | 'medium' | 'large' | S;
export type ControlButtonType = 'button' | 'submit' | 'reset';

export interface ControlButtonBaseProps<S = void> extends ChildrenProps, StyleProps, ClickEvents {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** Whether the button is in a subtle variant (without border). */
  isSubtle?: boolean;
  /** Whether the button should be symmetrical. */
  isSymmetrical?: boolean;
  /** The size of the button. */
  size?: ControlButtonSize<S>;
}

export type ControlButtonProps<E extends ElementType, S = void> = {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'button'
   */
  elementType?: E;
  /**
   * The behavior of the button when used in an HTML form.
   *
   * @default 'button'
   */
  type?: ControlButtonType;
} & ControlButtonBaseProps<S>;

export type SpiritControlButtonProps<E extends ElementType = 'button', S = void> = ControlButtonProps<E, S> &
  ComponentPropsWithRef<E>;
