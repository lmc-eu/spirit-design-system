import { ElementType, JSXElementConstructor, Ref } from 'react';
import { AriaLabelingProps } from './shared/dom';
import { ChildrenProps, ClickEvents, StyleProps } from './shared';

export type ButtonColor = 'primary' | 'secondary' | 'tertiary';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends ChildrenProps, ClickEvents {
  /** Whether the button is disabled. */
  disabled?: boolean;
}

export interface AriaButtonElementTypeProps<T extends ElementType = 'button'> {
  /**
   * The HTML element or React element used to render the button, e.g. 'div', 'a', or `RouterLink`.
   * @default 'button'
   */
  elementType?: T | JSXElementConstructor<any>;
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
   * @default 'button'
   */
  type?: ButtonType;
}

export interface AriaButtonProps<T extends ElementType = 'button'>
  extends ButtonProps,
    LinkButtonProps<T>,
    AriaBaseButtonProps {}

export interface SpiritButtonProps<T extends ElementType = 'button'>
  extends AriaBaseButtonProps,
    ButtonProps,
    LinkButtonProps<T>,
    StyleProps {
  /** The color of the button. */
  color: ButtonColor;
  /** Whether the button should be displayed with a block style. */
  block: boolean;
  // tag?: ElementType;
  innerRef?: Ref<HTMLButtonElement>;
}

/* export interface SpiritButtonLinkProps<T extends ElementType = 'a'> extends SpiritButtonProps {
  innerRef?: Ref<HTMLAnchorElement>;
} */
