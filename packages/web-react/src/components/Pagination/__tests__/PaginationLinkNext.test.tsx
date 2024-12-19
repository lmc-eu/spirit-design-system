import '@testing-library/jest-dom';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import PaginationLinkNext from '../PaginationLinkNext';

jest.mock('../../../hooks/useIcon');

describe('PaginationLinkNext', () => {
  classNamePrefixProviderTest(PaginationLinkNext, 'Button');

  stylePropsTest(PaginationLinkNext);

  restPropsTest(PaginationLinkNext, 'a');
});
