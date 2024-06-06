import React from 'react';
import TextField from '../TextField';

const TextFieldDefault = () => (
  <>
    <TextField id="textfield-default" label="Label" name="textfieldDefault" placeholder="Placeholder" />

    <TextField id="textfield-filled" label="Label" name="textfieldFilled" placeholder="Placeholder" value="Filled" />

    <TextField
      id="textfield-password"
      label="Label"
      name="textfieldPassword"
      placeholder="Placeholder"
      value="Filled"
      type="password"
    />
  </>
);

export default TextFieldDefault;
