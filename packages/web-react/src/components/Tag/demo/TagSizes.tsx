import React from 'react';
import Tag from '../Tag';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div>
    <Tag size="xsmall">Tag</Tag>
    <Tag size="small">Tag</Tag>
    <Tag size="medium">Tag</Tag>
    <Tag size="large">Tag</Tag>
    <Tag size="xlarge">Tag</Tag>
  </div>
);

export default Story;
