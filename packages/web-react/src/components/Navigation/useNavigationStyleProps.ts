import { useClassNamePrefix } from '../../hooks';

export interface NavigationStyles {
  classProps: string;
}

export const useNavigationStyleProps = () => {
  const navigationClass = useClassNamePrefix('Navigation');

  return {
    classProps: navigationClass,
  };
};
