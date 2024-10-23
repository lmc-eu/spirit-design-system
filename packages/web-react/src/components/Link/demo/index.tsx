import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import LinkColors from './LinkColors';
import LinkDefault from './LinkDefault';
import LinkDisabled from './LinkDisabled';
import LinkUnderlined from './LinkUnderlined';
import LinkVisited from './LinkVisited';
import LinkVisitedDisabled from './LinkVisitedDisabled';

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
    <DocsSection title="Visited">
      <LinkVisited />
    </DocsSection>
    <DocsSection title="Visited Disabled">
      <LinkVisitedDisabled />
    </DocsSection>
  </React.StrictMode>,
);
