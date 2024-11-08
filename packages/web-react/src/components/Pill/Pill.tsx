'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPillProps, StyleProps } from '../../types';
import { usePillStyleProps } from './usePillStyleProps';

const defaultProps: Partial<SpiritPillProps> = {
  elementType: 'span',
  color: 'selected',
};

const Pill = <T extends ElementType = 'span', C = void>(props: SpiritPillProps<T, C>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps } = usePillStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps as StyleProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Pill;
