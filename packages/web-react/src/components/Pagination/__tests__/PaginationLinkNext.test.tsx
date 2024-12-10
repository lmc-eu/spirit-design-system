import '@testing-library/jest-dom';
import { useIconMock, classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import PaginationLinkNext from '../PaginationLinkNext';

jest.mock('../../../hooks', () => useIconMock);

describe('PaginationLinkNext', () => {
  classNamePrefixProviderTest(PaginationLinkNext, 'Button');

  stylePropsTest(PaginationLinkNext);

  restPropsTest(PaginationLinkNext, 'a');
});
