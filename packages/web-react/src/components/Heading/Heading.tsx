'use client';

import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritHeadingProps } from '../../types';
import { useHeadingStyleProps } from './useHeadingStyleProps';

const defaultProps: Partial<SpiritHeadingProps<ElementType, void, void>> = {
  emphasis: 'bold',
  size: 'medium',
};

export const Heading = <T extends ElementType, S = void, E = void>(props: SpiritHeadingProps<T, S, E>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag, children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useHeadingStyleProps({ ...restProps, elementType: ElementTag });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...otherProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default Heading;
