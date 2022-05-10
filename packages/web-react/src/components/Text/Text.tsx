import React, { ElementType } from 'react';
import classNames from 'classnames';
import { useTextStyleProps } from './useTextStyleProps';
import { SpiritTextProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';

const defaultProps = {
  size: 'medium',
};

export const Text = <T extends ElementType = 'p'>(props: SpiritTextProps<T>): JSX.Element => {
  const { elementType: ElementTag = 'p', children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useTextStyleProps(restProps);
  const { styleProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

Text.defaultProps = defaultProps;

export default Text;
