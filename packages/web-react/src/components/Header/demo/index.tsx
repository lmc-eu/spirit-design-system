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
import HeaderInvertedWithActions from './HeaderInvertedWithActions';
import HeaderInvertedWithActionsAndDialog from './HeaderInvertedWithActionsAndDialog';
import HeaderMinimalInverted from './HeaderMinimalInverted';
import HeaderSimpleInverted from './HeaderSimpleInverted';
import HeaderSimpleTransparent from './HeaderSimpleTransparent';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Minimal Inverted Header" stackAlignment="stretch">
        <HeaderMinimalInverted />
      </DocsSection>
      <DocsSection title="Inverted Header with Actions" stackAlignment="stretch">
        <HeaderInvertedWithActions />
      </DocsSection>
      <DocsSection title="Inverted Header with Actions and Header Dialog" stackAlignment="stretch">
        <HeaderInvertedWithActionsAndDialog />
      </DocsSection>
      <DocsSection title="Simple Inverted Header" stackAlignment="stretch">
        <HeaderSimpleInverted />
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
