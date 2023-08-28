import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import DocsFormFieldGrid from '../../../../docs/DocsFormFieldGrid';
import CheckboxDefault from './CheckboxDefault';
import CheckboxIndeterminate from './CheckboxIndeterminate';
import CheckboxRequired from './CheckboxRequired';
import CheckboxHiddenLabel from './CheckboxHiddenLabel';
import CheckboxHelperText from './CheckboxHelperText';
import CheckboxDisabled from './CheckboxDisabled';
import CheckboxValidation from './CheckboxValidation';
import CheckboxItem from './CheckboxItem';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <DocsFormFieldGrid>
        <CheckboxDefault />
      </DocsFormFieldGrid>
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
      <DocsFormFieldGrid>
        <CheckboxDisabled />
      </DocsFormFieldGrid>
    </DocsSection>
    <DocsSection title="Validation State with Validation Text">
      <DocsFormFieldGrid>
        <CheckboxValidation />
      </DocsFormFieldGrid>
    </DocsSection>
    <DocsSection title="Item">
      <DocsFormFieldGrid>
        <CheckboxItem />
      </DocsFormFieldGrid>
    </DocsSection>
  </React.StrictMode>,
);
