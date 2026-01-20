import figma from '@figma/code-connect';
import React from 'react';
import { Icon } from '../..';
import { TimelineMarker } from '..';

const TIMELINE_MARKER_NODE_URL = '<FIGMA_FILE_ID>?node-id=37907%3A91';

figma.connect(TimelineMarker, TIMELINE_MARKER_NODE_URL, {
  props: {},
  variant: {
    Type: 'Number',
  },
  example: (props) => <TimelineMarker {...props}>1</TimelineMarker>,
});

figma.connect(TimelineMarker, TIMELINE_MARKER_NODE_URL, {
  props: {},
  variant: {
    Type: 'Point',
  },
  example: (props) => <TimelineMarker {...props} variant="dot" />,
});

figma.connect(TimelineMarker, TIMELINE_MARKER_NODE_URL, {
  props: {},
  variant: {
    Type: 'Icon',
  },
  example: (props) => (
    <TimelineMarker {...props} variant="icon">
      <Icon name="search" />
    </TimelineMarker>
  ),
});
