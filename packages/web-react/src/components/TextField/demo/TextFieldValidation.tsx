import React from 'react';
import TextField from '../TextField';

const TextFieldValidation = () => (
  <>
    <TextField
      id="textfield-success"
      label="Label"
      name="textfieldSuccess"
      placeholder="Placeholder"
      validationState="success"
      value="Filled"
    />

    <TextField
      id="textfield-warning"
      label="Label"
      validationText="Validation text"
      name="textfieldWarning"
      placeholder="Placeholder"
      validationState="warning"
      value="Filled"
    />

    <TextField
      id="textfield-danger"
      label="Label"
      validationText={['Validation text', 'Second validation text']}
      name="textfieldDanger"
      placeholder="Placeholder"
      validationState="danger"
      value="Filled"
    />

    <TextField
      id="textfield-danger-helper"
      isRequired
      label="Label"
      helperText="This is helper text"
      validationText="Danger validation text"
      validationState="danger"
      name="textfieldDangerHelper"
      placeholder="Placeholder"
      value="Filled"
    />
  </>
);

export default TextFieldValidation;
