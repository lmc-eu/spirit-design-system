import React from 'react';
import TextField from '../TextField';

const TextFieldFluid = () => (
  <TextField
    id="textfield-fluid"
    isFluid
    label="Label"
    name="textfieldFluid"
    onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
    placeholder="Placeholder"
    value="Filled"
  />
);

export default TextFieldFluid;
