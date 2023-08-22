import React from 'react';
import TextArea from '../TextArea';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <TextArea id="textarea-required" label="Required" name="textarea-required" isRequired />
);

export default Story;
