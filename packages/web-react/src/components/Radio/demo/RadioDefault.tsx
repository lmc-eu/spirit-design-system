import React from 'react';
import Radio from '../Radio';

const RadioDefault = () => (
  <>
    <Radio id="radioDefault" label="Radio Label" name="radioDefault" />

    <Radio id="radioDefaultChecked" isChecked label="Radio Label" name="radioDefault" />
  </>
);

export default RadioDefault;
