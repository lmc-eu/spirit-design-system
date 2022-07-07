import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { withHeader } from '../../../../tests/testUtils';
import NavbarToggler from '../NavbarToggler';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

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

  restPropsTest(
    withHeader((props) => <NavbarToggler {...props} />),
    'div',
  );
});
