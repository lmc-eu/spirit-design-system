import React from 'react';
import { accessibilityDisabledTest, accessibilityTest } from '@local/tests';
import { Icon } from '../../Icon';
import ControlButton from '../ControlButton';

jest.mock('../../../hooks/useIcon');

describe('ControlButton accessibility', () => {
  accessibilityTest(
    (props) => (
      <ControlButton {...props} aria-label="Action">
        <Icon name="close" />
      </ControlButton>
    ),
    'button',
  );

  accessibilityDisabledTest(
    (props) => (
      <ControlButton {...props} aria-label="Action">
        <Icon name="close" />
      </ControlButton>
    ),
    'button',
  );
});
