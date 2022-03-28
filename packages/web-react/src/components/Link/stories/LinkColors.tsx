import React from 'react';
import Link from '../Link';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <p>
      <Link href="/" color="primary">
        Primary Link
      </Link>
    </p>
    <p>
      <Link href="/" color="secondary">
        Secondary Link
      </Link>
    </p>
    <p className="example-box">
      <Link href="/" color="inverted">
        Inverted Link
      </Link>
    </p>
  </>
);

export default Story;
