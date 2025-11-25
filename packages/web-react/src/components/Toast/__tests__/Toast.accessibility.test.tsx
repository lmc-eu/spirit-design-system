import React from 'react';
import { accessibilityTest } from '@local/tests';
import Toast from '../Toast';
import ToastBar from '../ToastBar';
import ToastBarMessage from '../ToastBarMessage';

describe('Toast accessibility', () => {
  accessibilityTest(
    (props) => (
      <Toast {...props}>
        <ToastBar id="toast-1" isOpen onClose={() => {}}>
          <ToastBarMessage>Toast message</ToastBarMessage>
        </ToastBar>
      </Toast>
    ),
    '[role="log"]',
  );
});
