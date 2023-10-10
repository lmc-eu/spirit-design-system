import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import GridEqual from './GridEqual';
import GridItem from './GridItem';
import GridNestedGridItem from './GridNestedGridItem';
import GridResponsive from './GridResponsive';
import GridResponsiveGridItem from './GridResponsiveGridItem';
import GridSpan from './GridSpan';
import GridSpanResponsive from './GridSpanResponsive';
import GridItemRow from './GridItemRow';

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
    <DocsSection title="Grid Item">
      <GridItem />
    </DocsSection>
    <DocsSection title="Responsive Grid Item">
      <GridResponsiveGridItem />
    </DocsSection>
    <DocsSection title="Nested Grid with Grid Item">
      <GridNestedGridItem />
    </DocsSection>
    <DocsSection title="Grid Item with sidebar in second row on desktop">
      <GridItemRow />
    </DocsSection>
  </React.StrictMode>,
);
