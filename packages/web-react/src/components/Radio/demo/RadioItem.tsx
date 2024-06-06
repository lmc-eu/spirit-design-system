import React from 'react';
import Radio from '../Radio';

const RadioItem = () => (
  <>
    <Radio id="radio-item-default" isItem label="Radio Label" name="item" />

    <Radio id="radio-item-default-checked" isChecked isItem label="Radio Label" name="item" />

    <Radio helperText="Helper text" id="radio-item-helper-text" isItem label="Radio Label" name="item" />

    <Radio id="radio-item-disabled" isDisabled isItem label="Radio Label" name="itemDisabled" />

    <Radio
      helperText="Helper text"
      id="radio-item-disabled-helper-text"
      isDisabled
      isChecked
      isItem
      label="Radio Label"
      name="itemDisabled"
    />
  </>
);

export default RadioItem;
