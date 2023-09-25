import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import FieldGroupDefault from './FieldGroupDefault';
import FieldGroupRequired from './FieldGroupRequired';
import FieldGroupHiddenLabel from './FieldGroupHiddenLabel';
import FieldGroupHelperText from './FieldGroupHelperText';
import FieldGroupDisabled from './FieldGroupDisabled';
import FieldGroupValidationState from './FieldGroupValidationState';
import FieldGroupFluid from './FieldGroupFluid';
import FieldGroupGroupedCheckboxes from './FieldGroupGroupedCheckboxes';
import FieldGroupGroupedRadios from './FieldGroupGroupedRadios';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <FieldGroupDefault />
    </DocsSection>
    <DocsSection title="Required">
      <FieldGroupRequired />
    </DocsSection>
    <DocsSection title="Hidden Label">
      <FieldGroupHiddenLabel />
    </DocsSection>
    <DocsSection title="Helper Text">
      <FieldGroupHelperText />
    </DocsSection>
    <DocsSection title="Disabled">
      <FieldGroupDisabled />
    </DocsSection>
    <DocsSection title="Validation State with Validation Text">
      <FieldGroupValidationState />
    </DocsSection>
    <DocsSection title="Fluid">
      <FieldGroupFluid />
    </DocsSection>
    <DocsSection title="Grouped Checkboxes">
      <FieldGroupGroupedCheckboxes />
    </DocsSection>
    <DocsSection title="Grouped Radios">
      <FieldGroupGroupedRadios />
    </DocsSection>
  </React.StrictMode>,
);
