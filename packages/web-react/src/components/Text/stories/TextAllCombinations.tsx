import React from 'react';
import Text from '../Text';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <Text size="large">Body Large Text Regular</Text>
    <Text size="large" emphasis="bold">
      Body Large Text Bold
    </Text>
    <Text size="large" emphasis="italic">
      Body Large Text Italic
    </Text>
    <Text size="medium">Body Medium Text Regular</Text>
    <Text size="medium" emphasis="bold">
      Body Medium Text Bold
    </Text>
    <Text size="medium" emphasis="italic">
      Body Medium Text Italic
    </Text>
    <Text size="small">Body Small Text Regular</Text>
    <Text size="small" emphasis="bold">
      Body Small Text Bold
    </Text>
    <Text size="small" emphasis="italic">
      Body Small Text Italic
    </Text>
    <Text size="xsmall">Body XSmall Text Regular</Text>
    <Text size="xsmall" emphasis="bold">
      Body XSmall Text Bold
    </Text>
    <Text size="xsmall" emphasis="italic">
      Body XSmall Text Italic
    </Text>
  </>
);

export default Story;
