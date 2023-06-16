import React from 'react';
import TextField from '../TextField';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <TextField
      id="textfield-success"
      label="Validation success"
      name="textfield-success"
      validationState="success"
      validationText="Success validationText"
    />
    <TextField
      id="textfield-warning"
      label="Validation warning"
      name="textfield-warning"
      validationState="warning"
      validationText="Warning validationText"
    />
    <TextField
      id="textfield-danger"
      label="Validation danger"
      name="textfield-danger"
      validationState="danger"
      validationText={['Danger validationText', 'Second Danger validationText']}
    />
  </div>
);

export default Story;
