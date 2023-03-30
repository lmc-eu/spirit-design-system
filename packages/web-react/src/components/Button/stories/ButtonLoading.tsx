import React from 'react';
import { Icon } from '../../Icon';
import Button from '../Button';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Button color="primary" isLoading>
      Click me
    </Button>
    <span className="mr-500" />
    <Button color="secondary" isLoading>
      Click me
    </Button>
    <span className="mr-500" />
    <Button color="tertiary" isLoading>
      Click me
    </Button>
    <div className="docs-Box my-500">
      <Button color="inverted" isLoading>
        Click me
      </Button>
    </div>
    <Button color="success" isLoading>
      Click me
    </Button>
    <span className="mr-500" />
    <Button color="informative" isLoading>
      Click me
    </Button>
    <span className="mr-500" />
    <Button color="warning" isLoading>
      Click me
    </Button>
    <span className="mr-500" />
    <Button color="danger" isLoading>
      Click me
    </Button>
    <div className="my-500" />
    <Button color="primary" isSquare isLoading>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="secondary" isSquare isLoading>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="tertiary" isSquare isLoading>
      <Icon name="hamburger" />
    </Button>
    <div className="docs-Box my-500">
      <Button color="inverted" isSquare isLoading>
        <Icon name="hamburger" />
      </Button>
    </div>
    <Button color="success" isSquare isLoading>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="informative" isSquare isLoading>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="warning" isSquare isLoading>
      <Icon name="hamburger" />
    </Button>
    <span className="mr-500" />
    <Button color="danger" isSquare isLoading>
      <Icon name="hamburger" />
    </Button>
  </>
);

export default Story;
