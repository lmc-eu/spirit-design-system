import React from 'react';
import Radio from '../Radio';

const RadioValidation = () => (
  <>
    <Radio id="radio-success" label="Radio Label" name="validation" validationState="success" />

    <Radio id="radio-warning" label="Radio Label" name="validation" validationState="warning" />

    <Radio id="radio-danger" isChecked label="Radio Label" name="validation" validationState="danger" />

    <Radio
      helperText="Helper text"
      id="radio-warning-helper-text"
      isChecked
      label="Radio Label"
      name="validation"
      validationState="warning"
    />
  </>
);

export default RadioValidation;
