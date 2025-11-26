import React from 'react';
import { accessibilityTest } from '@local/tests';
import Breadcrumbs from '../Breadcrumbs';
import BreadcrumbsItem from '../BreadcrumbsItem';

jest.mock('../../../hooks/useIcon');

describe('Breadcrumbs accessibility', () => {
  accessibilityTest(
    (props) => (
      <Breadcrumbs
        {...props}
        items={[
          { title: 'Home', url: '#' },
          { title: 'Current', url: '#' },
        ]}
      />
    ),
    'nav',
  );

  accessibilityTest(
    (props) => (
      <Breadcrumbs {...props}>
        <BreadcrumbsItem href="#">Home</BreadcrumbsItem>
        <BreadcrumbsItem isCurrent>Current</BreadcrumbsItem>
      </Breadcrumbs>
    ),
    'nav',
  );
});
