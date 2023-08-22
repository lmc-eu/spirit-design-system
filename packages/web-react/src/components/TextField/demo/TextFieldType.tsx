import React from 'react';
import TextField from '../TextField';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem 1rem' }}>
    <TextField id="textfield-email" label="Type email" name="textfield-email" type="email" />
    <TextField id="textfield-number" label="Type number" name="textfield-number" type="number" />
    <TextField id="textfield-password" label="Type password" name="textfield-password" type="password" />
    <TextField id="textfield-search" label="Type search" name="textfield-search" type="search" />
    <TextField id="textfield-tel" label="Type tel" name="textfield-tel" type="tel" />
    <TextField id="textfield-text" label="Type text" name="textfield-text" type="text" />
    <TextField id="textfield-url" label="Type url" name="textfield-url" type="url" />
  </div>
);

export default Story;
