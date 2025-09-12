'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritTimelineContentProps } from '../../types';
import { useTimelineStyleProps } from './useTimelineStyleProps';

const TimelineContent = (props: SpiritTimelineContentProps) => {
  const { children, ...restProps } = props;
  const { classProps } = useTimelineStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} className={classNames(classProps.content, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

TimelineContent.spiritComponent = 'TimelineContent';

export default TimelineContent;
