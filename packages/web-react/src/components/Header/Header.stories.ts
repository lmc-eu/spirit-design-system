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
export { default as HeaderActions } from './stories/HeaderActions';
export { default as HeaderSimpleInverted } from './stories/HeaderSimpleInverted';
export { default as HeaderInverted } from './stories/HeaderInverted';
export { default as HeaderHtml } from './stories/HeaderHtml';
export { default as HeaderProps } from './stories/HeaderProps';
export { default as HeaderActionsProps } from './stories/HeaderActionsProps';
export { default as NavbarProps } from './stories/NavbarProps';
export { default as NavProps } from './stories/NavProps';
export { default as NavItemProps } from './stories/NavItemProps';
export { default as NavLinkProps } from './stories/NavLinkProps';
