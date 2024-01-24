// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import ToastAlignment from './ToastAlignment';
import ToastColors from './ToastColors';
import ToastContentVariations from './ToastContentVariations';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Alignment">
        <ToastAlignment />
      </DocsSection>
      <DocsSection title="Content Variations">
        <ToastContentVariations />
      </DocsSection>
      <DocsSection title="Colors">
        <ToastColors />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
