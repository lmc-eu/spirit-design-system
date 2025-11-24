import React from 'react';
import { accessibilityDisabledTest, accessibilityLoadingTest, accessibilityTest } from '@local/tests';
import { type SpiritButtonLinkProps } from '../../../types';
import ButtonLink from '../ButtonLink';

jest.mock('../../../hooks/useIcon');

describe('ButtonLink accessibility', () => {
  const ButtonLinkTest = ({ children, ...props }: SpiritButtonLinkProps) => (
    <ButtonLink {...props} href="#">
      {children || 'Click me'}
    </ButtonLink>
  );

  accessibilityTest(ButtonLinkTest, 'a');

  accessibilityDisabledTest(ButtonLinkTest, 'a');

  accessibilityLoadingTest((props) => <ButtonLinkTest {...props}>Loading</ButtonLinkTest>, 'a');
});
