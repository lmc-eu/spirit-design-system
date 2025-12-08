import React from 'react';
import ScrollView from '../ScrollView';
import { HORIZONTAL_CONTENT, VERTICAL_CONTENT } from './constants';

const ScrollViewHiddenScrollbar = () => (
  <>
    <ScrollView direction="horizontal" isScrollbarDisabled marginBottom="space-1200">
      <p style={{ whiteSpace: 'nowrap' }}>{HORIZONTAL_CONTENT}</p>
    </ScrollView>

    <div style={{ height: '160px' }}>
      <ScrollView isScrollbarDisabled>
        <p>{VERTICAL_CONTENT}</p>
      </ScrollView>
    </div>
  </>
);

export default ScrollViewHiddenScrollbar;
