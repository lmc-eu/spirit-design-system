import React from 'react';
import TextField from '../TextField';

const TextFieldHiddenLabel = () => (
  <TextField
    id="textfield-hidden-label"
    isLabelHidden
    label="Label"
    name="textfieldHiddenLabel"
    placeholder="Placeholder"
  />
);

export default TextFieldHiddenLabel;
