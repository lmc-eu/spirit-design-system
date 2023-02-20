import React from 'react';
import RadioField from '../RadioField';

const Story = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <RadioField id="radiofield0" label="Radio success" name="example" validationState="success" />
    <RadioField id="radiofield1" label="Radio warning" name="example" validationState="warning" />
    <RadioField id="radiofield2" label="Radio danger" name="example" validationState="danger" />
  </div>
);

export default Story;
