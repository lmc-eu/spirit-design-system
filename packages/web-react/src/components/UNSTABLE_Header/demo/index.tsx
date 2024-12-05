// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import HeaderDefault from './HeaderDefault';
import HeaderFluid from './HeaderFluid';
import HeaderMinimal from './HeaderMinimal';
import HeaderWithNavigation from './HeaderWithNavigation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Minimal Header" stackAlignment="stretch" container="heading-only">
        <HeaderMinimal />
      </DocsSection>
      <DocsSection title="Full Header" stackAlignment="stretch" container="heading-only">
        <HeaderDefault />
      </DocsSection>
      <DocsSection title="Fluid Header" stackAlignment="stretch" container="heading-only">
        <HeaderFluid />
      </DocsSection>
      <DocsSection title="With Navigation" stackAlignment="stretch" container="heading-only">
        <HeaderWithNavigation />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
