import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import TruncateDefault from './TruncateDefault';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Basic Usage" stackAlignment="stretch">
      <TruncateDefault />
    </DocsSection>
  </React.StrictMode>,
);
