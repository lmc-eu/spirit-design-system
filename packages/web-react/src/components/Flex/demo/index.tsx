import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import FlexCustomSpacing from './FlexCustomSpacing';
import FlexHorizontalAlignment from './FlexHorizontalAlignment';
import FlexHorizontalLayout from './FlexHorizontalLayout';
import FlexHorizontalReverseLayout from './FlexHorizontalReverseLayout';
import FlexResponsiveAlignment from './FlexResponsiveAlignment';
import FlexResponsiveCustomHorizontalSpacing from './FlexResponsiveCustomHorizontalSpacing';
import FlexResponsiveCustomVerticalSpacing from './FlexResponsiveCustomVerticalSpacing';
import FlexResponsiveLayout from './FlexResponsiveLayout';
import FlexResponsiveSpacing from './FlexResponsiveSpacing';
import FlexVerticalAlignment from './FlexVerticalAlignment';
import FlexVerticalLayout from './FlexVerticalLayout';
import FlexWrapping from './FlexWrapping';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Horizontal Layout">
      <FlexHorizontalLayout />
    </DocsSection>
    <DocsSection title="Horizontal Reverse Layout">
      <FlexHorizontalReverseLayout />
    </DocsSection>
    <DocsSection title="Vertical Layout">
      <FlexVerticalLayout />
    </DocsSection>
    <DocsSection title="Responsive Layout">
      <FlexResponsiveLayout />
    </DocsSection>
    <DocsSection title="Wrapping">
      <FlexWrapping />
    </DocsSection>
    <DocsSection title="Horizontal Alignment" stackAlignment="stretch">
      <FlexHorizontalAlignment />
    </DocsSection>
    <DocsSection title="Vertical Alignment">
      <FlexVerticalAlignment />
    </DocsSection>
    <DocsSection title="Responsive Alignment" stackAlignment="stretch">
      <FlexResponsiveAlignment />
    </DocsSection>
    <DocsSection title="Custom Spacing">
      <FlexCustomSpacing />
    </DocsSection>
    <DocsSection title="Responsive Spacing">
      <FlexResponsiveSpacing />
    </DocsSection>
    <DocsSection title="Responsive Custom Horizontal Spacing">
      <FlexResponsiveCustomHorizontalSpacing />
    </DocsSection>
    <DocsSection title="Responsive Custom Vertical Spacing">
      <FlexResponsiveCustomVerticalSpacing />
    </DocsSection>
  </React.StrictMode>,
);
