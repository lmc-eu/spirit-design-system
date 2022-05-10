import React from 'react';
import NavbarClose from '../NavbarClose';
import { withHeader } from '../../../../tests/testUtils';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';

describe('NavbarClose', () => {
  classNamePrefixProviderTest(
    withHeader(() => <NavbarClose data-testid="navbar-close-test" />),
    'Header__close',
    'navbar-close-test',
  );

  stylePropsTest(
    withHeader((props) => <NavbarClose {...props} data-testid="navbar-close-test" />),
    'navbar-close-test',
  );
});
