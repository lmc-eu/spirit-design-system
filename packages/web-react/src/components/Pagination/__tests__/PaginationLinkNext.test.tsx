import '@testing-library/jest-dom';
import { useIconMock } from '../../../../tests/mocks/hooksMock';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import PaginationLinkNext from '../PaginationLinkNext';

jest.mock('../../../hooks', () => useIconMock);

describe('PaginationLinkNext', () => {
  classNamePrefixProviderTest(PaginationLinkNext, 'Button');

  stylePropsTest(PaginationLinkNext);

  restPropsTest(PaginationLinkNext, 'a');
});
