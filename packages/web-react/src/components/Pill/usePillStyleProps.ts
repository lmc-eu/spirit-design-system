import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { SpiritPillProps } from '../../types';

export interface PillStyles<T extends ElementType = 'span', C = void> {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: Partial<SpiritPillProps<T, C>>;
}

export function usePillStyleProps<T extends ElementType = 'span', C = void>(
  props: SpiritPillProps<T, C>,
): PillStyles<T, C> {
  const { color, ...modifiedProps } = props;

  const pillClass = useClassNamePrefix('Pill');
  const pillColorClass = `${pillClass}--${color}`;
  const classProps = classNames(pillClass, { [pillColorClass]: color });

  return {
    classProps,
    props: modifiedProps,
  };
}
