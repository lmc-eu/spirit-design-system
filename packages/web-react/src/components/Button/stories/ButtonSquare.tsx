import React from 'react';
import Button from '../Button';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Button color="primary" isSquare>
      🚀
    </Button>
    <span className="mr-500" />
    <Button color="secondary" isSquare>
      🚀
    </Button>
    <span className="mr-500" />
    <Button color="tertiary" isSquare>
      🚀
    </Button>
    <span className="mr-500" />
    <Button color="danger" isSquare>
      🚀
    </Button>
    <span className="mr-500" />
    <div className="docs-Box">
      <Button color="inverted" isSquare>
        🚀
      </Button>
    </div>
  </>
);

export default Story;
