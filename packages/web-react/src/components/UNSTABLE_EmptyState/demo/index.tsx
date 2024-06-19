import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import EmptyStateDefault from './EmptyStateDefault';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch">
      <EmptyStateDefault />
    </DocsSection>
  </React.StrictMode>,
);
