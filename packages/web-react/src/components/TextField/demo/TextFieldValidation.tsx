import React from 'react';
import TextField from '../TextField';

const TextFieldValidation = () => (
  <>
    <TextField
      id="textfield-success"
      label="Label"
      name="textfieldSuccess"
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      placeholder="Placeholder"
      validationState="success"
      value="Filled"
    />

    <TextField
      id="textfield-warning"
      label="Label"
      name="textfieldWarning"
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      placeholder="Placeholder"
      validationState="warning"
      validationText="Validation text"
      value="Filled"
    />

    <TextField
      id="textfield-danger"
      label="Label"
      name="textfieldDanger"
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      placeholder="Placeholder"
      validationState="danger"
      validationText={['Validation text', 'Second validation text']}
      value="Filled"
    />

    <TextField
      helperText="This is helper text"
      id="textfield-danger-helper"
      isRequired
      label="Label"
      name="textfieldDangerHelper"
      onChange={(e) => console.log(`Value: ${(e.target as HTMLInputElement).value}`)}
      placeholder="Placeholder"
      validationState="danger"
      validationText="Danger validation text"
      value="Filled"
    />
  </>
);

export default TextFieldValidation;
