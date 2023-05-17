import React from 'react';
import CheckboxField from '../CheckboxField';

const Story = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <CheckboxField
      id="checkboxfield0"
      label="Checkbox success"
      name="example"
      validationState="success"
      message="Success validation message"
    />
    <CheckboxField
      id="checkboxfield1"
      label="Checkbox warning"
      name="example"
      validationState="warning"
      message="Warning validation message"
    />
    <CheckboxField
      id="checkboxfield2"
      label="Checkbox danger"
      name="example"
      validationState="danger"
      message={['Danger validation message', 'Danger validation message']}
    />
  </div>
);

export default Story;
