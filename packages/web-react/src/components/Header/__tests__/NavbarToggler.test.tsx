import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { withHeader } from '../../../../tests/testUtils';
import NavbarToggler from '../NavbarToggler';

describe('NavbarToggler', () => {
  classNamePrefixProviderTest(
    withHeader(() => <NavbarToggler data-testid="navbar-toggler-test" />),
    'Header__mobileOnlyActions',
    'navbar-toggler-test',
  );
});
