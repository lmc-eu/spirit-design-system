import React from 'react';
import UNSTABLE_Toggle from '../UNSTABLE_Toggle';

const ToggleHelperText = () => (
  <>
    <UNSTABLE_Toggle id="toggle-helper-text" label="Toggle Label" helperText="Helper text" name="default" />
    <UNSTABLE_Toggle
      id="toggle-helper-text-checked"
      label="Toggle Label"
      helperText="Helper text"
      name="default"
      isChecked
    />
  </>
);

export default ToggleHelperText;
