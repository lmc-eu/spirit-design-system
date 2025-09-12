import React from 'react';
import { TIMELINE_MARKER } from '../constants';
import { ICON_STEPS } from './constants';
import TimelineDemoFactory from './TimelineDemoFactory';

const TimelineIcons = () => <TimelineDemoFactory steps={ICON_STEPS} variant={TIMELINE_MARKER.ICON} />;

export default TimelineIcons;
