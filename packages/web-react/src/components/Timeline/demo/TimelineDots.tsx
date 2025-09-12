import React from 'react';
import { TIMELINE_MARKER } from '../constants';
import { DOT_STEPS } from './constants';
import TimelineDemoFactory from './TimelineDemoFactory';

const TimelineDots = () => <TimelineDemoFactory steps={DOT_STEPS} variant={TIMELINE_MARKER.DOT} />;

export default TimelineDots;
