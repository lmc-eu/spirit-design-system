import React from 'react';
import ScrollView from '../ScrollView';
import { VERTICAL_CONTENT, HORIZONTAL_CONTENT } from './scrollViewContent';

const ScrollViewOverflowDecorators = () => (
  <>
    <div className="mb-1000" style={{ height: '160px' }}>
      <ScrollView overflowDecorators="borders">
        <p>{VERTICAL_CONTENT}</p>
      </ScrollView>
    </div>

    <ScrollView direction="horizontal" overflowDecorators="borders" marginBottom="space-1000">
      <p className="py-700" style={{ whiteSpace: 'nowrap' }}>
        {HORIZONTAL_CONTENT}
      </p>
    </ScrollView>

    <div className="mb-1000" style={{ height: '160px' }}>
      <ScrollView overflowDecorators="both">
        <p>{VERTICAL_CONTENT}</p>
      </ScrollView>
    </div>

    <ScrollView direction="horizontal" overflowDecorators="both">
      <p className="py-700" style={{ whiteSpace: 'nowrap' }}>
        {HORIZONTAL_CONTENT}
      </p>
    </ScrollView>
  </>
);

export default ScrollViewOverflowDecorators;
