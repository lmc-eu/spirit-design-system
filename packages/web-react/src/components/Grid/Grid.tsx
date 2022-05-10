import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks/styleProps';
import { useGridStyleProps } from './useGridStyleProps';
import { SpiritGridProps } from '../../types';

export const Grid = <T extends ElementType = 'div'>(props: SpiritGridProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useGridStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Grid;
