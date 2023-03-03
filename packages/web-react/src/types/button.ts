import { ElementType, JSXElementConstructor, Ref } from 'react';
import {
  ActionColorsDictionaryType,
  AriaLabelingProps,
  ChildrenProps,
  ClickEvents,
  EmotionColorsDictionaryType,
  SizesDictionaryType,
  SizeExtendedDictionaryType,
  StyleProps,
  TransferProps,
} from './shared';

export type ButtonColor<C> = ActionColorsDictionaryType | EmotionColorsDictionaryType | C;
export type ButtonSize<S> = SizesDictionaryType | SizeExtendedDictionaryType | S;
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps<C = void, S = void> extends ChildrenProps, ClickEvents {
  /** Whether the button is disabled. */
  isDisabled?: boolean;
  /** The color of the button. */
  color?: ButtonColor<C>;
  /** Whether the button should be displayed with a block style. */
  isBlock?: boolean;
  /** Whether the button should be displayed as a square. */
  isSquare?: boolean;
  /** The size of the button. */
  size?: ButtonSize<S>;
}

export interface AriaButtonElementTypeProps<T extends ElementType = 'button'> {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   *
   * @default 'button'
   */
  elementType?: T | JSXElementConstructor<unknown>;
}

export interface LinkButtonProps<T extends ElementType = 'a'> extends AriaButtonElementTypeProps<T> {
  /** A URL to link to if elementType="a". */
  href?: string;
  /** The target window for the link. */
  target?: string;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
}

interface AriaBaseButtonProps extends AriaLabelingProps {
  /**
   * The behavior of the button when used in an HTML form.
   *
   * @default 'button'
   */
  type?: ButtonType;
}

export interface AriaButtonProps<T extends ElementType = 'button', C = void, S = void>
  extends ButtonProps<C, S>,
    LinkButtonProps<T>,
    AriaBaseButtonProps {}

export interface SpiritButtonProps<T extends ElementType = 'button', C = void, S = void>
  extends AriaBaseButtonProps,
    AriaButtonElementTypeProps<T>,
    ButtonProps<C, S>,
    StyleProps,
    TransferProps {
  // tag?: ElementType;
  innerRef?: Ref<HTMLButtonElement>;
}

export interface SpiritButtonLinkProps<T extends ElementType = 'a', C = void, S = void>
  extends SpiritButtonProps<T, C, S>,
    LinkButtonProps<T> {}
