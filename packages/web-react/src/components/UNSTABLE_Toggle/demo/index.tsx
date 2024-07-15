import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import ToggleDefault from './ToggleDefault';
import ToggleDisabled from './ToggleDisabled';
import ToggleFluid from './ToggleFluid';
import ToggleHelperText from './ToggleHelperText';
import ToggleHiddenLabel from './ToggleHiddenLabel';
import ToggleIndicators from './ToggleIndicators';
import ToggleRequired from './ToggleRequired';
import ToggleValidation from './ToggleValidation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default" stackAlignment="stretch">
      <ToggleDefault />
    </DocsSection>
    <DocsSection title="Indicators" stackAlignment="stretch">
      <ToggleIndicators />
    </DocsSection>
    <DocsSection title="Required" stackAlignment="stretch">
      <ToggleRequired />
    </DocsSection>
    <DocsSection title="Hidden Label" stackAlignment="stretch">
      <ToggleHiddenLabel />
    </DocsSection>
    <DocsSection title="Fluid" stackAlignment="stretch">
      <ToggleFluid />
    </DocsSection>
    <DocsSection title="Disabled" stackAlignment="stretch">
      <ToggleDisabled />
    </DocsSection>
    <DocsSection title="Helper Text" stackAlignment="stretch">
      <ToggleHelperText />
    </DocsSection>
    <DocsSection title="Validation State with Validation Text" stackAlignment="stretch">
      <ToggleValidation />
    </DocsSection>
  </React.StrictMode>,
);
