import { SpiritNavigationActionProps } from '../../types';

export type UseNavigationActionProps = Partial<SpiritNavigationActionProps>;

export type UseNavigationActionReturn = {
  navigationActionProps: UseNavigationActionProps;
};

export const useNavigationActionProps = (props: UseNavigationActionProps): UseNavigationActionReturn => {
  const { elementType = 'a', isDisabled, href, target, rel } = props;

  const navigationActionProps: Partial<SpiritNavigationActionProps> = {
    href: elementType === 'a' && !isDisabled ? href : undefined,
    target: elementType === 'a' && !isDisabled ? target : undefined,
    rel: elementType === 'a' ? rel : undefined,
  };

  return {
    navigationActionProps,
  };
};
