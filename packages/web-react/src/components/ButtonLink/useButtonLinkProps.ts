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

export type UseButtonLinkProps = Partial<SpiritButtonLinkProps>;
export type UseButtonLinkReturn = {
  buttonLinkProps: UseButtonLinkProps;
};

export const useButtonLinkProps = (props: UseButtonLinkProps): UseButtonLinkReturn => {
  const { elementType, isDisabled, isLoading, onClick, href, target, rel } = props;

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
      onClick: (event) => handleClick(event as ClickEvent, isDisabled, onClick),
    },
  };
};
