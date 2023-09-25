import { ClickEvent, SpiritButtonLinkProps } from '../../types';

const handleClick = (event: ClickEvent, isDisabled?: boolean, onClick?: (event: ClickEvent) => void) => {
  if (isDisabled) {
    event.preventDefault();

    return;
  }

  if (onClick) {
    onClick(event);
  }
};

export type UseButtonLinkAriaProps = Partial<SpiritButtonLinkProps>;
export type UseButtonLinkAriaReturn = {
  buttonLinkProps: UseButtonLinkAriaProps;
};

export const useButtonLinkAriaProps = (props: UseButtonLinkAriaProps): UseButtonLinkAriaReturn => {
  const { elementType, isDisabled, isLoading, onClick, href, target, rel, ariaLabel } = props;

  const additionalProps = {
    role: 'button',
    href: elementType === 'a' && isDisabled ? undefined : href,
    target: elementType === 'a' ? target : undefined,
    disabled: isDisabled || isLoading,
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
