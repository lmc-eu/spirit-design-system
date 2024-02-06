import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTextProps } from '../../types';
import { useTextStyleProps } from './useTextStyleProps';

const defaultProps: Partial<SpiritTextProps> = {
  elementType: 'p',
  size: 'medium',
};

export const Text = <T extends ElementType = 'p', S = void>(props: SpiritTextProps<T, S>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useTextStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Text;
