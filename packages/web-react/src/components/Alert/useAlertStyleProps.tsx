import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { SpiritAlertProps } from '../../types';

export interface AlertStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: unknown;
}

export function useAlertStyleProps<T extends ElementType = 'div'>(props: SpiritAlertProps<T>): AlertStyles {
  const { color, ...modifiedProps } = props;

  const alertClass = useClassNamePrefix('Alert');
  const alertColorClass = `${alertClass}--${color}`;
  const classProps = classNames(alertClass, { [alertColorClass]: color });

  return {
    classProps,
    props: modifiedProps,
  };
}
