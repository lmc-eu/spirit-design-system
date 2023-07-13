import React from 'react';
import Radio from '../Radio';

const Story = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <Radio id="radio0" label="Radio success" name="example" validationState="success" />
    <Radio id="radio1" label="Radio warning" name="example" validationState="warning" />
    <Radio id="radio2" label="Radio danger" name="example" validationState="danger" />
  </div>
);

export default Story;
