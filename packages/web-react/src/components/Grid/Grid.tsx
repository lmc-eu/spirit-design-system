import React, { ElementType } from 'react';
import classNames from 'classnames';
import { WithChildren } from '../../types/main';
import { applyClassNamePrefix } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';

enum GridVariant {
  XS = 1,
  SM = 2,
  MD = 3,
  LG = 4,
  XL = 6,
  XXL = 12,
}

const gridBreakpoints = ['mobile', 'tablet', 'desktop'];

export interface GridProps extends WithChildren {
  tag: ElementType;
  className?: string;
  mobile: GridVariant;
  tablet: GridVariant;
  desktop: GridVariant;
  narrow?: boolean;
}

const getGridClasses = (className: string, props: Partial<GridProps>, breakpoints: string[] = gridBreakpoints) => {
  const gridClasses: string[] = [];

  breakpoints.forEach((breakpoint) => {
    // @ts-ignore TS7053: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Partial<GridProps>'.
    const variant = props[breakpoint];

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

const defaultProps = {
  tag: 'div',
};

export const Grid = ({ tag: Tag, className, narrow, children, ...restProps }: GridProps): JSX.Element => {
  const gridClass = 'Grid';
  const classNamePrefix = useClassNamePrefix();
  const mainClassName = applyClassNamePrefix(classNamePrefix)(gridClass);
  const { props: modifiedProps, gridClasses } = getGridClasses(mainClassName, restProps);
  const classes = classNames(mainClassName, gridClasses, { 'Grid--narrow': narrow }, className);

  return (
    <Tag {...modifiedProps} className={classes}>
      {children}
    </Tag>
  );
};

Grid.defaultProps = defaultProps;

export default Grid;
