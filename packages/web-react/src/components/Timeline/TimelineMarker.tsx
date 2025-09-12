'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritTimelineMarkerProps } from '../../types';
import { TIMELINE_MARKER } from './constants';
import { useTimelineStyleProps } from './useTimelineStyleProps';

const defaultProps: Partial<SpiritTimelineMarkerProps> = {
  variant: 'number',
};

const TimelineMarker = (props: SpiritTimelineMarkerProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { backgroundColor, borderColor, children, textColor, variant, ...restProps } = propsWithDefaults;
  const { classProps } = useTimelineStyleProps({
    markerBackgroundColor: backgroundColor,
    markerBorderColor: borderColor,
    markerTextColor: textColor,
    markerVariant: variant,
  });
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  return (
    <div
      {...otherProps}
      className={classNames(classProps.marker, styleProps.className)}
      style={styleProps.style}
      aria-hidden="true"
    >
      {variant !== TIMELINE_MARKER.DOT && children}
    </div>
  );
};

TimelineMarker.spiritComponent = 'TimelineMarker';

export default TimelineMarker;
