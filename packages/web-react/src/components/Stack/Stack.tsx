'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritStackProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useStackStyleProps } from './useStackStyleProps';

const defaultProps: SpiritStackProps = {
  elementType: 'div',
  hasSpacing: false,
  hasEndDivider: false,
  hasIntermediateDividers: false,
  hasStartDivider: false,
};

const Stack = <T extends ElementType = 'div'>(props: SpiritStackProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    elementType: ElementTag = defaultProps.elementType as ElementType,
    children,
    ...restProps
  } = propsWithDefaults;
  const { classProps, props: modifiedProps, styleProps: stackStyle } = useStackStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps({ ElementTag, ...modifiedProps });
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, stackStyle, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Stack.spiritComponent = 'Stack';

export default Stack;
