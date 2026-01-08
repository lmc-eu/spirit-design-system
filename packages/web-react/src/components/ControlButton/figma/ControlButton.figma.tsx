import figma from '@figma/code-connect';
import React from 'react';
import { Icon } from '../../Icon';
import ControlButton from '../ControlButton';

figma.connect(ControlButton, '<FIGMA_FILE_ID>?node-id=35415%3A1022', {
  props: {
    isSubtle: figma.enum('Color', {
      Basic: false,
      Subtle: true,
    }),
    isSymmetrical: true,
    size: figma.enum('Size', {
      Small: 'small',
      Large: 'large',
    }),
  },
  example: (props) => (
    <ControlButton {...props}>
      <Icon name="close" />
    </ControlButton>
  ),
});
