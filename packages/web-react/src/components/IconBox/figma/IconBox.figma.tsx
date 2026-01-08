import figma from '@figma/code-connect';
import React from 'react';
import IconBox from '../IconBox';

figma.connect(IconBox, '<FIGMA_FILE_ID>?node-id=31902%3A1019', {
  props: {
    color: figma.enum('Color', {
      'Accent 01': '01',
      'Accent 02': '02',
      Danger: 'danger',
      Informative: 'informative',
      Success: 'success',
      Warning: 'warning',
    }),
    shape: figma.enum('Shape', {
      Square: 'square',
      Rounded: 'rounded',
    }),
    isSubtle: figma.boolean('Subtle'),
    size: figma.enum('Size', {
      Small: 'small',
      XSmall: 'xsmall',
      Large: 'large',
      XLarge: 'xlarge',
    }),
  },
  example: (props) => <IconBox {...props} iconName="add" />,
});
