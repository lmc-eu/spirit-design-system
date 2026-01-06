import figma from '@figma/code-connect';
import React from 'react';
import Breadcrumbs from '../Breadcrumbs';

figma.connect(Breadcrumbs, '<FIGMA_FILE_ID>?node-id=3160%3A4551', {
  props: {},
  example: (props) => (
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
  ),
});
