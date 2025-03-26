import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSection';
import BoxDefault from './BoxDefault';
import BoxWithBackgroundColor from './BoxWithBackgroundColor';
import BoxWithBorder from './BoxWithBorder';
import BoxWithCustomPadding from './BoxWithCustomPadding';
import BoxWithRadius from './BoxWithRadius';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
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
    <DocsSection title="With Radius">
      <BoxWithRadius />
    </DocsSection>
  </StrictMode>,
);
