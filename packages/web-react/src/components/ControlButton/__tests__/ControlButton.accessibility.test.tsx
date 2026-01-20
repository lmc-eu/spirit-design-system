import React from 'react';
import { accessibilityDisabledTest, accessibilityTest } from '@local/tests';
import { type SpiritControlButtonProps } from '../../../types';
import { Icon } from '../../Icon';
import ControlButton from '../ControlButton';

jest.mock('../../../hooks/useIcon');

describe('ControlButton accessibility', () => {
  const ControlButtonTest = (props: SpiritControlButtonProps) => (
    <ControlButton {...props} isSymmetrical aria-label="Action">
      <Icon name="close" />
    </ControlButton>
  );

  accessibilityTest(ControlButtonTest, 'button');

  accessibilityDisabledTest(ControlButtonTest, 'button');
});
