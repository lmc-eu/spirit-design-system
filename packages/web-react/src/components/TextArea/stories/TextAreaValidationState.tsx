import React from 'react';
import TextArea from '../TextArea';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <TextArea
      id="textarea-success"
      label="Validation success"
      name="textarea-success"
      message="Success message"
      validationState="success"
    />
    <TextArea
      id="textarea-warning"
      label="Validation warning"
      message="Warning message"
      name="textarea-warning"
      validationState="warning"
    />
    <TextArea
      id="textarea-error"
      label="Validation error"
      message="Error message"
      name="textarea-error"
      validationState="error"
    />
  </div>
);

export default Story;
