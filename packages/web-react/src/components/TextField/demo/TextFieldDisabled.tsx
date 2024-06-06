import React from 'react';
import TextField from '../TextField';

const TextFieldDisabled = () => (
  <>
    <TextField id="textfield-disabled" label="Label" name="textfieldDisabled" placeholder="Placeholder" isDisabled />

    <TextField
      id="textfield-disabled-filled"
      label="Label"
      name="textfieldDisabledFilled"
      placeholder="Placeholder"
      value="Filled"
      isDisabled
      isRequired
    />
  </>
);

export default TextFieldDisabled;
