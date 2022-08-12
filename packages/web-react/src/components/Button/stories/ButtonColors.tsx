import React from 'react';
import Button from '../Button';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Button color="primary">Click me</Button>
    <span className="mr-500" />
    <Button color="secondary">Click me</Button>
    <span className="mr-500" />
    <Button color="tertiary">Click me</Button>
    <span className="mr-500" />
    <Button color="danger">Click me</Button>
    <span className="mr-500 mb-500" />
    <div className="docs-Box">
      <Button color="inverted">Click me</Button>
    </div>
  </>
);

export default Story;
