import React from 'react';
import ScrollView from '../ScrollView';
import { VERTICAL_CONTENT } from './scrollViewContent';

const ScrollViewHorizontalWithArrows = () => (
  <div style={{ height: '160px' }}>
    <ScrollView data-spirit-toggle="scrollView" hasArrows>
      <p>{VERTICAL_CONTENT}</p>
    </ScrollView>
  </div>
);

export default ScrollViewHorizontalWithArrows;
