import React from 'react';
import Checkbox from '../Checkbox';

const CheckboxItem = () => (
  <>
    <Checkbox id="checkboxItemDefault" name="checkboxItemDefault" label="Checkbox Label" isItem />
    <Checkbox
      id="checkboxItemDefaultChecked"
      name="checkboxItemDefaultChecked"
      label="Checkbox Label"
      isItem
      isChecked
    />
    <Checkbox
      id="checkboxItemHelperText"
      name="checkboxItemHelperText"
      label="Checkbox Label"
      isItem
      helperText="Helper text"
    />
    <Checkbox id="checkboxItemDisabled" name="checkboxItemDisabled" label="Checkbox Label" isItem isDisabled />
    <Checkbox
      id="checkboxItemDisabledHelperText"
      name="checkboxItemDisabledHelperText"
      label="Checkbox Label"
      isItem
      helperText="Helper text"
      isDisabled
      isRequired
      isChecked
    />
  </>
);

export default CheckboxItem;
