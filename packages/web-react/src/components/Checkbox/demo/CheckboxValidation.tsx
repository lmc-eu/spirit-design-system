import React from 'react';
import Checkbox from '../Checkbox';

const CheckboxValidation = () => (
  <>
    <Checkbox
      id="checkbox-success"
      name="checkboxSuccess"
      label="Checkbox Label"
      validationState="success"
      onChange={() => {}}
    />
    <Checkbox
      id="checkbox-warning"
      name="checkboxWarning"
      label="Checkbox Label"
      validationState="warning"
      validationText="Warning validation text"
      onChange={() => {}}
    />
    <Checkbox
      id="checkbox-danger"
      name="checkboxDanger"
      label="Checkbox Label"
      validationState="danger"
      validationText={['First validation text', 'Second validation text']}
      onChange={() => {}}
    />
    <Checkbox
      id="checkbox-warning-helper-text"
      name="checkboxWarningHelperText"
      label="Checkbox Label"
      validationState="warning"
      validationText="Warning validation text"
      helperText="Helper text"
      isChecked
      onChange={() => {}}
    />
  </>
);

export default CheckboxValidation;
