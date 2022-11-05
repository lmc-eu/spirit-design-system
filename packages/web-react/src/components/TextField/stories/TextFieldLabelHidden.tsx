import React from 'react';
import TextField from '../TextField';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <TextField id="textfield-label-hidden" label="Hidden label" name="textfield-label-hidden" isLabelHidden />
);

export default Story;
