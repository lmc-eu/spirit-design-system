import React from 'react';
import { ValidationStates } from '../../../constants';
import TextField from '../TextField';

const TextFieldValidationWithIcon = () => {
  const states = Object.values(ValidationStates);

  return (
    <>
      {states.map((state) => (
        <TextField
          id={`text-field-${state}-validation-icon`}
          isRequired
          label="Label"
          validationText={`This is ${state} validation text. Long validation text to show how it wraps.`}
          validationState={state}
          hasValidationIcon
          name="textfieldDangerHelper"
          placeholder="Placeholder"
          value="Filled"
          key={`text-field-${state}-validation-icon`}
        />
      ))}
    </>
  );
};

export default TextFieldValidationWithIcon;
