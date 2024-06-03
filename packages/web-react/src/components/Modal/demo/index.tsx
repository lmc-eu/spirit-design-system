// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file -- @see https://jira.almacareer.tech/browse/DS-561
import icons from '@lmc-eu/spirit-icons/icons';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import ModalDefault from './ModalDefault';
import ModalDisabledBackdropClick from './ModalDisabledBackdropClick';
import ModalScrollingLongContent from './ModalScrollingLongContent';
import ModalStacking from './ModalStacking';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Modal">
        <ModalDefault />
      </DocsSection>
      <DocsSection title="Scrolling Long Content">
        <ModalScrollingLongContent />
      </DocsSection>
      <DocsSection title="Stacking Modals">
        <ModalStacking />
      </DocsSection>
      <DocsSection title="Disabled Backdrop Click">
        <ModalDisabledBackdropClick />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
