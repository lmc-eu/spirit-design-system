import React from 'react';
import ButtonLink from '../ButtonLink';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <ButtonLink color="primary">Click me</ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="secondary">Click me</ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="tertiary">Click me</ButtonLink>
    <div className="docs-Box my-500">
      <ButtonLink color="inverted">Click me</ButtonLink>
    </div>
    <ButtonLink color="success">Click me</ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="informative">Click me</ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="warning">Click me</ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="danger">Click me</ButtonLink>
  </>
);

export default Story;
