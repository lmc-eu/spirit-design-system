import React from 'react';
import Radio from '../Radio';

const RadioItem = () => (
  <>
    <Radio id="radio-item-default" isItem label="Radio Label" name="item" onChange={() => {}} />

    <Radio id="radio-item-default-checked" defaultChecked isItem label="Radio Label" name="item" onChange={() => {}} />

    <Radio
      helperText="Helper text"
      id="radio-item-helper-text"
      isItem
      label="Radio Label"
      name="item"
      onChange={() => {}}
    />

    <Radio id="radio-item-disabled" isDisabled isItem label="Radio Label" name="itemDisabled" onChange={() => {}} />

    <Radio
      helperText="Helper text"
      id="radio-item-disabled-helper-text"
      isDisabled
      isChecked
      isItem
      label="Radio Label"
      name="itemDisabled"
      onChange={() => {}}
    />
  </>
);

export default RadioItem;
