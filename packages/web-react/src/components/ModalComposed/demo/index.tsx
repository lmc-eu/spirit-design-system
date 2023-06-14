import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import ModalComposed from '../stories/ModalComposed';
import ModalComposedWithCustomHeight from '../stories/ModalComposedWithCustomHeight';
import ModalComposedWithLongText from '../stories/ModalComposedWithLongText';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Modal">
      <ModalComposed />
    </DocsSection>
    <DocsSection title="Modal with Custom Height">
      <ModalComposedWithCustomHeight />
    </DocsSection>
    <DocsSection title="Modal with Long Text">
      <ModalComposedWithLongText />
    </DocsSection>
  </React.StrictMode>,
);
