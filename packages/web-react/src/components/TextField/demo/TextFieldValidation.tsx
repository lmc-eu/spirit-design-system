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
      defaultValue="Filled"
    />

    <TextField
      id="textfield-warning"
      label="Label"
      name="textfieldWarning"
      placeholder="Placeholder"
      validationState="warning"
      validationText="Validation text"
      defaultValue="Filled"
    />

    <TextField
      id="textfield-danger"
      label="Label"
      name="textfieldDanger"
      placeholder="Placeholder"
      validationState="danger"
      validationText={['Validation text', 'Second validation text']}
      defaultValue="Filled"
    />

    <TextField
      helperText="This is helper text"
      id="textfield-danger-helper"
      isRequired
      label="Label"
      name="textfieldDangerHelper"
      placeholder="Placeholder"
      validationState="danger"
      validationText="Danger validation text"
      defaultValue="Filled"
    />
  </>
);

export default TextFieldValidation;
