import React from 'react';
import { TIMELINE_MARKER } from '../constants';
import { COLORED_NUMBER_STEPS } from './constants';
import TimelineDemoFactory from './TimelineDemoFactory';

const TimelineColors = () => <TimelineDemoFactory steps={COLORED_NUMBER_STEPS} variant={TIMELINE_MARKER.NUMBER} />;

export default TimelineColors;
