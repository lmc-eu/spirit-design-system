import { ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: `Provide page header.`,
      },
    },
  },
} as ComponentMeta<typeof Header>;

export { default as Header } from './stories/Header';
export { default as HeaderSimpleInverted } from './stories/HeaderSimpleInverted';
export { default as HeaderInverted } from './stories/HeaderInverted';
