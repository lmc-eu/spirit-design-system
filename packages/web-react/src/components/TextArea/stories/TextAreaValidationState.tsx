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
      validationState="success"
      validationText="Success validationText"
    />
    <TextArea
      id="textarea-warning"
      label="Validation warning"
      name="textarea-warning"
      validationState="warning"
      validationText="Warning validationText"
    />
    <TextArea
      id="textarea-danger"
      label="Validation danger"
      name="textarea-danger"
      validationState="danger"
      validationText={['Danger validationText', 'Second Danger validationText']}
    />
  </div>
);

export default Story;
