import React from 'react';
import Radio from '../Radio';

const RadioDisabled = () => (
  <>
    <Radio id="radio-disabled" isDisabled label="Radio Label" name="radioDisabled" onChange={() => {}} />

    <Radio
      helperText="Helper text"
      id="radio-disabled-helper-text"
      isChecked
      isDisabled
      label="Radio Label"
      name="radioDisabledHelperText"
      onChange={() => {}}
    />
  </>
);

export default RadioDisabled;
