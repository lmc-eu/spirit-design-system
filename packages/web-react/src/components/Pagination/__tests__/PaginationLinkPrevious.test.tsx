import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import PaginationLinkPrevious from '../PaginationLinkPrevious';

jest.mock('../../../hooks', () => {
  return {
    ...jest.requireActual('../../../hooks'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useIcon: (name: string) => '',
  };
});

describe('PaginationLinkPrevious', () => {
  classNamePrefixProviderTest(PaginationLinkPrevious, 'Button');

  stylePropsTest(PaginationLinkPrevious);

  restPropsTest(PaginationLinkPrevious, 'a');
});
