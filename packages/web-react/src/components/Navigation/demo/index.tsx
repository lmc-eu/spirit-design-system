import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import NavigationButtons from './NavigationButtons';
import NavigationDefault from './NavigationDefault';
import NavigationLink from './NavigationLink';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Navigation" stackAlignment="stretch">
      <NavigationDefault />
    </DocsSection>
    <DocsSection title="NavigationLink" stackAlignment="stretch">
      <NavigationLink />
    </DocsSection>
    <DocsSection title="Navigation with Buttons" stackAlignment="stretch">
      <NavigationButtons />
    </DocsSection>
  </React.StrictMode>,
);
