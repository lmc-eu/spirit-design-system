import React from 'react';
import Radio from '../Radio';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <Radio id="radio" label="Radio Item" name="example" isItem />
    <Radio id="radio" label="Radio Item checked" name="example" isItem isChecked />
  </div>
);

export default Story;
