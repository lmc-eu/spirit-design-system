import '@testing-library/jest-dom';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import PaginationLinkNext from '../PaginationLinkNext';

jest.mock('../../../hooks/useIcon');

describe('PaginationLinkNext', () => {
  classNamePrefixProviderTest(PaginationLinkNext, 'Button');

  stylePropsTest(PaginationLinkNext);

  restPropsTest(PaginationLinkNext, 'a');

  validHtmlAttributesTest(PaginationLinkNext);

  ariaAttributesTest(PaginationLinkNext);
});
