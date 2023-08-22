import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import DocsSection from '../../../../docs/DocsSections';
import Breadcrumbs from './Breadcrumbs';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <Breadcrumbs {...Breadcrumbs.args} goBackTitle="Back" />
    </DocsSection>
  </React.StrictMode>,
);
