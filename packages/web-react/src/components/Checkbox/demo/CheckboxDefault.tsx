import React from 'react';
import Checkbox from '../Checkbox';

const CheckboxDefault = () => (
  <>
    <Checkbox id="checkboxDefault" name="checkboxDefault" label="Checkbox Label" />
    <Checkbox id="checkboxDefaultChecked" name="checkboxDefaultChecked" label="Checkbox Label" isChecked />
  </>
);

export default CheckboxDefault;
