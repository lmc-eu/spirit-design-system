import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import CheckboxDefault from './CheckboxDefault';
import CheckboxDisabled from './CheckboxDisabled';
import CheckboxHelperText from './CheckboxHelperText';
import CheckboxHiddenLabel from './CheckboxHiddenLabel';
import CheckboxIndeterminate from './CheckboxIndeterminate';
import CheckboxItem from './CheckboxItem';
import CheckboxRequired from './CheckboxRequired';
import CheckboxValidation from './CheckboxValidation';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <CheckboxDefault />
    </DocsSection>
    <DocsSection title="Indeterminate">
      <CheckboxIndeterminate />
    </DocsSection>
    <DocsSection title="Required">
      <CheckboxRequired />
    </DocsSection>
    <DocsSection title="Hidden Label">
      <CheckboxHiddenLabel />
    </DocsSection>
    <DocsSection title="Helper Text">
      <CheckboxHelperText />
    </DocsSection>
    <DocsSection title="Disabled">
      <CheckboxDisabled />
    </DocsSection>
    <DocsSection title="Validation State with Validation Text">
      <CheckboxValidation />
    </DocsSection>
    <DocsSection title="Item">
      <CheckboxItem />
    </DocsSection>
  </React.StrictMode>,
);
