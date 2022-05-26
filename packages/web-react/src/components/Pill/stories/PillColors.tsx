import React from 'react';
import Pill from '../Pill';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Pill color="secondary">3</Pill>
    <div className="mb-500" />
    <Pill color="selected">333</Pill>
  </>
);

export default Story;
