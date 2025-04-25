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

export type UseButtonProps = Partial<SpiritButtonProps>;
export type UseButtonReturn = {
  buttonProps: UseButtonProps;
};

export const useButtonProps = (props: UseButtonProps): UseButtonReturn => {
  const { isDisabled, isLoading, onClick, type = 'button' } = props;

  const additionalProps = {
    type,
    disabled: isDisabled || isLoading,
  };

  return {
    buttonProps: {
      ...additionalProps,
      onClick: (event) => handleClick(event as ClickEvent, isDisabled, onClick),
    },
  };
};
