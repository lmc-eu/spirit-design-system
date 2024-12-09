import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import PaginationButtonLink from '../PaginationButtonLink';

jest.mock('../../../hooks', () => {
  return {
    ...jest.requireActual('../../../hooks'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useIcon: (name: string) => '',
  };
});

describe('PaginationButtonLink', () => {
  classNamePrefixProviderTest(PaginationButtonLink, 'Button');

  stylePropsTest(PaginationButtonLink);

  restPropsTest(PaginationButtonLink, 'a');
});
