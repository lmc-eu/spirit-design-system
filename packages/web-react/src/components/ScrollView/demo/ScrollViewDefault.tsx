import React from 'react';
import ScrollView from '../ScrollView';
import { VERTICAL_CONTENT } from './scrollViewContent';

const ScrollViewDefault = () => (
  <div style={{ height: '160px' }}>
    <ScrollView data-spirit-toggle="scrollView">
      <p>{VERTICAL_CONTENT}</p>
    </ScrollView>
  </div>
);

export default ScrollViewDefault;
