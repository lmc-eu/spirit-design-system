import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Tags can highlight or add emotion to information.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Tag>;

export { default as Tag } from './demo/Tag';
