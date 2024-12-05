import { useClassNamePrefix } from '../../hooks';
import { SpiritHeaderProps } from '../../types';

export interface HeaderStyles<T> {
  classProps: {
    root: string;
    logo: string;
  };
  props: T;
}

export const useHeaderStyleProps = (props: SpiritHeaderProps): HeaderStyles<SpiritHeaderProps> => {
  const headerClass = useClassNamePrefix('UNSTABLE_Header');
  const headerLogoClass = 'UNSTABLE_HeaderLogo';

  return {
    classProps: {
      root: headerClass,
      logo: headerLogoClass,
    },
    props,
  };
};
