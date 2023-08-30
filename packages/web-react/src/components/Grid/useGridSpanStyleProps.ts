/* eslint no-console: ["error", { allow: ["warn"] }] */
import { ElementType } from 'react';
import classNames from 'classnames';
import { SpiritGridSpanProps } from '../../types';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { useGridClasses } from './useGridClasses';

export interface GridSpanStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the grid element. */
  props: T;
}

export function useGridSpanStyleProps(
  props: SpiritGridSpanProps<ElementType>,
): GridSpanStyles<SpiritGridSpanProps<ElementType>> {
  const { over, ...restProps } = props;

  const gridSpanClass = useClassNamePrefix('Grid__span');
  const gridSpanOverClass = `${gridSpanClass}--over-${over}`;
  const { props: modifiedProps, classes: gridSpanClasses } = useGridClasses(gridSpanClass, restProps, 'over');
  const classes = classNames(gridSpanClass, { [gridSpanOverClass]: over }, gridSpanClasses);

  return {
    classProps: classes,
    props: modifiedProps,
  };
}
