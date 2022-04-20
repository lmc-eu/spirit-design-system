import React from 'react';
import Button from '../Button';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Button color="primary" isDisabled>
      Click me
    </Button>
    <span className="mr-500" />
    <Button color="secondary" isDisabled>
      Click me
    </Button>
    <span className="mr-500" />
    <Button color="tertiary" isDisabled>
      Click me
    </Button>
    <span className="mr-500" />
    <Button color="danger" isDisabled>
      Click me
    </Button>
    <span className="mr-500" />
    <div className="example-box">
      <Button color="inverted" isDisabled>
        Click me
      </Button>
    </div>
  </>
);

export default Story;
