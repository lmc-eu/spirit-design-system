// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import PaginationCurrentFirst from './PaginationCurrentFirst';
import PaginationCurrentMiddle from './PaginationCurrentMiddle';
import PaginationCurrentLast from './PaginationCurrentLast';
import PaginationCurrentFirstCentered from './PaginationCurrentFirstCentered';

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
      <DocsSection title="Pagination Current First Centered">
        <PaginationCurrentFirstCentered />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
