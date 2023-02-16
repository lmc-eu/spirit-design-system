import React from 'react';
import ButtonLink from '../ButtonLink';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <ButtonLink color="primary" isDisabled>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="secondary" isDisabled>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="tertiary" isDisabled>
      Click me
    </ButtonLink>
    <div className="docs-Box my-500">
      <ButtonLink color="inverted" isDisabled>
        Click me
      </ButtonLink>
    </div>
    <ButtonLink color="success" isDisabled>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="informative" isDisabled>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="warning" isDisabled>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="danger" isDisabled>
      Click me
    </ButtonLink>
  </>
);

export default Story;
