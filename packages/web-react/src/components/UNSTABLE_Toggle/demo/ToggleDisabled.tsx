import React from 'react';
import UNSTABLE_Toggle from '../UNSTABLE_Toggle';

const ToggleDisabled = () => (
  <>
    <UNSTABLE_Toggle id="toggle-disabled" label="Toggle Label" name="default" isDisabled />
    <UNSTABLE_Toggle id="toggle-disabled-checked-disabled" label="Toggle Label" name="default" isDisabled isChecked />
    <UNSTABLE_Toggle
      id="toggle-helper-text-disabled"
      label="Toggle Label"
      helperText="Helper text"
      name="default"
      isDisabled
    />
    <UNSTABLE_Toggle
      id="toggle-warning-helper-text-disabled"
      label="Toggle Label"
      helperText="Helper text"
      validationText="Validation text"
      validationState="warning"
      name="default"
      isDisabled
      isChecked
    />
    <UNSTABLE_Toggle id="toggle-indicators-disabled" label="Toggle Label" name="default" hasIndicators isDisabled />
    <UNSTABLE_Toggle
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
