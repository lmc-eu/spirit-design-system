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
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      placeholder="Placeholder"
      value="Filled"
    />
  </>
);

export default TextFieldDisabled;
