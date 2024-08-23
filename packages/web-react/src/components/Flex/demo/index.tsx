import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import FlexColumnLayout from './FlexColumnLayout';
import FlexCustomSpacing from './FlexCustomSpacing';
import FlexHorizontalAlignment from './FlexHorizontalAlignment';
import FlexResponsiveAlignment from './FlexResponsiveAlignment';
import FlexResponsiveLayout from './FlexResponsiveLayout';
import FlexResponsiveSpacing from './FlexResponsiveSpacing';
import FlexRowLayout from './FlexRowLayout';
import FlexVerticalAlignment from './FlexVerticalAlignment';
import FlexWrapping from './FlexWrapping';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Row Layout">
      <FlexRowLayout />
    </DocsSection>
    <DocsSection title="Column Layout">
      <FlexColumnLayout />
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
  </React.StrictMode>,
);
