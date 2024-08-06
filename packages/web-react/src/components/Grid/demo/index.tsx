import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import GridCustomSpacing from './GridCustomSpacing';
import GridEqual from './GridEqual';
import GridItem from './GridItem';
import GridItemRow from './GridItemRow';
import GridNestedGridItem from './GridNestedGridItem';
import GridResponsive from './GridResponsive';
import GridResponsiveCenteredGridItem from './GridResponsiveCenteredGridItem';
import GridResponsiveCustomHorizontalSpacing from './GridResponsiveCustomHorizontalSpacing';
import GridResponsiveCustomSpacing from './GridResponsiveCustomSpacing';
import GridResponsiveCustomVerticalSpacing from './GridResponsiveCustomVerticalSpacing';
import GridResponsiveGridItem from './GridResponsiveGridItem';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Equal Columns">
      <GridEqual />
    </DocsSection>
    <DocsSection title="Responsive Columns">
      <GridResponsive />
    </DocsSection>
    <DocsSection title="Custom Spacing">
      <GridCustomSpacing />
    </DocsSection>
    <DocsSection title="Responsive Custom Spacing">
      <GridResponsiveCustomSpacing />
    </DocsSection>
    <DocsSection title="Responsive Custom Horizontal Spacing">
      <GridResponsiveCustomHorizontalSpacing />
    </DocsSection>
    <DocsSection title="Responsive Custom Vertical Spacing">
      <GridResponsiveCustomVerticalSpacing />
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
    <DocsSection title="Grid Item with Sidebar in Second Row on Desktop">
      <GridItemRow />
    </DocsSection>
    <DocsSection title="Responsive Centered Grid Item">
      <GridResponsiveCenteredGridItem />
    </DocsSection>
  </React.StrictMode>,
);
