import React from 'react';
import Toggle from '../Toggle';

const ToggleValidation = () => (
  <>
    <Toggle id="toggle-success" label="Toggle Label" validationState="success" />
    <Toggle
      id="toggle-warning"
      label="Toggle Label"
      validationText="Validation text"
      validationState="warning"
      name="default"
      isChecked
    />
    <Toggle
      id="toggle-danger"
      label="Toggle Label"
      validationText={['First validation text', 'Second validation text']}
      validationState="danger"
      name="default"
    />
    <Toggle
      id="toggle-warning-helper-text"
      label="Toggle Label"
      helperText="Helper text"
      validationText="Validation text"
      validationState="warning"
      name="default"
      isChecked
    />
  </>
);

export default ToggleValidation;
