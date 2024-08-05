import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import LinkColors from './LinkColors';
import LinkDefault from './LinkDefault';
import LinkDisabled from './LinkDisabled';
import LinkUnderlined from './LinkUnderlined';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <LinkDefault />
    </DocsSection>
    <DocsSection title="Colors">
      <LinkColors />
    </DocsSection>
    <DocsSection title="Disabled">
      <LinkDisabled />
    </DocsSection>
    <DocsSection title="Underlined">
      <LinkUnderlined />
    </DocsSection>
  </React.StrictMode>,
);
