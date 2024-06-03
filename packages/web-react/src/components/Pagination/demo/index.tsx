// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import PaginationCurrentFirst from './PaginationCurrentFirst';
import PaginationCurrentFirstCentered from './PaginationCurrentFirstCentered';
import PaginationCurrentLast from './PaginationCurrentLast';
import PaginationCurrentMiddle from './PaginationCurrentMiddle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Pagination Current First">
        <PaginationCurrentFirst />
      </DocsSection>
      <DocsSection title="Pagination Current Middle">
        <PaginationCurrentMiddle />
      </DocsSection>
      <DocsSection title="Pagination Current Last">
        <PaginationCurrentLast />
      </DocsSection>
      <DocsSection title="Pagination Current First Centered" stackAlignment="stretch">
        <PaginationCurrentFirstCentered />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
