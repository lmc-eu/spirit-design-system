import React from 'react';
import Checkbox from '../Checkbox';

const CheckboxItem = () => (
  <>
    <Checkbox id="checkbox-item-default" name="checkboxItemDefault" label="Checkbox Label" isItem />
    <Checkbox
      id="checkbox-item-default-checked"
      name="checkboxItemDefaultChecked"
      label="Checkbox Label"
      isItem
      isChecked
    />
    <Checkbox
      id="checkbox-item-helper-text"
      name="checkboxItemHelperText"
      label="Checkbox Label"
      isItem
      helperText="Helper text"
    />
    <Checkbox id="checkbox-item-disabled" name="checkboxItemDisabled" label="Checkbox Label" isItem isDisabled />
    <Checkbox
      id="checkbox-item-disabled-helper-text"
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
