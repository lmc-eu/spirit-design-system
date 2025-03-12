import { SpiritNavigationActionProps } from '../../types';

export type UseNavigationActionProps = Partial<SpiritNavigationActionProps>;

export type UseNavigationActionReturn = {
  navigationActionProps: UseNavigationActionProps;
};

export const useNavigationActionProps = (props: UseNavigationActionProps): UseNavigationActionReturn => {
  const { isDisabled, href, target, rel } = props;

  const navigationActionProps: Partial<SpiritNavigationActionProps> = {
    href: isDisabled ? undefined : href,
    target: isDisabled ? undefined : target,
    rel: isDisabled ? undefined : rel,
  };

  return {
    navigationActionProps,
  };
};
