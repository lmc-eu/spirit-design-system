import React from 'react';
import TextArea from '../TextArea';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <TextArea id="textarea-label-hidden" label="Hidden label" name="textarea-label-hidden" isLabelHidden />
);

export default Story;
