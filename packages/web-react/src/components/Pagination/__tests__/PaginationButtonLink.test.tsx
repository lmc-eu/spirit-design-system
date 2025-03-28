import '@testing-library/jest-dom';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import PaginationButtonLink from '../PaginationButtonLink';

jest.mock('../../../hooks/useIcon');

describe('PaginationButtonLink', () => {
  classNamePrefixProviderTest(PaginationButtonLink, 'Button');

  stylePropsTest(PaginationButtonLink);

  restPropsTest(PaginationButtonLink, 'a');

  validHtmlAttributesTest(PaginationButtonLink);
});
