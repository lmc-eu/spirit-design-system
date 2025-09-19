'use client';

import React, { type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritTimelineProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { useTimelineStyleProps } from './useTimelineStyleProps';

const defaultProps: Partial<SpiritTimelineProps> = {
  elementType: 'ol',
};

const Timeline = <T extends ElementType = 'ol'>(props: SpiritTimelineProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'ol', children, ...restProps } = propsWithDefaults;
  const { classProps } = useTimelineStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const mergedStyleProps = mergeStyleProps(ElementTag, { classProps: classProps.root, styleProps, otherProps });

  return (
    <ElementTag {...otherProps} {...mergedStyleProps}>
      {children}
    </ElementTag>
  );
};

Timeline.spiritComponent = 'Timeline';

export default Timeline;
