import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import TabsDefault from './TabsDefault';
import TabsWithCustomSpacing from './TabsWithCustomSpacing';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch">
      <TabsDefault />
    </DocsSection>
    <DocsSection title="Custom Spacing" stackAlignment="stretch">
      <TabsWithCustomSpacing />
    </DocsSection>
  </React.StrictMode>,
);
