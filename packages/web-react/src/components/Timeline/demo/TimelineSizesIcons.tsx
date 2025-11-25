import React from 'react';
import { Sizes } from '../../../constants';
import { TIMELINE_MARKER } from '../constants';
import { SIZE_ICON_STEPS } from './constants';
import TimelineDemoFactory from './TimelineDemoFactory';

const sizes = Object.values(Sizes);

const TimelineSizesIcons = () => (
  <>
    {SIZE_ICON_STEPS.map((step, index) => (
      <TimelineDemoFactory
        key={`size-icon-${sizes[index]}`}
        steps={[step]}
        variant={TIMELINE_MARKER.ICON}
        size={sizes[index]}
      />
    ))}
  </>
);

export default TimelineSizesIcons;
