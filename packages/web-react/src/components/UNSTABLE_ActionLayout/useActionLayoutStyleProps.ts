import { useClassNamePrefix } from '../../hooks';
import { SpiritActionLayoutProps } from '../../types/actionLayout';

export interface ActionLayoutStyles<T> {
  classProps: {
    root: string;
  };
  props: T;
}

export function useActionLayoutStyleProps(props: SpiritActionLayoutProps): ActionLayoutStyles<SpiritActionLayoutProps> {
  const actionLayoutClass = useClassNamePrefix('UNSTABLE_ActionLayout');

  return {
    classProps: {
      root: actionLayoutClass,
    },
    props,
  };
}
