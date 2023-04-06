// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import Breadcrumbs from '../Breadcrumbs';
import { SpiritBreadcrumbsProps } from '../../../types';

const Story: ComponentStory<typeof Breadcrumbs> = <T extends ElementType = 'nav'>(args: SpiritBreadcrumbsProps<T>) => (
  <IconsProvider value={icons}>
    <Breadcrumbs {...args} />
  </IconsProvider>
);

Story.args = {
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
