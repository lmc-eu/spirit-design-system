import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritVisuallyHiddenProps, VisuallyHiddenProps } from '../../types';

export interface VisuallyHiddenStyles<T extends ElementType = 'span'> {
  /** className props */
  classProps: string | null;
  /** props to be passed to the element */
  props: VisuallyHiddenProps<T>;
}

export function useVisuallyHiddenProps<T extends ElementType = 'span'>(
  props: SpiritVisuallyHiddenProps<T>,
): VisuallyHiddenStyles<T> {
  const { ...restProps } = props;

  const visuallyHiddenClass = useClassNamePrefix('accessibility-hidden');

  return {
    classProps: visuallyHiddenClass,
    props: restProps,
  };
}
