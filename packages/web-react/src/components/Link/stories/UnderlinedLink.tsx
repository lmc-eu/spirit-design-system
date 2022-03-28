import React from 'react';
import Link from '../Link';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <p>
      <Link href="/" color="primary" isUnderlined>
        Primary Underlined Link
      </Link>
    </p>
    <p>
      <Link href="/" color="secondary" isUnderlined>
        Secondary Underlined Link
      </Link>
    </p>
    <p className="example-box">
      <Link href="/" color="inverted" isUnderlined>
        Inverted Underlined Link
      </Link>
    </p>
  </>
);

export default Story;
