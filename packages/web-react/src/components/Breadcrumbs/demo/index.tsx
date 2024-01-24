// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import BreadcrumbsCurrentWithoutLink from './BreadcrumbsCurrentWithoutLink';
import BreadcrumbsCustom from './BreadcrumbsCustom';
import BreadcrumbsDefault from './BreadcrumbsDefault';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <BreadcrumbsDefault />
      </DocsSection>
      <DocsSection title="Custom">
        <BreadcrumbsCustom />
      </DocsSection>
      <DocsSection title="Current page is not a link">
        <BreadcrumbsCurrentWithoutLink />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
