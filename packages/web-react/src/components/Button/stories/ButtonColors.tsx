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
    <div className="docs-Box my-500">
      <Button color="inverted">Click me</Button>
    </div>
    <Button color="success">Click me</Button>
    <span className="mr-500" />
    <Button color="informative">Click me</Button>
    <span className="mr-500" />
    <Button color="warning">Click me</Button>
    <span className="mr-500" />
    <Button color="danger">Click me</Button>
  </>
);

export default Story;
