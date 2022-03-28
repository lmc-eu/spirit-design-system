import React from 'react';
import Heading from '../Heading';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Heading elementType="p" size="xlarge">
      Heading XLarge Text
    </Heading>
    <Heading elementType="p" size="large">
      Heading Large Text
    </Heading>
    <Heading elementType="p" size="medium">
      Heading Medium Text
    </Heading>
    <Heading elementType="p" size="small">
      Heading Small Text
    </Heading>
    <Heading elementType="p" size="xsmall">
      Heading XSmall Text
    </Heading>
  </>
);

export default Story;
