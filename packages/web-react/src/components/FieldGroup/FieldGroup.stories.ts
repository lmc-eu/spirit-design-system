import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import FieldGroup from './FieldGroup';

export default {
  title: 'Components/FieldGroup',
  component: FieldGroup,
  parameters: {
    docs: {
      description: {
        component: 'FieldGroup is a component that groups form fields together',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof FieldGroup>;

export { default as FieldGroup } from './stories/FieldGroup';
