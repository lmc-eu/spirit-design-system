import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import Modal from './Modal';
import ModalWithCustomHeight from './ModalWithCustomHeight';
import ModalWithLongText from './ModalWithLongText';
import ModalWithCheckbox from './ModalWithCheckbox';
import ModalStacked from './ModalStacked';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Modal">
      <Modal />
    </DocsSection>
    <DocsSection title="Modal with Custom Height">
      <ModalWithCustomHeight />
    </DocsSection>
    <DocsSection title="Modal with Long Text">
      <ModalWithLongText />
    </DocsSection>
    <DocsSection title="Modal with Checkbox">
      <ModalWithCheckbox />
    </DocsSection>
    <DocsSection title="Modal Stacked">
      <ModalStacked />
    </DocsSection>
  </React.StrictMode>,
);
