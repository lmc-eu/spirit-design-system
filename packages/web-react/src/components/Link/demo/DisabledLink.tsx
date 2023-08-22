import React from 'react';
import Link from '../Link';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <p>
      <Link href="/" color="primary" isDisabled>
        Primary Disabled Link
      </Link>
    </p>
    <p>
      <Link href="/" color="secondary" isDisabled>
        Secondary Disabled Link
      </Link>
    </p>
    <p className="docs-Box">
      <Link href="/" color="inverted" isDisabled>
        Inverted Disabled Link
      </Link>
    </p>
  </>
);

export default Story;
