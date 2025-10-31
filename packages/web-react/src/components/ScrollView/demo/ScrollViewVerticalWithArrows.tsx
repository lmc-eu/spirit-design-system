import React from 'react';
import ScrollView from '../ScrollView';
import { VERTICAL_CONTENT } from './constants';

const ScrollViewVerticalWithArrows = () => (
  <div style={{ height: '160px' }}>
    <ScrollView data-spirit-toggle="scrollView" hasArrows>
      <p>{VERTICAL_CONTENT}</p>
    </ScrollView>
  </div>
);

export default ScrollViewVerticalWithArrows;
