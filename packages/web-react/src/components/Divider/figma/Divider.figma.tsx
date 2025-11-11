import figma from '@figma/code-connect';
import React from 'react';
import Divider from '../Divider';

figma.connect(Divider, '<FIGMA_FILE_ID>?node-id=14538%3A9426', {
  variant: { Width: '1px', Direction: 'Horizontal' },
  example: () => <Divider />,
});
