import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import Header from './Header';

export default {
  title: 'Components/HeaderModern',
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
export { default as HeaderHTML } from './stories/HeaderHtml';
export { default as HeaderProps } from './stories/HeaderProps';
export { default as HeaderDialogHtml } from './stories/HeaderDialogHtml';
export { default as HeaderDialogProps } from './stories/HeaderDialogProps';
