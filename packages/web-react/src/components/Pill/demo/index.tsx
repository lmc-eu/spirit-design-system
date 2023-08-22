import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import Pill from './Pill';
import PillColors from './PillColors';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <Pill {...Pill.args} />
    </DocsSection>
    <DocsSection title="Colors">
      <PillColors />
    </DocsSection>
  </React.StrictMode>,
);
