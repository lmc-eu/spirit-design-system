import figma from '@figma/code-connect';
import React, { type ElementType } from 'react';
import type { SpiritBreadcrumbsProps } from '../../../types';
import Breadcrumbs from '../Breadcrumbs';

const example = (props: SpiritBreadcrumbsProps<ElementType>) => (
  <Breadcrumbs
    items={[
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
    ]}
    {...props}
  />
);

figma.connect(Breadcrumbs, '<FIGMA_FILE_ID>?node-id=3160%3A4551', {
  props: {},
  example,
});
