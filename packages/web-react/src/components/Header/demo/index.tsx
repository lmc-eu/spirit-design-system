// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import HeaderMinimalInverted from './HeaderMinimalInverted';
import HeaderInvertedWithActions from './HeaderInvertedWithActions';
import HeaderInvertedWithActionsAndDialog from './HeaderInvertedWithActionsAndDialog';
import HeaderSimpleInverted from './HeaderSimpleInverted';
import HeaderSimpleTransparent from './HeaderSimpleTransparent';
import HeaderExperimentalRTL from './HeaderExperimentalRTL';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Minimal Inverted Header">
        <HeaderMinimalInverted />
      </DocsSection>
      <DocsSection title="Inverted Header with Actions">
        <HeaderInvertedWithActions />
      </DocsSection>
      <DocsSection title="Inverted Header with Actions and Header Dialog">
        <HeaderInvertedWithActionsAndDialog />
      </DocsSection>
      <DocsSection title="Simple Inverted Header">
        <HeaderSimpleInverted />
      </DocsSection>
      <DocsSection title="Simple Transparent Header">
        <HeaderSimpleTransparent />
      </DocsSection>
      <DocsSection title="Experimental RTL Support">
        <HeaderExperimentalRTL />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
