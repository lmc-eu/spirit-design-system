import React from 'react';
import { TIMELINE_MARKER } from '../constants';
import { RESPONSIVE_SIZE_DOT_STEPS, RESPONSIVE_SIZE_ICON_STEPS, RESPONSIVE_SIZE_STEPS } from './constants';
import TimelineDemoFactory from './TimelineDemoFactory';

const TimelineResponsiveSizes = () => (
  <>
    <TimelineDemoFactory
      steps={RESPONSIVE_SIZE_STEPS}
      variant={TIMELINE_MARKER.NUMBER}
      size={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
    />
    <TimelineDemoFactory
      steps={RESPONSIVE_SIZE_DOT_STEPS}
      variant={TIMELINE_MARKER.DOT}
      size={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
    />
    <TimelineDemoFactory
      steps={RESPONSIVE_SIZE_ICON_STEPS}
      variant={TIMELINE_MARKER.ICON}
      size={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}
    />
  </>
);

export default TimelineResponsiveSizes;
