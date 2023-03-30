import React from 'react';
import { Icon } from '../../Icon';
import Button from '../Button';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Button color="primary" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="secondary" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="tertiary" isSquare>
      <Icon name="hamburger" />
    </Button>
    <div className="docs-Box my-500">
      <Button color="inverted" isSquare>
        <Icon name="hamburger" />
      </Button>
    </div>
    <Button color="success" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="informative" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="warning" isSquare>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="danger" isSquare>
      <Icon name="hamburger" />
    </Button>
  </>
);

export default Story;
