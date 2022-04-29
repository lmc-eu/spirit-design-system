import React, { ElementType } from 'react';
import { useHeadingStyleProps } from './useHeadingStyleProps';
import { SpiritHeadingProps } from '../../types';
import { filterProps } from '../../utils/filterProps';

const defaultProps = {
  size: 'medium',
};

export const Heading = <T extends ElementType = 'div'>(props: SpiritHeadingProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useHeadingStyleProps(restProps);

  return (
    <ElementTag {...filterProps(modifiedProps)} className={classProps}>
      {children}
    </ElementTag>
  );
};

Heading.defaultProps = defaultProps;

export default Heading;
