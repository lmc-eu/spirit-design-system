import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import SliderDefault from './SliderDefault';
import SliderDisabled from './SliderDisabled';
import SliderFluid from './SliderFluid';
import SliderHelperText from './SliderHelperText';
import SliderHiddenLabel from './SliderHiddenLabel';
import SliderValidation from './SliderValidation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch">
      <SliderDefault />
    </DocsSection>
    <DocsSection title="Hidden Label" stackAlignment="stretch">
      <SliderHiddenLabel />
    </DocsSection>
    <DocsSection title="Helper Text" stackAlignment="stretch">
      <SliderHelperText />
    </DocsSection>
    <DocsSection title="Disabled" stackAlignment="stretch">
      <SliderDisabled />
    </DocsSection>
    <DocsSection title="Validation State with Validation Text" stackAlignment="stretch">
      <SliderValidation />
    </DocsSection>
    <DocsSection title="Fluid" stackAlignment="stretch">
      <SliderFluid />
    </DocsSection>
  </React.StrictMode>,
);
