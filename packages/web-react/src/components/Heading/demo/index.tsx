import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import HeadingSizes from './HeadingSizes';
import HeadingDefault from './HeadingDefault';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <HeadingDefault />
    </DocsSection>
    <DocsSection title="Sizes">
      <HeadingSizes />
    </DocsSection>
  </React.StrictMode>,
);
