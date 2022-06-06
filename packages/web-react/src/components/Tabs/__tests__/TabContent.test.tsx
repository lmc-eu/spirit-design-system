import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import TabContent from '../TabContent';

describe('Tab', () => {
  classNamePrefixProviderTest(TabContent, 'Tabs-content');
});
