import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import BoxDefault from './BoxDefault';
import BoxWithBackgroundColor from './BoxWithBackgroundColor';
import BoxWithBorder from './BoxWithBorder';
import BoxWithCustomPadding from './BoxWithCustomPadding';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <BoxDefault />
    </DocsSection>
    <DocsSection title="With Custom Padding">
      <BoxWithCustomPadding />
    </DocsSection>
    <DocsSection title="With Border">
      <BoxWithBorder />
    </DocsSection>
    <DocsSection title="With Background Color">
      <BoxWithBackgroundColor />
    </DocsSection>
  </React.StrictMode>,
);
