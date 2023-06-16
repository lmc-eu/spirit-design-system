import React from 'react';
import CheckboxField from '../CheckboxField';

const Story = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <CheckboxField
      id="checkboxfield0"
      label="Checkbox success"
      name="example"
      validationState="success"
      validationText="Success validation text"
    />
    <CheckboxField
      id="checkboxfield1"
      label="Checkbox warning"
      name="example"
      validationState="warning"
      validationText="Warning validation text"
    />
    <CheckboxField
      id="checkboxfield2"
      label="Checkbox danger"
      name="example"
      validationState="danger"
      validationText={['Danger validation text', 'Danger validation text']}
    />
  </div>
);

export default Story;
