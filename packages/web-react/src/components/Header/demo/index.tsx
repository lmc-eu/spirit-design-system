import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import Header from './Header';
import HeaderActions from './HeaderActions';
import HeaderActionsAndHeaderDialog from './HeaderActionsAndHeaderDialog';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <Header {...Header.args} color="inverted" />
    </DocsSection>
    <DocsSection title="Actions">
      <HeaderActions />
    </DocsSection>
    <DocsSection title="Actions And Header Dialog">
      <HeaderActionsAndHeaderDialog />
    </DocsSection>
  </React.StrictMode>,
);
