import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritAlertProps, AlertProps } from '../../types';

export interface AlertStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: AlertProps;
}

export function useAlertStyleProps<T extends ElementType = 'div', E = void>(
  props: SpiritAlertProps<T, E>,
): AlertStyles {
  const { color, isCentered, ...modifiedProps } = props;

  const alertClass = useClassNamePrefix('Alert');
  const alertColorClass = `${alertClass}--${color}`;
  const alertCenteredClass = `${alertClass}--center`;
  const classProps = classNames(alertClass, {
    [alertColorClass]: color,
    [alertCenteredClass]: isCentered,
  });

  return {
    classProps,
    props: modifiedProps,
  };
}
