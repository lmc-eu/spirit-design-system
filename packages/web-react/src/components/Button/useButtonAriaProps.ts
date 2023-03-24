import { ClickEvent, SpiritButtonProps, SpiritButtonLinkProps } from '../../types';

const handleClick = (event: ClickEvent, isDisabled?: boolean, onClick?: (event: ClickEvent) => void) => {
  if (isDisabled) {
    event.preventDefault();

    return;
  }

  if (onClick) {
    onClick(event);
  }
};

export type UseButtonAriaProps = Partial<SpiritButtonProps>;
export type UseButtonAriaReturn = {
  buttonProps: UseButtonAriaProps;
};

export const useButtonAriaProps = (props: UseButtonAriaProps): UseButtonAriaReturn => {
  const { isDisabled, onClick, type = 'button', ariaLabel } = props;

  const additionalProps = {
    type,
    disabled: isDisabled,
  };

  return {
    buttonProps: {
      ...additionalProps,
      onClick: (event) => handleClick(event, isDisabled, onClick),
      'aria-label': ariaLabel || undefined,
    },
  };
};

export type UseButtonLinkAriaProps = Partial<SpiritButtonLinkProps>;
export type UseButtonLinkAriaReturn = {
  buttonLinkProps: UseButtonLinkAriaProps;
};

export const useButtonLinkAriaProps = (props: UseButtonLinkAriaProps): UseButtonLinkAriaReturn => {
  const { elementType, isDisabled, onClick, href, target, rel, ariaLabel } = props;

  const additionalProps = {
    role: 'button',
    href: elementType === 'a' && isDisabled ? undefined : href,
    target: elementType === 'a' ? target : undefined,
    disabled: isDisabled,
    rel: elementType === 'a' ? rel : undefined,
  };

  return {
    buttonLinkProps: {
      ...additionalProps,
      onClick: (event) => handleClick(event, isDisabled, onClick),
      'aria-label': ariaLabel || undefined,
    },
  };
};
