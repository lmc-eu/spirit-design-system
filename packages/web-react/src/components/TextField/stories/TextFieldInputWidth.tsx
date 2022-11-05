import React from 'react';
import TextField from '../TextField';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <TextField id="textfield-with-size" label="Width 10 em" name="textfield-with-size" size={10} />
);

export default Story;
