import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTextProps } from '../../types';
import { useTextStyleProps } from './useTextStyleProps';

const defaultProps = {
  size: 'medium',
};

export const Text = <T extends ElementType = 'p', S = void>(props: SpiritTextProps<T, S>): JSX.Element => {
  const { elementType: ElementTag = 'p', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useTextStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Text.defaultProps = defaultProps;

export default Text;
