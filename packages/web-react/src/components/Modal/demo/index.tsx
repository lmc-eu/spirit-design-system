import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import Modal from '../stories/Modal';
import ModalWithCustomHeight from '../stories/ModalWithCustomHeight';
import ModalWithLongText from '../stories/ModalWithLongText';
import ModalWithCheckbox from '../stories/ModalWithCheckbox';
import ModalStacked from '../stories/ModalStacked';

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
