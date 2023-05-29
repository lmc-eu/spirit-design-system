import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import AlertCentered from '../stories/AlertCentered';
import AlertColors from '../stories/AlertColors';
import AlertIcons from '../stories/AlertIcons';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Alert Colors">
      <AlertColors />
    </DocsSection>
    <DocsSection title="Alert Centered">
      <AlertCentered />
    </DocsSection>
    <DocsSection title="Alert Icons">
      <AlertIcons />
    </DocsSection>
  </React.StrictMode>,
);
