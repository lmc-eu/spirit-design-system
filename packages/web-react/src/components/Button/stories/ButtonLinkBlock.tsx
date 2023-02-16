import React from 'react';
import ButtonLink from '../ButtonLink';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <ButtonLink color="primary" isBlock>
      Click me
    </ButtonLink>
    <div className="mb-500" />
    <ButtonLink color="secondary" isBlock>
      Click me
    </ButtonLink>
    <div className="mb-500" />
    <ButtonLink color="tertiary" isBlock>
      Click me
    </ButtonLink>
    <div className="docs-Box my-500">
      <ButtonLink color="inverted" isBlock>
        Click me
      </ButtonLink>
    </div>
    <ButtonLink color="success" isBlock>
      Click me
    </ButtonLink>
    <div className="mb-500" />
    <ButtonLink color="informative" isBlock>
      Click me
    </ButtonLink>
    <div className="mb-500" />
    <ButtonLink color="warning" isBlock>
      Click me
    </ButtonLink>
    <div className="mb-500" />
    <ButtonLink color="danger" isBlock>
      Click me
    </ButtonLink>
  </>
);

export default Story;
