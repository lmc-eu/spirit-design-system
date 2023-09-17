import React from 'react';
import Radio from '../Radio';

const RadioDisabled = () => (
  <>
    <Radio id="radioDisabled" isDisabled label="Radio Label" name="radioDisabled" />

    <Radio
      helperText="Helper text"
      id="radioDisabledHelperText"
      isChecked
      isDisabled
      label="Radio Label"
      name="radioDisabledHelperText"
    />
  </>
);

export default RadioDisabled;
