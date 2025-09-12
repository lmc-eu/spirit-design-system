'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritTimelineHeadingProps } from '../../types';
import { useTimelineStyleProps } from './useTimelineStyleProps';

const TimelineHeading = (props: SpiritTimelineHeadingProps) => {
  const { children, ...restProps } = props;
  const { classProps } = useTimelineStyleProps();
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div {...otherProps} className={classNames(classProps.heading, styleProps.className)} style={styleProps.style}>
      {children}
    </div>
  );
};

TimelineHeading.spiritComponent = 'TimelineHeading';

export default TimelineHeading;
