import React from 'react';
import { ValidationStates } from '../../../constants';
import TextArea from '../TextArea';

const TextAreaValidationWithIcon = () => {
  const states = Object.values(ValidationStates);

  return (
    <>
      {states.map((state) => (
        <TextArea
          id={`text-field-${state}-validation-icon`}
          isRequired
          label="Label"
          validationText={`This is ${state} validation text. Long validation text to show how it wraps.`}
          validationState={state}
          hasValidationIcon
          name="textareaDangerHelper"
          placeholder="Placeholder"
          value="Filled"
          key={`text-field-${state}-validation-icon`}
        />
      ))}
    </>
  );
};

export default TextAreaValidationWithIcon;
