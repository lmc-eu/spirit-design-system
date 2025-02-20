'use client';

import React, { ElementType } from 'react';
import { Emphasis, SizesExtended } from '../../constants';
import { useStyleProps } from '../../hooks';
import { SpiritTextProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useTextStyleProps } from './useTextStyleProps';

const defaultProps: Partial<SpiritTextProps> = {
  elementType: 'p',
  emphasis: Emphasis.REGULAR,
  size: SizesExtended.MEDIUM,
};

const Text = <T extends ElementType = 'p', S = void>(props: SpiritTextProps<T, S>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'p', children, ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps } = useTextStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Text.spiritComponent = 'Text';

export default Text;
