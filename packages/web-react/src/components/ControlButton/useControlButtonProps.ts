import { type ClickEvent, type SpiritControlButtonProps } from '../../types';

const handleClick = (event: ClickEvent, isDisabled?: boolean, onClick?: (event: ClickEvent) => void) => {
  if (isDisabled) {
    event.preventDefault();

    return;
  }

  if (onClick) {
    onClick(event);
  }
};

export type UseControlButtonProps = Partial<SpiritControlButtonProps>;
export type UseControlButtonReturn = {
  controlButtonProps: UseControlButtonProps;
};

export const useControlButtonProps = (props: UseControlButtonProps): UseControlButtonReturn => {
  const { isDisabled, onClick, type = 'button' } = props;

  const additionalProps = {
    type,
    disabled: isDisabled,
  };

  return {
    controlButtonProps: {
      ...additionalProps,
      onClick: (event) => handleClick(event as ClickEvent, isDisabled, onClick),
    },
  };
};
