import React from 'react';
import { accessibilityTest } from '@local/tests';
import { type SpiritAlertProps } from '../../../types';
import Alert from '../Alert';

jest.mock('../../../hooks/useIcon');

describe('Alert accessibility', () => {
  const AlertTest = (props: SpiritAlertProps) => <Alert {...props}>Alert content</Alert>;

  accessibilityTest(AlertTest, 'div');
});
