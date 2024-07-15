import React from 'react';
import UNSTABLE_Toggle from '../UNSTABLE_Toggle';

const ToggleIndicators = () => (
  <>
    <UNSTABLE_Toggle id="toggle-indicators" label="Toggle Label" name="default" hasIndicators />
    <UNSTABLE_Toggle id="toggle-indicators-checked" label="Toggle Label" name="default" isChecked hasIndicators />
  </>
);

export default ToggleIndicators;
