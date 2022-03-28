import React from 'react';
import Heading from './Heading';
import { SpiritHeadingProps } from '../../types';

export default {
  title: 'Typography/Heading',
  argTypes: {
    children: 'Some long Heading',
    size: {
      control: {
        type: 'select',
        options: ['xlarge', 'large', 'medium', 'small', 'xsmall'],
      },
    },
  },
};

const Template = (args: SpiritHeadingProps) => <Heading {...args} />;

export const XLargeHeading = Template.bind({});
XLargeHeading.args = {
  children: 'Heading XLarge Text',
  size: 'xlarge',
};

export const LargeHeading = Template.bind({});
LargeHeading.args = {
  children: 'Heading Large Text',
  size: 'large',
};

export const MediumHeading = Template.bind({});
MediumHeading.args = {
  children: 'Heading Medium Text',
  size: 'medium',
};

export const SmallHeading = Template.bind({});
SmallHeading.args = {
  children: 'Heading Small Text',
  size: 'small',
};

export const XSmallHeading = Template.bind({});
XSmallHeading.args = {
  children: 'Heading XSmall Text',
  size: 'xsmall',
};
