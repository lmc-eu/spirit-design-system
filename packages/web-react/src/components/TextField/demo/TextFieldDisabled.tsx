import React from 'react';
import TextField from '../TextField';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <TextField id="textfield-disabled" label="Disabled" name="textfield-disabled" isDisabled />
    <TextField
      id="textfield-disabled-filled"
      label="Disabled filled"
      name="textfield-disabled-filled"
      value="TextField value"
      isDisabled
    />
  </div>
);

export default Story;
