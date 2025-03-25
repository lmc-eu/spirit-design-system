import React, { useState } from 'react';
import Radio from '../Radio';

const RadioValidation = () => {
  const [selectedRadio, setSelectedRadio] = useState('radio-warning-helper-text');

  const handleChange = (id: string) => {
    setSelectedRadio(id);
  };

  return (
    <>
      <Radio
        id="radio-success"
        label="Radio Label"
        name="validation"
        validationState="success"
        isChecked={selectedRadio === 'radio-success'}
        onChange={() => handleChange('radio-success')}
      />

      <Radio
        id="radio-warning"
        label="Radio Label"
        name="validation"
        validationState="warning"
        isChecked={selectedRadio === 'radio-warning'}
        onChange={() => handleChange('radio-warning')}
      />

      <Radio
        id="radio-danger"
        label="Radio Label"
        name="validation"
        validationState="danger"
        isChecked={selectedRadio === 'radio-danger'}
        onChange={() => handleChange('radio-danger')}
      />

      <Radio
        helperText="Helper text"
        id="radio-warning-helper-text"
        label="Radio Label"
        name="validation"
        validationState="warning"
        isChecked={selectedRadio === 'radio-warning-helper-text'}
        onChange={() => handleChange('radio-warning-helper-text')}
      />
    </>
  );
};

export default RadioValidation;
