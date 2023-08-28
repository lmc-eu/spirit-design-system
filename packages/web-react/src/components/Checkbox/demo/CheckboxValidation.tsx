import React from 'react';
import Checkbox from '../Checkbox';

const CheckboxValidation = () => (
  <>
    <Checkbox id="checkboxSuccess" name="checkboxSuccess" label="Checkbox Label" validationState="success" />
    <Checkbox
      id="checkboxWarning"
      name="checkboxWarning"
      label="Checkbox Label"
      validationState="warning"
      validationText="Warning validation text"
    />
    <Checkbox
      id="checkboxDanger"
      name="checkboxDanger"
      label="Checkbox Label"
      validationState="danger"
      validationText={['First validation text', 'Second validation text']}
    />
    <Checkbox
      id="checkboxWarningHelperText"
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
