import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import Checkbox from './Checkbox';
import CheckboxHelperText from './CheckboxHelperText';
import CheckboxValidationState from './CheckboxValidationState';
import CheckboxItem from './CheckboxItem';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <Checkbox label="Label" />
    </DocsSection>
    <DocsSection title="Helper Text">
      <CheckboxHelperText label="Label" {...CheckboxHelperText.args} />
    </DocsSection>
    <DocsSection title="Validation State">
      <CheckboxValidationState />
    </DocsSection>
    <DocsSection title="Item">
      <CheckboxItem label="Label" {...CheckboxItem.args} />
    </DocsSection>
  </React.StrictMode>,
);
