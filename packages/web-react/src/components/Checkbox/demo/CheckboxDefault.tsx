import React from 'react';
import Checkbox from '../Checkbox';

const CheckboxDefault = () => (
  <>
    <Checkbox id="checkbox-default" name="checkboxDefault" label="Checkbox Label" />
    <Checkbox id="checkbox-default-checked" name="checkboxDefaultChecked" label="Checkbox Label" isChecked />
  </>
);

export default CheckboxDefault;
