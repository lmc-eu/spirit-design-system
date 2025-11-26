import React from 'react';
import { accessibilityDisabledTest, accessibilityTest } from '@local/tests';
import { Button } from '../../Button';
import SplitButton from '../SplitButton';

jest.mock('../../../hooks/useIcon');

describe('SplitButton accessibility', () => {
  accessibilityTest(
    (props) => (
      <SplitButton {...props}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </SplitButton>
    ),
    'button',
  );

  accessibilityDisabledTest(
    (props) => (
      <SplitButton {...props} isDisabled>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </SplitButton>
    ),
    'button',
  );
});
