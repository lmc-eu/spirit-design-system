import React from 'react';
import Pill from '../Pill';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <div className="mb-500">
      <Pill color="selected">3</Pill>
      <Pill color="selected">333</Pill>
    </div>
    <div className="mb-500">
      <Pill color="danger">3</Pill>
      <Pill color="danger">333</Pill>
    </div>
    <div className="mb-500">
      <Pill color="informative">3</Pill>
      <Pill color="informative">333</Pill>
    </div>
    <div className="mb-500">
      <Pill color="success">3</Pill>
      <Pill color="success">333</Pill>
    </div>
    <div>
      <Pill color="warning">3</Pill>
      <Pill color="warning">333</Pill>
    </div>
  </>
);

export default Story;
