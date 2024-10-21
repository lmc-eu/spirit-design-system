import React from 'react';
import ScrollView from '../ScrollView';
import { VERTICAL_CONTENT, HORIZONTAL_CONTENT } from './scrollViewContent';

const ScrollViewHiddenScrollbar = () => (
  <>
    <div className="mb-1200" style={{ height: '160px' }}>
      <ScrollView isScrollbarDisabled>
        <p>{VERTICAL_CONTENT}</p>
      </ScrollView>
    </div>

    <ScrollView direction="horizontal" isScrollbarDisabled>
      <p style={{ whiteSpace: 'nowrap' }}>{HORIZONTAL_CONTENT}</p>
    </ScrollView>
  </>
);

export default ScrollViewHiddenScrollbar;
