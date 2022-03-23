import React, { ElementType } from 'react';
import { useGridStyleProps } from './useGridStyleProps';
import { SpiritGridProps } from '../../types';

export const Grid = <T extends ElementType = 'div'>(props: SpiritGridProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useGridStyleProps(restProps);

  return (
    <ElementTag {...modifiedProps} className={classProps}>
      {children}
    </ElementTag>
  );
};

export default Grid;
