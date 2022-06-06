import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import TabList from '../TabList';

describe('TabList', () => {
  classNamePrefixProviderTest(TabList, 'Tabs');
});
