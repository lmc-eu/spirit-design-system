import { useClick } from '../../hooks';
import { type SpiritButtonProps } from '../../types';

export type UseButtonProps = Partial<SpiritButtonProps>;
export type UseButtonReturn = {
  buttonProps: UseButtonProps;
};

export const useButtonProps = (props: UseButtonProps): UseButtonReturn => {
  const { isDisabled, isLoading, onClick, type = 'button' } = props;
  const handleClick = useClick(isDisabled, onClick);

  const additionalProps = {
    type,
    disabled: isDisabled || isLoading,
  };

  return {
    buttonProps: {
      ...additionalProps,
      onClick: handleClick,
    },
  };
};
