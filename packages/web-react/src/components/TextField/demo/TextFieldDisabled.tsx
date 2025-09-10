import React from 'react';
import TextField from '../TextField';

const TextFieldDisabled = () => (
  <>
    <TextField id="textfield-disabled" label="Label" name="textfieldDisabled" placeholder="Placeholder" isDisabled />

    <TextField
      id="textfield-disabled-filled"
      isDisabled
      isRequired
      label="Label"
      name="textfieldDisabledFilled"
      placeholder="Placeholder"
      defaultValue="Filled"
    />
  </>
);

export default TextFieldDisabled;
