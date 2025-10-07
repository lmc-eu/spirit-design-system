'use client';

import React, { type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritTruncateProps, TruncateModes } from '../../types/truncate';
import { mergeStyleProps } from '../../utils';
import { useTruncateStyleProps } from './useTruncateStyleProps';
import { useTruncateText } from './useTruncateText';

const defaultProps = {
  elementType: 'span',
};

const UNSTABLE_Truncate = <T extends ElementType = 'span'>(props: SpiritTruncateProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, elementType: ElementTag = 'span', ...restProps } = propsWithDefaults;
  const {
    classProps,
    props: modifiedProps,
    styleProps: truncateStyle,
    effectiveMode,
    effectiveLimit,
  } = useTruncateStyleProps(restProps);
  const truncatedChildren = useTruncateText(
    children,
    effectiveMode,
    effectiveMode !== TruncateModes.LINES ? effectiveLimit : undefined,
  );
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
      {truncatedChildren}
    </ElementTag>
  );
};

UNSTABLE_Truncate.spiritComponent = 'UNSTABLE_Truncate';

export default UNSTABLE_Truncate;
