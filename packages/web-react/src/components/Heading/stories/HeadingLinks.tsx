import React from 'react';
import Link from '../../Link/Link';
import Heading from '../Heading';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Heading elementType="h4" size="xsmall">
      Heading XSmall Text <Link href="/">link (default style), obtains visited state</Link>
    </Heading>
    <Heading elementType="h4" size="xsmall">
      Heading XSmall Text{' '}
      <Link href="/" color="primary">
        link (primary), obtains visited state
      </Link>
    </Heading>
    <Heading elementType="h4" size="xsmall">
      Heading XSmall Text{' '}
      <Link href="/" isUnderlined>
        link with underlined class, obtains visited state, gets underlined only on hover and active
      </Link>
    </Heading>
    <Heading elementType="h4" size="xsmall">
      Heading XSmall Text <Link href="/">link without underlined class, behaves the same as the one before</Link>
    </Heading>
  </>
);

export default Story;
