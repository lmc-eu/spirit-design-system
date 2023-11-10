/* eslint no-console: ["error", { allow: ["warn"] }] */
import { ElementType } from 'react';
import classNames from 'classnames';
import { useClassNamePrefix, useDeprecationMessage } from '../../hooks';
import { SpiritGridProps } from '../../types';
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
  const { props: modifiedProps, classes: gridClasses } = useGridClasses(gridClass, restProps, 'cols');

  useDeprecationMessage({
    method: 'property',
    trigger: !!restProps.tablet,
    componentName: 'Grid',
    propertyProps: {
      deprecatedName: 'tablet',
      newName: 'cols',
    },
  });

  useDeprecationMessage({
    method: 'property',
    trigger: !!restProps.desktop,
    componentName: 'Grid',
    propertyProps: {
      deprecatedName: 'desktop',
      newName: 'cols',
    },
  });

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
  const classes = classNames(gridClass, { [gridColsClass]: cols }, gridClasses);

  return {
    classProps: classes,
    props: modifiedProps,
  };
}
