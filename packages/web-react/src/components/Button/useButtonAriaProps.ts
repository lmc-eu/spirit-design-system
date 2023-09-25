import { ClickEvent, SpiritButtonProps } from '../../types';

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
  const { isDisabled, isLoading, onClick, type = 'button', ariaLabel } = props;

  const additionalProps = {
    type,
    disabled: isDisabled || isLoading,
  };

  return {
    buttonProps: {
      ...additionalProps,
      onClick: (event) => handleClick(event, isDisabled, onClick),
      'aria-label': ariaLabel || undefined,
    },
  };
};
