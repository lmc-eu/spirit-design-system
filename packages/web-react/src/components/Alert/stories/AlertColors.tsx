import React from 'react';
import Alert from '../Alert';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Alert color="success">This is a success alert — check it out!</Alert>
    <div className="mb-500" />
    <Alert color="danger">This is a danger alert — check it out!</Alert>
  </>
);

export default Story;
