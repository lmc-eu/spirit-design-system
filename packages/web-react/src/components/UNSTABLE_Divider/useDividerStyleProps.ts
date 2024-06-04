import { useClassNamePrefix } from '../../hooks';
import { SpiritDividerProps } from '../../types';

export interface DividerStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: SpiritDividerProps;
}

export function useDividerStyleProps(props: SpiritDividerProps): DividerStyles {
  const DividerClass = useClassNamePrefix('UNSTABLE_Divider');

  return {
    classProps: DividerClass,
    props,
  };
}
