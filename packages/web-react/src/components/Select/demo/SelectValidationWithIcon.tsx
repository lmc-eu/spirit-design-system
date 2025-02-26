import React from 'react';
import { ValidationStates } from '../../../constants';
import Select from '../Select';
import ChildrenNode from './ChildrenNode';

const SelectValidationWithIcon = () => {
  const states = Object.values(ValidationStates);

  return (
    <>
      {states.map((state) => (
        <Select
          id={`select-${state}-validation-icon`}
          label="Label"
          validationText={`This is ${state} validation text. Long validation text to show how it wraps.`}
          name="selectWarning"
          validationState={state}
          hasValidationIcon
          key={`select-${state}-validation-icon`}
        >
          <ChildrenNode />
        </Select>
      ))}
    </>
  );
};

export default SelectValidationWithIcon;
