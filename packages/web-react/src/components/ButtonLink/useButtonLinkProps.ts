import { useClick } from '../../hooks';
import { type SpiritButtonLinkProps } from '../../types';

export type UseButtonLinkProps = Partial<SpiritButtonLinkProps>;
export type UseButtonLinkReturn = {
  buttonLinkProps: UseButtonLinkProps;
};

export const useButtonLinkProps = (props: UseButtonLinkProps): UseButtonLinkReturn => {
  const { elementType, isDisabled, isLoading, onClick, href, target, rel } = props;
  const handleClick = useClick(isDisabled, onClick);

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
      onClick: handleClick,
    },
  };
};
