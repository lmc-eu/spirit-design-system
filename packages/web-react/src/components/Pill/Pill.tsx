import React, { ElementType } from 'react';
import { usePillStyleProps } from './usePillStyleProps';
import { SpiritPillProps } from '../../types';
import { filterProps } from '../../utils/filterProps';

const defaultProps = {
  color: 'selected',
};

export const Pill = <T extends ElementType = 'span'>(props: SpiritPillProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'span', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = usePillStyleProps(restProps);

  return (
    <ElementTag {...filterProps(modifiedProps)} className={classProps}>
      {children}
    </ElementTag>
  );
};

Pill.defaultProps = defaultProps;

export default Pill;
