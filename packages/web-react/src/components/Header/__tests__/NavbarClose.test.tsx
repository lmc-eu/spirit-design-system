import React from 'react';
import NavbarClose from '../NavbarClose';
import { withHeader } from '../../../../tests/testUtils';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';

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

  restPropsTest(
    withHeader((props) => <NavbarClose {...props} />),
    'button',
  );
});
