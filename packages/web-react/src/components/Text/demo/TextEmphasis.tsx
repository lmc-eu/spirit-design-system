import React from 'react';
import Text from '../Text';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Text>Body Medium Text Regular</Text>
    <Text emphasis="bold">Body Medium Text Bold</Text>
    <Text emphasis="italic">Body Medium Text Italic</Text>
  </>
);

export default Story;
