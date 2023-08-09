import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import CheckboxValidationState from '../stories/CheckboxValidationState';
import ControlledCheckbox from '../stories/ControlledCheckbox';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Checkbox">
      <CheckboxValidationState />
    </DocsSection>
    <DocsSection title="Controlled Checkbox">
      <ControlledCheckbox />
    </DocsSection>
  </React.StrictMode>,
);
