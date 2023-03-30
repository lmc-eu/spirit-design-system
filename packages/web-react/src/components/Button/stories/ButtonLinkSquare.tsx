import React from 'react';
import { Icon } from '../../Icon';
import ButtonLink from '../ButtonLink';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <ButtonLink color="primary" isSquare>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="secondary" isSquare>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="tertiary" isSquare>
      <Icon name="hamburger" />
    </ButtonLink>
    <div className="docs-Box my-500">
      <ButtonLink color="inverted" isSquare>
        <Icon name="hamburger" />
      </ButtonLink>
    </div>
    <ButtonLink color="success" isSquare>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="informative" isSquare>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="warning" isSquare>
      <Icon name="hamburger" />
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="danger" isSquare>
      <Icon name="hamburger" />
    </ButtonLink>
  </>
);

export default Story;
