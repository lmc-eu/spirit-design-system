// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import Breadcrumbs from '../Breadcrumbs';

import { IconsProvider } from '../../../context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Breadcrumbs">
      <IconsProvider value={icons}>
        <Breadcrumbs
          items={[
            {
              title: 'Root',
              url: '#rootUrl',
            },
            {
              title: 'Category',
              url: '#categoryUrl',
            },
            {
              title: 'Subcategory',
              url: '#subcategoryUrl',
            },
            {
              title: 'Current page',
              url: '#currentUrl',
            },
          ]}
          goBackTitle="Back"
        />
      </IconsProvider>
    </DocsSection>
  </React.StrictMode>,
);
