import React from 'react';
import Link from '../Link';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <p>
      <Link href="/" color="primary" isDisabled isUnderlined>
        Primary Disabled Underlined Link
      </Link>
    </p>
    <p>
      <Link href="/" color="secondary" isDisabled isUnderlined>
        Secondary Disabled Underlined Link
      </Link>
    </p>
    <p className="example-box">
      <Link href="/" color="inverted" isDisabled isUnderlined>
        Inverted Disabled Underlined Link
      </Link>
    </p>
  </>
);

export default Story;
