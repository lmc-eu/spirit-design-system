import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { withHeader } from '../../../../tests/testUtils';
import NavbarToggler from '../NavbarToggler';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';

describe('NavbarToggler', () => {
  classNamePrefixProviderTest(
    withHeader(() => <NavbarToggler data-testid="navbar-toggler-test" />),
    'Header__mobileOnlyActions',
    'navbar-toggler-test',
  );

  stylePropsTest(
    withHeader((props) => <NavbarToggler {...props} data-testid="navbar-toggler-test" />),
    'navbar-toggler-test',
  );
});
