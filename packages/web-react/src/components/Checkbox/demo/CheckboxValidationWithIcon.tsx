import React from 'react';
import { ValidationStates } from '../../../constants';
import Checkbox from '../Checkbox';

const CheckboxValidationWithIcon = () => {
  const states = Object.values(ValidationStates);

  return (
    <>
      {states.map((state) => (
        <Checkbox
          id={`checkbox-${state}-validation-icon`}
          name="checkboxWarning"
          label="Checkbox Label"
          key={`checkbox-${state}-icon`}
          validationState={state}
          validationText={`This is ${state} validation text.`}
          hasValidationIcon
          onChange={() => {}}
        />
      ))}
    </>
  );
};

export default CheckboxValidationWithIcon;
