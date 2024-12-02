import { useClassNamePrefix } from '../../hooks';
import { SpiritNavigationProps } from '../../types';

export interface NavigationStyles<T> {
  classProps: string;
  props: T;
}

export const useNavigationStyleProps = (props: SpiritNavigationProps): NavigationStyles<SpiritNavigationProps> => {
  const navigationClass = useClassNamePrefix('Navigation');

  return {
    classProps: navigationClass,
    props,
  };
};
