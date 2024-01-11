// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import AccordionBasic from './AccordionBasic';
import AccordionOneItemOpenAtATime from './AccordionOneItemOpenAtATime';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Basic Usage">
        <AccordionBasic />
      </DocsSection>
      <DocsSection title="One Item Open at a Time">
        <AccordionOneItemOpenAtATime />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
