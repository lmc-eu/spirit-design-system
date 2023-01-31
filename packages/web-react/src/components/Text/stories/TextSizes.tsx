import React from 'react';
import Text from '../Text';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Text size="large">Body Large Text Regular</Text>
    <Text size="medium">Body Medium Text Regular</Text>
    <Text size="small">Body Small Text Regular</Text>
    <Text size="xlarge">Body XLarge Text Regular</Text>
    <Text size="xsmall">Body XSmall Text Regular</Text>
  </>
);

export default Story;
