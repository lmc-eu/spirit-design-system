import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useHeadingStyleProps } from './useHeadingStyleProps';
import { SpiritHeadingProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';

const defaultProps = {
  size: 'medium',
};

export const Heading = <T extends ElementType = 'div'>(props: SpiritHeadingProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useHeadingStyleProps(restProps);
  const { styleProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Heading.defaultProps = defaultProps;

export default Heading;
