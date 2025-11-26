import React from 'react';
import { Sizes } from '../../../constants';
import { TIMELINE_MARKER } from '../constants';
import { SIZE_STEPS } from './constants';
import TimelineDemoFactory from './TimelineDemoFactory';

const sizes = Object.values(Sizes);

const TimelineSizes = () => (
  <>
    {SIZE_STEPS.map((step, index) => (
      <TimelineDemoFactory
        key={`size-${sizes[index]}`}
        steps={[step]}
        variant={TIMELINE_MARKER.NUMBER}
        size={sizes[index]}
      />
    ))}
  </>
);

export default TimelineSizes;
