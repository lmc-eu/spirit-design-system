import React from 'react';
import TextField from '../TextField';

const TextFieldDefault = () => (
  <>
    <TextField id="textfieldDefault" label="Label" name="textfieldDefault" placeholder="Placeholder" />

    <TextField id="textfieldFilled" label="Label" name="textfieldFilled" placeholder="Placeholder" value="Filled" />

    <TextField
      id="textfieldPassword"
      label="Label"
      name="textfieldPassword"
      placeholder="Placeholder"
      value="Filled"
      type="password"
    />
  </>
);

export default TextFieldDefault;
