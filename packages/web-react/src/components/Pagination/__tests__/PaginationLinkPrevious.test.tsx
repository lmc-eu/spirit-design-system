import '@testing-library/jest-dom';
import { useIconMock } from '../../../../tests/mocks/hooksMock';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import PaginationLinkPrevious from '../PaginationLinkPrevious';

jest.mock('../../../hooks', () => useIconMock);

describe('PaginationLinkPrevious', () => {
  classNamePrefixProviderTest(PaginationLinkPrevious, 'Button');

  stylePropsTest(PaginationLinkPrevious);

  restPropsTest(PaginationLinkPrevious, 'a');
});
