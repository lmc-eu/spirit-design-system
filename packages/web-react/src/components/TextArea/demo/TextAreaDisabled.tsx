import React from 'react';
import TextArea from '../TextArea';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <TextArea id="textarea-disabled" label="Disabled" name="textarea-disabled" isDisabled />
    <TextArea
      id="textarea-disabled-filled"
      label="Disabled filled"
      name="textarea-disabled-filled"
      value="TextArea value"
      isDisabled
    />
  </div>
);

export default Story;
