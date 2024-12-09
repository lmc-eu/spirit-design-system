import '@testing-library/jest-dom';
import { useIconMock } from '../../../../tests/mocks/hooksMock';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import PaginationButtonLink from '../PaginationButtonLink';

jest.mock('../../../hooks', () => useIconMock);

describe('PaginationButtonLink', () => {
  classNamePrefixProviderTest(PaginationButtonLink, 'Button');

  stylePropsTest(PaginationButtonLink);

  restPropsTest(PaginationButtonLink, 'a');
});
