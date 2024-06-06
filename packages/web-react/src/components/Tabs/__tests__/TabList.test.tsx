import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import TabList from '../TabList';

describe('TabList', () => {
  stylePropsTest((props) => <TabList data-testid="tab-list-test-id" {...props} />, 'tab-list-test-id');

  classNamePrefixProviderTest(TabList, 'Tabs');
});
