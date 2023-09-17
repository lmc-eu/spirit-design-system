import React from 'react';
import TextField from '../TextField';

const TextFieldPasswordToggle = () => (
  <>
    <TextField
      id="textfieldPasswordToggle"
      label="Password Toggle"
      hasPasswordToggle
      name="textfieldPasswordToggle"
      placeholder="Password must be at least 6 characters long"
    />

    <TextField
      id="textfieldPasswordToggleDisabled"
      label="Password Toggle"
      hasPasswordToggle
      isDisabled
      name="textfieldPasswordToggleDisabled"
      placeholder="Password must be at least 6 characters long"
    />
  </>
);

export default TextFieldPasswordToggle;
