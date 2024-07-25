'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritStackProps } from '../../types';
import { useStackStyleProps } from './useStackStyleProps';

const defaultProps: SpiritStackProps = {
  elementType: 'div',
  hasSpacing: false,
  hasEndDivider: false,
  hasIntermediateDividers: false,
  hasStartDivider: false,
};

export const Stack = <T extends ElementType = 'div'>(props: SpiritStackProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps, styleProps: stackStyle } = useStackStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const stackStyleProps = {
    style: {
      ...styleProps.style,
      ...stackStyle,
    },
  };

  return (
    <ElementTag {...otherProps} {...stackStyleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Stack;
