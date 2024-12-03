import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import ContainerDefault from './ContainerDefault';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch" container="heading-only">
      <ContainerDefault />
    </DocsSection>
  </React.StrictMode>,
);
