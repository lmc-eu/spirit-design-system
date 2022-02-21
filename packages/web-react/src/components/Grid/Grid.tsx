import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useGridStyleProps } from './useGridStyleProps';
import { SpiritGridProps } from '../../types';

export const Grid = <T extends ElementType = 'div'>(props: SpiritGridProps<T>): JSX.Element => {
  const { className, elementType: ElementType = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useGridStyleProps(restProps);
  const classes = classNames(className, classProps);

  return (
    <ElementType {...modifiedProps} className={classes}>
      {children}
    </ElementType>
  );
};

export default Grid;
