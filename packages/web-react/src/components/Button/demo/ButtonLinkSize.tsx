import React from 'react';
import ButtonLink from '../ButtonLink';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <ButtonLink color="primary" size="small">
      Small ButtonLink
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="primary" size="medium">
      Medium ButtonLink
    </ButtonLink>
    <span className="mr-500" />
    <ButtonLink color="primary" size="large">
      Large ButtonLink
    </ButtonLink>
    <span className="mr-500" />
    <div className="docs-Box my-500">
      <ButtonLink color="inverted" size="small">
        Small inverted ButtonLink
      </ButtonLink>
      <span className="mr-500" />
      <ButtonLink color="inverted" size="medium">
        Medium inverted ButtonLink
      </ButtonLink>
      <span className="mr-500" />
      <ButtonLink color="inverted" size="large">
        Large inverted ButtonLink
      </ButtonLink>
    </div>
  </>
);

export default Story;
