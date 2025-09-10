import React from 'react';
import TextField from '../TextField';

const TextFieldFluid = () => (
  <TextField
    id="textfield-fluid"
    isFluid
    label="Label"
    name="textfieldFluid"
    placeholder="Placeholder"
    defaultValue="Filled"
  />
);

export default TextFieldFluid;
