import React from 'react';
import { accessibilityDisabledTest, accessibilityLoadingTest, accessibilityTest } from '@local/tests';
import ButtonLink from '../ButtonLink';

jest.mock('../../../hooks/useIcon');

describe('ButtonLink accessibility', () => {
  accessibilityTest(
    (props) => (
      <ButtonLink {...props} href="#">
        Click me
      </ButtonLink>
    ),
    'a',
  );

  accessibilityDisabledTest(
    (props) => (
      <ButtonLink {...props} href="#">
        Click me
      </ButtonLink>
    ),
    'a',
  );

  accessibilityLoadingTest(
    (props) => (
      <ButtonLink {...props} href="#">
        Loading
      </ButtonLink>
    ),
    'a',
  );
});
