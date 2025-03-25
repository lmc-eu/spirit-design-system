import React, { useState } from 'react';
import Radio from '../Radio';

const RadioItem = () => {
  const [selectedRadio, setSelectedRadio] = useState('radio-item-default-checked');

  const handleChange = (id: string) => {
    setSelectedRadio(id);
  };

  return (
    <>
      <Radio
        id="radio-item-default"
        isItem
        label="Radio Label"
        name="item"
        isChecked={selectedRadio === 'radio-item-default'}
        onChange={() => handleChange('radio-item-default')}
      />

      <Radio
        id="radio-item-default-checked"
        isItem
        label="Radio Label"
        name="item"
        isChecked={selectedRadio === 'radio-item-default-checked'}
        onChange={() => handleChange('radio-item-default-checked')}
      />

      <Radio
        helperText="Helper text"
        id="radio-item-helper-text"
        isItem
        label="Radio Label"
        name="item"
        isChecked={selectedRadio === 'radio-item-helper-text'}
        onChange={() => handleChange('radio-item-helper-text')}
      />

      <Radio id="radio-item-disabled" isDisabled isItem label="Radio Label" name="itemDisabled" />

      <Radio
        helperText="Helper text"
        id="radio-item-disabled-helper-text"
        isDisabled
        isItem
        label="Radio Label"
        name="itemDisabled"
        isChecked
      />
    </>
  );
};

export default RadioItem;
