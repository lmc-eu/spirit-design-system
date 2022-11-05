import React from 'react';
import RadioField from '../RadioField';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <RadioField id="radiofield" label="Radio disabled" name="example" isDisabled />
    <RadioField id="radiofield" label="Radio disabled checked" name="example" isDisabled isChecked />
  </div>
);

export default Story;
