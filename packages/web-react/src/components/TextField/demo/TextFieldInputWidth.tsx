import React from 'react';
import TextField from '../TextField';

const TextFieldInputWidth = () => (
  <TextField
    id="text-field-width-ch"
    isFluid
    label="Input width of 4 characters"
    name="textFieldWidthCh"
    placeholder="1000"
    type="number"
    inputWidth={4}
  />
);

export default TextFieldInputWidth;
