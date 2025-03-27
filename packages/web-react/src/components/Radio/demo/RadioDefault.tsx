import React from 'react';
import Radio from '../Radio';

const RadioDefault = () => (
  <>
    <Radio id="radio-default" label="Radio Label" name="radioDefault" onChange={() => {}} />

    <Radio id="radio-default-checked" defaultChecked label="Radio Label" name="radioDefault" onChange={() => {}} />
  </>
);

export default RadioDefault;
