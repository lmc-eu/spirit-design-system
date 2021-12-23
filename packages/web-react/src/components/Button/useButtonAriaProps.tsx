import { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, HTMLAttributes } from 'react';
import { ClickEvent, AriaButtonProps } from '../../types';

export interface ButtonAria<T> {
  /** Props for the button element. */
  buttonProps: T;
}

export function useButtonAriaProps(props: AriaButtonProps<'a'>): ButtonAria<AnchorHTMLAttributes<HTMLAnchorElement>>;
export function useButtonAriaProps(
  props: AriaButtonProps<'button'>,
): ButtonAria<ButtonHTMLAttributes<HTMLButtonElement>>;
export function useButtonAriaProps(props: AriaButtonProps<ElementType>): ButtonAria<HTMLAttributes<HTMLElement>>;

export function useButtonAriaProps(props: AriaButtonProps<ElementType>): ButtonAria<HTMLAttributes<unknown>> {
  const { elementType = 'button', disabled, onClick, href, target, rel, type = 'button', ariaLabel } = props;

  let additionalProps;
  if (elementType === 'button') {
    additionalProps = {
      type,
      disabled,
    };
  } else {
    additionalProps = {
      role: 'button',
      href: elementType === 'a' && disabled ? undefined : href,
      target: elementType === 'a' ? target : undefined,
      type: elementType === 'a' && type === 'button' ? undefined : type,
      disabled,
      rel: elementType === 'a' ? rel : undefined,
    };
  }

  const handleClick = (event: ClickEvent) => {
    if (disabled) {
      event.preventDefault();

      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  return {
    buttonProps: {
      ...additionalProps,
      onClick: handleClick,
      'aria-label': ariaLabel || undefined,
    },
  };
}
