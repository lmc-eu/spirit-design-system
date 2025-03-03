import React from 'react';
import Toggle from '../Toggle';

const ToggleHelperText = () => (
  <>
    <Toggle id="toggle-helper-text" label="Toggle Label" helperText="Helper text" name="default" />
    <Toggle id="toggle-helper-text-checked" label="Toggle Label" helperText="Helper text" name="default" isChecked />
  </>
);

export default ToggleHelperText;
