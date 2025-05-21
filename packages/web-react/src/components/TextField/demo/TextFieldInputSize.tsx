import React from 'react';
import TextField from '../TextField';

const TextFieldInputSize = () => (
  <TextField
    id="textfield-size"
    isFluid
    label="4000 (in Roman numerals)"
    name="textfieldSize"
    placeholder="Placeholder"
    inputWidth={4}
  />
);

export default TextFieldInputSize;
