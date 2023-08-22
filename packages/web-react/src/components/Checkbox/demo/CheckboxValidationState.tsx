import React from 'react';
import Checkbox from '../Checkbox';

const Story = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <Checkbox
      id="checkbox0"
      label="Checkbox success"
      name="example"
      validationState="success"
      validationText="Success validation text"
    />
    <Checkbox
      id="checkbox1"
      label="Checkbox warning"
      name="example"
      validationState="warning"
      validationText="Warning validation text"
    />
    <Checkbox
      id="checkbox2"
      label="Checkbox danger"
      name="example"
      validationState="danger"
      validationText={['Danger validation text', 'Danger validation text']}
    />
  </div>
);

export default Story;
