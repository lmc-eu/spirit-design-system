import React from 'react';
import UNSTABLE_Toggle from '../UNSTABLE_Toggle';

const ToggleValidation = () => (
  <>
    <UNSTABLE_Toggle id="toggle-success" label="Toggle Label" validationState="success" />
    <UNSTABLE_Toggle
      id="toggle-warning"
      label="Toggle Label"
      validationText="Validation text"
      validationState="warning"
      name="default"
      isChecked
    />
    <UNSTABLE_Toggle
      id="toggle-danger"
      label="Toggle Label"
      validationText={['First validation text', 'Second validation text']}
      validationState="danger"
      name="default"
    />
    <UNSTABLE_Toggle
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
