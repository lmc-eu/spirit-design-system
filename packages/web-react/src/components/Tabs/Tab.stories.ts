import { ComponentMeta } from '@storybook/react';
import Tab from './TabList';

export default {
  title: 'Components/Tabs',
  component: Tab,
  parameters: {
    docs: {
      description: {
        component:
          'The Tab component is used to organize related content. User can navigate between\ngroups of information in tabbable regions.',
      },
    },
  },
} as ComponentMeta<typeof Tab>;

export { default as Tabs } from './stories/Tabs';
export { default as TabLinks } from './stories/TabLinks';
export { default as UncontrolledTabs } from './stories/UncontrolledTabs';
export { default as HTML } from './stories/TabHtml';
export { default as TabsProps } from './stories/TabsProps';
export { default as TabListProps } from './stories/TabListProps';
export { default as TabContentProps } from './stories/TabContentProps';
export { default as TabItemProps } from './stories/TabItemProps';
export { default as TabLinkProps } from './stories/TabLinkProps';
export { default as TabPaneProps } from './stories/TabPaneProps';
