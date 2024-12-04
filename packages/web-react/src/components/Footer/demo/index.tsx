// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import FooterDefault from './FooterDefault';
import FooterMinimalistic from './FooterMinimalistic';
import FooterNested from './FooterNested';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Basic Usage" stackAlignment="stretch" container="heading-only">
        <FooterDefault />
      </DocsSection>
      <DocsSection title="Nested Link Blocks, Logo Only" stackAlignment="stretch" container="heading-only">
        <FooterNested />
      </DocsSection>
      <DocsSection title="Minimalistic" stackAlignment="stretch" container="heading-only">
        <FooterMinimalistic />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
