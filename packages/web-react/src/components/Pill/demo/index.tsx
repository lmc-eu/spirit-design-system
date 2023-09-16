import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import PillColors from './PillColors';
import PillLongText from './PillLongText';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Colors">
      <PillColors />
    </DocsSection>
    <DocsSection title="Long Text">
      <PillLongText />
    </DocsSection>
  </React.StrictMode>,
);
