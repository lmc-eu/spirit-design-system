import React from 'react';
import Pill from '../Pill';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <div className="mb-500">
      <Pill color="primary">3</Pill>
      <Pill color="secondary">3</Pill>
      <Pill color="tertiary">3</Pill>
      <Pill color="inverted">3</Pill>
    </div>
    <div className="mb-500">
      <Pill color="selected">333</Pill>
      <Pill color="unselected">333</Pill>
    </div>
    <div>
      <Pill color="success">3</Pill>
      <Pill color="informative">3</Pill>
      <Pill color="warning">3</Pill>
      <Pill color="danger">3</Pill>
    </div>
  </>
);

export default Story;
