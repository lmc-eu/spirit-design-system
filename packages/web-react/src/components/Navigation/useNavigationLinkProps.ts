import { SpiritNavigationLinkProps } from '../../types';

export type UseNavigationLinkProps = Partial<SpiritNavigationLinkProps>;

export type UseNavigationLinkReturn = {
  navigationLinkProps: UseNavigationLinkProps;
};

export const useNavigationLinkProps = (props: UseNavigationLinkProps): UseNavigationLinkReturn => {
  const { elementType = 'a', isDisabled, href, target, rel } = props;

  const navigationLinkProps: Partial<SpiritNavigationLinkProps> = {
    href: elementType === 'a' && !isDisabled ? href : undefined,
    target: elementType === 'a' && !isDisabled ? target : undefined,
    rel: elementType === 'a' ? rel : undefined,
  };

  return {
    navigationLinkProps,
  };
};
