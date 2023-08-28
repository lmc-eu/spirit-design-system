// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import BreadcrumbsDefault from './BreadcrumbsDefault';
import BreadcrumbsCustom from './BreadcrumbsCustom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <BreadcrumbsDefault />
      </DocsSection>
      <DocsSection title="Custom">
        <BreadcrumbsCustom />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
