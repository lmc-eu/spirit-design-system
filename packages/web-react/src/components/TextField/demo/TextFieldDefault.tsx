import React from 'react';
import TextField from '../TextField';

const TextFieldDefault = () => (
  <>
    <TextField id="textfield-default" label="Label" name="textfieldDefault" placeholder="Placeholder" />

    <TextField
      id="textfield-filled"
      label="Label"
      name="textfieldFilled"
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      placeholder="Placeholder"
      value="Filled"
    />

    <TextField
      id="textfield-password"
      label="Label"
      name="textfieldPassword"
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      placeholder="Placeholder"
      type="password"
      value="Filled"
    />
  </>
);

export default TextFieldDefault;
