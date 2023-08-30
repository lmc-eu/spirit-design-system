import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import GridEqual from './GridEqual';
import GridResponsive from './GridResponsive';
import GridSpanResponsive from './GridSpanResponsive';
import GridSpan from './GridSpan';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Equal Columns">
      <GridEqual />
    </DocsSection>
    <DocsSection title="Responsive Columns">
      <GridResponsive />
    </DocsSection>
    <DocsSection title="Grid Span">
      <GridSpan />
    </DocsSection>
    <DocsSection title="Responsive Grid Span">
      <GridSpanResponsive />
    </DocsSection>
  </React.StrictMode>,
);
