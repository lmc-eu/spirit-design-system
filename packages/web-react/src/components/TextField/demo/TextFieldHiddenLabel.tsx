import React from 'react';
import TextField from '../TextField';

const TextFieldHiddenLabel = () => (
  <TextField
    id="textfield-hidden-label"
    label="Label"
    name="textfieldHiddenLabel"
    placeholder="Placeholder"
    isLabelHidden
  />
);

export default TextFieldHiddenLabel;
