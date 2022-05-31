import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { SpiritPillProps } from '../../types';

export interface PillStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: unknown;
}

export function usePillStyleProps<T extends ElementType = 'span'>(props: SpiritPillProps<T>): PillStyles {
  const { color, ...modifiedProps } = props;

  const pillClass = useClassNamePrefix('Pill');
  const pillColorClass = `${pillClass}--${color}`;
  const classProps = classNames(pillClass, { [pillColorClass]: color });

  return {
    classProps,
    props: modifiedProps,
  };
}
