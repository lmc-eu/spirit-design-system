import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import { Radio } from '../../Radio';
import { Checkbox } from '../../Checkbox';
import FieldGroup from './FieldGroup';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <FieldGroup id="FieldGroupDefault" label="Label">
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Required">
      <FieldGroup id="FieldGroupRequired" label="Label" isRequired>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Hidden Label">
      <FieldGroup id="FieldGroupHiddenLabel" label="Label" isLabelHidden>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Helper Text">
      <FieldGroup label="Label" id="FieldGroupHelperText" helperText="Helper text">
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Disabled">
      <FieldGroup id="FieldGroupDisabled" label="Label" isDisabled>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Validation State with Validation Text">
      <div className="docs-FormFieldGrid">
        <FieldGroup
          id="FieldGroupValidationSuccess"
          label="Label"
          validationState="success"
          validationText="Validation text"
        >
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
        </FieldGroup>
        <FieldGroup
          id="FieldGroupValidationWarning"
          label="Label"
          validationState="warning"
          validationText="Validation text"
        >
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
        </FieldGroup>
        <FieldGroup
          id="FieldGroupValidationDanger"
          label="Label"
          validationState="danger"
          validationText={['First validation text', 'Second validation text']}
        >
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
        </FieldGroup>
      </div>
    </DocsSection>
    <DocsSection title="Fluid">
      <FieldGroup id="FieldGroupFluid" label="Label" isFluid>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Grouped Checkboxes">
      <FieldGroup id="FieldGroupGroupedCheckboxes" label="Label">
        <Checkbox id="checkbox1" label="Checkbox Label" name="checkboxDefault" isChecked />
        <Checkbox id="checkbox2" label="Checkbox Label" name="checkboxDefault" />
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Grouped Radio Fields">
      <FieldGroup id="FieldGroupGroupedRadios" label="Label">
        <Radio id="radio1" label="Radio Label" name="radioDefault" isChecked />
        <Radio id="radio2" label="Radio Label" name="radioDefault" />
      </FieldGroup>
    </DocsSection>
  </React.StrictMode>,
);
