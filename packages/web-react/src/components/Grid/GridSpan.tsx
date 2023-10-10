import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritGridSpanProps } from '../../types';
import { useGridSpanStyleProps } from './useGridSpanStyleProps';

export const GridSpan = <T extends ElementType = 'div'>(props: SpiritGridSpanProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useGridSpanStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default GridSpan;
