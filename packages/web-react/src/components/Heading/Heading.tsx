import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { SpiritHeadingProps } from '../../types';
import { useHeadingStyleProps } from './useHeadingStyleProps';

const defaultProps = {
  size: 'medium',
};

export const Heading = <T extends ElementType = 'div'>(props: SpiritHeadingProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useHeadingStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Heading.defaultProps = defaultProps;

export default Heading;
