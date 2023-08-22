import React from 'react';
import Tag from '../Tag';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div>
    <Tag color="neutral">Tag</Tag>
    <Tag color="success">Tag</Tag>
    <Tag color="informative">Tag</Tag>
    <Tag color="warning">Tag</Tag>
    <Tag color="danger">Tag</Tag>
  </div>
);

export default Story;
