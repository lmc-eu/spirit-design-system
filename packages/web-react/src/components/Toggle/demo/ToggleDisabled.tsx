import React from 'react';
import Toggle from '../Toggle';

const ToggleDisabled = () => (
  <>
    <Toggle id="toggle-disabled" label="Toggle Label" name="default" isDisabled />
    <Toggle id="toggle-disabled-checked-disabled" label="Toggle Label" name="default" isDisabled isChecked />
    <Toggle id="toggle-helper-text-disabled" label="Toggle Label" helperText="Helper text" name="default" isDisabled />
    <Toggle
      id="toggle-warning-helper-text-disabled"
      label="Toggle Label"
      helperText="Helper text"
      validationText="Validation text"
      validationState="warning"
      name="default"
      isDisabled
      isChecked
    />
    <Toggle id="toggle-indicators-disabled" label="Toggle Label" name="default" hasIndicators isDisabled />
    <Toggle
      id="toggle-indicators-disabled-checked"
      label="Toggle Label"
      name="default"
      hasIndicators
      isDisabled
      isChecked
    />
  </>
);

export default ToggleDisabled;
