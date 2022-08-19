import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Breadcrumbs from '../Breadcrumbs';
import { SpiritBreadcrumbsProps } from '../../../types';

const Story: ComponentStory<typeof Breadcrumbs> = <T extends ElementType = 'nav'>(args: SpiritBreadcrumbsProps<T>) => (
  <Breadcrumbs {...args} />
);

Story.args = {
  goBackTitle: 'Back',
  items: [
    {
      title: 'Root',
      url: '#rootUrl',
    },
    {
      title: 'Category',
      url: '#categoryUrl',
    },
    {
      title: 'Subcategory',
      url: '#subcategoryUrl',
    },
    {
      title: 'Current page',
      url: '#currentUrl',
    },
  ],
};

export default Story;
