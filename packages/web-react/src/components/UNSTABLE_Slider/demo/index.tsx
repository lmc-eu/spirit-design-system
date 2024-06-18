import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import SliderDefault from './SliderDefault';
import SliderFluid from './SliderFluid';
import SliderHelperText from './SliderHelperText';
import SliderHiddenLabel from './SliderHiddenLabel';
import SliderRequired from './SliderRequired';
import SliderSelected from './SliderSelected';
import SliderValidation from './SliderValidation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch">
      <SliderDefault />
    </DocsSection>
    <DocsSection title="Selected" stackAlignment="stretch">
      <SliderSelected />
    </DocsSection>
    <DocsSection title="Required" stackAlignment="stretch">
      <SliderRequired />
    </DocsSection>
    <DocsSection title="Hidden Label" stackAlignment="stretch">
      <SliderHiddenLabel />
    </DocsSection>
    <DocsSection title="Helper Text" stackAlignment="stretch">
      <SliderHelperText />
    </DocsSection>
    <DocsSection title="Validation State with Validation Text" stackAlignment="stretch">
      <SliderValidation />
    </DocsSection>
    <DocsSection title="Fluid" stackAlignment="stretch">
      <SliderFluid />
    </DocsSection>
  </React.StrictMode>,
);
