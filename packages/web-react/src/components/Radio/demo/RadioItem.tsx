import React from 'react';
import Radio from '../Radio';

const RadioItem = () => (
  <>
    <Radio id="radioItemDefault" isItem label="Radio Label" name="item" />

    <Radio id="radioItemDefaultChecked" isChecked isItem label="Radio Label" name="item" />

    <Radio helperText="Helper text" id="radioItemHelperText" isItem label="Radio Label" name="item" />

    <Radio id="radioItemDisabled" isDisabled isItem label="Radio Label" name="itemDisabled" />

    <Radio
      helperText="Helper text"
      id="radioItemDisabledHelperText"
      isDisabled
      isChecked
      isItem
      label="Radio Label"
      name="itemDisabled"
    />
  </>
);

export default RadioItem;
