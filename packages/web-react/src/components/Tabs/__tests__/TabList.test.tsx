import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import TabList from '../TabList';
import Tabs from '../Tabs';

describe('TabList', () => {
  stylePropsTest((props) => <TabList data-testid="tab-list-test-id" {...props} />, 'tab-list-test-id');

  classNamePrefixProviderTest(TabList, 'Tabs');

  it('should render with custom spacing for each breakpoint', () => {
    render(
      <Tabs
        spacing={{ mobile: 'space-100', tablet: 'space-200', desktop: 'space-300' }}
        selectedTab="test-tab"
        toggle={() => {}}
      >
        <TabList data-testid="tab-list-test-id">Content</TabList>
      </Tabs>,
    );

    const list = screen.getByRole('tablist') as HTMLElement;

    expect(list).toHaveClass('Tabs');
    expect(list).toHaveStyle({
      '--tabs-spacing': 'var(--spirit-space-100)',
      '--tabs-spacing-tablet': 'var(--spirit-space-200)',
      '--tabs-spacing-desktop': 'var(--spirit-space-300)',
    });
  });
});
