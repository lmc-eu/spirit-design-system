import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import ScrollViewDefault from './ScrollViewDefault';
import ScrollViewHorizontal from './ScrollViewHorizontal';
import ScrollViewHorizontalBreakout from './ScrollViewHorizontalBreakout';
import ScrollViewOverflowDecorators from './ScrollViewOverflowDecorators';
import ScrollViewHiddenScrollbar from './ScrollViewHiddenScrollbar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Vertical Scrolling">
      <ScrollViewDefault />
    </DocsSection>
    <DocsSection title="Horizontal Scrolling">
      <ScrollViewHorizontal />
    </DocsSection>
    <DocsSection title="Horizontal Scrolling with Container Breakout" hasStack={false}>
      <ScrollViewHorizontalBreakout />
    </DocsSection>
    <DocsSection title="Overflow Decorators">
      <ScrollViewOverflowDecorators />
    </DocsSection>
    <DocsSection title="Hidden Scrollbar">
      <ScrollViewHiddenScrollbar />
    </DocsSection>
  </React.StrictMode>,
);
