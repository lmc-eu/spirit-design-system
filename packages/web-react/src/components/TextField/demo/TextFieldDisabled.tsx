import React from 'react';
import TextField from '../TextField';

const TextFieldDisabled = () => (
  <>
    <TextField id="textfieldDisabled" label="Label" name="textfieldDisabled" placeholder="Placeholder" isDisabled />

    <TextField
      id="textfieldDisabledFilled"
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
