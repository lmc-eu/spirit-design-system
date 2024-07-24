import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritGridProps } from '../../types';
import { useGridStyleProps } from './useGridStyleProps';

export const Grid = <T extends ElementType = 'div'>(props: SpiritGridProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps, styleProps: gridStyle } = useGridStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const gridStyleProps = {
    style: {
      ...styleProps.style,
      ...gridStyle,
    },
  };

  return (
    <ElementTag {...otherProps} {...gridStyleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Grid;
