import { useClick } from '../../hooks';
import { type SpiritControlButtonProps } from '../../types';

export type UseControlButtonProps = Partial<SpiritControlButtonProps>;
export type UseControlButtonReturn = {
  controlButtonProps: UseControlButtonProps;
};

export const useControlButtonProps = (props: UseControlButtonProps): UseControlButtonReturn => {
  const { isDisabled, onClick, type = 'button' } = props;
  const handleClick = useClick(isDisabled, onClick);

  const additionalProps = {
    type,
    disabled: isDisabled,
  };

  return {
    controlButtonProps: {
      ...additionalProps,
      onClick: handleClick,
    },
  };
};
