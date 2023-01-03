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
  const { elementType = 'button', isDisabled, onClick, href, target, rel, type = 'button', ariaLabel } = props;

  let additionalProps;
  if (elementType === 'button') {
    additionalProps = {
      type,
      disabled: isDisabled,
    };
  } else {
    additionalProps = {
      role: 'button',
      href: elementType === 'a' && isDisabled ? undefined : href,
      target: elementType === 'a' ? target : undefined,
      type: elementType === 'a' && type === 'button' ? undefined : type,
      disabled: isDisabled,
      rel: elementType === 'a' ? rel : undefined,
    };
  }

  const handleClick = (event: ClickEvent) => {
    if (isDisabled) {
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
