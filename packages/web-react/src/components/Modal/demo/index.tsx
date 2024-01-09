// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import DocsSection from '../../../../docs/DocsSections';
import { IconsProvider } from '../../../context';
import ModalDefault from './ModalDefault';
import ModalScrollingLongContent from './ModalScrollingLongContent';
import ModalStacking from './ModalStacking';
import ModalDisabledBackdropClick from './ModalDisabledBackdropClick';
import ModalUniformModalOnMobile from './ModalUniformModalOnMobile';

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
      <DocsSection title="Feature Flag: Uniform Modal on Mobile">
        <ModalUniformModalOnMobile />
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
