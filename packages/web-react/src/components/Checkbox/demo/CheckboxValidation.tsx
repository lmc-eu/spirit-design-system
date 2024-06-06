import React from 'react';
import Checkbox from '../Checkbox';

const CheckboxValidation = () => (
  <>
    <Checkbox id="checkbox-success" name="checkboxSuccess" label="Checkbox Label" validationState="success" />
    <Checkbox
      id="checkbox-warning"
      name="checkboxWarning"
      label="Checkbox Label"
      validationState="warning"
      validationText="Warning validation text"
    />
    <Checkbox
      id="checkbox-danger"
      name="checkboxDanger"
      label="Checkbox Label"
      validationState="danger"
      validationText={['First validation text', 'Second validation text']}
    />
    <Checkbox
      id="checkbox-warning-helper-text"
      name="checkboxWarningHelperText"
      label="Checkbox Label"
      validationState="warning"
      validationText="Warning validation text"
      helperText="Helper text"
      isChecked
    />
  </>
);

export default CheckboxValidation;
