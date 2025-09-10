import React from 'react';
import { ValidationStates } from '../../../constants';
import TextField from '../TextField';

const TextFieldValidationWithIcon = () => {
  const states = Object.values(ValidationStates);

  return (
    <>
      {states.map((state) => (
        <TextField
          key={`text-field-${state}-validation-icon`}
          hasValidationIcon
          id={`text-field-${state}-validation-icon`}
          isRequired
          label="Label"
          name="textfieldDangerHelper"
          placeholder="Placeholder"
          validationState={state}
          validationText={`This is ${state} validation text. Long validation text to show how it wraps.`}
          defaultValue="Filled"
        />
      ))}
    </>
  );
};

export default TextFieldValidationWithIcon;
