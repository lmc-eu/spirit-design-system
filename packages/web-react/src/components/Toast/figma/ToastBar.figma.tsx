import figma from '@figma/code-connect';
import React from 'react';
import ToastBar from '../ToastBar';
import ToastBarLink from '../ToastBarLink';
import ToastBarMessage from '../ToastBarMessage';

const TOAST_BAR_NODE_URL = '<FIGMA_FILE_ID>?node-id=17002%3A1346';

figma.connect(ToastBar, TOAST_BAR_NODE_URL, {
  props: {
    action: figma.boolean('Action', {
      true: <ToastBarLink href="#">Action</ToastBarLink>,
      false: undefined,
    }),
    color: figma.enum('Color', {
      Danger: 'danger',
      Informative: 'informative',
      Success: 'success',
      Warning: 'warning',
    }),
    hasIcon: figma.boolean('Icon'),
    isDismissible: figma.boolean('Dismissible'),
    text: figma.enum('Layout Type', {
      'Single Text Line': figma.string('Text Short'),
      'More Text Lines': figma.string('Text Longer'),
    }),
  },
  example: ({ text, action, ...props }) => (
    <ToastBar {...props} id="toast-bar-example">
      <ToastBarMessage>{text}</ToastBarMessage>
      {action}
    </ToastBar>
  ),
});
