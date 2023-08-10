import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Provide page header.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof Header>;

export { default as Header } from './stories/Header';
export { default as HeaderActions } from './stories/HeaderActions';
export { default as HeaderActionsAndHeaderDialog } from './stories/HeaderActionsAndHeaderDialog';
