import React from 'react';
import ScrollView from '../ScrollView';
import { HORIZONTAL_CONTENT } from './constants';

const ScrollViewHorizontalWithArrows = () => (
  <ScrollView direction="horizontal" hasArrows>
    <p className="py-900" style={{ whiteSpace: 'nowrap' }}>
      {HORIZONTAL_CONTENT}
    </p>
  </ScrollView>
);

export default ScrollViewHorizontalWithArrows;
