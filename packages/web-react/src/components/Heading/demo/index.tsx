import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import HeadingDefault from './HeadingDefault';
import HeadingEmphasis from './HeadingEmphasis';
import HeadingSizes from './HeadingSizes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <HeadingDefault />
    </DocsSection>
    <DocsSection title="Sizes">
      <HeadingSizes />
    </DocsSection>
    <DocsSection title="Emphasis">
      <HeadingEmphasis />
    </DocsSection>
  </React.StrictMode>,
);
