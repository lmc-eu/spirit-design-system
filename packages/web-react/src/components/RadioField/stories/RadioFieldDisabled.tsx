import React from 'react';
import RadioField from '../RadioField';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <>
    <RadioField label="Radio disabled" name="example" isDisabled />
    <RadioField label="Radio disabled checked" name="example" isDisabled isChecked />
  </>
);

export default Story;
