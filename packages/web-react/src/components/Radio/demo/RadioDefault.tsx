import React from 'react';
import Radio from '../Radio';

const RadioDefault = () => (
  <>
    <Radio id="radio-default" label="Radio Label" name="radioDefault" />

    <Radio id="radio-default-checked" isChecked label="Radio Label" name="radioDefault" />
  </>
);

export default RadioDefault;
