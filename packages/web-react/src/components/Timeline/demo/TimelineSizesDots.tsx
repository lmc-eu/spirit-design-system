import React from 'react';
import { Sizes } from '../../../constants';
import { TIMELINE_MARKER } from '../constants';
import { SIZE_DOT_STEPS } from './constants';
import TimelineDemoFactory from './TimelineDemoFactory';

const sizes = Object.values(Sizes);

const TimelineSizesDots = () => (
  <>
    {SIZE_DOT_STEPS.map((step, index) => (
      <TimelineDemoFactory
        key={`size-dot-${sizes[index]}`}
        steps={[step]}
        variant={TIMELINE_MARKER.DOT}
        size={sizes[index]}
      />
    ))}
  </>
);

export default TimelineSizesDots;
