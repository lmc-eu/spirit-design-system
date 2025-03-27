import React from 'react';
import Radio from '../Radio';

const RadioValidation = () => (
  <>
    <Radio id="radio-success" label="Radio Label" name="validation" validationState="success" onChange={() => {}} />

    <Radio id="radio-warning" label="Radio Label" name="validation" validationState="warning" onChange={() => {}} />

    <Radio id="radio-danger" label="Radio Label" name="validation" validationState="danger" onChange={() => {}} />

    <Radio
      helperText="Helper text"
      id="radio-warning-helper-text"
      defaultChecked
      label="Radio Label"
      name="validation"
      validationState="warning"
      onChange={() => {}}
    />
  </>
);

export default RadioValidation;
