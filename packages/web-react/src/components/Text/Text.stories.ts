import { ComponentMeta } from '@storybook/react';
import argTypes from './demo/argTypes';
import Text from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'Provide typography variants for body text.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Text>;

export { default as Text } from './demo/Text';
