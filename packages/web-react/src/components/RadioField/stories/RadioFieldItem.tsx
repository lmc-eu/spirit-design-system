import React from 'react';
import RadioField from '../RadioField';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <RadioField id="radiofield" label="Radio Item" name="example" isItem />
    <RadioField id="radiofield" label="Radio Item checked" name="example" isItem isChecked />
  </div>
);

export default Story;
