/* eslint no-console: ["error", { allow: ["warn"] }] */
import { ElementType } from 'react';
import classNames from 'classnames';
import { SpiritGridProps } from '../../types';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { useGridClasses } from './useGridClasses';

export interface GridStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the grid element. */
  props: T;
}

export function useGridStyleProps(props: SpiritGridProps<ElementType>): GridStyles<SpiritGridProps<ElementType>> {
  const { cols, ...restProps } = props;

  const gridClass = useClassNamePrefix('Grid');
  const gridColsClass = `${gridClass}--cols-${cols}`;
  const { props: modifiedProps, classes: gridClasses } = useGridClasses(gridClass, restProps, 'cols');
  const classes = classNames(gridClass, { [gridColsClass]: cols }, gridClasses);

  return {
    classProps: classes,
    props: modifiedProps,
  };
}
