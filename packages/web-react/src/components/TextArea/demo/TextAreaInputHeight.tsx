import React from 'react';
import TextArea from '../TextArea';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <TextArea id="textarea-with-rows" label="Visible 5 rows" name="textarea-with-rows" rows={5} />
);

export default Story;
