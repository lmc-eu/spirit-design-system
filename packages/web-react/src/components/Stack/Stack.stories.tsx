import React from 'react';
import Stack, { StackProps } from './Stack';
import { TextField } from '../TextField';

export default {
  title: 'Components/Stack',
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

const Template = (args: StackProps) => <Stack {...args} />;

export const StackedBlocks = Template.bind({});
StackedBlocks.args = {
  elementType: 'ul',
  children: (
    <>
      <li>
        <div className="example-box">Block 1</div>
      </li>
      <li>
        <div className="example-box">Block 2</div>
      </li>
      <li>
        <div className="example-box">Block 3</div>
      </li>
    </>
  ),
};

export const StackedFormFields = Template.bind({});
StackedFormFields.args = {
  children: (
    <>
      <TextField id="textfieldStack1" label="Label" isRequired />
      <TextField id="textfieldStack2" label="Label" isRequired />
    </>
  ),
};
