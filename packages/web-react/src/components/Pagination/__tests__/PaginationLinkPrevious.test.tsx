import '@testing-library/jest-dom';
import { useIconMock, classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import PaginationLinkPrevious from '../PaginationLinkPrevious';

jest.mock('../../../hooks', () => useIconMock);

describe('PaginationLinkPrevious', () => {
  classNamePrefixProviderTest(PaginationLinkPrevious, 'Button');

  stylePropsTest(PaginationLinkPrevious);

  restPropsTest(PaginationLinkPrevious, 'a');
});
