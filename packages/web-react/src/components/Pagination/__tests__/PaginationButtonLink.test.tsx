import '@testing-library/jest-dom';
import { useIconMock, classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import PaginationButtonLink from '../PaginationButtonLink';

jest.mock('../../../hooks', () => useIconMock);

describe('PaginationButtonLink', () => {
  classNamePrefixProviderTest(PaginationButtonLink, 'Button');

  stylePropsTest(PaginationButtonLink);

  restPropsTest(PaginationButtonLink, 'a');
});
