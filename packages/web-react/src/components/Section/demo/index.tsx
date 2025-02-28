import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import SectionBackground from './SectionBackground';
import SectionCustomPadding from './SectionCustomPadding';
import SectionDefault from './SectionDefault';
import SectionSizes from './SectionSizes';
import SectionTextAlignment from './SectionTextAlignment';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch" container="heading-only">
      <SectionDefault />
    </DocsSection>
    <DocsSection title="Predefined Sizes" stackAlignment="stretch" container="heading-only">
      <SectionSizes />
    </DocsSection>
    <DocsSection title="Custom Padding" stackAlignment="stretch" container="heading-only">
      <SectionCustomPadding />
    </DocsSection>
    <DocsSection title="Background" stackAlignment="stretch" container="heading-only">
      <SectionBackground />
    </DocsSection>
    <DocsSection title="Text Alignment" stackAlignment="stretch" container="heading-only">
      <SectionTextAlignment />
    </DocsSection>
  </React.StrictMode>,
);
