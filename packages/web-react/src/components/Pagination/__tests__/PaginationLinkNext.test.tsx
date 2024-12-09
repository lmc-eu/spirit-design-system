import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import PaginationLinkNext from '../PaginationLinkNext';

jest.mock('../../../hooks', () => {
  return {
    ...jest.requireActual('../../../hooks'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useIcon: (name: string) => '',
  };
});

describe('PaginationLinkNext', () => {
  classNamePrefixProviderTest(PaginationLinkNext, 'Button');

  stylePropsTest(PaginationLinkNext);

  restPropsTest(PaginationLinkNext, 'a');
});
