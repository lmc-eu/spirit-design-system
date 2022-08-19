import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import Breadcrumbs from '../Breadcrumbs';

describe('Breadcrumbs', () => {
  classNamePrefixProviderTest(Breadcrumbs, 'Breadcrumbs');

  stylePropsTest(Breadcrumbs);

  restPropsTest(Breadcrumbs, 'nav');
});
