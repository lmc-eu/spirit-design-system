import React from 'react';
import TextField from '../TextField';

const TextFieldValidation = () => (
  <>
    <TextField
      id="textfieldSuccess"
      label="Label"
      name="textfieldSuccess"
      placeholder="Placeholder"
      validationState="success"
      value="Filled"
    />

    <TextField
      id="textfieldWarning"
      label="Label"
      validationText="Validation text"
      name="textfieldWarning"
      placeholder="Placeholder"
      validationState="warning"
      value="Filled"
    />

    <TextField
      id="textfieldDanger"
      label="Label"
      validationText={['Validation text', 'Second validation text']}
      name="textfieldDanger"
      placeholder="Placeholder"
      validationState="danger"
      value="Filled"
    />

    <TextField
      id="textfieldDangerHelper"
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
