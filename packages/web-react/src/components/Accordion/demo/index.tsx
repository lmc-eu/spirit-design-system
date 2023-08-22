// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import Accordion from './Accordion';
import AccordionStayOpen from './AccordionStayOpen';
import AccordionUncontrolled from './AccordionUncontrolled';
import AccordionUncontrolledStayOpen from './AccordionUncontrolledStayOpen';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Default">
        <Accordion />
      </DocsSection>
      <DocsSection title="Stay Open">
        <AccordionStayOpen />
      </DocsSection>
      <DocsSection title="Uncontrolled">
        <AccordionUncontrolled />
      </DocsSection>
      <DocsSection title="Uncontrolled Stay Open">
        <AccordionUncontrolledStayOpen />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
