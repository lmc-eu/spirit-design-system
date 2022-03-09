import React, { ElementType } from 'react';
import { useTextStyleProps } from './useTextStyleProps';
import { SpiritTextProps } from '../../types';
import { filterProps } from '../../utils/filterProps';

const defaultProps = {
  size: 'medium',
  emphasis: 'regular',
};

export const Text = <T extends ElementType = 'p'>(props: SpiritTextProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'p', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useTextStyleProps(restProps);

  return (
    <ElementTag {...filterProps(modifiedProps)} className={classProps}>
      {children}
    </ElementTag>
  );
};

Text.defaultProps = defaultProps;

export default Text;
