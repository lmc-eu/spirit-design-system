import React from 'react';
import { accessibilityDisabledTest, accessibilityTest } from '@local/tests';
import { type SpiritSplitButtonProps } from '../../../types';
import { Button } from '../../Button';
import SplitButton from '../SplitButton';

jest.mock('../../../hooks/useIcon');

describe('SplitButton accessibility', () => {
  const SplitButtonTest = (props: SpiritSplitButtonProps) => (
    <SplitButton {...props}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </SplitButton>
  );

  accessibilityTest(SplitButtonTest, 'button');

  accessibilityDisabledTest(SplitButtonTest, 'button');
});
