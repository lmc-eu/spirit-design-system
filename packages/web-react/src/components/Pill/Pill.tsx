'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritPillProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { usePillStyleProps } from './usePillStyleProps';

const defaultProps: Partial<SpiritPillProps> = {
  elementType: 'span',
  color: 'selected',
};

const Pill = <T extends ElementType = 'span', C = void>(props: SpiritPillProps<T, C>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'span', children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = usePillStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Pill.spiritComponent = 'Pill';

export default Pill;
