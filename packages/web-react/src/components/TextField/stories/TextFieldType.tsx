import React from 'react';
import TextField from '../TextField';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <TextField id="textfield-text" label="Type text" name="textfield-text" type="text" />
    <TextField id="textfield-email" label="Type email" name="textfield-email" type="email" />
    <TextField id="textfield-password" label="Type password" name="textfield-password" type="password" />
  </div>
);

export default Story;
