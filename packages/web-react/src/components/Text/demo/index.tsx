import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import TextDefault from './TextDefault';
import TextSizes from './TextSizes';
import TextEmphasis from './TextEmphasis';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <TextDefault />
    </DocsSection>
    <DocsSection title="Sizes">
      <TextSizes />
    </DocsSection>
    <DocsSection title="Emphasis">
      <TextEmphasis />
    </DocsSection>
  </React.StrictMode>,
);
