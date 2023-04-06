import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpinnerProps, SpiritSpinnerProps } from '../../types';

export interface SpinnerStyles {
  /** className props */
  classProps: string | null;
  /** props to be passed to the element */
  props: SpinnerProps;
}

export function useSpinnerStyleProps<C = undefined>(props: SpiritSpinnerProps<C>): SpinnerStyles {
  const { color, ...restProps } = props;

  const spinnerClass = useClassNamePrefix('text');
  const spinnerColorClass = color ? `${spinnerClass}-${color}` : '';
  const spinnerAnimation = useClassNamePrefix('animation-spin-clockwise');

  const className = classNames(spinnerColorClass, spinnerAnimation);

  return {
    classProps: className,
    props: restProps,
  };
}
