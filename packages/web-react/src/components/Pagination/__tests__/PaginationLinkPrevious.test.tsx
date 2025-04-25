import '@testing-library/jest-dom';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import PaginationLinkPrevious from '../PaginationLinkPrevious';

jest.mock('../../../hooks/useIcon');

describe('PaginationLinkPrevious', () => {
  classNamePrefixProviderTest(PaginationLinkPrevious, 'Button');

  stylePropsTest(PaginationLinkPrevious);

  restPropsTest(PaginationLinkPrevious, 'a');

  validHtmlAttributesTest(PaginationLinkPrevious);

  ariaAttributesTest(PaginationLinkPrevious);
});
