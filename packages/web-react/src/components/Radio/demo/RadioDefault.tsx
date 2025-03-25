import React, { useState } from 'react';
import Radio from '../Radio';

const RadioDefault = () => {
  const [selectedRadio, setSelectedRadio] = useState('radio-default');

  const handleChange = (id: string) => {
    setSelectedRadio(id);
  };

  return (
    <>
      <Radio
        id="radio-default"
        label="Radio Label"
        name="radioDefault"
        isChecked={selectedRadio === 'radio-default'}
        onChange={() => handleChange('radio-default')}
      />

      <Radio
        id="radio-default-checked"
        label="Radio Label"
        name="radioDefault"
        isChecked={selectedRadio === 'radio-default-checked'}
        onChange={() => handleChange('radio-default-checked')}
      />
    </>
  );
};

export default RadioDefault;
