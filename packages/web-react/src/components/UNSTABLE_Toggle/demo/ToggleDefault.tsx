import React from 'react';
import UNSTABLE_Toggle from '../UNSTABLE_Toggle';

const ToggleDefault = () => (
  <>
    <UNSTABLE_Toggle id="toggle-default" label="Toggle Label" name="default" />
    <UNSTABLE_Toggle id="toggle-default-checked" label="Toggle Label" name="default" isChecked />
  </>
);

export default ToggleDefault;
