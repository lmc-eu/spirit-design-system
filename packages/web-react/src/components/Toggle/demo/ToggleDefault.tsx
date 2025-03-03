import React from 'react';
import Toggle from '../Toggle';

const ToggleDefault = () => (
  <>
    <Toggle id="toggle-default" label="Toggle Label" name="default" />
    <Toggle id="toggle-default-checked" label="Toggle Label" name="default" isChecked />
  </>
);

export default ToggleDefault;
