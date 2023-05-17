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
      message="Success message"
      validationState="success"
    />
    <TextField
      id="textfield-warning"
      label="Validation warning"
      message="Warning message"
      name="textfield-warning"
      validationState="warning"
    />
    <TextField
      id="textfield-danger"
      label="Validation danger"
      message={['Danger message', 'Second Danger message']}
      name="textfield-danger"
      validationState="danger"
    />
  </div>
);

export default Story;
