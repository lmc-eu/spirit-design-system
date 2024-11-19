// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import HeaderExperimentalRTL from './HeaderExperimentalRTL';
import HeaderMinimal from './HeaderMinimal';
import HeaderSimple from './HeaderSimple';
import HeaderSimpleTransparent from './HeaderSimpleTransparent';
import HeaderWithActions from './HeaderWithActions';
import HeaderWithActionsAndDialog from './HeaderWithActionsAndDialog';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Minimal Header" stackAlignment="stretch">
        <HeaderMinimal />
      </DocsSection>
      <DocsSection title="Header with Actions" stackAlignment="stretch">
        <HeaderWithActions />
      </DocsSection>
      <DocsSection title="Header with Actions and Header Dialog" stackAlignment="stretch">
        <HeaderWithActionsAndDialog />
      </DocsSection>
      <DocsSection title="Simple Header" stackAlignment="stretch">
        <HeaderSimple />
      </DocsSection>
      <DocsSection title="Simple Transparent Header" stackAlignment="stretch">
        <HeaderSimpleTransparent />
      </DocsSection>
      <DocsSection title="Experimental RTL Support" stackAlignment="stretch">
        <HeaderExperimentalRTL />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
