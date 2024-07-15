import React from 'react';
import { UNSTABLE_Toggle } from '..';

const ToggleDefault = () => (
  <>
    <UNSTABLE_Toggle id="toggle-default" label="Toggle Label" name="default" />
    <UNSTABLE_Toggle id="toggle-default-checked" label="Toggle Label" name="default" isChecked />
  </>
);

export default ToggleDefault;
