import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import NavigationAction from './NavigationAction';
import NavigationButtons from './NavigationButtons';
import NavigationDefault from './NavigationDefault';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Navigation" stackAlignment="stretch">
      <NavigationDefault />
    </DocsSection>
    <DocsSection title="NavigationAction" stackAlignment="stretch">
      <NavigationAction />
    </DocsSection>
    <DocsSection title="Navigation with Buttons" stackAlignment="stretch">
      <NavigationButtons />
    </DocsSection>
  </React.StrictMode>,
);
