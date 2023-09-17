import React from 'react';
import TextField from '../TextField';

const TextFieldInputWidth = () => (
  <TextField
    id="textfieldSize"
    isFluid
    label="4000 (in Roman numerals)"
    name="textfieldSize"
    placeholder="Placeholder"
    inputWidth={4}
  />
);

export default TextFieldInputWidth;
