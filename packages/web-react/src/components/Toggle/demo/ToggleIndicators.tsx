import React from 'react';
import Toggle from '../Toggle';

const ToggleIndicators = () => (
  <>
    <Toggle id="toggle-indicators" label="Toggle Label" name="default" hasIndicators />
    <Toggle id="toggle-indicators-checked" label="Toggle Label" name="default" isChecked hasIndicators />
  </>
);

export default ToggleIndicators;
