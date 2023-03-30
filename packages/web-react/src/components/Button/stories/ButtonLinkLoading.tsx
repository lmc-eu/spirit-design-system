import React from 'react';
import { Icon } from '../../Icon';
import ButtonLink from '../ButtonLink';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <ButtonLink color="primary" isLoading>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="secondary" isLoading>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="tertiary" isLoading>
      Click me
    </ButtonLink>
    <div className="docs-Box my-500">
      <ButtonLink color="inverted" isLoading>
        Click me
      </ButtonLink>
    </div>
    <ButtonLink color="success" isLoading>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="informative" isLoading>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="warning" isLoading>
      Click me
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="danger" isLoading>
      Click me
    </ButtonLink>
    <div className="my-500" />
    <ButtonLink color="primary" isSquare isLoading>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="secondary" isSquare isLoading>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="tertiary" isSquare isLoading>
      <Icon name="hamburger" />
    </ButtonLink>
    <div className="docs-Box my-500">
      <ButtonLink color="inverted" isSquare isLoading>
        <Icon name="hamburger" />
      </ButtonLink>
    </div>
    <ButtonLink color="success" isSquare isLoading>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="informative" isSquare isLoading>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="warning" isSquare isLoading>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="danger" isSquare isLoading>
      <Icon name="hamburger" />
    </ButtonLink>
  </>
);

export default Story;
