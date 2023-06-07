import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import PaginationLinkNext from '../PaginationLinkNext';

describe('PaginationLinkNext', () => {
  classNamePrefixProviderTest(PaginationLinkNext, 'Button');

  stylePropsTest(PaginationLinkNext);

  restPropsTest(PaginationLinkNext, 'a');
});
