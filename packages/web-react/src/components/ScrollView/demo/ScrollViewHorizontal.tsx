import React from 'react';
import ScrollView from '../ScrollView';
import { HORIZONTAL_CONTENT } from './scrollViewContent';

const ScrollViewHorizontal = () => (
  <ScrollView direction="horizontal">
    <p className="py-900" style={{ whiteSpace: 'nowrap' }}>
      {HORIZONTAL_CONTENT}
    </p>
  </ScrollView>
);

export default ScrollViewHorizontal;
