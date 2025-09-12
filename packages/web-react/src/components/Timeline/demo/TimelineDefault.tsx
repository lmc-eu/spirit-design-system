import React from 'react';
import { TIMELINE_MARKER } from '../constants';
import { DEFAULT_STEPS } from './constants';
import TimelineDemoFactory from './TimelineDemoFactory';

const TimelineDefault = () => <TimelineDemoFactory steps={DEFAULT_STEPS} variant={TIMELINE_MARKER.NUMBER} />;

export default TimelineDefault;
