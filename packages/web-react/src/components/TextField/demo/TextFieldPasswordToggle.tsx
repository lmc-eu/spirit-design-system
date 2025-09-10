import React from 'react';
import TextField from '../TextField';

const TextFieldPasswordToggle = () => (
  <>
    <TextField
      hasPasswordToggle
      id="textfield-password-toggle"
      label="Password Toggle"
      name="textfieldPasswordToggle"
      placeholder="Password must be at least 6 characters long"
    />

    <TextField
      hasPasswordToggle
      id="textfield-password-toggle-disabled"
      isDisabled
      label="Password Toggle"
      name="textfieldPasswordToggleDisabled"
      placeholder="Password must be at least 6 characters long"
    />
  </>
);

export default TextFieldPasswordToggle;
