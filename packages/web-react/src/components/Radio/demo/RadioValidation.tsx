import React from 'react';
import Radio from '../Radio';

const RadioValidation = () => (
  <>
    <Radio id="radioSuccess" label="Radio Label" name="validation" validationState="success" />

    <Radio id="radioWarning" label="Radio Label" name="validation" validationState="warning" />

    <Radio id="radioDanger" isChecked label="Radio Label" name="validation" validationState="danger" />

    <Radio
      helperText="Helper text"
      id="radioWarningHelperText"
      isChecked
      label="Radio Label"
      name="validation"
      validationState="warning"
    />
  </>
);

export default RadioValidation;
