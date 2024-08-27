import { ElementType } from 'react';
import {
  ActionButtonColorsDictionaryType,
  AriaLabelingProps,
  ChildrenProps,
  ClickEvents,
  EmotionColorsDictionaryType,
  SpiritPolymorphicElementPropsWithRef,
  SizesDictionaryType,
  StyleProps,
} from './shared';

export type ButtonColor<C> = ActionButtonColorsDictionaryType | EmotionColorsDictionaryType | C;
export type ButtonSize<S> = SizesDictionaryType | S;
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonBaseProps<C = void, S = void> extends ChildrenProps, StyleProps, AriaLabelingProps, ClickEvents {
  /** The color of the button. */
  color?: ButtonColor<C>;
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** Whether the button should be displayed with a block style. */
  isBlock?: boolean;
  /** Whether the button should be in a loading state. */
  isLoading?: boolean;
  /** Whether the button should be displayed as a square. */
  isSquare?: boolean;
  /** The size of the button. */
  size?: ButtonSize<S>;
}

export type ButtonProps<E extends ElementType, C = void, S = void> = {
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
  type?: ButtonType;
} & ButtonBaseProps<C, S>;

export type ButtonLinkProps<E extends ElementType, C = void, S = void> = {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'a'
   */
  elementType?: E;
} & ButtonBaseProps<C, S>;

export type SpiritButtonProps<E extends ElementType = 'button', C = void, S = void> = ButtonProps<E, C, S> &
  SpiritPolymorphicElementPropsWithRef<E, ButtonProps<E, C, S>>;

export type SpiritButtonLinkProps<E extends ElementType = 'a', C = void, S = void> = ButtonLinkProps<E, C, S> &
  SpiritPolymorphicElementPropsWithRef<E, ButtonLinkProps<E, C, S>>;
