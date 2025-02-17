import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import { ValidationStates } from '../../../constants';
import FieldGroup from '../FieldGroup';

const FieldGroupValidationWithIcon = () => {
  const states = Object.values(ValidationStates);

  return (
    <>
      {states.map((state) => (
        <FieldGroup
          hasValidationIcon
          id={`field-group-validation-${state}`}
          label="Label"
          validationState={state}
          validationText={`This is ${state} validation text with icon.`}
          key={`field-group-validation-${state}`}
        >
          <DocsBox>Item</DocsBox>
          <DocsBox>Item</DocsBox>
          <DocsBox>Item</DocsBox>
        </FieldGroup>
      ))}
    </>
  );
};

export default FieldGroupValidationWithIcon;
