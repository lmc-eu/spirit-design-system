'use client';

import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritTruncateProps } from '../../types/truncate';
import { useTruncateStyleProps } from './useTruncateStyleProps';
import { mergeStyleProps } from '../../utils';

const defaultProps = {
  elementType: 'span',
};

const UNSTABLE_Truncate = <T extends ElementType = 'span'>(props: SpiritTruncateProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, elementType: ElementTag = 'span', ...restProps } = propsWithDefaults;
  const { classProps, props: modifiedProps, styleProps: truncateStyle } = useTruncateStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const truncateStyleProps = {
    style: {
      ...styleProps.style,
      ...truncateStyle,
    },
  };
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps, styleProps, truncateStyleProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

UNSTABLE_Truncate.spiritComponent = 'UNSTABLE_Truncate';

export default UNSTABLE_Truncate;
