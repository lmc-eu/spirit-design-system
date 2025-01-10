import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import ActionLayoutCentered from './ActionLayoutCentered';
import ActionLayoutDefault from './ActionLayoutDefault';
import ActionLayoutReversedOnRight from './ActionLayoutReversedOnRight';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch">
      <ActionLayoutDefault />
    </DocsSection>
    <DocsSection title="Centered" stackAlignment="stretch">
      <ActionLayoutCentered />
    </DocsSection>
    <DocsSection title="On Right Reversed" stackAlignment="stretch">
      <ActionLayoutReversedOnRight />
    </DocsSection>
  </React.StrictMode>,
);
