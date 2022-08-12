import React from 'react';
import Button from '../Button';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Button color="primary" isBlock>
      Click me
    </Button>
    <div className="mb-500" />
    <Button color="secondary" isBlock>
      Click me
    </Button>
    <div className="mb-500" />
    <Button color="tertiary" isBlock>
      Click me
    </Button>
    <div className="mb-500" />
    <Button color="danger" isBlock>
      Click me
    </Button>
    <div className="mb-500" />
    <div className="docs-Box">
      <Button color="inverted" isBlock>
        Click me
      </Button>
    </div>
  </>
);

export default Story;
