import { ElementType } from 'react';
import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritGridProps } from '../../types';

export interface GridStyles<T> {
  /** className props */
  classProps: string;
  /** Props for the grid element. */
  props: T;
}

export function useGridStyleProps(props: SpiritGridProps<ElementType>): GridStyles<SpiritGridProps<ElementType>> {
  const { cols, ...restProps } = props;

  const gridClass = useClassNamePrefix('Grid');

  if (typeof cols === 'object' && cols !== null) {
    const classes: string[] = [];
    Object.keys(cols).forEach((key) => {
      const infix = key === 'mobile' ? '' : `--${key}`;
      classes.push(`${gridClass}${infix}--cols-${cols[key as keyof typeof cols]}`);
    });

    return {
      classProps: classNames(gridClass, classes),
      props: restProps,
    };
  }
  const gridColsClass = `${gridClass}--cols-${cols}`;
  const classes = classNames(gridClass, { [gridColsClass]: cols });

  return {
    classProps: classes,
    props: restProps,
  };
}
