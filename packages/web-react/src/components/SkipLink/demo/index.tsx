// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import SkipLinkDefault from './SkipLinkDefault';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch">
      <SkipLinkDefault />
    </DocsSection>
  </React.StrictMode>,
);
