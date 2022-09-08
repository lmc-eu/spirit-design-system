/* eslint no-console: ["error", { allow: ["warn"] }] */
import { ElementType } from 'react';
import classNames from 'classnames';
import { SpiritBreakpoints, SpiritGridProps } from '../../types';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';

export interface GridStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the grid element. */
  props: T;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TS7053: Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'typeof SpiritBreakpoints'.
const gridBreakpoints = Object.keys(SpiritBreakpoints).map((breakpoint) => SpiritBreakpoints[breakpoint as unknown]);

const getGridClasses = (
  className: string,
  props: SpiritGridProps<ElementType>,
  breakpoints: string[] = gridBreakpoints,
) => {
  const gridClasses: string[] = [];

  breakpoints.forEach((breakpoint) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<GridProps>'.
    const variant = props[breakpoint];

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<GridProps>'.
    delete props[breakpoint];

    if (!variant && variant !== '') {
      return;
    }

    gridClasses.push(`${className}--${breakpoint}--cols-${variant}`);
  });

  return {
    gridClasses,
    props,
  };
};

export function useGridStyleProps(props: SpiritGridProps<ElementType>): GridStyles<SpiritGridProps<ElementType>> {
  const { cols, ...restProps } = props;

  const gridClass = useClassNamePrefix('Grid');
  const gridColsClass = `${gridClass}--cols-${cols}`;
  const { props: modifiedProps, gridClasses } = getGridClasses(gridClass, restProps);
  const classes = classNames(gridClass, { [gridColsClass]: cols }, gridClasses);

  return {
    classProps: classes,
    props: modifiedProps,
  };
}
