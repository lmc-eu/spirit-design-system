import React from 'react';
import { Icon } from '../../Icon';
import { Link } from '../../Link';
import { Breadcrumbs } from '../Breadcrumbs';

const BreadcrumbsCustom = () => {
  const items = [
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
  ];

  return (
    <Breadcrumbs goBackTitle="Back">
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;

        const linkParams = {
          isUnderlined: !isLastItem,
          'aria-current': isLastItem ? 'page' : undefined,
          color: isLastItem ? 'secondary' : 'primary',
        };

        return (
          <>
            {index !== 0 && <Icon name="chevron-right" />}
            <li key={`BreadcrumbsItem_${item.title}`}>
              <Link href={item.url} {...linkParams}>
                {item.title}
              </Link>
            </li>
          </>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsCustom;
