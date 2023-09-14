import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import LinkDefault from './LinkDefault';
import LinkColors from './LinkColors';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <LinkDefault />
    </DocsSection>
    <DocsSection title="Colors">
      <LinkColors />
    </DocsSection>
  </React.StrictMode>,
);
