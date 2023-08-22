import React from 'react';
import ReactDOM from 'react-dom/client';
import DocsSection from '../../../../docs/DocsSections';
import FieldGroup from './FieldGroup';
import { Radio } from '../../Radio';
import { Checkbox } from '../../Checkbox';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DocsSection title="Default">
      <FieldGroup label="Label">
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Required">
      <FieldGroup label="Label" isRequired>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Hidden Label">
      <FieldGroup label="Label" isLabelHidden>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Helper Text">
      <FieldGroup label="Label" helperText="Helper text">
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Disabled">
      <FieldGroup label="Label" isDisabled>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Validation State with Validation Text">
      <div className="docs-FormFieldGrid">
        <FieldGroup label="Label" validationState="success" validationText="Validation text">
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
        </FieldGroup>
        <FieldGroup label="Label" validationState="warning" validationText="Validation text">
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
          <div className="docs-Box">Item</div>
        </FieldGroup>
        <FieldGroup
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
      <FieldGroup label="Label" isFluid>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
        <div className="docs-Box">Item</div>
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Grouped Checkboxes">
      <FieldGroup label="Label">
        <Checkbox id="checkbox1" label="Checkbox Label" name="checkboxDefault" isChecked />
        <Checkbox id="checkbox2" label="Checkbox Label" name="checkboxDefault" />
      </FieldGroup>
    </DocsSection>
    <DocsSection title="Grouped Radio Fields">
      <FieldGroup label="Label">
        <Radio id="radio1" label="Radio Label" name="radioDefault" isChecked />
        <Radio id="radio2" label="Radio Label" name="radioDefault" />
      </FieldGroup>
    </DocsSection>
  </React.StrictMode>,
);
