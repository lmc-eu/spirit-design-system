import figma from '@figma/code-connect';
import React from 'react';
import Stack from '../Stack';

figma.connect(Stack, '<FIGMA_FILE_ID>?node-id=9568%3A4284', {
  props: {
    hasEndDivider: figma.boolean('End Divider'),
    hasIntermediateDividers: figma.boolean('Intermediate Dividers'),
    hasSpacing: figma.boolean('Spacing'),
    hasStartDivider: figma.boolean('Start Divider'),
  },
  example: (props) => (
    <Stack elementType="ul" {...props}>
      <li>First Item</li>
      <li>Second Item</li>
    </Stack>
  ),
});
