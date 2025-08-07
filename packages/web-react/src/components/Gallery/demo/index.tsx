// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import { IconsProvider } from '../../../context';
import GalleryBnB from './GalleryBnB';
import GalleryDefault from './GalleryDefault';
import GalleryMasonry from './GalleryMasonry';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default (grid)">
        <GalleryDefault />
      </DocsSection>
      <DocsSection title="BnB">
        <GalleryBnB />
      </DocsSection>
      <DocsSection title="Masonry">
        <GalleryMasonry />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
