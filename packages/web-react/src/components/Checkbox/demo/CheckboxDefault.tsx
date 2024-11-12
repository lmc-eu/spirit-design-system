import React from 'react';
import Checkbox from '../Checkbox';

const CheckboxDefault = () => (
  <>
    <Checkbox id="checkbox-default" name="checkboxDefault" label="Checkbox Label" onChange={() => {}} />
    <Checkbox
      id="checkbox-default-checked"
      name="checkboxDefaultChecked"
      label="Checkbox Label"
      isChecked
      onChange={() => {}}
    />
  </>
);

export default CheckboxDefault;
